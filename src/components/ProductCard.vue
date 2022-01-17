<template>
  <div>
    <img :src="product.imageUrl" />
    <div>
      <h5> {{product.name}} </h5>
      <div>
        <router-link type="button" to="'/details/' + product.id">
          Details
        </router-link>
      </div>
    </div>
  </div>
<template>

<script>

  export default{
    name: "ProductCard",
    props: ["product"]
  }

</script>
