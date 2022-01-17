<template>
  <!-- <section>
    <div v-for="product in products" :key= "product.id" :name="product.name" :availability="product.availability" :description="product.description" >
      <div class="product-card">
          <img :src="product.picture" :alt="product.name" />
          <div class="text-product">
              <p class="green">Disponible</p>
              <p class="has-text-weight-bold">{{ product.name }}</p>
              <p class="has-text-left">
                {{ product.description }}
              </p>
          </div>
      </div>
    </div>
  </section> -->
  <section class="">
    <div>
      <div class="product-card">
        <img src="img/products/tecnologia-pc.jpg" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">Portatil AAA</p>
          <p class="has-text-left">
            Portatil traído de China, no tiene garantía, es un Intel Celerón así
            que ningún problema de velocidad.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="product-card">
        <img src="img/products/tecnologia-tv.webp" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">TV *casi* Nueva</p>
          <p class="has-text-left">
            TV comprada en Carrefour, tiene su factura y es de 43 pulgadas, 4K.
            Está bastante bien porque poco se usó.
          </p>
        </div>
      </div>
    </div>
    <div id="home">
      <div class="product-card">
        <img src="img/products/hogar-lamp.webp" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">Lámpara bien moderna</p>
          <p class="has-text-left">
            Lámpara moderna, viene con el sombrero y las gafas. Tiene una pata
            un poco coja, pero cumple su función.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="product-card">
        <img src="img/products/hogar-mesita.webp" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">Mesa de Noche</p>
          <p class="has-text-left">
            Mesa de noche de madera clara, está en perfecto estado como en la
            foto. Perfecta si te falta una en tu habitación.
          </p>
        </div>
      </div>
    </div>
    <div id="pets">
      <div class="product-card">
        <img src="img/products/mascotas-cattoy.webp" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">Juguete de Gato</p>
          <p class="has-text-left">
            Juguete grande. Ocupa la mitad de mi salón y por eso tengo que
            quitarlo. Cumple su función y al gato le gusta.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="product-card">
        <img src="img/products/mascotas-comedero.jpg" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">Comedero de Mascota</p>
          <p class="has-text-left">
            Comedero bien fancy. Para cualquier animal. La madera un poco
            deteriorada por la humedad, pero nada más.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="product-card">
        <img src="img/products/ropa-zapatos.jpg" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">Zapatos Beige de Bershka</p>
          <p class="has-text-left">
            Zapatos de la temporada pasada de primavera-verano de Bershka, solo
            los use para tomarme fotos para el instagram.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="product-card">
        <img src="img/products/juego-sims.jpg" alt="" />
        <div class="text-product">
          <p class="green">Disponible</p>
          <p class="has-text-weight-bold">The Sims 4 - PS4</p>
          <p class="has-text-left">
            Juego original, por fin mi vida me parece mas divertida que la que
            hago en este juego. Cambio por cualquier cosa de bowling.
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
</template>

<script>
export default {
  name: 'ProductsSection'
}
</script>

<style lang="scss" scoped>

.product-card {
  box-shadow: 0px 0px 8px var(--placeholder-gray);
  padding-bottom: 5px;
}

.product-card:hover {
  cursor: pointer;
}
</style>
