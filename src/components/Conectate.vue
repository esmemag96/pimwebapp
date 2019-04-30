<template lang="html">
  <section id="login" v-bind:class="{active: isLoading }">
    <div class="imageLogin">
      <h1>Inicia Sesión</h1>
    </div>
    <div class="loginInfo text-left">
      <div class="row">
        <div class="col">
          <span class="textOrange">Correo de contacto</span>
        </div>
        <div class="col">
          <input type="email" name="email" v-model="input.email" placeholder="   email@example.com" />
          <!-- <input type="email" name="" value="" placeholder="    email@example.com"> -->
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Contraseña</span>
        </div>
        <div class="col-6">
          <input type="password" name="password" v-model="input.password" placeholder="   Password" /><br><br>
          <!-- <input type="password" name="" value="" placeholder="   **********"><br> -->
          <a href="">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
      <div class="row">
        <button type="button" name="button" class="inicioButton" v-on:click="login()">Inicio</button>
      </div>
      <div class="row text-center">
        <span class="col-12">¿Aún no tienes cuenta?</span>
        <router-link :to="{ name: 'registrate', params: {} }" class="col-12">
          <button type="button" class="registrateButton">Registrate</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
  /* eslint-disable */
  import * as OAuth from '../OAuth2';

  let oauth = new OAuth.OAuth2();

  export default {
    data() {
      return {
        isLoading: false,
        input: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      login() {
        if(this.input.email !== "" && this.input.password !== "") {
          this.isLoading = !this.isLoading;
          oauth.login(this.input.email, this.input.password).then((respuesta) => {
            if(respuesta.code && respuesta.code === 200){
              this.$emit("authenticated", true);
              this.$router.push({path: "artistas"});
              this.isLoading = !this.isLoading;
            }else {
              this.$router.push({path: "artistas"});
              this.$notify({
                group: 'foo',
                type: 'error',
                duration: 5000,
                title: "¡Alto!",
                text: (respuesta.message == null ? 'Hubo un error desconocido':respuesta.message)
              });
            }
          }).catch((err) => {
            console.log("Error", err);
            this.isLoading = !this.isLoading;
          });
        } else {
          console.log("A email and password must be present");
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
#login{
  font-family:Nexa-Regular;
}
.active{
  cursor: progress;
}
.imageLogin{
  height: 500px;
  background-image: url('../assets/images/login_image.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.imageLogin h1{
  color: white;
  font-family: Nexa-Regular;
  font-size: 55px;
  font-weight: 600;
  margin-left: 3em;
  letter-spacing: 2px;
  padding-top: 7em;
}
.loginInfo{
  height: 500px;
  padding-top: 5em
}
.textOrange{
  color: #ee4540;
  font-size: 30px;
  font-weight: 600;
  margin-left: 5em;
}
.loginInfo input{
  width: 70%;
  border-radius: 20px;
  border: 2px #b1b0b0 solid;
  height: 35px;
  margin-left: -9em;
}
.loginInfo a{
  color: #ee4540;
}
.loginInfo .row{
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
@media only screen and (max-width: 768px) {
  .imageLogin h1 {
    font-size: 40px;
    margin-left: 0.5em;
    padding-top:3em;
  }
  .imageLogin{
    height: 14em;
  }
  .textOrange {
    color: #ee4540;
    font-size: 15px;
    font-weight: 600;
    margin-left: 1em;
  }
  .loginInfo input {
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
}
</style>
