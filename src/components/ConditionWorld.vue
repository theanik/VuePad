<template>
    <div>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
        <a @click="doSome('A')" v-bind:style="a_style">A</a>
        <a @click="doSome('B')" v-bind:style="a_style">B</a>
        <a @click="doSome('C')" v-bind:style="a_style">C</a>
        
        <div v-bind:style="t_style" v-if="type === 'A'">
        A = Apple
        </div>
        <div v-bind:style="t_style" v-else-if="type === 'B'">
        B = Ball
        </div>
        <div v-bind:style="t_style" v-else-if="type === 'C'">
        C = Cat
        </div>
        <div v-bind:style="t_style" v-else>
        Click and start reading
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            awesome:true,
            type:'',

            a_style: {
                color : 'red'
            },

            t_style: {
                color : 'green'
            }

        }
    },
    methods:{
        doSome(val){
            this.type = val.toString()
        }
    }
}
</script>