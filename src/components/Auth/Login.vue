<template>
  <div>
    <div class="row justify-content-center">
      <b-spinner v-show="loading" style="width: 3rem; height: 3rem;" variant="primary" label="Spinning"></b-spinner>
    </div>
    <div class="row justify-content-center">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                Log In
            </div>
            <div class="card-body">
                <b-form @submit.prevent="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="user.email"
                    type="email"
                    required
                    placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="user.password"
                    required
                    type="password"
                    placeholder="Enter Password"
                    ></b-form-input>
                </b-form-group>

                  <b-alert v-show="errorAlert" show variant="danger">Something went wrong!!!</b-alert>
                  <b-alert v-show="errors" v-for="(error,index) in errors" :key="index" show variant="danger">{{ error[0] }}</b-alert>
                <b-button type="submit" :disabled="loading" variant="primary">Submit</b-button>
                <b-button type="reset" :disabled="loading" variant="danger">Reset</b-button>
                <router-link :to="'signup'">New User?? To Register click here!!</router-link>
                        
                </b-form>
                </div> 
            </div>
             
      </div>
    </div>
     
  </div>
</template>

<script>
  export default {
    name : "Login",
    data() {
      return {
          user : {
            email: '',
            password: '',
          },
          errorAlert: false,
          errors : {},
          loading : false
      }
    },
    methods: {
        onSubmit(){
            // console.log(this.user)
            this.$store.dispatch("LOGIN_REQUEST",this.user)
            .then(()=>{
                this.$router.push({name:'HiWorld'})
            })
        }

    }
  }
</script>