<template>
    <div>
        <p v-for="(per, index) in preson" :key="index">
                Name : {{per.name}} ----- Age : {{per.age}}
        </p>

        <button @click="doSomething">DO IT!!</button>
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
            ]
        }
    },
    methods: {
        doSomething() {
            let filterPerson = this.preson.filter( (preson) => {
                return preson.name.match(/rumana/)
            })

            console.log(filterPerson)
        }
    }


    
}

</script>