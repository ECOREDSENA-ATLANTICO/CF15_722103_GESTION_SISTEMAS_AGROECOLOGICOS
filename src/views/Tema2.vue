<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Identificación animal

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4
        .bloque-texto-g.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_2.png')})`, 'width': '100%', 'height':'249px'}"
          )
      .col-lg-9.mb-5
        .bloque-texto-g__texto.p-4.jumbotron-14(
          :style="{'top': '55px', 'position': 'relative', 'width':'100%'}"
        )
          p.mb-0 En toda explotación pecuaria, los animales han de ser identificados según su producción y cuya función es saber los rasgos, caracteres y signos de las razas implementadas categorizadas de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .tarjeta.bg_grad-01.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star
            .col-md-6.mb-md-0.p-5.mt-0
              p.mb-3.text-small 
                span.text-bold Exteriorista: 
                | basada en caracteres visibles al exterior. Estos caracteres son de tipo:

              ol.lista-ol
                li.text-small 
                  span.text-bold a. Morfológico:
                  | características regionales de los animales
                li.text-small 
                  span.text-bold b. Fan
                li.text-small 
                  span.text-bold c. Eróptico:
                  | caracteres visibles de la piel y producciones dérmicas grosor y color (pelo, pluma, lana, pezuñas, cuernos, etc.)
                li.text-small 
                  span.text-bold d. Funcional:
                  | caracteres de aptitud que se aprecian a simple vista (genética) pero se manifiestan por la acción del medio ambiente por la acción de agentes (climáticos, alimenticios y patológicos)

            .col-lg-6.mb-lg-6.mt-auto(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema2/img_1.svg', alt='Texto que describa la imagen')
                
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        .tarjeta.bg_grad-01.p-3.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star.p-3
            .col-md-4.mb-3.mb-md-0
              p.mb-4 
                span.text-bold No exteriorista:  
                | genética y son propios e inalterables por los factores externos.

            .col-md-8
              figure
                img(src='@/assets/curso/images/tema2/img_6.svg', alt='Texto que describa la imagen')
        
      .col-lg-5
        .tarjeta.bg_grad-01.p-3.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star.p-3
            .col-md-4.mb-3.mb-md-0
              p.mb-4 
                span.text-bold Adquirida:  
                | se determina a caracteres visibles como manchas, heridas o cicatrices.

            .col-md-8
              figure
                img(src='@/assets/curso/images/tema2/img_7.svg', alt='Texto que describa la imagen')
                
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .tarjeta.bg_grad-01.mb-5(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star
            .col-md-6.mb-3.mb-md-0.p-5
              p.mb-3 
                span.text-bold Artificial: 
                | es la más utilizada y sobre la cual profundizamos dado que es una identificación que se realiza por medio de:

              ul.lista-ul--color
                li 
                  i.fas.fa-check.txt--green 
                  | Chapeta u orejera, microchips o collares. 
                li 
                  i.fas.fa-check.txt--green 
                  | Señal Incisión o mutilación de la oreja 
                li 
                  i.fas.fa-check.txt--green 
                  | Marca signo que permite identificar de manera colectiva o individual, generado con hierro caliente, nitrógeno frío, ácidos o tinta. 
        
            
            .col-lg-6.mb-0.mb-lg-6.mt-auto(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema2/img_8.svg', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 De acuerdo a lo anterior podemos clasificar las marcas con una señal para identificación pecuaria de forma grupal o individual.

    SlyderF(columnas="col-lg-6 col-xl-3").mb-5
      .tarjeta.jumbotron 
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/images/tema2/img_11.png' alt='AvatarTop')
        p.p-4 
          span.text-bold Lesión 
          br 
          | Pérdida de sustancia (amputaciones) o sin pérdida (tatuajes) 

      .tarjeta.jumbotron 
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/images/tema2/img_12.png' alt='AvatarTop')
        p.p-4 
          span.text-bold Extensión 
          br 
          | Marca ganadera (pertenencia).  

      .tarjeta.jumbotron 
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/images/tema2/img_13.png' alt='AvatarTop')
        p.p-4 
          span.text-bold Duración 
          br 
          | Temporales (duran meses o años) o permanentes (toda la vida del animal). 

      .tarjeta.jumbotron 
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/images/tema2/img_14.png' alt='AvatarTop')
        p.p-4 
          span.text-bold Alteración 
          br 
          | Delebles (se borran) o indelebles (permanente). 

      .tarjeta.jumbotron 
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/images/tema2/img_15.png' alt='AvatarTop')
        p.p-4 
          span.text-bold Naturaleza o método 
          br 
          | Quemadura en la piel por hierro en caliente, frío o ácidos. 

    .row.justify-content-center.align-items-center.mb-0.p-md-3
      .col-md-10
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema2/img_10.svg', alt='')
          .tarjeta.color-primario.shadow-sm
            .row.justify-content-center.align-items-center.mb-0.p-md-3
              .col-md-10.mb-3.mb-sm-0
                h3.p-4.mb-0 Sistema de identificación en bovinos.
                p.p-4.mb-0 En la actualidad ya se realizan marcajes electrónicos por medio de implantes de microchips o collares y que debido a su alto costo son implementados en producciones intensivas el cual registra datos de producción y reproducción. Sin embargo, se puede detallar el marcaje de identificación a través del siguiente video. 
              .col-md-2
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Administrador-Paginas-Inicio.pdf')" target="_blank")
                  span.text-dark Abrir
                  i.text-dark.fas.fa-link

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
