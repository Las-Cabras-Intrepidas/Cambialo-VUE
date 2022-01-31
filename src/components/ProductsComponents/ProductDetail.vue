<template>
  <div class="container">
    <img :src="picture" alt />
    <div class="text-container">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button>Cambialo Ahora</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    title: {
      type: String
    },
    category: {
      type: String
    },
    description: {
      type: String
    },
    picture: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background-color: aliceblue;
  border-radius: 1rem;
  margin: 5%;
  text-align: start;

  img {
    width: 25%;
    border-radius: 1rem;
    margin: 10px;
  }

  div {
    margin-left: 1rem;

    button {
      cursor: pointer;
      font-size: 1rem;
      background-color: white;
      border: 2px solid var(--main-color);
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-weight: 600;
      color: var(--main-color);
    }

    button:hover {
      background-color: var(--main-color);
      color: #fff;
    }
  }
}
</style>
