<!--suppress ALL -->
/* eslint-disable */
<template lang="html">
  <section id="registerBand">
    <div class="formContainer">
      <h1 class="titulo">Registra tu banda</h1>
      <form class="" action="index.html" method="post">
        <div class="row">
          <div class="col">
            <span class="textOrange">Nombre</span>
          </div>
          <div class="col">
            <input type="text" name="name" v-model="input.name" value="" placeholder="Escribe aquí">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Correo de contacto</h4>
          </div>
          <div class="col-6">
            <input type="email" name="email" v-model="input.email" value="" placeholder="email@example.com">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Ciudad de Origen</h4>
          </div>
          <div class="col-6">
            <input type="text" name="city" v-model="input.city" value="" placeholder="Escribe aqui">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Imagen de Perfil</h4>
          </div>
          <div class="col-6">
            <input type="text" name="city" v-model="input.photo" value="" placeholder="Pon un link a tu imagen en URL">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Imagen de Fondo de Perfil</h4>
          </div>
          <div class="col-6">
            <input type="text" name="city" v-model="input.photoBack" value="" placeholder="Pon un link a tu imagen en URL">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Descripción</h4>
          </div>
          <div class="col-6">
            <textarea rows="10" cols="60" type="text" name="city" v-model="input.description" value="" placeholder="Pequeña Bio de la Banda"> </textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <h4 class="textOrange">Género</h4>
            <span class="extra">Selecciona los que identifiquen a tu banda</span>
          </div>
          <div class="col-12 col-md-6">
            <div class="row generosContainer">
              <div class="col">
                <b-button :pressed.sync="blues" variant="outline-light" name="button" v-on:click="addShandraw('Blues')">Blues</b-button>
                <b-button :pressed.sync="country" variant="outline-light" name="button" v-on:click="addShandraw('Country')">Country</b-button>
                <b-button :pressed.sync="pop" variant="outline-light" name="button" v-on:click="addShandraw('Pop')">Pop</b-button>
                <b-button :pressed.sync="rock" variant="outline-light" name="button" v-on:click="addShandraw('Rock')">Rock</b-button>
                <b-button :pressed.sync="metal" variant="outline-light" name="button" v-on:click="addShandraw('Metal')">Metal</b-button>
              </div>
            </div>
            <div class="row generosContainer">
              <div class="col">
                <b-button :pressed.sync="rock" variant="outline-light" name="button" v-on:click="addShandraw('Rock')">Rock</b-button>
                <b-button :pressed.sync="pop" variant="outline-light" name="button" v-on:click="addShandraw('Pop')">Pop</b-button>
                <b-button :pressed.sync="alternativo" variant="outline-light" name="button" v-on:click="addShandraw('Alternativo')">Alternativo</b-button>
                <b-button :pressed.sync="country" variant="outline-light" name="button" v-on:click="addShandraw('Country')">Country</b-button>
                <b-button :pressed.sync="jazz" variant="outline-light" name="button" v-on:click="addShandraw('Jazz')">Jazz</b-button>
                <b-button :pressed.sync="cantautor" variant="outline-light" name="button" v-on:click="addShandraw('Cantautor')">Cantautor/Cantante</b-button>
                <b-button :pressed.sync="latino" variant="outline-light" name="button" v-on:click="addShandraw('Latino')">Latino</b-button>
                <b-button :pressed.sync="world" variant="outline-light" name="button" v-on:click="addShandraw('World')">World</b-button>
                <b-button :pressed.sync="afrobeat" variant="outline-light" name="button" v-on:click="addShandraw('Afrobeat')">Afrobeat</b-button>
                <b-button :pressed.sync="hiphop" variant="outline-light" name="button" v-on:click="addShandraw('Hip Hop')">Hip Hop</b-button>
                <b-button :pressed.sync="ryb" variant="outline-light" name="button" v-on:click="addShandraw('R & B')">R & B</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Integrantes</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="integrantes" v-model="input.integrantes">
              <option>Seleccionar</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Años de trayectoria</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="trayectoria" v-model="input.trayectoria">
              <option>Seleccionar</option>
              <option>Menos de 1</option>
              <option>1 a 3</option>
              <option>4 a 8</option>
              <option>Más de 10</option>
            </select>
          </div>
        </div>
        <h3 class="subtitle">Concierto</h3>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Conciertos al año</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="conciertos" v-model="input.conciertos">
              <option>Seleccionar</option>
              <option>Menos de 12</option>
              <option>12 a 19</option>
              <option>20 a 25</option>
              <option>Más de 25</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Costo por Concierto</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="costPerConcert" v-model="input.costPerConcert">
              <option>Seleccionar</option>
              <option>Menos de 12000</option>
              <option>De 12000 a 20000</option>
              <option>De 20000 a 25000</option>
              <option>Más de 25000</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Público en concierto</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="publico" v-model="input.publico">
              <option>Seleccionar</option>
              <option>20 a 50</option>
              <option>60 a 150</option>
              <option>Mas de 200</option>

            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">¿Conciertos en otro país?</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="internacional" v-model="input.internacional">
              <option value="si">Sí</option>
              <option value="no" selected>No</option>
            </select>
          </div>
        </div>
        <div class="row" v-if="input.internacional=='si'">
          <div class="col-6">
            <h4 class="textOrange">¿Cuántos?</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="cuantos" v-model="input.cuantos">
              <option selected>0</option>
              <option>De 1 a 10</option>
              <option>10 a 20</option>
              <option>Más de 20</option>
            </select>
          </div>
        </div>
        <div class="row" v-if="input.internacional=='si'">
          <div class="col-6">
            <h4 class="textOrange">¿En cuáles países?</h4>
          </div>
          <div class="col-6">
            <input type="email" name="paises" v-model="input.paises" value="" placeholder="Escribe aquí los países separados por comas">
          </div>
        </div>
        <h3 class="subtitle">Redes Sociales</h3>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Seguidores en facebook</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="facebook" v-model="input.facebook">
              <option>Menos de 500</option>
              <option>de 1000 a 5000</option>
              <option>De 5000 a 12000</option>
              <option>Más de 12000</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Frecuencia de publicaciones en redes</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="frecuencia" v-model="input.frecuencia">
              <option>1 vez por semana</option>
              <option>4 veces por semana</option>
              <option>7 veces por semana</option>
              <option>Más de 14 veces por semana</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">¿Cuántas reproducciones tiene tu video mas visto en Youtube?</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="youtube" v-model="input.youtube">
              <option>No tengo videos en Youtube</option>
              <option>Menos de 100</option>
              <option>100 a 500</option>
              <option>500 a 1000</option>
              <option>Más de 1000</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">¿Tienes canal verificado en Spotify?</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="spotify" v-model="input.spotify">
              <option>Sí</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <!-- link de spotify -->
            <h4 class="textOrange">Link de Fan Page de Facebook</h4>
          </div>
          <div class="col-6">
            <input type="text" name="fanpage" v-model="input.fanpage" value="" placeholder="Escribe aquí">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Link de VideoClip</h4>
          </div>
          <div class="col-6">
            <input type="email" name="videoclip" v-model="input.videoclip" value="" placeholder="Escribe aquí">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">Link de Video en Vivo</h4>
          </div>
          <div class="col-6">
            <input type="email" name="videoVivo" v-model="input.videoVivo" value="" placeholder="Escribe aquí">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h4 class="textOrange">¿Tienes canal música en Streaming?</h4>
          </div>
          <div class="col-6">
            <select class="form-control mb-1" name="streaming" v-model="input.streaming">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row" v-if="input.streaming=='si'">
          <div class="col-6">
            <h4 class="textOrange">¿Cuál?</h4>
          </div>
          <div class="col-6">
            <input type="email" name="streamingCual" v-model="input.streamingCual" value="" placeholder="Escribe aquí">
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <button type="button" name="button" class="registroButton" v-on:click="register()">Registrar</button>
    </div>
    <div>
      <!-- <b-button @click="modalShow = !modalShow">Open Modal</b-button> -->
      <b-modal v-model="modalShow">Por favor completa todos los campos</b-modal>
    </div>
  </section>
</template>

<script>
  /* eslint-disable */
  import * as ApiService from '../ApiService';
  import * as OAuth from '../OAuth2';

  let apiService = new ApiService.ApiService();
  let oauth = new OAuth.OAuth2();

  export default {
    props: ["email", "password"],
    data() {
      return {
        modalShow: false,
        shandraw: [],
        rock:false,
        pop:false,
        alternativo:false,
        blues:false,
        country:false,
        metal:false,
        jazz:false,
        cantautor:false,
        latino:false,
        world:false,
        ryb:false,
        afrobeat:false,
        hiphop:false,
        input: {
          name: "",
          email: this.email,
          integrantes: "",
          trayectoria: "",
          conciertos: "",
          publico: "",
          costPerConcert: "",
          internacional: "No",
          cuantos: 0,
          paises: "",
          facebook: "",
          frecuencia: "",
          youtube: "",
          spotify: "",
          fanpage: "",
          videoclip: "",
          videoVivo: "",
          streaming: "",
          streamingCual: "",
          photoBack: "",
          photo: "",
        },
      }
    },
    computed: {
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    },
    methods: {
      async register() {
        let bool = 0;
        Object.entries(this.input).forEach(([key, value]) => {
          if((key === "cuantos" || key === "paises")){
            if(this.input["internacional"] === 'si')
              bool = (!value || value === "") ? bool + 1 : bool;
          }else{
            bool = (!value || value === "") ? bool + 1 : bool;
          }

          if((key === "streamingCual")){
            if(this.input["streaming"] === 'si')
              bool = (!value || value === "") ? bool + 1 : bool;
          }else{
            bool = (!value || value === "") ? bool + 1 : bool;
          }
        });

        let val = {
          bandName: this.input.name,
          email: this.input.email,
          shandraw: this.shandraw.join(","),
          photo: this.input.photo,
          photoBack: this.input.photoBack,
          trayectory: this.input.trayectoria,
          costPerPresentation: this.input.costPerConcert,
          internationalConcerts: this.input.cuantos,
          concertsPerYear: this.input.conciertos,
          attendancePerConcert: this.input.publico,
          socialMediaFollowUp: this.input.frecuencia,
          liveVideo: this.input.videoVivo,
          studioVideo: this.input.videoclip,
          pressKit: this.input.fanpage,
          city: this.input.city,
          description: this.input.description,
          numOfMemebers: parseInt(this.input.integrantes),
          places: this.input.paises,
          facebookFollowers: parseInt(this.input.facebook),
          youtubeMustViewVideo: parseInt(this.input.youtube),
          hasSpotify: this.input.spotify == "Si" ? true:false,
          streamingChannel: this.input.streaming == "Si" ? this.input.streamingCual:null
        }

        console.log(val, bool, this.shandraw.length)

        if (bool === 0 && this.shandraw.length != 0) {
          apiService.post({
            url: `${this.$store.state.server}/api/v1/artist`,
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${await oauth.getToken().then((obj) => obj.access_token)}`
            },
            params: val
          }).then((respuesta) => {
            console.log("Register Artist",respuesta)
            if(respuesta && respuesta.message === "¡Genial! Se agregaron exitosamente los datos")
              this.$router.replace({ name: "artistas" });
            else
              this.$notify({
                group: 'foo',
                type: 'error',
                duration: 10000,
                title: "¡Alto!",
                text: respuesta.message.response.data.message
              });
          });
        }else{
          this.$notify({
            group: 'foo',
            type: 'warn',
            duration: 10000,
            title: "¡Alto!",
            text: "¡Tienes que llenar todos los campos!"
          });
        }
      },
      async addShandraw(value) {
        this.shandraw.push(value);
      }
    }
  };
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
#registerBand{
  font-family:Nexa-Regular;
  background-color: #590033;
}
.titulo{
  margin-left: 3em;
  color: white;
  font-size: 57px;
  letter-spacing: 1px;
  font-weight: 600;
  padding-top: 1em;
  margin-bottom: 1em;
}
.extra{
  color: #ee4540;
  margin-left: 10em;
}
.subtitle{
  color: white;
  font-size: 30px;
  margin-left: 6em;
  margin-top: 2em;
}
.formContainer input{
  width: 70%;
  border-radius: 10px;
  height: 35px;
}
.formContainer select{
  width: 40%;
  border-radius: 10px;
  height: 35px;
}
.formContainer button{
  border-radius: 12px;
  margin-right: 13px;
  margin-bottom: 9px;
  margin-top: 2px;
}
.registroButton{
  background-color: #ee4540;
  color: white;
  width: 7em;
  font-weight: 600;
  font-size: 23px;
  border-radius: 25px;
  margin-bottom: 2em;
  margin-top: 3em;
  border: 1px solid #ee4540;
}
@media only screen and (max-width: 768px) {
  .formContainer input {
      width: 80%;
      border-radius: 10px;
      height: 35px;
  }
  .formContainer select {
    width: 55%;
    border-radius: 10px;
    height: 35px;
  }
  .subtitle {
    margin-left: 0.5em;
  }
  .extra {
    color: #ee4540;
    margin-left: 1em;
    font-size: 13px;
  }
  .generosContainer{
    text-align: center;
  }
  .titulo {
    margin-left: 0.5em;
  }

}
</style>
