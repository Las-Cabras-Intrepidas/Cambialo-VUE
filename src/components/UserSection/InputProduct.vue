<template>
<!-- eslint-disable vue/no-mutating-props -->
  <div class="name">
    <input type="text" placeholder="Nombre del producto" v-model.trim="product.title">
  </div>
  <div class="category">
    <div class="checkbox-item">
      <input type="checkbox" id="check-1"
      v-model="product.category"
      value="tecnologia"
      >
      <label for="check-1">Tecnología</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-2"
      v-model="product.category"
      value="hogar"
      >
      <label for="check-2">Hogar</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-3"
      v-model="product.category"
      value="mascotas"
      >
      <label for="check-3">Mascotas</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-4"
      v-model="product.category"
      value="juegos"
      >
      <label for="check-4">Juegos</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-5"
      v-model="product.category"
      value="ropa"
      >
      <label for="check-5">Ropa</label>
    </div>
      <div class="checkbox-item">
      <input type="checkbox" id="check-6"
      v-model="product.category"
      value="deporte"
      >
      <label for="check-6">Deporte</label>
    </div>
    </div>
  <div class="shipping">
    <div class="radio-item">
      <input type="radio" id="radio-1"
      v-model="product.shipping"
      value="true">
      <label for="radio-1"> Pago los gastos de envío </label>
    </div>
    <div class="radio-item">
      <input type="radio" id="radio-2"
      v-model="product.shipping"
      value="false">
      <label for="radio-2"> No pago los gastos de envío </label>
    </div>
  </div>
  <div class="picture">
    <input type="file" accept="image/*">
    <!-- v-model="product.picture"  -->
  </div>
  <div class="description">
    <textarea placeholder="Descripción de tu producto" name="" id="textarea-1" cols="30" rows="10" v-model.trim="product.description"></textarea>
  </div>
  <button type="submit" :disabled="validateForm">Subir</button>
</template>

<script>
export default {
  name: 'InputProduct',
  props: {
    product: Object
  },
  computed: {
    validateForm () {
      return this.product.title.trim() === ''
    }
  }
}
</script>
