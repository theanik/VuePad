<template>
    <div>
        <h1 v-if="isLogin" class="my-color"> Hi {{ authUser.name }}</h1>
        <input  v-model="address">
        <p>I am from {{ address }}</p>
        <div v-bind:id="dynamicId"> Hi</div>
        <a @click="doSomething"> ... </a>
        <p v-show="show">Hide me</p>
        <a v-bind:href="url"> URL </a>
        <h3 v-bind:class="text">Text</h3>
        <h3 v-bind:class="[error ? 'text-danger' : 'text-success']">Error</h3>
        <div v-bind:style="styleObj">Style</div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            msg : "Anik",
            address : "Feni",
            dynamicId : false,
            show : true,
            url : "/tome",
            text : "text-danger",
            error : false,
            styleObj :{
                color : 'blue',
                fontSize : 30
            },
        }
    },
    mounted(){
        // console.log(this.user)
    },
    methods :  {
        doSomething(){
            if(this.show === false){
                this.show = true
            }else{
                this.show = false
            }
        }
    },
    computed :{
        ...mapGetters([
                'authUser',
                'isLogin'
            ])

        // user(){
        //     return this.$store.getters.auth.authUser
        // }
    }
}
</script>


<style>

</style>