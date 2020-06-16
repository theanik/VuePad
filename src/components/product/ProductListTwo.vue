<template>
    <div>
        <h4>List 2</h4>
        <li v-for="product in products">{{ product.name }} : $ {{ product.price }}</li>

         <h4>List 2 - Discount Product</h4>
        <li v-for="product in discountPorduct">{{ product.name }} : $ {{ product.price }}</li>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                // products : [],
            }
        },
        computed : {
            products(){
                return this.$store.state.products
            },
            // discountPorduct(){
            //     return this.$store.getters.discountPorduct
            // },
            ...mapGetters([
                'discountPorduct'
            ])
        }
    }
</script>

<style scoped>

</style>