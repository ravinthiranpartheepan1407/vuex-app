<template>

  <div>
    <div>
      <nav>
        <router-link to="/">
          E-Market
        </router-link>

      <div>
        <div>
          <img :src="user.photoURL" />
          <router-link to="/cart"> Cart
          <span> {{ cart.length }} </span>
          </router-link>
        </div>
        <router-link to="/login"> Login </router-link>
      </div>
      </nav>
    </div>
    <div>
      <router-view />
    </div>
  </div>
  
</template>

<script>

  import { mapGetters } from "vuex";
  export default{
    name: "Base",
    computed: {
      ..mapGetters("account", ["user"]),
      ..mapGetters("product", ["cart"])
    }
  };

</script>
