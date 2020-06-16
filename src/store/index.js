import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        products : [{
            "name": "Sage - Rubbed",
            "price": 32
          }, {
            "name": "Bread - Italian Sesame Poly",
            "price": 11
          }, {
            "name": "Bread - Roll, Soft White Round",
            "price": 12
          }, {
            "name": "Food Colouring - Red",
            "price": 67
          }, {
            "name": "Tortillas - Flour, 12",
            "price": 62
          }],

    },
    getters:{
      discountPorduct : (state) =>{
        return state.products.map((product) => {
          return {
            name : `** ${product.name} **`,
            price : product.price / 2
          }
        })
      }
    },
    mutations:{
      reducePrice : (state,ammount) => {
        state.products.forEach(product=>{
          product.price -= ammount
        })
      }
    },
    actions:{
      reducePriceAction: (context, ammount)=>{
        // setTimeout(()=>{
          context.commit("reducePrice", ammount)

        // }, 2000)
      }
    }
})


export {store}