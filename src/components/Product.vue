<template>
    <div>
       <product-one></product-one>
       <product-two></product-two>
    </div>

    
</template>

<script>
import ProductListOne from './product/ProductListOne'
import ProductListTwo from './product/ProductListTwo'
export default {
    name :'Product',
    components : {
        'product-one' : ProductListOne,
        'product-two' : ProductListTwo,
    },
    data() {
        return {

        }
    },
    methods: {
        
    }


    
}

</script>