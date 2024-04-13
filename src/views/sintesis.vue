<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 Las condiciones para entender desde una perspectiva amplia los principios y labores del manejo animal por especie en tanto a la alimentación, alojamiento, salud, pruebas de composición, tiempos de retiro y normatividad se reduce para tener más claridad de todos los apartados del componente formativo "Labores de manejo en la producción pecuaria" en el siguiente esquema gráfico que sintetiza toda la información anterior de manera completa:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/images/tema2/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
