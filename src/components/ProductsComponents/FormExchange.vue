<template>
  <div class="container">
    <h4>Si te interesa este artículo rellena este form para empezar tu intercambio</h4>
    <font-awesome-icon icon="arrow-down" class="icon" />
    <form id="contact" action method="get">
      <label>
        <input
          class="first-input"
          placeholder="Tu Usuario"
          type="text"
          tabindex="1"
          required
          autofocus
        />
      </label>
      <label>
        <input placeholder="¿Cuál es tu artículo?" type="text" tabindex="2" required autofocus />
      </label>
      <label>
        <input placeholder="tucorreo@tucorreo.com" type="email" tabindex="3" required autofocus />
      </label>
      <label>
        <textarea placeholder="Escribe detalles del intercambio..." tabindex="4" required autofocus></textarea>
      </label>
      <label>
        <button @click="sendSucced" name="submit" type="submit" id="contact-submit">Enviar</button>
      </label>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Exchange',
  // eslint-disable-next-line space-before-function-paren
  methods: {
    // eslint-disable-next-line space-before-function-paren
    sendSucced() {
      console.log('Enviado!')
    }
  }
}
</script>
<style scoped>
.container {
  font-size: 22px;
  color: black;
}

.icon {
  font-size: 24px;
  padding-bottom: 15px;
  color: #022ab0;
}

form {
  background-image: url(../../assets/img/bg5banner.png);
  background-repeat: repeat;
  border: 4px solid #022ab0;
  width: 65%;
  margin: 5px auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

label {
  padding: 10px;
}

::placeholder {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: rgb(39, 38, 38);
}
.first-input {
  margin-top: 20px;
}

input {
  font-size: 17px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 8px;
}

textarea {
  font-size: 17px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 8px;
  width: 250px;
}

button {
  cursor: pointer;
  font-size: 18px;
  background-color: white;
  border: 3px solid #022ab0;
  border-radius: 20px;
  padding: 8px;
  width: 110px;
  font-weight: 600;
  color: #022ab0;
}

button:hover {
  background-color: #022ab0;
  color: #fff;
}

@media (min-width: 768px) {
  form {
    width: 40%;
  }
}
@media (min-width: 1100px) {
  form {
    width: 35%;
  }
}
</style>
