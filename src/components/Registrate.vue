<template lang="html">
  <section id="register">
    <div class="imageregister">
      <h1>Regístrate</h1>
    </div>
    <div class="registerInfo text-left">
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Nombre</span>
        </div>
        <div class="col-6">
          <input type="text" name="firstName" v-model="input.firstName" value="" placeholder="    Nombre">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Apellido</span>
        </div>
        <div class="col-6">
          <input type="text" name="lastName" v-model="input.lastName" value="" placeholder="    Apellido">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Nombre de Usuario</span>
        </div>
        <div class="col-6">
          <input type="text" name="name" v-model="input.name" value="" placeholder="    Nombre a Mostrar">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">País y Ciudad</span>
        </div>
        <div class="col-6">
          <input type="text" name="pais" v-model="input.pais" value="" placeholder="    País">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Correo de contacto</span>
        </div>
        <div class="col-6">
          <input type="email" name="email" v-model="input.email" value="" placeholder="    email@example.com">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Contraseña</span>
        </div>
        <div class="col-6">
          <vue-password name="password" v-model="input.password" classes="input" :user-inputs="[input.email]"></vue-password>

          <!-- <input type="password" name="password" v-model="input.password" value="" placeholder="   **********"><br> -->
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Confirmar contraseña</span>
        </div>
        <div class="col-6">
          <!-- <vue-password name="passwordConfirmation" v-model="input.passwordConfirmation" classes="input":user-inputs="[input.email]"></vue-password> -->
          <input type="password" name="passwordConfirmation" v-model="input.passwordConfirmation" value="" placeholder="   **********"><br>
        </div>
      </div>
      <div class="row">
        <button type="button" name="button" class="inicioButton" v-on:click="register()">Registrarse</button>
      </div>
      <div class="row text-center">
        <span class="col-12">¿Ya tienes cuenta?</span>
        <router-link :to="{ name: 'conectate', params: {} }" class="col-12">
          <button type="button" name="button" class="registrateButton">Conéctate</button>
        </router-link>
      </div>

    </div>
    <div>
      <!-- <b-button @click="modalShow = !modalShow">Open Modal</b-button> -->
      <b-modal v-model="modalShow">Tu contraseña no es suficientemente segura</b-modal>
    </div>
  </section>
</template>

<script>
  /* eslint-disable */

  import * as ApiService from '../ApiService';
  import * as OAuth from '../OAuth2';
  import VuePassword from 'vue-password'

  let apiService = new ApiService.ApiService();
  let oauth = new OAuth.OAuth2();

  export default {
    components: { VuePassword },
    data() {
      return {
        modalShow: false,
        input: {
          email: "",
          password: "",
          passwordConfirmation: "",
          firstName: "",
          lastName: "",
          name: "",
          pais: ""
        }
      }
    },
    methods: {
      register() {

        let bool = 0;
        Object.entries(this.input).forEach(([key, value]) => {
          bool = (!value || value === "") ? bool+1:bool;
        });

        if (bool === 0 && this.password === this.passwordConfirmation) {

          const body = {
            email: this.input.email,
            password: this.input.password,
            name: this.input.name,
            picture: "https://cdn1.iconfinder.com/data/icons/business-users/512/circle-512.png",
            locale: this.input.pais,
            firstName: this.input.firstName,
            lastName: this.input.lastName
          };

          const searchParams = Object.keys(body).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
          }).join('&');

          let datos = apiService.post({
            url: `${this.$store.state.oauth2}/oauth2/user`,
            params: searchParams,
            headers: {
              "Content-Type": "application/json"
            }
          }).then((respuesta) => {
            console.log("Register User", respuesta);
            oauth.login(this.input.email, this.input.password).then((respuesta) => {
              if(respuesta && respuesta.id !== -1){
                this.$router.push({
                  name: 'registraBanda',
                  params: {email: this.input.email, password: this.input.password}
                });
              }else {
                alert("Hubo un error en el login, intenta de nuevo")
              }
            });
          });
        }
      }
    }
  }
</script>

<style lang="css">
@font-face{
  font-family: Nexa-Light;
  src: url("../assets/fonts/Nexa-Light.otf");
}
@font-face
{
  font-family: Nexa-Heavy;
  src:url("../assets/fonts/NexaHeavy.otf");
}
@font-face
{
  font-family:Nexa-Regular;
  src:url("../assets/fonts/NexaRegular.otf");
}
#register{
  font-family:Nexa-Regular;
}
.imageregister{
  height: 500px;
  background-image: url('../assets/images/register_image.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: inherit;
}
.imageregister h1{
  color: white;
  font-family: Nexa-Regular;
  font-size: 55px;
  font-weight: 600;
  margin-left: 3em;
  letter-spacing: 2px;
  padding-top: 7em;
}
.registerInfo{
  height: 800px;
  padding-top: 5em
}
.textOrange{
  color: #ee4540;
  font-size: 30px;
  font-weight: 600;
  margin-left: 5em;
}
.registerInfo input{
  width: 70%;
  border-radius: 20px;
  border: 2px #b1b0b0 solid;
  height: 35px;
  margin-left: -9em;
}
.registerInfo a{
  color: #ee4540;
}
.registerInfo .row{
  margin-bottom: 2em;
}
.inicioButton{
  background-color: #ee4540;
  color: white;
  width: 7em;
  font-weight: 600;
  font-size: 23px;
  border-radius: 25px;
  margin-bottom: 2em;
  border: 1px solid #ee4540;
}
.registrateButton{
  background-color: white;
  color: #ee4540;
  width: 8em;
  font-weight: 600;
  font-size: 17px;
  border-radius: 25px;
  border: 3px solid #ee4540;
}
.VuePassword__Meter {
    color: rgb(175, 175, 175);
    display: block;
    height: .5rem;
    margin-top: 0.5rem;
    padding-left: .5rem;
    padding-right: .5rem;
    width: 70%;
    margin-left: -9em;
}
.VuePassword__Toggle__Icon {
    fill: currentColor;
    height: 100%;
    width: 1.5em;
    margin-right: 19.5em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.VuePassword__Message {
    cursor: default;
    font-size: 1rem;
    padding-left: .5rem;
    padding-right: .5rem;
    text-align: right;
    text-transform: uppercase;
    margin-right: 16em;
}
@media only screen and (max-width: 768px) {
  .imageregister h1 {
    font-size: 40px;
    margin-left: 0.5em;
    padding-top:3em;
  }
  .imageregister{
    height: 14em;
  }
  .textOrange {
    color: #ee4540;
    font-size: 15px;
    font-weight: 600;
    margin-left: 1em;
  }
  .registerInfo input {
    width: 100%;
    border-radius: 20px;
    border: 2px #b1b0b0 solid;
    height: 35px;
    margin-left: -1em;
  }
  .registrateButton {
    background-color: white;
    color: #ee4540;
    width: 8em;
    font-weight: 600;
    font-size: 17px;
    border-radius: 25px;
    border: 3px solid #ee4540;
    margin-left: 0;
  }
  .VuePassword__Toggle__Icon {
    display: none;
  }
  .VuePassword__Meter {
      color: rgb(175, 175, 175);
      display: block;
      height: .5rem;
      margin-top: 0.5rem;
      padding-left: .5rem;
      padding-right: .5rem;
      width: 100%;
      margin-left: -1em;
  }
}
</style>
