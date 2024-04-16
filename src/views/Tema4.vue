<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1 Anatomía de las especies pecuarias

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4
        .bloque-texto-g.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema4/img_23.png')})`, 'width': '100%', 'height':'249px'}"
          )
      .col-lg-9.mb-5
        .bloque-texto-g__texto.p-4.jumbotron-15(
          :style="{'top': '55px', 'position': 'relative', 'width':'100%'}"
        )
          p.mb-0 De acuerdo con la composición, disposición, ubicación y relación topográfica de los diferentes órganos que componen el organismo de los animales es importante tener en cuenta la organización estructural de los seres vivos y en esencia a los puntos de referencia, veamos:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10
        ImagenInfografica.color-adicional-1
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema4/img_1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3.text-bold(x="15.6%" y="15.6%" numero="3")
            .h5.mb-2 Plano medio o anteroposterior
            p Plano imaginario que corta el cuerpo de la cabeza a la cola en dos partes iguales de derecha a izquierda.

          .tarjeta.color-acento-botones.p-3.text-bold(x="26.6%" y="30.2%" numero="2")
            .h5.mb-2 Caudal o posterior
            p Dirección de la cola.

          .tarjeta.color-acento-botones.p-3.text-bold(x="55.4%" y="23.7%" numero="4")
            .h5.mb-2 Caudal o posterior
            p Dirección de la cola.

          .tarjeta.color-acento-botones.p-3.text-bold(x="46.7%" y="50.44%" numero="6")
            .h5.mb-2 Caudal o posterior
            p Dirección de la cola.

          .tarjeta.color-acento-botones.p-3.text-bold(x="63.7%" y="49.9%" numero="5")
            .h5.mb-2 Caudal o posterior
            p Dirección de la cola.

    .row.justify-content-center.align-items-center.mb-0
      .col-md-10
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_2.svg', alt='')
          .tarjeta.color-primario.shadow-sm
            .row.justify-content-center.align-items-center.mb-0
              .col-md-9.mb-3.mb-sm-0
                p.p-4.mb-0 Igualmente, es importante que pueda profundizar a través de la web algunas características adicionales de la anatomía de las especies pecuarias, para lo cual se le invita a que descargue la siguiente información:   
                p.p-4.mb-0 Bertucci, A. Anatomia y Fisiologia Animal. Facultad de Ciencias Agrarias.    
              .col-md-3
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Anatomia_fisiologia_animal.pdf')" target="_blank")
                  span.text-dark Abrir
                  i.text-dark.fas.fa-link

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.1 Enfermedades de las especies pecuarias

    .row.justify-content-center.align-items-center.mb-0
      .tarjeta.row.mb-3
        .col-md-4.color_acento_contenido
          p.p-4 Las enfermedades en las especies pecuarias se determinan de acuerdo con cada una de las especies. Inicialmente se deben reconocer los siguientes tipos de enfermedades:
      
          .col-lg-11.mb-0.mb-lg-11.mt-auto.m-auto(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema4/img_3.svg', alt='Texto que describa la imagen')
        
        .col-md-8
          .row
            .col-lg-6
              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema4/img_4.svg', alt='')
                .tarjeta.tarjeta--gris.shadow-sm
                  .p-4
                    h4 Orgánicas
                    p.text-small Estas afectan los órganos esenciales, por ejemplo, una presentación en la lengua puede afectar el sistema digestivo.
              
              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema4/img_5.svg', alt='')
                .tarjeta.tarjeta--gris.shadow-sm
                  .p-4
                    h4 Quirúrgicas
                    p.text-small Producen signos observables y es necesario intervención quirúrgica (fracturas).
              
              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema4/img_6.svg', alt='')
                .tarjeta.tarjeta--gris.shadow-sm
                  .p-4
                    h4 Parasitarias
                    p.text-small Se producen por parásitos (internos o externos).
            
            .col-lg-6
              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema4/img_7.svg', alt='')
                .tarjeta.tarjeta--gris.shadow-sm
                  .p-4
                    h4 Infecciosas
                    p.text-small Producidos por bacterias, virus y otras especies de microorganismos. Aparecen luego de la infección del animal.
              
              .tarjeta-avatar-b.mb-2
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema4/img_8.svg', alt='')
                .tarjeta.tarjeta--gris.shadow-sm
                  .p-4
                    h4 No infecciosas 
                    p.text-small Consecuencias de lesiones, desnutrición, anormalidades genéticas entre otras.
    
    .bg_16.p-4.p-lg-5.mb-lg-0
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-6(data-aos="fade-left")
          p Una vez se han reconocido los tipos se pueden describir las enfermedades más comunes de las especies pecuarias. Revisa la descripción de cada una: 
        .col-lg-6(data-aos="fade-right")
          img.m-auto(src='@/assets/curso/images/tema4/img_9.svg', alt='') 
     
    .bg--img_03
      .row.justify-content-center.mb-1
        .col-lg-6
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Estomatitis vesicular:")
              .col-12
                p.mb-0 causada por un virus y presentada en todas las especies. Es endémica, epidémica y esporádica en todo el territorio nacional. Su contaminación es por medio de la saliva donde el virus penetra por pequeñas heridas o excoriaciones que se presentan en la mucosa de boca o faringe. Los síntomas son unas vesículas en la boca.

            .row(titulo="Leptospirosis")
              .col-12
                p.mb-0 producida por la leptospira, de la cual existen varias especies, que atacan a los animales y al hombre. Se presenta en equinos, bovinos, ovinos, caprinos y porcinos donde suele presentarse en todo el país y es endémica. <br> Los animales contaminados eliminan permanentemente el virus por la orina y si se contamina el agua de charcas permanece viva y puede ser ingerida por otros animales, atravesando la pared intestinal y llegando a la sangre. <br> Fiebre aftosa o glosopeda Se caracteriza por la presencia de estomatitis, problemas vesiculares en pezuñas y glándula mamaria, por ser de alta morbilidad. Es causada por virus en especies como bovinos, porcinos, ovinos y caprinos. Se presenta en todo el país en forma endémica, epidémica y esporádica. Cuando el virus penetra, presentando fiebre, por la presencia del virus en la sangre, (viremia), llegando a todo el organismo, afectando el miocardio, inflamación y degeneración que puede ocasionar la muerte. Brucelosis o aborto infeccioso. <br>La produce la Brucella, que es una enfermedad Zoonótica, de la cual hay varias especies: B. abortus, B. Bovis, B. melitensis, y B. suis. Se presenta en todas las especies, es endémica. Son portadores, los animales sanos se contaminan por vía oral y la sintomatología es fiebre e inflamación en algunas partes en la especie equina (mal de la cruz)

            .row(titulo="Salmonelosis")
              .col-12
                p.mb-0 se producen enfermedades en los animales y en las personas. Es una enfermedad infecciosa caracterizada por síntomas gastroentéricos, causada por varias especies de Salmonella atacando los bovinos, equinos, porcinos y aves. Se presenta en forma endémica y esporádica. <br> En bovinos, la salmonelosis se puede presentar en forma septicémica o sobreaguda, fiebre, depresión, postración y muerte en equinos, se caracteriza por diarrea en potros, artritis y aborto en adultos y en porcinos por artritis y diarrea.

            .row(titulo="Rabia")
              .col-12
                p.mb-0 causada por un virus neurotrópico atacando a todas las especies animales incluyendo el hombre. Se propaga por la mordedura de animales enfermos, por la presencia de saliva en mucosas sanas. <br> Se presenta en todo el territorio nacional, es endémica y esporádica donde su manifestación es la súper excitación, midriasis y el animal se vuelve violento. En el momento no se tiene tratamiento alguno.
                
            .row(titulo="Paratuberculosis o enfermedad de Jhones")
              .col-12
                p.mb-0 es una enfermedad infecciosa crónica hipertrofiante de la mucosa intestinal, bacteria Mycobacterium paratuberculosis, se presenta en bovinos y ovinos donde hay disminución del apetito, posteriormente enflaquecimiento, atrofia de músculos glúteos, hundimiento de ojos, diarrea persistente, por períodos el animal vuelve a comer y puede volverse a presentar por bajas defensas.
                
            .row(titulo="Tuberculosis")
              .col-12
                p.mb-0 es conocida como Micobacterium tuberculoso o Bacilo de Koch. Es de presentación en zonas de clima frío, se disemina en instrumentos o por el aire y su sintomatología es respiratoria. En general una cantidad de animales puede verse gravemente afectada en pocos meses de infección, mientras que otros animales tardan varios años en desarrollar signos clínicos. La bacteria también puede permanecer latente en el huésped sin causar enfermedad durante largos periodos.
                
        .col-lg-6
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/images/tema4/img_11.png", alt="alt").img400.m-auto
        
        //- Segunda parte
        .col-lg-6
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/images/tema4/img_12.svg", alt="alt").img400.m-auto
            
        .col-lg-6
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Tétanos:")
              .col-12
                p.mb-0 es una enfermedad que se penetra por heridas o cordón umbilical mal curado presentando síntomas nerviosos, con parálisis muscular y muerte.

            .row(titulo="Carbón bacteridiano")
              .col-12
                p.mb-0 fiebre esplénica, ántrax, carbunco, peste rayo Bacillus anthracis produce una enfermedad contagiosa (carbunco o ántrax maligno), que afecta a los seres humanos y a los animales presentando aturdimiento postración y muerte súbita.

            .row(titulo="Carbón sintomático gangrena gaseosa, pierna negra")
              .col-12
                p.mb-0 es una enfermedad bacteriana aguda debida a la contaminación de heridas con Clostridium septicum (Cl. Chauvei, Cl. Oedematiens, y Cl. Welchii) Esta enfermedad es del grupo de la gangrena gaseosa que produce gas cuando están sobre el animal en tejidos descompuestos. Se da en cualquier especie.

            .row(titulo="Rinotraqueitis bovina infecciosa")
              .col-12
                p.mb-0 enfermedad en bovinos, causada por un herpes bovino tipo 1 que puede atacar los sistemas respiratorio, reproductor, nervioso y digestivo presentando una inflamación del tracto respiratorio. El virus puede invadir la placenta y el feto a través de la corriente sanguínea materna y causar aborto o muerte en los primeros días de nacido. En los terneros causa encefalitis y produce necrosis oral y gástrica. <br> Diarrea viral bovina Enfermedad infecciosa del ganado vacuno, causada por un virus, con sintomatología de por diarrea y deshidratación, y en los terneros jóvenes artritis (síndrome del ternero débil) y una enfermedad ulcerativa crónica del tracto digestivo en animales mayores. Por lo general es una enfermedad de muerte rápida en 48 horas. El virus puede causar aborto en las vacas preñadas y no hay un tratamiento específico.
                
            .row(titulo="Toxoplasmosis")
              .col-12
                p.mb-0 es una enfermedad producida por el Toxoplasma gondii, ataca a todas las especies animales y al hombre. Se puede propagar por vía uterina, oral o por contacto con animales enfermos. Las palomas son portadoras sanas del parásito. La sintomatología enflaquecimiento progresivo, fiebre, diarrea sanguinolenta, hipertrofia de ganglios linfáticos, disnea y encefalitis, trastornos del sistema nervioso central, aborto, partos prematuros y trastornos de la locomoción.

        //- tercera parte
        .col-lg-6
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Distomatosis hepática Conocida como Mariposa del hígado")
              .col-12
                p.mb-0 es una inflamación aguda ó crónica del hígado y vías biliares, producida por un parásito llamado Fasciola hepática. Es una enfermedad endémica de climas fríos, que produce grandes pérdidas en el ganado bovino de leche y carne.

            .row(titulo="Anaplasma y babesiosis La babesiosis y anaplasmosis bovinas")
              .col-12
                p.mb-0 son enfermedades que afectan al ganado bovino. Causada por protozoos intracelulares que causa fiebre, anemia, hemoglobinuria e ictericia.

            .row(titulo="Mycoplasma Mycoplasma hyopneumoniae")
              .col-12
                p.mb-0 es una bacteria que causa enfermedad de neumonía enzoótica porcina y es altamente contagiosa y crónica que afecta el sistema respiratorio <br>Peste porcina Es una enfermedad viral del Pestivirus de la familia Flaviviridae de los cerdos que es altamente contagiosa, causando fiebre, anorexia, letargia, hemorragias y cianosis en la piel, conjuntivitis, estreñimiento transitorio seguido de diarrea, vómitos ocasionales, disnea, tos, ataxia, convulsiones. Mortalidad Parvovirosis Producido por un virus de la especie Parvoviridae de los cerdos, causa problemas reproductivos infección embrionaria y fetal y muerte.

            .row(titulo="Influenza aviar")
              .col-12
                p.mb-0 enfermedad viral que afecta a las aves Familia Orthomyxoviridae respiratorio severo, con lagrimeo ocular excesivo y sinusitis, cianosis de las crestas, barbillas y lo más importante que es una enfermedad zoonótica. <br> Newcastle Infección viral altamente contagiosa (virus Paramyxoviridae) afecta a todas las aves. Los signos respiratorios son jadeo, tos, estornudos y ruidos al respirar. Igual presenta signos nerviosos: parálisis de las alas y las patas, cuello torcido, desplazamiento en círculos, espasmos y parálisis.
                
            .row(titulo="Paratuberculosis o enfermedad de Jhones")
              .col-12
                p.mb-0 es una enfermedad infecciosa crónica hipertrofiante de la mucosa intestinal, bacteria Mycobacterium paratuberculosis, se presenta en bovinos y ovinos donde hay disminución del apetito, posteriormente enflaquecimiento, atrofia de músculos glúteos, hundimiento de ojos, diarrea persistente, por períodos el animal vuelve a comer y puede volverse a presentar por bajas defensas.
                
            .row(titulo="Marek Viral herpes alfa neoplásica")
              .col-12
                p.mb-0 sumamente contagiosas de las gallinas. La sintomatología nerviosa se caracteriza en parálisis flácida generalmente unilateral (patas o alas) diarrea y problemas de cuello. <br>Gumboro Bursitis infecciosa, enfermedad altamente contagiosa de pollos jóvenes causada por el virus (Avibirnavirus) causa fiebre, depresión, plumas erizadas, prolapso de cloaca y deshidratación. <br> Encefalitis equina Enfermedad en equinos y mulares (Alphavirus) que causa problemas febriles y síntoma logia neurológica.
                
        .col-lg-6
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/images/tema4/img_13.png", alt="alt").img400.m-auto

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.2 Plan sanitario

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4
        .bloque-texto-g.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema4/img_14.png')})`, 'width': '100%', 'height':'249px'}"
          )
      .col-lg-9.mb-5
        .bloque-texto-g__texto.p-4.jumbotron-15(
          :style="{'top': '55px', 'position': 'relative', 'width':'100%'}"
        )
          p.mb-0 El plan sanitario son todas las acciones de prevención de enfermedades en los animales y se caracteriza por los aspectos de manejo, alimentación, higiene y que dentro de la explotación pecuaria se suma a una programación de las actividades diarias como los baños, vacunación y vermifugación.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-9
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_15.svg', alt='')
          .tarjeta.color-primario.shadow-sm.mt-2
            .row.justify-content-center.align-items-center.mb-0
              .col-md-9.mb-3.mb-sm-0
                p.p-4.mb-0 Dentro del plan se debe generar una base de manejo y medidas preventivas a realizar con los animales enfocándose en el control, prevención y erradicación de enfermedades que puedan afectar el proceso de producción, por lo que puede tomar la guía de elaboración del plan sanitario destinada por el Instituto Colombiano Agropecuario, descargando el siguiente documento:
              .col-md-3
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Guia_para_la_elaboracion_del_plan_sanitario.pdf')" target="_blank")
                  span.text-dark Descargar
                  i.text-dark.fas.fa-link
    
    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.3 Protocolos para toma y envío de muestras al laboratorio

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-3
        p Dentro de los protocolos por una posible enfermedad potencial es importante hacer una muestra del órgano afectado y enviarla lo más pronto posible después de recolectada o de muerto el animal. 
        p Las muestras deben cumplir con unos requisitos como lugar, fecha, nombre de la finca, municipio, nombre del propietario, especie, raza del animal, edad, sexo y síntomas observados.
      .col-lg-8
        figure
          img.img-t(src='@/assets/curso/images/tema4/img_16.svg', alt='')

    .row.justify-content-center.align-items-center.mb-0.p-md-3
      .col-lg-1
      .col-lg-11
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_17.svg', alt='', :style="{'position': 'absolute', 'width': '80%'}")
          .tarjeta.color-primario.shadow-sm
            .row.justify-content-center.align-items-center.mb-0.p-md-3
              .col-lg-7.mb-sm-0
                p.p-4.mb-0 A continuación, se presenta una guía práctica de cómo tomar y conservar muestras de laboratorio para el análisis y diagnóstico de la enfermedad que afecta el animal:
              .col-lg-5
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Toma_de_muestras_y_envio.pdf')" target="_blank")
                  span.text-dark Descargar
                  i.text-dark.fas.fa-link

    Separador 

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.4 Sujeción e inmovilización de animales 

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-4.mb-5
        figure
          img.img-t(src='@/assets/curso/images/tema4/img_18.png', alt='')
      .col-lg-8.mb-5
        p Durante el manejo animal es importante reconocer cómo realizar la sujeción e inmovilización de animales de acuerdo a la especie, raza, características sin aplicar ningún daño. Inicialmente debemos recordar que un aspecto a tener en cuenta, son unas buenas instalaciones y alojamiento para realización de las actividades diarias del manejo animal. 
        p Entre los métodos de inmovilización de animales están la verbal en animales de compañía, física por medio de técnicas (lazo, bozal u otro instrumento) farmacológica (tranquilizantes, sedantes y anestésicos) Sin embargo, la sujeción es la técnica más utilizada en los animales de producción animal la cual posee métodos muy utilizados en campo como son: 
        p A través de la siguiente figura se representan estas cuatro técnicas:

    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span  Sujeción en animales de producción
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_19.svg', alt='')
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_20.svg', alt='')
      .col-lg-3(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_21.svg', alt='')
      .col-lg-3(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_22.svg', alt='')

  </template>

<script>
export default {
  name: 'Tema4',
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
