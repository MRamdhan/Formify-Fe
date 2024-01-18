<template>
  <div>
    <main>
      <section class="login">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6">
              <h1 class="text-center mb-4">Formify</h1>
              <div class="card card-default">
                <div class="card-body">
                  <h3 class="mb-3">Login</h3>

                  <form action="manage-forms.html">
                    <!-- s: input -->
                    <div class="form-group my-3">
                      <label for="email" class="mb-1 text-muted">Email Address</label>
                      <input type="email" id="email" v-model="email" name="email" value="" class="form-control"
                        autofocus />
                    </div>

                    <!-- s: input -->
                    <div class="form-group my-3">
                      <label for="password" class="mb-1 text-muted">Password</label>
                      <input type="password" id="password" v-model="password" name="password" value=""
                        class="form-control" />
                    </div>

                    <div class="mt-4">
                      <button type="button" @click="login" class="btn btn-primary">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
          email: this.email,
          password: this.password
        });
        if (response && response.status === 200) {
          const accessToken = response.data.user.accessToken;
          localStorage.setItem('accessToken', accessToken);
          alert("Login success");
          this.$router.push('/home');
        }
      } catch (err) {
        alert("Email or password incorrect");
      }
    }
  }
}

</script>