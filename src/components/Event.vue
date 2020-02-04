<template>
<div>
    <input v-model.lazy="msg" >
    {{msg}}
    <!-- <Counter></Counter> -->
</div>
          
</template>

<script>
import Counter from './Counter'
export default {
     components : {
        // Counter
    },
    data() {
        return {
            msg: ''
        }
    }
}
</script>

<style>

</style>