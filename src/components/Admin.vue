<template lang="html">
  <div id="admin" class="container">
    <!-- Tabla donde se muestran los datos -->
    <section class="data">
      <div class="sk-cube-grid" style="display: none" v-bind:class="{activo: isLoading }">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
      <div style="display: none" v-bind:class="{activo: !isLoading }">
        <caption>Artistas</caption>
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">ID</th>
            <th scope="col">Nombre banda</th>
            <th scope="col">Email</th>
            <th scope="col">Level</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(artist, index) in artists" :key="artist.uuid">
            <td>{{ index }}</td>
            <td>{{ artist.uuid }}</td>
            <td>
              <span>
                {{ artist.bandName }}
              </span>
            </td>
            <td>
              <span>
                {{ artist.email }}
              </span>
            </td>
            <td>
              <span>
                {{ artist.level }}
              </span>
            </td>
            <td>
              <span>
                <button v-b-modal.modal-scrollable @click="modalShow = !modalShow; verFormActualizar(index)" class="btn btn-warning">Actualizar</button>
                <button @click="borrarartist(index,artist.uuid)" class="btn btn-danger">Borrar</button>
              </span>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- Update Modal -->
        <b-modal id="modal-scrollable" @ok="handleOk" scrollable title="Scrollable Content" v-model="modalShow">
          <div class="artistData">
            <label>ID</label>
            <span>{{ idActualizar }}</span><br>
            <label> Nombre Banda</label>
            <input v-model="input.bandName" type="text" class="form-control">
            <label>Email</label>
            <input v-model="input.email" type="text" class="form-control">
            <label> Conciertos por año</label>
            <input v-model="input.concertsPerYear" type="text" class="form-control">
            <label> Costo por presentación</label>
            <input v-model="input.costPerPresentation" type="text" class="form-control">
            <label> Facebook followers</label>
            <input v-model="input.facebookFollowers" type="text" class="form-control">
            <label>Tiene spotify</label>
            <select class="form-control mb-1" name="youtube" v-model="input.hasSpotify">
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
            <label> Número de Conciertos Internacionales</label>
            <input v-model="input.internationalConcerts" type="text" class="form-control">
            <label> Lugares</label>
            <input v-model="input.places" type="text" class="form-control">
            <label>Presskit</label>
            <input v-model="input.pressKit" type="text" class="form-control">
            <label> Shandraw</label>
            <input v-model="input.shandraw" type="text" class="form-control">
            <label>Social Media Follow Up</label>
            <input v-model="input.socialMediaFollowUp" type="text" class="form-control">
            <label>Trayectory</label>
            <input v-model="input.trayectory" type="text" class="form-control">
            <label>Studio Video</label>
            <input v-model="input.studioVideo" type="text" class="form-control">
            <label>Youtube Video</label>
            <input v-model="input.youtubeMustViewVideo" type="text" class="form-control">
            <hr>
            <h4>Administrador</h4>
            <label>Status</label>
            <select class="form-control mb-1" name="youtube" v-model="input.status">
              <option value="true" selected>Activo</option>
              <option value="false">Desactivado</option>
            </select>
            <label> Completeness</label>
            <input v-model="input.completeness" type="text" class="form-control">
            <label>Level</label>
            <input v-model="input.level" type="text" class="form-control">
            <label>Sublevel</label>
            <input v-model="input.sublevel" type="text" class="form-control">
            <label> Review </label>
            <input v-model="input.review" type="text" class="form-control">
            <label>Step 1</label>
            <input v-model="input.step1" type="text" class="form-control">
            <label>Step 2</label>
            <input v-model="input.step2" type="text" class="form-control">
            <label>Step 3</label>
            <input v-model="input.step3" type="text" class="form-control" v-bind:style="{marginBottom: '10px'}">
          </div>
        </b-modal>
      </div>
    </section>
  </div>
</template>

<script>
  /* eslint-disable */
  import * as ApiService from '../ApiService';
  import * as OAuth from '../OAuth2';

  let apiService = new ApiService.ApiService();
  let oauth = new OAuth.OAuth2();

  export default {
    data(){
      return{
        isLoading: true,
        formActualizar: false,
        idActualizar: -1,
        input:{
          nombre: '',
          uuid: '',
          edad: '',
          bandName: '',
          email: '',
          completeness: '',
          concertsPerYear: '',
          costPerPresentation: '',
          facebookFollowers: '',
          internationalConcerts: '',
          pressKit: '',
          review: '',
          socialMediaFollowUp: '',
          status: '',
          step1: '',
          step2: '',
          step3: '',
          studioVideo: '',
          level: '',
          sublevel: '',
          trayectory: '',
          youtubeMustViewVideo: '',
          dateCreated: '',
          dateModified: '',
          shandraw: '',
          hasSpotify: '',
          places: '',
        },
        artists: [],
        modalShow: false
      }
    },
    beforeRouteEnter(to, from, next) {
      oauth.getToken().then((obj) =>{
        if(obj != null && obj.profile != null && obj.profile.authentication.authorities.toString().includes("ADMIN")) {
          next(vm => {
            vm.setData(obj)
          })
        }else{
          next(vm => {
            vm.$router.replace({ name: "LoginAdmin" });
          })
        }
      });
    },
    methods: {
      verFormActualizar: function (artist_id) {
        // Antes de mostrar el formulario de actualizar, rellenamos sus campos
        this.idActualizar = artist_id;
        this.input = this.artists[artist_id];
        this.formActualizar = true;
      },
      handleOk(evt) {
        // Prevent modal from closing
        evt.preventDefault();
        oauth.getToken().then((obj) =>{
          this.artists[this.idActualizar] = this.input;
          console.log(JSON.stringify(this.input));
          return apiService.put({
            url: `${this.$store.state.server}/api/v1/artist`,
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${obj.access_token}`
            },
            params: this.input
          }).then((respuesta) => {
            if(respuesta.status !== 200){
              let val = respuesta.message.response.data;
              Object.entries(val.data).forEach(([key, value]) => {
                value.error.forEach((msg) => {
                  this.$notify({
                    group: 'foo',
                    type: 'warn',
                    duration: 10000,
                    title: key.charAt(0).toUpperCase() + key.slice(1),
                    text: `${msg}`
                  });
                });
              });
              this.$notify({
                group: 'foo',
                type: 'error',
                duration: 10000,
                title: '¡Error!',
                text: val.message
              });
            }else{
              this.$notify({
                group: 'foo',
                title: '¡Exito!',
                text: respuesta.message
              });
            }
            console.log("Salve",respuesta);
          });
        });
      },
      borrarartist: function (index, uuid) {
        oauth.getToken().then((obj) =>{
          return apiService.delete({
            url: `${this.$store.state.server}/api/v1/artist/${uuid}`,
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${obj.access_token}`
            }
          }).then((respuesta) => {
            if(respuesta.status !== 200){
              this.artists.splice(index, 1);
              this.$notify({
                group: 'foo',
                title: '¡Exito!',
                text: respuesta.message
              });
              console.log("Borre",respuesta)
            }else{
              this.$notify({
                group: 'foo',
                title: '¡Error!',
                text: respuesta.message
              });
            }
          });
        });
      },
      setData(obj) {
        return apiService.get({
          url: `${this.$store.state.server}/api/v1/artist`,
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${obj.access_token}`
          }
        }).then((respuesta) => {
          this.isLoading = !this.isLoading;
          console.log("Artist", respuesta);
          this.artists = respuesta.data;
        });
      },
      // guardarActualizacion: function (artist_id) {
      //   // Ocultamos nuestro formulario de actualizar
      //   this.formActualizar = false;
      //   // Actualizamos los datos
      //   this.artists[artist_id].bandName = this.bandName;
      //   this.artists[artist_id].email = this.email;
      //
      // },
    }
  }
</script>

<style lang="css">

  #admin{
    background-color: white;
  }

  .data{
    padding-top: 40px;
    padding-bottom: 50px;
  }
</style>
