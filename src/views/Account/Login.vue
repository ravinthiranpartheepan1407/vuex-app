<template>
  <div>
    <div>
      <div>
        <div>
          <label> Email Address </label>
          <input type="email" />
        </div>
        <div>
          <label> Password </label>
          <input type="password" />
        </div>
        <button @click="login()" type="submit"> Login </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default{
    name: "Login",
    methods:{
      ..mapActions("account", ["login"]),
    },
  };
</script>
