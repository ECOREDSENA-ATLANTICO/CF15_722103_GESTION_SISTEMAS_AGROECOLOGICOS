<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 5
      h1 Medicamentos
    
    .row
      .col-md-7    
        .cajon-b.ajuste_cajon_b.color-acento-contenido.p-3.mb-5
          p.mb-0 Los medicamentos utilizados en la producción de especies pecuarias tienen importancia en el manejo y bienestar animal, pero siempre supervisado por un veterinario y bajo los parámetros técnicos de la norma. Por eso, a continuación, se describen las familias de los medicamentos utilizados de acuerdo a su función:
            |
            br
      .col-md-5 
        figure
          img.img-t(src='@/assets/curso/images/tema5/img_1.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-5.mt-3 
      .col-md-10
        .tabla-b.color-acento-contenido
          .tabla-b__header
            h4.mb-0 Medicamentos manejo pecuario
          table
            tr
              th Antiinflamatorios
              td Son esteroidales y se utilizan para rebajar la inflamación, los esteroides exógenos (son inyectables) reducen la capacidad del cuerpo para combatir la infección y desarrollar inmunidad. Se utilizan principalmente para problemas artríticos y de cojeras entre otros.
            tr
              th Hormonas
              td Por lo general son hormonas sintéticas que tienen efectos específicos sobre la actividad de otros órganos y muy utilizados para la actividad reproductiva de las especies.
            tr
              th Analgésicos
              td Son medicamentos que producen un estado de conciencia inalterada, con supresión del dolor y sin pérdida de la capacidad sensorial. Estos se encuentran en las familias de los narcóticos (Fentanil, Meperidina, Etorfina, Metadona, Propoxifeno, Pentazocina y Butorfanol) y no narcóticos (Salicilatos, Índoles, Oxicanos, Ácidos orgánicos, Paraaminofenoles y Pirazolonas).
            tr
              th Antihistamínicos
              td Son medicamentos que producen un estado de conciencia inalterada, con supresión del dolor y sin pérdida de la capacidad sensorial. Estos se encuentran en las familias de los narcóticos (Fentanil, Meperidina, Etorfina, Metadona, Propoxifeno, Pentazocina y Butorfanol) y no narcóticos (Salicilatos, Índoles, Oxicanos, Ácidos orgánicos, Paraaminofenoles y Pirazolonas) 
            tr
              th Antiparasitarios
              td Parásitos internos y se utilizan de acuerdo al tipo de parásito que afecten, en el caso de los antihelmínticos son sustancias que actúan contra los parásitos internos de los animales domésticos, pero hay otros que actúan controlando (Nemátodos/redondos), (cestodos o planos segmentados) y parásitos planos no segmentados (Tremátodos).
            tr
              th Antiparasitarios externos
              td Estos productos se utilizan para controlar moscas, garrapatas, nuches, son llamados insecticidas.
   
    .row.mb-4
      .col-auto
        img(src='@/assets/curso/images/tema5/img_7.svg' , alt='')
      .col-lg-6
        h3.mt-4(data-aos="fade-right") Equipos, instrumental e insumos
  
    .row.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        p Son elementos básicos y necesarios que se deben poseer en una explotación pecuaria y que varían de acuerdo a la actividad y especie animal. Inicialmente el formato de registro (información individual y colectiva de los animales con sus producciones o los EPP (Elementos de Protección Personal) son insumos primordiales dentro del manejo animal.
        .cajon.color-secundario.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.m-0 Otros insumos que cabe mencionar son el guardián colector y bolsa recolectora con sus respectivos colores de acuerdo con la reglamentación vigente el cual es importante para depositar materiales peligrosos. Una nevera portátil será de gran utilidad para el transporte de vacunas o muestras y jeringas desechables de acuerdo con su acción junto con un botiquín de primeros auxilios.
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema5/img_2.svg', alt='')
      

    .cajon.bg_color_acento_contenido.p-3.mb-5(data-aos="zoom-in-up")
      .row.justify-content-center.align-items-star.p-3
        .col-md-6
          figure
            img(src='@/assets/curso/images/tema5/img_3.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p.mb-4 Otros elementos básicos son los de realizar labores de mecánica, labranza y sujeción entendiendo que todos estos equipos e instrumentales estén en buen estado, desinfectados, limpios y que sean los apropiados para cada caso. 
          p.mb-4 Finalmente, los insumos dependen del área de alimentación en los que se debe tener por fuente de proteína u otro (cereales, soya) o los de otra área como la de producción agrícola en la cual tendremos como insumo los fertilizantes. Así mismo, habrá otras áreas como producción de acuerdo con el tipo de animal. Es importante que los productores de acuerdo con la proyección y la utilidad determinen la cantidad y utilidad del insumo.


  </template>

<script>
export default {
  name: 'Tema5',
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
