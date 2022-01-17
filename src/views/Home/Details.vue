<template>
  <div>
    <div>
      <div>
        <div>
          <img :src="product.imageUrl" />
        </div>
      </div>
      <div>
        <div>
          <p>{{product.content}}</p>
        </div>
        <AddToCart :product="product" v-if="user.id" />
      </div>
    </div>
  </div>
</template>

<script>

   import AddToCart from "../../components/AddToCart";
   import { mapGetters, mapActions } from "vuex";
   export default{
    data(){
      return{
        isInCardProp: false,
      }
    },
    computed: {
      ..mapGetters("account", ["user"]),
      ..mapGetters("product", [:product]),
    },
    components:{
      AddToCart
    },
    methods:{
      ..mapActions("product", ["productDetails"]);
    },
    mounted() {
      this.productDetails(this.$route.params.idProduct);
    }
   };

</script>
