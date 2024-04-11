<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Labores de manejo animal por especie
      
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12
        p.mb-3 Las labores de manejo son las actividades que se realizan para sujetar, inmovilizar, derribar, transportar, castrar, topizar, identificar y/o registrar los animales en la producción pecuaria con el fin de mejorar el funcionamiento de la empresa. Dado lo anterior revisemos el manejo por diferentes especies:

        .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
          SlyderA(tipo="b")
  
            .row.justify-content-center.align-items-star.p-3
              .col-md-6.mb-4.mb-md-0
                h4 Bovinos y bufalinos
                p.mb-4 Se caracterizan por ser rumiantes y duran entre 9 y 11 horas en pastoreo continúo organizados en grupos en donde predomina la jerarquía y cualquier cambio los altera. Su comportamiento depende de la edad, etapa sexual, crías o lugar de estadía pues en hacinamiento el estrés produce cambios de conducta. 
                p.mb-4 Su audición es aguda y sensible por ello se recomienda evitar ruidos a no ser que se utilice música que oculte cualquier ruido extraño dentro de las áreas de trabajo. Tienen una visión frontal binocular de 360º y su compartimiento es rutinario.

              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')
  
            .row.justify-content-center.align-items-star.p-3
              .col-md-6.mb-4.mb-md-0
                h4 Equinos
                p.mb-4 Se caracterizan por una vista aguda y visión amplia, es animal de manada y súper activo al medio donde su conformación está regida por macho alfa y subordinados. La alimentación es selectiva y solo duermen un promedio de 3 horas, en estado confinado por lo que se recomiendan los corrales en forma redonda. 
                p.mb-4 En altos niveles de estrés el animal tiende a presentar desmayos entonces no se recomienda su manejo con animales como perros ni tábanos. Quien lo maneje no se le recomienda hacer movimientos repentinos pues alerta al animal por lo que lo mejor es vendar los ojos o transportarlo con la manada.

              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema1/img_2.png', alt='Texto que describa la imagen')

            .row.justify-content-center.align-items-star.p-3
              .col-md-6.mb-4.mb-md-0
                h4 Porcinos
                p.mb-3 Muy sensible a los sonidos, tienen vista deficiente y las temperaturas altas provocan altos niveles de estrés, muy agresivos cuando se mezclan con animales de otros grupos, por motivos de hacinamientos muestran comportamientos de canibalismo y se recomienda buena luz en los lugares de alojamiento.

              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema1/img_3.png', alt='Texto que describa la imagen')
                  
            .row.justify-content-center.align-items-star.p-3
              .col-md-6.mb-4.mb-md-0
                h4 Ovinos/caprinos y aves de corral
                p.mb-3 Los primero son poligástricos, animales sociables, pero son muy territoriales y pueden reconocer rostros, olores y sabores durante años, en el caso de las aves son jerárquicas, en hacinamiento tienen a ser caníbales y se caracterizan por ser mono gástrico y carecer de olfato y gusto siendo animales diurnos dependientes del fotoperiodo (luz).

              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema1/img_4.png', alt='Texto que describa la imagen')
    //- Separador

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
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
