<template lang="html">
  <footer class="piedepagina py-1" role="contentinfo">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">
          <p>2019 © Pro Indie Music Todos los derechos reservados</p>
          <ul class="redes-sociales">
            <li><a href="https://www.facebook.com/proindiemusic/"><i class="fab fa-facebook-f"></i>  </a></li>
            <li><a href="https://twitter.com/proindiemusicmx?lang=en"><i class="fab fa-twitter"></i> </a></li>
          </ul></b-col>
        <b-col><router-link :to="{ name: 'admin', params: {} }">Administrador</router-link></b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css">
.piedepagina{
  padding-top: 5em;
}
</style>
