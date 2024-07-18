<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
  
    .row.justify-content-center.align-items-center.fondo.mb-3
      .col-lg-12(data-aos="fade-right")
        p.mb-3 Le damos la bienvenida al componente formativo denominado “Labores de manejo en la producción pecuaria”, en el cual, se desarrollan temáticas sobre el proceso de manipulación de los animales para su desplazamiento mediante el estudio de la etología y comportamiento animal, la cual nos va brindar un conocimiento de la manera ideal para el manejo dentro y fuera de la explotación con el fin de incrementar la producción y por ende la rentabilidad. Comencemos con la siguiente información:  
      figure.mb-5(data-aos="fade-right")
        .video
          <iframe width="853" height="480" src="https://www.youtube.com/embed/Qqj8MZTtYH8" title="Labores de manejo en la producción pecuaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
