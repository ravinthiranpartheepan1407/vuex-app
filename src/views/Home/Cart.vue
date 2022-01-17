<template>
  <div>
    <div>
      <div>
        <a v-for="item in cart" :key="item.id" href="#">
          <img :src="item.imageUrl" />
          <p>{{item.name}}</p>
          <div>
            <div>
              <p>Price</p>
              <p>${{item.price}}</p>
            </div>
            <div>
              <p>Total Price</p>
              <p>${{item.price * item.quantity}}</p>
            </div>
            <div>
              <p> Quantity </p>
              <p> {{item.quantity}} </p>
            </div>
          </div>
        </a>
        <div>
          <p> Total </p>
          <div>
            <p> Total Price </p>
            <p> ${{totalPrice}}</p>
          </div>
        </div>
        <button @click="checkout()" type="button"> Checkout </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default{
    name: "Cart",
    data(){
      return{
        totalPrice: 0,
      };
    },
    computed:{
      ..mapGetters("product", ["cart"]),
      ..mapGetters("account", ["user"]),
    },
    methods:{
      ..mapActions("product",["removeCart"]),
      calcPrice(){
        this.cart.forEach((element)=>{
          this.totalPrice += element.price * element.quantity;
        });
      },
      checkout(){
        const m = this;
        setTimeOut(()=>{
          m.removeCart();
          alert("Purchase Successful");
          m.$route.push("/");
        }, 2000);
      },
    },
    mounted(){
    this.calcPrice();
    },
  };
</script>
