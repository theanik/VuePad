<template>
    <div>
        <p>{{ msg }}</p>
        <!-- <button @click="reverseMe">Revers Me</button> -->
        <p>{{ reverseMe }}</p>
        <p>{{ fullName }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg : 'Reverse Me!!',
            firstName : 'Anik',
            lastName: 'Anwar'
        }
    },
    computed:{
        reverseMe:function(){
           return this.msg.split('').reverse().join('')
        },
        // fullName: function(){
        //     return this.firstName+' '+this.lastName
        // },
        fullName: {
            get: function(){
                return this.firstName+' '+this.lastName
            }
        }
        
    }


}
</script>