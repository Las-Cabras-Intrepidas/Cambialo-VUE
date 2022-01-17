<template>
  <!-- <div id="technology" class="column is-half-touch is-one-quarter-desktop">
    <div class="product-card">
        <img src="img/products/tecnologia-movil.webp" alt="" />
        <div class="text-product">
            <p class="green">Disponible</p>
            <p class="has-text-weight-bold">iPhone 11</p>
            <p class="has-text-left">
                iPhone 11 de 64gb negro tiene 3 fundas, con su factura y garantía, está nuevo pero me gusta más Android.
            </p>
        </div>
    </div>
  </div> -->
  <!-- <div v-for="product in products" :key="product.id"> Producto {{data}}</div> -->
    <div class="container">
      <div class="row">
        <h4>Our Products</h4>
      </div>
      <div class="row" v-for="product in info" :key="product.id">
        <p scope="row"> {{ product.id }}</p>
          <img :src="product.picture" :alt="product.title" />
          <p>{{ product.title }}</p>
          <p>{{ product.availability }}</p>
          <p>{{ product.description }}</p>
      </div>
    </div>
</template>

<script>
import products from '../assets/data/producto.json'

export default {
  name: 'Products',
  data () {
    return {
      products: products
    }
  }
}
</script>
