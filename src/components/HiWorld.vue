<template>
    <div>
        <h1> Hi {{ msg }}</h1>
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
            }
        }
    },
    methods :  {
        doSomething(){
            if(this.show === false){
                this.show = true
            }else{
                this.show = false
            }
        }
    }
}
</script>


<style>

</style>