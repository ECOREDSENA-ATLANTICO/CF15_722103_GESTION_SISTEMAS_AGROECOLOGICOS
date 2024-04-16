<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Conducción y movimiento de animales

    .row.justify-content-center.align-items-center.mb-0
      //- .row.justify-content-center.align-items-end.mb-5
      .col-lg-7.mb-3
        p Para disminuir el estrés de los animales de producción, es de importancia contar con unas instalaciones y medios de transporte adecuado y bajo los parámetros técnicos, un diseño apropiado de cada uno de los lugares del proyecto con el fin de realizar actividades como recepción, pesaje, aplicación de medicamentos, entre otros.     
        p Es por ello que se recomienda un diseño adecuado de las instalaciones en el cual las paredes de los corrales tengan materiales sólidos, con un color que evite que el animal se rehusé a pasar por estas zonas y que ningún material que sea corto punzante, con el fin de evitar heridas o laceraciones logrando que las áreas sean acordes al espacio de la especie a trabajar. Un ejemplo de ello es lo mostrado en la siguiente figura:
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema3/img_1.png', alt='')
                
    .row.justify-content-center.align-items-center
      .tarjeta.tarjeta--blanca.p-4
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span  Conducción de animales  
              
        figure
          img(src='@/assets/curso/images/tema3/img_2.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-0.mt-3
      .col-md-10
        .cajon-b.ajuste_cajon_b_3.color-acento-contenido.p-3.mb-1
            p.mb-0 El transporte o desplazamiento de animales se debe realizar de la manera más calmada posible y sin ocasionar ningún daño o dolor minimizando los procesos de estrés haciendo la guianza dentro de la planta o hacia otros lugares. Si es necesario un medio de transporte debe realizarse según los parámetros técnicos establecidos en los cuales se incluyen las actividades de carga, descarga, transbordo y descenso.
              |
              br
        p.p-3 Dado lo anterior es importante tener algunos aspectos a tener en cuenta en la conducción y movilización de animales:

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-6
        .tarjeta.tarjeta--gris.p-4
          ul.lista-ul.mb-0
            li
              i.fas.fa-check.txt--green
              | Determinación del encargado del operario. 
            li
              i.fas.fa-check.txt--green
              | Capacitación requerida por parte de la empresa al operario. 
            li
              i.fas.fa-check.txt--green
              | Planificación del viaje o traslado. 
            li
              i.fas.fa-check.txt--green
              | Planes de contingencia. 
            li
              i.fas.fa-check.txt--green
              | Selección de la especie animal apta para transportar
            li
              i.fas.fa-check.txt--green
              | Instalaciones adecuadas al punto de llegada. 
            li
              i.fas.fa-check.txt--green
              | Manejo adecuado (no utilizar ningún instrumento que cause dolor) 
            li
              i.fas.fa-check.txt--green
              | Períodos de descanso y fuentes de agua.
            li
              i.fas.fa-check.txt--green
              | Asistencia veterinaria.
            li
              i.fas.fa-check.txt--green
              | Información sobre las condiciones del viaje. 
      .col-lg-6
        figure
          img.img-t(src='@/assets/curso/images/tema3/img_3.png', alt='')

    .row.justify-content-center.align-items-center.mb-2.p-md-3
      .col-md-10
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema3/img_7.svg', alt='')
          .tarjeta.color-primario.shadow-sm
            .row.justify-content-center.align-items-center.mb-0.p-md-3
              .col-md-10.mb-3.mb-sm-0
                h3.p-4.mb-0 Movilización de Ganado
                p.p-4.mb-0 Puede ampliar algunos de los requisitos para movilización y transporte para el caso bovino en el territorio nacional, ingresando a la siguiente página web:  
              .col-md-2
                a.boton.color-acento-botones(:href="('https://www.minagricultura.gov.co/Normatividad/Paginas/Decreto-1071-2015/CAPITULO-2-Movilizacion-de-Ganado.aspx')" target="_blank")
                  span.text-dark Abrir
                  i.text-dark.fas.fa-link
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10        
        .tarjeta.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star
            .col-md-6.mb-3.mb-md-0.p-4
              h4.mb-3.text-white.bg-c1.py-2.px-3 Técnicas de movilización
              p.mb-3 
                | Es importante el control y manejo para el grupo de animales basado en la manera oportuna de prevenir percances durante el traslado. Dado lo anterior revisemos algunas de las técnicas de movilización que se deben considerar:
            
            .col-lg-6.mb-0.mb-lg-6.mt-auto(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema3/img_8.svg', alt='Texto que describa la imagen')
    


    TabsC.color-acento-contenido.mb-3
      .py-3.py-md-4(titulo="Zona de huida o de fuga")
        .row
          .col-md-7
            figure
              img(src='@/assets/curso/images/tema3/img_4.png', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            p Es la manera más adecuada para movilizar cualquier animal de producción dado que es el espacio que tiene para moverse y si un operario lo interrumpe tiende a moverse y si sale de ahí de inmediato se detiene. Este espacio depende de la docilidad del animal y el ángulo de visibilidad hacia la persona que se aproxima, por lo que esta zona de huida se agranda cuando se viene de frente y se minimiza cuando está dentro de un brete de manejo donde cualquier circunstancia de excitación provocará que esta zona aumente de tamaño. 
            p Una persona debe estar lo suficientemente cerca del ganado para lograr que éste camine, pero no demasiado dado que puede provocar el pánico y huida. Finalmente tenga en cuenta que si es un animal manso puede realizar el manejo con una cuerda o bozal pero jamás usar caninos. 
          
      .py-3.py-md-4(titulo="Punto de balance")
        .row
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/images/tema3/img_5.png', alt='Texto que describa la imagen')
          .col-md-5
            p Este es un punto determinante pues la persona ubicada casi atrás genera que el animal camine, pero si se ubica hacia delante el animal retrocederá. En el caso de los bovinos y equinos no se recomienda hacerse detrás en el punto ciego pues la reacción es la de patear y es mejor manejarlos en grupo que individual.
            p Otro principio es que los animales de pastoreo, solos o en grupo, se moverán hacia adelante cuando un vaquero pasa rápidamente su punto de balance de la cruz en dirección contraria a la deseada para el movimiento. Los movimientos descritos en zona del trabajador sirven para inducir al ganado a entrar a una manga reduciendo notablemente o eliminando el uso de la picana eléctrica.

    .row.justify-content-center.align-items-center.mb-3
      .col-md-10
        .tarjeta.tarjeta--blanca.p-3
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 2.
            span  Zona de fuga y punto de balance
                
          figure
            img(src='@/assets/curso/images/tema3/img_6.svg', alt='Texto que describa la imagen')
  
  </template>

<script>
export default {
  name: 'Tema3',
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
