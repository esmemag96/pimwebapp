<template lang="html">
  <section id="register">
    <div class="imageregister">
      <h1>Regístrate</h1>
    </div>
    <div class="registerInfo text-left">
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Correo de contacto</span>
        </div>
        <div class="col-6">
          <input type="email" name="" value="" placeholder="    email@example.com">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Contraseña</span>
        </div>
        <div class="col-6">
          <input type="password" name="" value="" placeholder="   **********"><br>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span class="textOrange">Confirmar contraseña</span>
        </div>
        <div class="col-6">
          <input type="password" name="" value="" placeholder="   **********"><br>
        </div>
      </div>
      <div class="row">
        <button type="button" name="button" class="inicioButton">Registrarse</button>
      </div>
      <div class="row">
        <span>¿Ya tienes cuenta?</span>
        <router-link :to="{ name: 'conectate', params: {} }">
          <button type="button" name="button" class="registrateButton">Conéctate</button>
        </router-link>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
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
  height: 500px;
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
  margin-left: 8em;
}
</style>
