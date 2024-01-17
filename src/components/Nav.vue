<template>
    <nav class="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="/home">Formify</a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Administrator</a>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn bg-white text-primary ms-4" @click="logout"  >Logout</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
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
        async logout() {
            const accessToken = localStorage.getItem('accessToken');

            await axios.post('http://127.0.0.1:8000/api/v1/auth/logout', {}, {headers:this.headers})
            .then(() => {
                alert("Logout success");
                localStorage.removeItem('accessToken');
                this.$router.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },
}
</script>