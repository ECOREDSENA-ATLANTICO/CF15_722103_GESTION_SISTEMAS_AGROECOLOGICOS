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

    Separador

    #t_2_1.titulo-segundo
      .h2 2.1  Tipo, limpieza, calibración y mantenimiento
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
        p.mb-3 El alistamiento del proceso de siembra, involucra la revisión de la maquinaria, con el fin de que se cumpla con las condiciones óptimas que permitan que el proceso se desarrolle de manera exitosa y no afecte el rendimiento del cultivo. Por eso la calibración, mantenimiento y limpieza de la maquinaria son actividades claves 
        
        .jumbotron-10.p-3.mb-3
          p.mb-0 El mantenimiento se haga antes de guardar las máquinas. 
        
        .jumbotron-11.p-3.mb-3
          p.mb-0 La calibración antes de usarlas. 

        .jumbotron-12.p-3
          p.mb-0 La limpieza es importante realizarla antes y después de utilizarlos, teniendo en cuenta que pueden estar sin utilizar por grandes periodos de tiempo.
          
      .col-7.col-lg-6(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema2/img_4.png'  alt='')

    p.mb-3 Las actividades de calibración son indispensables para lograr densidades de siembra y tasas de fertilización esperadas, pues no hacerlo puede acarrear menor rendimiento del cultivo y esto se traduce en menores ingresos para el agricultor, por ejemplo al calibrar la sembradora, permitirá determinar la cantidad de semilla por área de terreno y así mismo la distancia y profundidad de siembra, evitan competición por nutrientes, suelo, agua, luz y además condiciones óptimas de humedad, garantizando su germinación.

   
    .row.justify-content-center.align-items-star.my-5
      .col-lg-10
        .jumbotron-13.p-1(data-aos="fade-left") 
          .row.justify-content-around.align-items-center.p-2
            .col-lg-2.col-6.d-flex.justify-content-center
              img.mt-2(src='@/assets/curso/images/tema2/ico_2.svg',  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
            .col-lg-10
              p.mb-0 No calibrar los equipos y máquinas generaría alteración en volúmenes de fertilizantes o lo que puede alterar el correcto desarrollo del cultivo.

    p.mb-3 Los procesos agrícolas requieren de acciones puntuales que obedecen a diferentes condiciones, por lo que la limpieza, calibración y mantenimiento de la maquinaria, equipos y herramientas, obedecen al tipo de cultivo, tipo de semilla, temporada de siembra y condiciones climáticas. Todo esto con el fin de optimizar el proceso y obtener grandes resultados.

    Separador

    #t_2_2.titulo-segundo
      .h2 2.2  Cronogramas y formatos

    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
        p.mb-3 La planeación, implica la determinación de lo que se quiere realizar, incluyendo las decisiones de gran importancia dentro del proceso, como el establecimiento de objetivos, programas, definición de técnicas, métodos, procedimientos y demás prioridades dentro del proceso, para este caso la siembra. Por lo cual es importante identificar las acciones a desarrollar a través de una secuencia lógica y ordenada que permita obtener resultados exitosos.

        p.mb-0 El cronograma de siembra permite establecer una guía de las temporadas del año y las condiciones de siembra en cada una, con el fin de poder establecer un alto porcentaje de crecimiento y desarrollo del cultivo, teniendo en cuenta:
        
      .col-7.col-lg-6(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema2/img_5.svg'  alt='')

    .row.justify-content-center.mb-3
      .col-sm-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-6.lg-0
              img(src='@/assets/curso/images/tema2/ico_3.svg' alt='AvatarTop')
            .col-9.col-lg-6.lg-0.text-center.ps-0
              p.mb-0 Tipo de semilla
              
      .col-sm-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-6.lg-0
              img(src='@/assets/curso/images/tema2/ico_4.svg' alt='AvatarTop')
            .col-9.col-lg-6.lg-0.text-center.ps-0
              p.mb-0 Periodo de siembra

      .col-sm-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-5.lg-0.ps-0
              img(src='@/assets/curso/images/tema2/ico_5.svg' alt='AvatarTop')
            .col-9.col-lg-6.lg-0.text-center.ps-0
              p.mb-0 Preparación del terreno

      .col-sm-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-6.lg-0
              img(src='@/assets/curso/images/tema2/ico_6.svg' alt='AvatarTop')
            .col-9.col-lg-6.lg-0.text-center.ps-0
              p.mb-0 Plazo de trasplante

      .col-sm-6.col-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-6.lg-0
              img(src='@/assets/curso/images/tema2/ico_7.svg' alt='AvatarTop')
            .col-9.col-lg-6.lg-0.text-center.ps-0
              p.mb-0 Distancia de los surcos
    .row.justify-content-center.mb-3
      .col-sm-6.col-lg-2.mb-3.mb-lg-0.mt-3(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-6.lg-0
              img(src='@/assets/curso/images/tema2/ico_8.svg' alt='AvatarTop')
            .col-9.col-lg-6.lg-0.text-center.ps-0
              p.mb-0 Distancia de las plantas

      .col-sm-6.col-lg-2.mb-3.mb-lg-0.mt-3(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-5.lg-0
              img.m-left(src='@/assets/curso/images/tema2/ico_9.svg' alt='AvatarTop')
            .col-9.col-lg-6.lg-0.text-center.ps-0
              p.m-left.mb-0 Fertilización

      .col-sm-6.col-lg-2.mb-3.mb-lg-0.mt-3(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-5.lg-0
              img.m-left(src='@/assets/curso/images/tema2/ico_10.svg' alt='AvatarTop')
            .col-9.col-lg-7.lg-0.text-center.ps-0
              p.m-left.mb-0 Abonamiento

      .col-sm-6.col-lg-2.mb-3.mb-lg-0.mt-3(data-aos="fade-right")
        .jumbotron-9.p-2.mb-1.h-100
          .row.justify-content-center.align-items-center
            .col-4.col-lg-5.lg-0
              img(src='@/assets/curso/images/tema2/ico_11.svg' alt='AvatarTop')
            .col-9.col-lg-7.lg-0.text-center.ps-0
              p.mb-0 Recogida

    p.mb-0 El productor debe llevar un registro organizado de las actividades desarrolladas, por eso es indispensable el diseño de los formatos que permitan plasmar la información recolectada, la cual debe estar disponible en físico y sistematizada con fines de tecnificar el proceso, y a su vez evitar retrasos en la ejecución de las actividades, que pueda generar un desequilibrio y pérdidas productivas. Por lo cual resulta indispensable planear perfectamente el proceso con el fin de reducir al máximo los posibles contratiempos y lograr que el proceso se realice de manera eficiente y eficaz. 

     






















































































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
