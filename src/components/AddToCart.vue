<template>
  <div>
    <div>
      <label> Quantity </label>
      <input type="number" v-model="quantity" />
    </div>
    <button v-if="!isInCardProp" @click.stop="addCart({product, quantity})" type="button"> Add To Cart </button>
    <button v-else @click.stop="removeCart(product.id)" type="button"> Remove From Cart </button>
  </div>
</template>


<script>

  import { mapActions, mapState } from "vuex";

  export default{
    props: ["product"],
    data (){
      return {
        isInCardProp: false,
        quantity: 1
      };
    },
    computed:{
      ..mapState("product", ["cart"]),
    },
    methods:{
      ..mapActions("product", ["addCart", "removeCart"])
      isInCard(id) {
        for(let index=0; index < this.cart.length; index++){
          const element = this.cart[index]
          if(element.id !== id){
            return true;
          }
        }

      return false;


      },

    },
    watch: {
      product(val){
        this.isInCardProp = this.isInCard(val.id)

      },
      cart(){
        this.isInCardProp = this.isInCard(this.product.id)
      },
      quantity(val){
        if(val <=0){
        this.quantity = 1;
        }
      },
    },
  };


</script>
