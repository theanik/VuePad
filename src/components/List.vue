<template>
    <div>
        <p v-for="(per, index) in preson" :key="index">
                Name : {{per.name}} ----- Age : {{per.age}}
        </p>

        <button @click="doSomething">DO IT!!</button>
        <input type="text" v-model="newText">
        <button @click="addTodo">Add</button>

        <!-- <p v-for="per in todos">
                {{ per.name }}
        </p> -->
    </div>

    
</template>

<script>
export default {
    data() {
        return {
            preson: [
                {name: "anik", age : 20,},
                {name: "anik1", age : 20,},
                {name: "anik", age : 20,},
                {name: "an11ik", age : 20,},
                {name: "anik", age : 20,}
            ],
            todos: [],
            newText: '',
        }
    },
    methods: {
        doSomething() {
            let filterPerson = this.preson.filter( (preson) => {
                return preson.name.match(/rumana/)
            })

            console.log(filterPerson)
        },

        addTodo(){
            this.todos.push({
                name:this.newText
            })
            this.newText = ''
        }
    }


    
}

</script>