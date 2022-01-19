<template>
  <section>
    <div class="contact-container">
      <div class="contact-details">
        <h1 class="contact-title">¿Tienes alguna pregunta?</h1>
        <h2 class="contact-subtitle">
          Rellena el siguiente formulario y te responderemos cuanto antes.
        </h2>
        <h3 class="contact-subtitle">
          También nos puedes encontrar en Redes Sociales.
        </h3>
        <ul>
          <li class="contact-item">902 781 369</li>
          <li class="contact-item">intrepidibex@gmail.com</li>
          <li class="contact-item">Calle La X, 13. Madrid, España.</li>
        </ul>
      </div>

      <form id="form-contact" class="form-container">
        <div class="name-field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="Tu nombre" />
          </div>
        </div>

        <div class="email-field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Tu email" />
          </div>
        </div>

        <div class="message-field">
          <label class="label">Mensaje</label>
          <div class="control">
            <textarea
              class="input textarea"
              placeholder="Tu mensaje..."
            ></textarea>
          </div>
        </div>

        <div class="terms-field">
          <div class="control">
            <label class="">
              <input type="checkbox" required />
              Estoy de acuerdo con los<a class="conditions-link" href="#">
                términos y condiciones.</a
              >
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control-btn">
            <button class="btn-form">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>
<style scoped>

section {
  background-image: url("../../assets/img/mosaic-image.webp");
  background-size: cover;
  padding: 6rem 0;

}

.contact-container {
  background-color: #b9b8c7;
  box-shadow: 2px 1px 7px 1px grey;
  padding: 1.5rem;
  width: 70%;
  margin: auto;
  border-radius: 8px;
}

.contact-title {
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 1px black;
}

.contact-subtitle {
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin: 0.7rem;
}

.contact-item {
  font-size: 16px;
  font-weight: 600;
  margin: 0.7rem;
  margin-left: -30px;
  color: #fff;
  text-shadow: 1px 1px 1px black;
}

.contact-icon {
  margin: 0.5rem;
}

.form-container {
  border-top: 2px solid #000;
  padding: 1rem;
}

.label,
.terms-field {
  color: #000;
}

.input {
  margin: 8px;
  width: 70%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px;
}

.btn-form {
  margin-top: 1rem;
  padding: 0.5rem;
  border: 2px solid var(--main-color);
  border-radius: 32px;
  width: 40%;
  color: #000;
  font-weight: 600;
  font-size: 16px;
}

.btn-form:hover {
  background-color: rgb(0, 0, 189);
  color: #fff;
}

.contact-details {
  background-color: #b9b8c7;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  list-style: none;
}

@media (min-width: 650px) {

    section {
    padding: 9rem;
    }

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }

  .form-container {
    border-top: none;
    border-left: 2px solid #000;
  }
}

@media (min-width: 650px) and (max-width: 900px) {
  .contact-container {
    width: 110%;
  }
  .btn-form {
      width: 90px;
  }
}

@media (min-width: 850px) {
  .contact-container {
    width: 70%;
  }
}

@media (min-width: 1400px) {
  .contact-container {
    width: 60%;
  }
}
</style>
