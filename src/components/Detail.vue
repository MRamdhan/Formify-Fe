<template>
    <Nav />
    <div>
        <main>
            <div class="hero py-5 bg-light">
                <div class="container text-center">
                    <h2>{{ $route.params.name }}</h2>
                    <div class="text-muted mb-4">{{ $route.params.description }}</div>
                    <div>
                        <div>
                            <small>For user domains</small>
                        </div>
                        <small><span class="text-primary">webtech.id, webtech.org</span></small>
                    </div>
                </div>
            </div>

            <div class="py-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="input-group mb-5">
                                <input type="text" class="form-control form-link" readonly :value="getFormUrl"
                                    ref="copyInput" />
                                <button @click="copyToClipboard" class="btn btn-primary">
                                    Copy
                                </button>
                            </div>

                            <ul class="nav nav-tabs mb-2 justify-content-center">
                                <li class="nav-item">
                                    <router-link :to="{ name: 'form-detail' }" class="nav-link active">
                                        Questions
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'responses' }" class="nav-link">
                                        Responses
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">

                            <div v-for="(question, index) in questions" :key="index"
                                class="question-item card card-default my-4">
                                <div class="card-body">
                                    <div class="form-group my-3">
                                        <input type="text" :placeholder="question.name" class="form-control"
                                            :value="question.name" disabled />
                                    </div>

                                    <div class="form-group my-3">
                                        <select name="choice_type" class="form-select" disabled>
                                            <option>Choice Type</option>
                                            <option :value="choice" :selected="question.choice === choice">{{ choice }}
                                            </option>
                                        </select>
                                    </div>

                                    <div v-if="['multiple choice', 'dropdown', 'checkboxes'].includes(question.choice_type)"
                                        class="form-group my-3">
                                        <textarea placeholder="Choices" class="form-control" name="choices" rows="4"
                                            :value="question.choices" disabled></textarea>
                                        <div class="form-text">Separate choices using comma ",".</div>
                                    </div>

                                    <div class="form-check form-switch" aria-colspan="my-3">
                                        <input class="form-check-input" type="checkbox" role="switch" id="required"
                                            :checked="question.is_required" disabled />
                                        <label class="form-check-label" for="required">Required</label>
                                    </div>

                                    <div class="mt-3">
                                        <button @click="confirmRemoveQuestion(index)"
                                            class="btn btn-outline-danger">Remove</button>
                                    </div>

                                </div>
                            </div>
                            <div class="question-item card card-default my-4">
                                <div class="card-body">
                                    <form @submit.prevent="saveQuestion">
                                        <div class="form-group my-3">
                                            <input v-model="newQuestion.name" type="text" placeholder="Question"
                                                class="form-control" />
                                        </div>
                                        <div class="form-group my-3">
                                            <select v-model="newQuestion.choice_type" name="choice_type"
                                                class="form-select">
                                                <option selected>Choice Type</option>
                                                <option value="short answer">Short Answer</option>
                                                <option value="paragraph">Paragraph</option>
                                                <option value="date">Date</option>
                                                <option value="multiple choice">Multiple Choice</option>
                                                <option value="dropdown">Dropdown</option>
                                                <option value="checkboxes">Checkboxes</option>
                                            </select>
                                        </div>
                                        <div v-if="['multiple choice', 'dropdown', 'checkboxes'].includes(newQuestion.choice_type)"
                                            class="form-group my-3">
                                            <textarea v-model="newQuestion.choices" placeholder="Choices"
                                                class="form-control" name="choices" rows="4"></textarea>
                                            <div class="form-text">Separate choices using a comma ",".</div>
                                        </div>
                                        <div class="form-check form-switch" aria-colspan="my-3">
                                            <input v-model="newQuestion.is_required" class="form-check-input"
                                                type="checkbox" role="switch" id="required" />
                                            <label class="form-check-label" for="required">Required</label>
                                        </div>
                                        <div class="mt-3">
                                            <button type="submit" class="btn btn-outline-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
</script>

<script>
import axios from "axios";

export default {
    props: ["slug"],
    data() {
        return {
            slug: this.slug || "biodata",
            questions: [],
            answers: [],
            newQuestion: {
                name: "",
                choice_type: "",
                choices: "",
                is_required: false,
            }
        };
    },
    computed: {
        getFormUrl() {
            return `http://localhost:5173/submit-response/${this.$route.params.name}/${this.slug}`;
        },
        token() {
            return localStorage.getItem('accessToken');
        },
        headers() {
            return {
                Authorization: 'Bearer ' + this.token
            }
        }
    },
    methods: {
        async copyToClipboard() {
            try {
                await navigator.clipboard.writeText(this.$refs.copyInput.value);
                alert("Copied to clipboard");
            } catch (err) {
                console.log("Unable to copy to clipboard", err);
            }
        },
        async confirmRemoveQuestion(index) {
            if (confirm('Are you sure you want to remove this question?')) {
                try {
                    await this.removeQuestion(index);
                } catch (err) {
                    console.error("Error removing question:", err);
                }
            }
        },
        async removeQuestion(index) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/api/v1/forms/${this.slug}/questions/${this.questions[index].id}`, { headers: this.headers });
                if (response.status === 200) {
                    this.questions.splice(index, 1);
                    alert("Question removed successfully");
                } else {
                    console.error("Failed to remove question. Status:", response.status);
                }
            } catch (error) {
                console.error("Error removing question:", error);
            }
        },

        async fetchQuestions() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/forms/biodata", { headers: this.headers });
                this.questions = response.data.form.questions;
                console.log("Response :", this.questions);
            } catch (error) {
                console.error("Error fetching answers:", error);
            }
        },
        async saveQuestion() {
            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/v1/forms/biodata/questions`, this.newQuestion, { headers: this.headers });
                if (response && response.data) {
                    this.answers.push(response.data.question);
                    this.newQuestion = {
                        name: "",
                        choice_type: "",
                        choices: "",
                        is_required: false,
                    };
                    alert("Add question success");
                } else {
                    console.error("Invalid response format:", response);
                }
            } catch (error) {
                const { message, errors } = error.response.data;
                if (errors) {
                    console.error("Validation errors:", errors);
                } else {
                    console.error("Error saving question:", message);
                }
            }
        },
    },
    mounted() {
        this.fetchQuestions();
    },
};
</script>