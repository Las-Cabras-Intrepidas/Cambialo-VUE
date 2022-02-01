<template>
<div>
    <input type="text" placeholder="Nombre del producto" v-model.trim="props.product.title" />
  </div>
  <p>➡ Selecciona una categoría:</p>
  <div class="category">
    <div class="checkbox-item">
      <input type="checkbox" id="check-1" v-model="props.product.idCategory" value="tecnologia" />
      <label for="check-1">Tecnología</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-2" v-model="props.product.idCategory" value="hogar" />
      <label for="check-2">Hogar</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-3" v-model="props.product.idCategory" value="mascotas" />
      <label for="check-3">Mascotas</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-4" v-model="props.product.idCategory" value="juegos" />
      <label for="check-4">Juegos</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-5" v-model="props.product.idCategory" value="ropa" />
      <label for="check-5">Ropa</label>
    </div>
    <div class="checkbox-item">
      <input type="checkbox" id="check-6" v-model="props.product.idCategory" value="deporte" />
      <label for="check-6">Deporte</label>
    </div>
  </div>
  <div class="picture">
    <p>➡ Sube una foto:</p>
    <input type="file" accept="image/*" />
    <!-- v-model="product.picture"  -->
  </div>
  <div class="description">
    <textarea
      placeholder="Descripción de tu producto"
      name
      id="textarea-1"
      cols="30"
      rows="10"
      v-model.trim="props.product.description"
    ></textarea>
  </div>
  <button type="submit" :disabled="validateForm">Subir</button>
  <!-- eslint-disable vue/no-mutating-props -->

</template>

<script>
export default {
  name: 'InputProduct',
  props: {
    product: Object
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    validateForm() {
      return this.product.title.trim() === ''
    }
  }

}
</script>
<style lang="scss" scoped>
div {
  padding: 5px;

  input {
    font-size: 15px;
    border: 3px solid rebeccapurple;
    background: rgba(255, 255, 255, 0.781);
    color: #333;
    padding: 9.5px 9px;
    border-radius: 5px;
  }
}

textarea {
  font-size: 15px;
  font-family: var(--main-font);
  border: 3px solid rebeccapurple;
  background: rgba(255, 255, 255, 0.781);
  border-radius: 8px;
  width: 350px;
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

.category {
  display: flex;
  flex-direction: row;
}

p {
  text-align: left;
  font-weight: 600;
  margin: 2px;
  font-size: 18px;
}

.picture {
}

@media (max-width: 768px) {
  .category {
    flex-wrap: wrap;
  }
}
</style>
