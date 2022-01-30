<template>
  <h2>Mis productos</h2>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Categoria</th>
        <th>Envio pagado</th>
        <th>Descripción</th>
        <th>Imagen</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.id}}</td>
        <td>{{product.title}}</td>
        <td>{{product.category.join(', ')}}</td>
        <td>{{product.shipping}}</td>
        <td>{{product.description}}</td>
        <td> {{product.image}} </td>
        <td>
          <button @click="deleteProduct(product.id)">Eliminar</button>
          <button @click="editProduct(product.id)">
            <router-link :to="{name: 'EditProduct', params: {id: product.id}}">Editar</router-link>
          </button>
          </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ListProduct',
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['deleteProduct', 'editProduct'])
  }
}
</script>
