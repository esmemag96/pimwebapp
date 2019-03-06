<!--suppress ALL -->
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
                  <b-tab title="Información General" active>
                    <div role="tablist">
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion1 variant="info">¿Que es Pro Indie Music?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">Pro Indie Music es un una plataforma digital que ayuda a los artistas a crecer en la industria musical conectando con festivales, venues y mercados a nivel nacional e internacional. Además, evaluamos, incubamos y desarrollamos artistas independientes de forma automatizada en distintos niveles mediante el uso de inteligencia artificial.</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion2 variant="info">¿Que hace Pro Indie Music por mi banda?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                          <b-card-body> <p class="card-text">Evalúa el nivel en el que se encuentra - Pro Indie Music cuenta con 16 niveles de crecimiento. Brinda un plan de actividades designadas diseñadas para generar un crecimiento constante y una vez que alcanzas el nivel  3, puedes formar parte de nuestra comunidad SM, donde encontrarás oportunidades en venues a nivel nacional, festivales nacionales e internacionales, convocatorias federales y mercados internacionales para la exponencial lización de tu proyecto.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion3 variant="info">¿Tiene un costo formar parte de la plataforma?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Ser parte del sistema Pro Indie Music no tiene ningún costo. Sin embargo una vez que alcanzas el nivel 3 y tienes la oportunidad de formar parte de la comunidad SM se paga una mensualidad de 20 USD.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion4 variant="info">¿Cuál es la forma de pago?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Puedes pagar tu mensualidad con pago recurrente con tarjeta de crédito y débito, paypal, transferencia bancaria , depósito en tiendas OXXO</p></b-card-body>
                        </b-collapse>
                      </b-card>
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion5 variant="info">¿Cobran alguna comisión por concierto?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Pro Indie Music cobra una comisión del 15% por concierto o festival , siempre y cuando el pago sea igual o mayor a $6,000. Es responsabilidad del artista dar esta comisión a un miembro designado de Pro Indie Music o depositarlo.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion6 variant="info">¿Puedo salirme del programa?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Lamentamos escuchar esto, pero sí. En tu perfil de usuario puedes seleccionar configuración- Eliminar artista. Automáticamente quedas fuera del sistema y ya no medimos tu desarrollo como artista ni formas parte de nuestra base de datos.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                    </div>
                  </b-tab>

                  <b-tab title="¿Cómo funciona?">
                    <div role="tablist">

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion1 variant="info">¿Quién garantiza que mi evaluación es válida?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Las evaluaciones  que determina Pro Indie Music están basadas en variables reales de problemas y soluciones de artistas en la industria musical. Han sido probadas en más de 600 artistas y valoradas por managers, agencias, festivales y personalidades  en la industria musical tanto en México como en el mundo.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion3 variant="info">¿Pro Indie Music está avalado por alguna institución en la industria musical?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Pro Indie Music está basado en una investigación de 4 años respecto al comportamiento de los artistas en la industria musical. Además cuenta con la validación de la IMMF (International Managers Music Forum), SXSW, Austin Music Comission, Universidad de Guadalajara, SAE, FIMPRO, MAPAS, APAP y OCESA</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1"> 
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion4 variant="info">¿Que es la automatización de actividades?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">La automatización de actividades es un sistema diseñado para asignar actividades específicas dependiendo el resultado del  nivel del artista en la evaluación. Es un programa de 6 actividades por nivel necesarias para el crecimiento de una banda en la industria musical y aplica para cualquier miembro del mundo.</p>
                          </b-card-body>
                        </b-collapse>

                        
                      </b-card>
                    </div>
                  </b-tab>
                  
                  <b-tab title="Booking & Management">
                    <div role="tablist">

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion1 variant="info">¿Pro indie Music es una agencia  de booking & Management?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">Nosotros no somos una agencia de management o booking, somos una herramienta digital para la exponencial lización de artistas. Si ustedes tienen su management es perfecto, así sus posibilidades se triplican por que el tiene un plan de trabajo claro para su desarrollo, sin embargo nuestro sistema esta diseñado para resolver cualquier  problema o inquietud respecto al management y booking</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion2 variant="info">¿Pro Indie Music puede ser mi manager?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">En Pro Indie Music contamos con managers profesionales listos para ayudarte siempre y cuando tu  nivel  en el sistema sea Nivel 8. Si es así en tu dashboard de artista aparecerá la opción Necesito un manager, solo debes dar click y el sistema te seleccionará un manager ideal para tu proyecto.</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion3 variant="info">¿Como puedo acceder a los festivales y oportunidades de la plataforma?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">Es necesario ser nivel 3 y ser parte de la comunidad SM , además de pagar tu mensualidad correspondiente</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion4 variant="info">¿Puedo acceder a una lista de los festivales que puedo aplicar?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">En tu dashborad de artista, debes seleccionar Oportunidades, ahí aparecerán los festivales y eventos recomendados para ti.</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion5 variant="info">¿Como puedo buscar eventos para mi banda?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">Una vez que eres nivel 3 y realizas el pago de tu mensualidad, en tu dashboard  seleccionas el ícono Oportunidades - Venues - Ciudad - Quiero tocar .  Es importante que leas las condiciones de cada venue y des click en Aceptar condiciones. Una vez dado click se mandará tu solicitud y si el venue está interesado  se te notificará en tu dashboard. Además en la esquina superior derecha podrás encontrar la pestaña Recomendaciones , donde PROM nuestro sistema automatizado te notificara las actividades que debes realizar en ese momento en tu proyecto.</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                    </div>
                  </b-tab>
                  
                  <b-tab title="Atención al Cliente">
                    <div role="tablist">
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion1 variant="info">¿Hay manera de saltarse actividades designadas por el sistema?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">Entre el nivel 1 y 3 cada una de las actividades son obligatorias, a partir del nivel 4 puedes elegir si tomar las Recomendaciones o seleccionas manualmente las ciudades y venues en las que te quieres presentar. Los festivales únicamente aparecerán en la pestaña de recomendaciones. Toma en cuenta que el sistema detectará si no hay un crecimiento en tu proyecto y mandará una Notificación de Alerta para continuar con el programa designado. En caso de que no quieras avanzar puedes seleccionar en tu dashborad Tomar descanso y automáticamente se desactivarán las recomendaciones.</p>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion2 variant="info">¿Si selecciono Tomar Descanso, después de un tiempo puedo volver a activar el sistema de recomendaciones?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                          <b-card-body> <p class="card-text">sí, únicamente entras con tu usuario y contraseña y desde tu dashboard seleccionas nuevamente Tomar descanso  y se va a de-seleccionar y tu sistema de recomendaciones se activará automáticamente.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion3 variant="info">¿Que pasa si no realizo la actividad que se me designó?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">No podrás continuar al siguiente nivel y después de 1 mes te mandará una Notificación de Alerta</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion4 variant="info">¿Puedo interactuar con otras bandas de la plataforma?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Si, solo te vas a la pestaña de Artistas, seleccionas el nombre,  género, país, ciudad y nivel y te aparecerá el artista que buscas. Acerca el mouse a la imagen, da doble click y selecciona el ícono de mensaje. Se abrirá un chat donde podrás tener comunicación con otros miembros de la plataforma.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion5 variant="info">No puedo ingresar a mi perfil</b-button>
                        </b-card-header>
                        <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">No te preocupes, únicamente en tu pantalla de inicio de sesión selecciona Cambiar contraseña, deberás poner tu correo y te llegará una notificación para cambiar tu contraseña y puedas entrar a tu perfil.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion8 variant="info">¿Qué beneficios obtengo como artista al formar parte de Pro Indie Music?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion8" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Evaluación en la industria musical, plan de actividades automatizadas, acceso a más de 800 oportunidades en festivales, venues, mercados y convenios exclusivos de Pro Indie Music.</p></b-card-body>
                        </b-collapse>
                      </b-card>
                      

                    </div>
                  </b-tab>

                  <b-tab title="Plan Premium">
                    <div role="tablist">

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion1 variant="info">¿Que pasa si no realizo mi pago mensual?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Si no realizas tu pago , tendrás una prorroga de 5 días, pasados los 5 días tu cuenta se bloqueará y te mandará un correo con información para realizar el pago correspondiente. Si no realizas tu pago en los siguientes 30 días, la plataforma borrará tu perfil Premium y pasarás automáticamente a Pro indie Music Emergente.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion2 variant="info">¿Puedo pagar meses por adelantado?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">Si. Puedes seleccionar si quieres que tu pago recurrente sea cada 3, 6 o 12 meses con precio preferencial.</p></b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1"> 
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion3 variant="info">¿Que diferencia hay ser parte de Pro Indie Music Emergente  y Pro Indie Music SM?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <p class="card-text">Pro Indie Music Emergente es únicamente para tener los elementos básicos (Research Goals) para tu proyecto. Las oportunidades en festivales, venues y mercados a nivel mundial se otorgan en Pro Indie Music SM. Además de tener el sistema de recomendaciones y acciones automatizadas y tener un control de tu crecimiento y proyección en la industria musical.</p>
                          </b-card-body>
                        </b-collapse>
                        
                      </b-card>

                       <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block href="#" v-b-toggle.accordion4 variant="info">¿Que pasa si cuando llego al nivel 3 no quiero formar parte del plan Premium?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                          <b-card-body><p class="card-text">No podrás acceder a oportunidades en festivales, venues, mercados y servicios exclusivos.</p></b-card-body>
                        </b-collapse>
                      </b-card>


                    </div>
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
