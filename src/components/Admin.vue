<template lang="html">
  <div id="admin" class="container">
    <!-- Formulario para añadir artists -->
    <section class="form">
      <form action="" class="text-center">
        <input v-model="nombre" @keyup.enter="crearartist" type="text" class="form-control" placeholder="Nombre">
        <input v-model="edad" @keyup.enter="crearartist" type="number" name="edad" placeholder="Edad" class="form-control">
        <!-- Botón para añadir -->
        <input @click="crearartist" type="button" value="Añadir" class="btn btn-success">
      </form>
    </section>
    <!-- Tabla donde se muestran los datos -->
    <section class="data">
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
          <tr v-for="(artist, index) in artists">
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
      <b-modal id="modal-scrollable" scrollable title="Scrollable Content" v-model="modalShow">
        <div class="artistData">
          <label>ID</label>
          <span>{{ idActualizar }}</span><br>
          <label> Nombre Banda</label>
          <input v-model="nameUpdate" type="text" class="form-control">
          <label>Email</label>
          <input v-model="mailUpdate" type="text" class="form-control">
          <label> Completeness</label>
          <input v-model="completenessUpdate" type="text" class="form-control">
          <label> Conciertos por año</label>
          <input v-model="concertsUpdate" type="text" class="form-control">
          <label> Costo por presentación</label>
          <input v-model="costPerPresentationUpdate" type="text" class="form-control">
          <label> Fecha creado</label>
          <input v-model="dateCreated" type="text" class="form-control">
          <label> Fecha editado</label>
          <input v-model="dateModified" type="text" class="form-control">
          <label> Facebook followers</label>
          <input v-model="facebookFollowersUpdate" type="text" class="form-control">
          <label>Tiene spotify</label>
          <input v-model="hasSpotify" type="text" class="form-control">
          <label> Conciertos Internacionales</label>
          <input v-model="internationalConcertsUpdate" type="text" class="form-control">
          <input v-model="concertPlaces" type="text" class="form-control">
          <label>Presskit</label>
          <input v-model="presskitUpdate" type="text" class="form-control">
          <label> Review </label>
          <input v-model="reviewUpdate" type="text" class="form-control">
          <label> Shandraw</label>
          <input v-model="shandraw" type="text" class="form-control">
          <label>Social Media Follow Up</label>
          <input v-model="socialMediaFollowUpUpdate" type="text" class="form-control">
          <label>Status</label>
          <input v-model="statusUpdate" type="text" class="form-control">
          <label>Step 1</label>
          <input v-model="step1Update" type="text" class="form-control">
          <label>Step 2</label>
          <input v-model="step2Update" type="text" class="form-control">
          <label>Step 3</label>
          <input v-model="step3Update" type="text" class="form-control">
          <label>Studio Video</label>
          <input v-model="studioVideoUpdate" type="text" class="form-control">
          <label>Sublevel</label>
          <input v-model="sublevelUpdate" type="text" class="form-control">
          <label>Trayectory</label>
          <input v-model="trayectoryUpdate" type="text" class="form-control">
          <label>Youtube Video</label>
          <input v-model="youtubeVideoUpdate" type="text" class="form-control">
        </div>
      </b-modal>
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
      nombre: '',
      edad: '',
      formActualizar: false,
      idActualizar: -1,
      nameUpdate: '',
      mailUpdate: '',
      completenessUpdate:'',
      concertsUpdate:'',
      costPerPresentationUpdate:'',
      facebookFollowersUpdate:'',
      internationalConcertsUpdate:'',
      presskitUpdate:'',
      reviewUpdate:'',
      socialMediaFollowUpUpdate:'',
      statusUpdate:'',
      step1Update:'',
      step2Update:'',
      step3Update:'',
      studioVideoUpdate:'',
      sublevelUpdate:'',
      trayectoryUpdate:'',
      youtubeVideoUpdate:'',
      dateCreated:'',
      dateModified:'',
      shandraw:'',
      hasSpotify:'',
      concertPlaces:'',
      artists: [],
      modalShow: false
    }
  },
  beforeRouteEnter(to, from, next) {
    oauth.getToken().then((obj) =>{
      return apiService.get({
        url: `https://proindiemusic-backend.mybluemix.net/api/v1/artist`,
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${obj.access_token}`
        }
      }).then((respuesta) => {
        next(vm => {vm.setData(respuesta)})
      });
    });
  },
  methods: {
    crearartist: function () {
      // Anyadimos a nuestra lista
      this.artists.push({
        uuid: + new Date(),
        bandName: this.nombre,
        email: this.edad
      });
      // Vaciamos el formulario de añadir
      this.nombre = '';
      this.edad = '';
    },
    verFormActualizar: function (artist_id) {
      // Antes de mostrar el formulario de actualizar, rellenamos sus campos
      this.idActualizar = artist_id;
      this.nameUpdate = this.artists[artist_id].bandName;
      this.mailUpdate = this.artists[artist_id].email;
      this.completenessUpdate=this.artists[artist_id].completeness;
      this.concertsUpdate=this.artists[artist_id].concertsPerYear;
      this.costPerPresentationUpdate=this.artists[artist_id].costPerPresentation;
      this.facebookFollowersUpdate=this.artists[artist_id].facebookFollowers;
      this.internationalConcertsUpdate=this.artists[artist_id].internationalConcerts;
      this.presskitUpdate=this.artists[artist_id].pressKit;
      this.reviewUpdate=this.artists[artist_id].review;
      this.socialMediaFollowUpUpdate=this.artists[artist_id].socialMediaFollowUp;
      this.statusUpdate=this.artists[artist_id].status;
      this.step1Update=this.artists[artist_id].step1;
      this.step2Update=this.artists[artist_id].step2;
      this.step3Update=this.artists[artist_id].step3;
      this.studioVideoUpdate=this.artists[artist_id].studioVideo;
      this.sublevelUpdate=this.artists[artist_id].sublevel;
      this.trayectoryUpdate=this.artists[artist_id].trayectory;
      this.youtubeVideoUpdate=this.artists[artist_id].youtubeMustViewVideo;
      this.dateCreated=this.artists[artist_id].dateCreated;
      this.dateModified=this.artists[artist_id].dateModified;
      this.shandraw=this.artists[artist_id].shandraw;
      this.hasSpotify=this.artists[artist_id].hasSpotify;
      this.concertPlaces=this.artists[artist_id].places;

      this.formActualizar = true;
    },
    borrarartist: function (index, uuid) {
      oauth.getToken().then((obj) =>{
        return apiService.get({
          url: `https://proindiemusic-backend.mybluemix.net/api/v1/artist/${uuid}`,
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${obj.access_token}`
          }
        }).then((respuesta) => {
          this.artists.splice(index, 1);
          console.log("Borre",respuesta)
        });
      });

    },
    setData(respuesta) {
      console.log("Artist", respuesta);
      this.artists = respuesta.data;
    },
    // guardarActualizacion: function (artist_id) {
    //   // Ocultamos nuestro formulario de actualizar
    //   this.formActualizar = false;
    //   // Actualizamos los datos
    //   this.artists[artist_id].bandName = this.nameUpdate;
    //   this.artists[artist_id].email = this.mailUpdate;
    //
    // },
  }
}
</script>

<style lang="css">

#admin{
  padding-top: 7em;
}
</style>
