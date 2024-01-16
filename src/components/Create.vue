<template>
    <Nav />
    <main>
        <div class="hero py-5 bg-light">
            <div class="container">
                <h2>Create Form</h2>
            </div>
        </div>

        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4">

                        <form @submit.prevent="createForm">
                            <!-- s: input -->
                            <div class="form-group mb-3">
                                <label for="name" class="mb-1 text-muted">Form Name</label>
                                <input v-model="formData.name" type="text" id="name" name="name" class="form-control" autofocus required />
                            </div>

                            <!-- s: input -->
                            <div class="form-group my-3">
                                <label for="slug" class="mb-1 text-muted">Form Slug</label>
                                <input v-model="formData.slug" type="text" id="slug" name="slug" class="form-control" required />
                            </div>

                            <!-- s: input -->
                            <div class="form-group my-3">
                                <label for="description" class="mb-1 text-muted">Description</label>
                                <textarea v-model="formData.description" id="description" name="description" rows="4"
                                    class="form-control" required></textarea>
                            </div>

                            <!-- s: input -->
                            <div class="form-group my-3">
                                <label for="allowed-domains" class="mb-1 text-muted">Allowed Domains</label>
                                <input v-model="formData.allowed_domains" type="text" id="allowed-domains" name="allowed_domains"
                                    class="form-control" required/>
                                <div class="form-text">Separate domains using comma ",". Ignore for public access.</div>
                            </div>

                            <!-- s: input -->
                            <div class="form-check form-switch" aria-colspan="my-3">
                                <input v-model="formData.limit_one_response" type="checkbox" id="limit_one_response"
                                    name="limit_one_response" class="form-check-input" role="switch" />
                                <label class="form-check-label" for="limit_one_response">Limit to 1 response</label>
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Nav from '../components/Nav.vue'
</script>

<script>
import axios  from 'axios';

export default {
    data() {
        return {
            formData: {
                name : "",
                slug: "" ,
                allowed_domains: "",
                description: "",
                limit_one_response:0,
            },
            accessToken: localStorage.getItem('accessToken'),
        };
    },
    computed: {
        token() {
            return localStorage.getItem('accessToken');
        },
        headers() {
            return {
                Authorization: `Bearer ` + this.token
            }
        }
    },
    methods: {
        createForm() {
            this.formData.allowed_domains = this.formData.allowed_domains.split(',').map( domain => domain.trim());
            axios.post('http://127.0.0.1:8000/api/v1/forms', this.formData, {headers : this.headers})
            .then(() => {
                alert("Create form success"),
                this.$router.push('/home')
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
        }
    }
}
</script>


