<template>
  <div>
    <div>
      <div>
        <div>
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default{
  import { mapActions, mapGetters } from "vuex";
  import ProductCard from "../../components/ProductCard";
    computed: {
      ..mapGetters("product", ["products"])
    },
    components:{
      ProductCard
    },
    methods: {
      ..mapActions("products", ["getProducts, addCart, removeCart"]),
    },
    mounted(){
      this.getProducts();
    }
  };

</script>
