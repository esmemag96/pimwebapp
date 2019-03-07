<template lang="html">
  <div id="appartists" class="container">
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
                          <th scope="col">ID</th>
                          <th scope="col">Nombre banda</th>
                          <th scope="col">Email</th>
                          <th scope="col">Level</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(artist, index) in artists">
                          <td>{{ artist.id }}</td>
                          <td>
                              <!-- <span v-if="formActualizar && idActualizar == index">
                                  <input v-model="nombreActualizar" type="text" class="form-control">
                              </span> -->
                              <span>
                                  <!-- Dato nombre -->
                                  {{ artist.nombre }}
                              </span>
                          </td>
                          <td>
                              <!-- <span v-if="formActualizar && idActualizar == index">
                                  <input v-model="edadActualizar" type="text" class="form-control">
                              </span> -->
                              <span>
                                  <!-- Dato edad -->
                                  {{ artist.edad }}
                              </span>
                          </td>
                          <td>
                              <!-- Botón para guardar la información actualizada -->
                              <!-- <span v-if="formActualizar && idActualizar == index">
                                  <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                              </span> -->
                              <span>
                                  <!-- Botón para mostrar el formulario de actualizar -->
                                  <button @click="modalShow = !modalShow; verFormActualizar(index)" class="btn btn-warning">Actualizar</button>
                                  <!-- Update Modal -->
                                  <b-modal v-model="modalShow">Hello From Modal!
                                    <div class="artistData">
                                      <label>ID</label>
                                      <span>{{ idActualizar }}</span><br>

                                      <label>{{ nombreActualizar }}</label>
                                      <input v-model="nombreActualizar" type="text" class="form-control">

                                      <label>{{ nombreActualizar }}</label>
                                      <input v-model="nombreActualizar" type="text" class="form-control">

                                    </div>
                                  </b-modal>
                                  <!-- <button @click="verFormActualizar(index)" class="btn btn-warning">Actualizar</button> -->
                                  <!-- Botón para borrar -->
                                  <button @click="borrarartist(index)" class="btn btn-danger">Borrar</button>
                              </span>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </section>
      </div>
</template>

<script>
export default {
    data(){
      return{
        nombre: '',
        edad: '',
        // Ver o no ver el formulario de actualizar
        formActualizar: false,
        // La posición de tu lista donde te gustaría actualizar
        idActualizar: -1,
        // Input nombre dentro del formulario de actualizar
        nombreActualizar: '',
        // Input edad dentro del formulario de actualizar
        edadActualizar: '',
        // Lista de artists
        artists: [],
        modalShow: false
      }
    },
    methods: {
        crearartist: function () {
            // Anyadimos a nuestra lista
            this.artists.push({
                id: + new Date(),
                nombre: this.nombre,
                edad: this.edad
            });
            // Vaciamos el formulario de añadir
            this.nombre = '';
            this.edad = '';
        },
        verFormActualizar: function (artist_id) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            this.idActualizar = artist_id;
            this.nombreActualizar = this.artists[artist_id].nombre;
            this.edadActualizar = this.artists[artist_id].edad;
            // Mostramos el formulario
            this.formActualizar = true;
        },
        borrarartist: function (artist_id) {
            // Borramos de la lista
            this.artists.splice(artist_id, 1);
        },
        guardarActualizacion: function (artist_id) {
            // Ocultamos nuestro formulario de actualizar
            this.formActualizar = false;
            // Actualizamos los datos
            this.artists[artist_id].nombre = this.nombreActualizar;
            this.artists[artist_id].edad = this.edadActualizar;
        }
    }


}
</script>

<style lang="css">
</style>
