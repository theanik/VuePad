<template>
    <div id="app">
        <h4>List 1</h4>
        <li v-for="product in products">{{ product.name }} : $ {{ product.price }}</li>
        <br><br>

        <button @click="reducePrice">Reduce Price {{ ammount }} $</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                ammount : 2,
            }
        },
        computed:{
            products(){
                return this.$store.state.product.products
            }
        },
        methods:{
            ...mapActions([

            ]),
            reducePrice(){
                this.$store.dispatch("reducePriceAction", this.ammount)
            }
        }
    }
</script>

<style scoped>

</style>