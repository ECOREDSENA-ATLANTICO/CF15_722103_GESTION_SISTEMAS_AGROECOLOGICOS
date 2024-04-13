<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Identificación animal

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .tarjeta.bg_grad-01.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star
            .col-md-6.mb-3.mb-md-0.p-4
              p.mb-3 
                span.text-bold Exteriorista: 
                | basada en caracteres visibles al exterior. Estos caracteres son de tipo:

              ol.lista-ol
                li 
                  span.text-bold a. Morfológico:
                  | características regionales de los animales
                li 
                  span.text-bold b. Fan
                  //- | Item lista ordenada 2
                li 
                  span.text-bold c. Eróptico:
                  | caracteres visibles de la piel y producciones dérmicas grosor y color (pelo, pluma, lana, pezuñas, cuernos, etc.)
                li 
                  span.text-bold d. Funcional:
                  | caracteres de aptitud que se aprecian a simple vista (genética) pero se manifiestan por la acción del medio ambiente por la acción de agentes (climáticos, alimenticios y patológicos)

            .col-lg-6.mb-0.mb-lg-6.mt-auto(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema2/img_1.svg', alt='Texto que describa la imagen')
                
    .row.justify-content-center.align-items-center
      .col-lg-5
        .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star.p-3
            .col-md-4.mb-4.mb-md-0
              p.mb-4 
                span.text-bold No exteriorista:  
                | genética y son propios e inalterables por los factores externos.

            .col-md-8
              figure
                img(src='@/assets/curso/images/tema2/img_6.svg', alt='Texto que describa la imagen')
        
      .col-lg-5
        .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star.p-3
            .col-md-4.mb-4.mb-md-0
              p.mb-4 
                span.text-bold No exteriorista:  
                | se determina a caracteres visibles como manchas, heridas o cicatrices.

            .col-md-8
              figure
                img(src='@/assets/curso/images/tema2/img_7.svg', alt='Texto que describa la imagen')
                
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .tarjeta.bg_grad-01.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star
            .col-md-6.mb-3.mb-md-0.p-4
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
    
    //- .row.justify-content-center.align-items-center.mb-0
    //-   .col-lg-10
    //-     .row.tarjeta.bg_grad-01.p-3.mb-3(data-aos="zoom-in-up")
    //-       //- .row.bg_grad-01
    //-       .col-lg-7.align-self-center.mb-4.mb-lg-0
    //-         //- .col-md-6.mb-4.mb-md-0
    //-         p.mb-4 
    //-           span.text-bold Artificial: 
    //-           | es la más utilizada y sobre la cual profundizamos dado que es una identificación que se realiza por medio de:

    //-         ul.lista-ul--color
    //-           li 
    //-             i.fas.fa-check.txt--green 
    //-             | Chapeta u orejera, microchips o collares. 
    //-           li 
    //-             i.fas.fa-check.txt--green 
    //-             | Señal Incisión o mutilación de la oreja 
    //-           li 
    //-             i.fas.fa-check.txt--green 
    //-             | Marca signo que permite identificar de manera colectiva o individual, generado con hierro caliente, nitrógeno frío, ácidos o tinta. 
        
    //-       .col-lg-5.mb-0.mb-lg-4(data-aos="fade-left")
    //-         figure
    //-           img(src='@/assets/curso/images/tema2/img_8.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 De acuerdo a lo anterior podemos clasificar las marcas con una señal para identificación pecuaria de forma grupal o individual.



    .row.justify-content-center.align-items-center.mb-0.p-md-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.h-100
            img.img-t.m-auto.w-50(src='@/assets/curso/images/tema2/img_10.svg', alt='')
          .tarjeta.color-primario.shadow-sm
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-2 Sistema de identificación en bovinos. 
                p.mb-2.text-small En la actualidad ya se realizan marcajes electrónicos por medio de implantes de microchips o collares y que debido a su alto costo son implementados en producciones intensivas el cual registra datos de producción y reproducción. Sin embargo, se puede detallar el marcaje de identificación a través del siguiente video.  
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Administrador-Paginas-Inicio.pdf')" target="_blank")
                  span Abrir
                  i.fas.fa-link


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
