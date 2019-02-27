<template lang="html">
  <section id="login">
    <div class="imageLogin">
      <h1>Inicia Sesión</h1>
    </div>
    <div class="loginInfo text-left">
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Correo de contacto</span>
        </div>
        <div class="col-6">
          <input type="email" name="email" v-model="input.email" placeholder="    email@example.com" />
          <!-- <input type="email" name="" value="" placeholder="    email@example.com"> -->
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Contraseña</span>
        </div>
        <div class="col-6">
          <input type="password" name="password" v-model="input.password" placeholder="Password" /><br>
          <!-- <input type="password" name="" value="" placeholder="   **********"><br> -->
          <a href="">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
      <div class="row">
        <button type="button" name="button" class="inicioButton" v-on:click="login()">Inicio</button>
      </div>
      <div class="row">
        <span>¿Aún no tienes cuenta?</span>
        <router-link :to="{ name: 'registrate', params: {} }">
          <button type="button" class="registrateButton">Registrate</button>
        </router-link>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
  export default {
    name: 'Login',
    data() {
        return {
            input: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.email != "" && this.input.password != "") {
                if(this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "artistas" });
                } else {
                    console.log("The email and / or password is incorrect");
                }
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
  margin-left: 8em;
}
</style>
