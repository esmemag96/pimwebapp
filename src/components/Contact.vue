<template lang="html">
  <section id="contacto">
    <div class="d-xl-flex justify-content-xl-center align-items-xl-center" style="background-color: #510a32;height: 313px;">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p style="color: #ffffff;font-size: 60px;">FAQ</p>
            <p style="color: #ee4540;font-size: 25.5px;">Escribe aquí tu pregunta:</p>
            <form>
              <div class="d-flex align-items-xl-center"><input class="form-control" type="text" placeholder="Escribe aquí...">
                <i class="fa fa-search border-dark" style="background-color: #ee4540;height: 27px;width: 30px;padding-left: 7px;padding-top: 5px; border-radius: 13px;"></i>
              </div>
            </form>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </div>
    <div class="d-xl-flex align-items-xl-center" style="background-color: #ffffff;height: 566px;">
      <div class="tabsContainer">
        <div class="row">
          <div class="col-lg-12">
            <div>
              <b-card no-body>
                <h4 class="textoCategorias">Categorías</h4>
                <b-tabs pills card vertical nav-wrapper-class="w-25">
                  <b-tab title="¿Cómo funciona?" active>
                    <div role="tablist">
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion1 variant="info">¿En qué moneda se mostrarán mis transacciones?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">I start opened because <code>visible</code> is <code>true</code></p>
                            <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion2 variant="info">¿Cómo puedo ver mi historial de transacciones?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                          <b-card-body<p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion3 variant="info">¿Cómo puedo cambiar mi contraseña?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion4 variant="info">¿Cómo puedo cambiar mis detalles de pago?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion5 variant="info">¿Cúanto tiempo se rarda en obter una respuesta a un ticket de soporte?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion6 variant="info">¿Qué pasa si olvido mi contraseña?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion7 variant="info">¿Cúal es la cantidad mínima de dindero que puedo retirar de mi cuenta?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion7" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>
                  </b-tab>
                  <b-tab title="Subir tu música">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Id aliquet lectus proin nibh nisl condimentum id. Scelerisque purus semper eget duis. Eu sem integer vitae justo eget. Scelerisque varius morbi enim nunc faucibus. Sit amet consectetur adipiscing elit. Sed pulvinar proin gravida hendrerit lectus. Arcu odio ut sem nulla pharetra diam. Senectus et netus et malesuada fames ac. Nec ultrices dui sapien eget mi proin. Bibendum ut tristique et egestas quis ipsum. Mattis enim ut tellus elementum sagittis vitae. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.
                    </p>
                  </b-tab>
                  <b-tab title="Mi cuenta">
                    <div role="tablist">
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion1 variant="info">En qué moneda se mostrarán mis transacciones?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">I start opened because <code>visible</code> is <code>true</code></p>
                            <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion2 variant="info">¿Cómo puedo ver mi historial de transacciones?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                          <b-card-body<p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion3 variant="info">¿Cómo puedo cambiar mi contraseña?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion4 variant="info">¿Cómo puedo cambiar mis detalles de pago?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion5 variant="info">¿Cúanto tiempo se rarda en obter una respuesta a un ticket de soporte?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion6 variant="info">¿Qué pasa si olvido mi contraseña?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion7 variant="info">¿Cúal es la cantidad mínima de dindero que puedo retirar de mi cuenta?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion7" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p></b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>
                  </b-tab>
                  <b-tab title="Legal, licencias y derechos de autor">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. Elit ut aliquam purus sit amet luctus venenatis. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Lacus vestibulum sed arcu non odio euismod lacinia. Ac turpis egestas maecenas pharetra. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Cursus turpis massa tincidunt dui ut ornare lectus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Potenti nullam ac tortor vitae. At imperdiet dui accumsan sit amet nulla facilisi morbi. Id eu nisl nunc mi ipsum faucibus. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Tellus mauris a diam maecenas sed. Tristique nulla aliquet enim tortor. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Id velit ut tortor pretium viverra.
                    </p>
                  </b-tab>
                  <b-tab title="Servicios Youtube">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat. Gravida neque convallis a cras semper auctor. Metus aliquam eleifend mi in nulla posuere sollicitudin. Id velit ut tortor pretium. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Pellentesque habitant morbi tristique senectus et netus et. Non tellus orci ac auctor augue mauris augue neque. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Phasellus vestibulum lorem sed risus ultricies tristique nulla.
                    </p>
                  </b-tab>
                  <b-tab title="Preguntas Frecuentes">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat. Gravida neque convallis a cras semper auctor. Metus aliquam eleifend mi in nulla posuere sollicitudin. Id velit ut tortor pretium. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Pellentesque habitant morbi tristique senectus et netus et. Non tellus orci ac auctor augue mauris augue neque. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Phasellus vestibulum lorem sed risus ultricies tristique nulla.
                    </p>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-xl-center align-items-xl-center" style="background-color: #2d142c;height: 750px;">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex flex-column justify-content-start" style="background-color: transparent;height: inherit;width: 574px;">
            <p style="color: rgb(255,255,255);font-size: 28.5px;">¿No encuentras lo que<br>estás buscando?<br></p>
            <p style="color: rgb(255,255,255);font-size: 28.5px;">Envíanos una consulta&nbsp;<br>general:</p>
          </div>
          <div class="col-md-6">
            <form class="text-left">
              <p style="color: #ee4540;font-size: 25.5px;">Asunto</p><input class="form-control" type="text" placeholder="Escribe aqui...">
              <p style="color: #ee4540;font-size: 25.5px;">Tu email</p><input class="form-control" type="text" placeholder="Escribe aqui...">
              <p style="color: #ee4540;font-size: 25.5px;">Cúentanos, ¿Sobre qué tema necesitas <br>más información?</p><textarea class="form-control" placeholder="Escribe aquí..." style="height: 238px;"></textarea>
              <div class="text-center" style="width: inherit;margin-top: 31px;"><button class="btn btn-primary" type="button" id="button1" style="background-color: #ee4540;">Enviar</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="social-icons" style="background-color: #2d142c;padding-top: 58px;padding-bottom: 30px;"><a href="#"><i class="icon ion-social-twitter" style="background-color: #ee4540;color: rgb(255,255,255);"></i></a><a href="#"><i class="icon ion-social-facebook" style="background-color: #ee4540;color: rgb(255,255,255);"></i></a><a href="#"><i class="icon ion-social-snapchat" style="background-color: #ee4540;color: rgb(255,255,255);"></i></a>
      <a
      href="#"><i class="icon ion-social-youtube" style="background-color: #ee4540;color: rgb(255,255,255);"></i></a>
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
#contacto{
  font-family:Nexa-Regular;
}
.tabsContainer{
  margin:0;
  width: 100%;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
  color: #fff;
  background-color: #ff2e33;
}
.nav-item a{
  color: black;
  font-weight: 600;
}
.tabsContainer .card{
  border: none;
}
.btn-info a{
  color: #ff001f;
}
.btn-info {
  font-weight: 600;
  color: #ff001f;
  background-color: #f7f7f7;
  border-color: #f7f7f7;
}
.btn-info:hover {
  color: #840e43;
  text-decoration: underline;
  background-color: #f7f7f7;
  border-color: #f7f7f7;
}
.textoCategorias{
  color: #ff001f;
  margin-left: 20px;
}
.form-control{
  border-radius: 20px;
}
</style>
