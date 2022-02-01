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
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.category.join(', ') }}</td>
        <td>{{ product.shipping }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.image }}</td>
        <td>
          <button @click="deleteProduct(product.id)">Eliminar</button>
          <button @click="editProduct(product.id)">
            <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">Editar</router-link>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListProduct',
  props: {
    products: Array
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    async deleteProduct(id) {
      try {
        await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/userList-${this.$store.state.user.uid}/${id}.json`, {
          method: 'DELETE'
        })
      } catch (error) {
        console.log('error al borrar')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
table {
  margin: 0 auto;

  th {
    border: 1px solid #000;
    border-spacing: 0;
    padding: 8px;
  }

  td {
    border: 1px solid #000;
    border-spacing: -1px;
  }
}
button {
  width: 100px;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  color: var(--main-color);
  border: 2px solid var(--main-color);
  text-decoration: none;
  min-height: 2.5rem;
  margin: 0 auto;
}

button:hover {
  color: #fff;
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  text-decoration: none;
  cursor: pointer;
}

a {
  color: var(--main-color);
}

a:hover {
  color: #fff;
}
</style>
