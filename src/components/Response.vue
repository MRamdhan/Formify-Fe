<template>
    <nav class="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="manage-forms.html">Formify</a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Administrator</a>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn bg-white text-primary ms-4" @click="logout">Logout</button>
                </li>
            </ul>
        </div>
    </nav>

    <main>

        <div class="hero py-5 bg-light">
            <div class="container text-center">
                <h2 class="mb-2">
                    Biodata - Web Tech Members
                </h2>
                <div class="text-muted mb-4">
                    To save web tech members biodata
                </div>
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

                <div class="row justify-content-center ">
                    <div class="col-lg-5 col-md-6">
                        <div class="input-group mb-5">
                            <input type="text" class="form-control form-link" readonly
                                value="http://localhost:8080/forms/biodata" />
                            <a href="submit-form.html" class="btn btn-primary">Copy</a>
                        </div>

                        <ul class="nav nav-tabs mb-2 justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="detail-form.html">Questions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="responses.html">Responses</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-10">

                        <table class="table mt-3">
                            <caption>Total Responses: {{ totalResponses }}</caption>
                            <thead>
                                <tr class="text-muted">
                                    <th>User</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Sex</th>
                                    <th>Born Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="response in responses" :key="response.id">
                                    <td class="text-primary">{{ response.user.email }}</td>
                                    <td>{{ response.answers.Name }}</td>
                                    <td>{{ response.answers.Address }}</td>
                                    <td>{{ response.answers.Sex }}</td>
                                    <td>{{ response.answers['Born Date'] }}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            responses: [],
            totalResponses: 0,
        };
    },
    methods: {
        async getResponses() {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const headers = {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + accessToken,
                };

                const response = await axios.get('http://127.0.0.1:8000/api/v1/forms/biodata/responses', { headers });
                this.responses = response.data.responses;
                this.totalResponses = this.responses.length;
            } catch (error) {
                console.error('Error fetching responses:', error);
            }
        },
        async logout() {
            const accessToken = localStorage.getItem('accessToken');
            const headers = {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + accessToken
            }
            await axios.post('http://127.0.0.1:8000/api/v1/auth/logout', {}, { headers })
                .then(() => {
                    alert("Logout success")
                    localStorage.removeItem('accessToken');
                    this.$router.push('/');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.getResponses();
    },
};
</script>