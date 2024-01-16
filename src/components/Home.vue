<template>
    <Nav />
    <main>

        <div class="hero py-5 bg-light">
            <div class="container">
                <a href="/create" class="btn btn-primary">
                    Create Form
                </a>
            </div>
        </div>

        <div class="list-form py-5">
            <div class="container">
                <h6 class="mb-3">List Form</h6>
                
                <div v-for="form in forms" :key="form.id">
                    <router-link :to="{ name: 'form-detail', params: { slug: form.slug }}" class="card card-default mb-3">
                        <div class="card-body">
                            <h5 class="mb-1">{{ form.name }}</h5>
                            <small class="text-muted">@{{ form.slug }} (limit for {{ form.limit_one_response ? 1 : 'unlimited' }} response)</small>
                        </div>
                    </router-link>
                </div>
                
            </div>
        </div>

    </main>
</template>

<script setup>
import Nav from '../components/Nav.vue';
</script>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            forms: [],
        };
    },
    computed:{
        token(){
            return localStorage.getItem('accessToken');
        },
        headers(){
            return {
                Authorization : 'Bearer ' + this.token
            }
        }
    },
    methods: {
        async getForms() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/forms',{headers:this.headers});
                this.forms = response.data.forms;
            } catch(err){
                console.log('Error fetching forms', err);
            }
        },
    },
    mounted() {
        this.getForms();
    }
}
</script>