<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 6
      h1 Tratamientos alternativos

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-2
        .bloque-texto-g.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema6/img_1.png')})`, 'width': '100%', 'height':'249px'}"
          )
      .col-lg-9.mb-5
        .bloque-texto-g__texto.p-4.jumbotron-16(
          :style="{'top': '55px', 'position': 'relative', 'width':'100%'}"
        )
          p.mb-0.text-white Los tratamientos utilizados en las producciones pecuarias son implementados como una alternativa de manejo animal y/o minimizar gastos de producción. Encontrando:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .col-lg-12
          .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema6/img_2.svg', alt='')
              .tarjeta.tarjeta.color_secundario_tarjetas.shadow-sm
                .p-4
                  p.text-small
                    span.text-bold La homeopatía 
                    | es una medicina alternativa que ha cogido auge en los países desarrollados y ahora es tomado en cuenta por países como Colombia. Es una práctica terapéutica que armoniza algunos extractos de plantas del entorno para sanar el animal.
        
        .col-lg-12
          .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema6/img_3.svg', alt='')
              .tarjeta.tarjeta.color_secundario_tarjetas.shadow-sm
                .p-4
                  p.text-small De igual manera, 
                    span.text-bold la acupuntura 
                    | es un método que se realiza mediante la utilización de agujas beneficiosas y cuyo objetivo es la postura de agujas en el sitio de la dolencia.
        
        .col-lg-12
          .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema6/img_4.svg', alt='')
              .tarjeta.tarjeta.color_secundario_tarjetas.shadow-sm
                .p-4
                  p.text-small De igual manera, 
                    span.text-bold la acupuntura 
                    | es un método que se realiza mediante la utilización de agujas beneficiosas y cuyo objetivo es la postura de agujas en el sitio de la dolencia.
        
        .col-lg-12
          .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema6/img_5.svg', alt='')
              .tarjeta.tarjeta.color_secundario_tarjetas.shadow-sm
                .p-4
                  p.text-small De igual manera, 
                    span.text-bold la acupuntura 
                    | es un método que se realiza mediante la utilización de agujas beneficiosas y cuyo objetivo es la postura de agujas en el sitio de la dolencia.
        
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4.
          span  Tratamientos alternativos de producción pecuaria 
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema6/img_6.svg', alt='')
          figcaption 
            p
              span.text-bold Nota. 
              | Son tratamientos utilizados para animales más felices y más sano que conllevan a una mejor producción.
    
  </template>

<script>
export default {
  name: 'Tema6',
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
