export default {
  global: {
    componenteFormativo: 'Labores de manejo en la producción pecuaria',
    descripcionCurso:
      'Este componente los lleva a entender desde una perspectiva ampliada los principios y labores del manejo animal por especie en tanto a la alimentación, alojamiento, salud, pruebas de composición, tiempos de retiro y normatividad.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Labores de manejo animal por especie',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conducción y movimiento de animalese',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Anatomía de las especies pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Enfermedades de las especies pecuarias',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Plan sanitario',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Protocolos para toma y envío de muestras al laboratorio',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Sujeción e inmovilización de animales',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Medicamentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tratamientos alternativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Registros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Indicadores de bienestar animal',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Control de calidad y puntos de control',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Japonesa de Cooperación Internacional. (s.f.). VI. Manejo y cría de ganado bovino.',
      link:
        'https://www.jica.go.jp/project/bolivia/3065022E0/04/pdf/4-3-1_10.pdf',
    },
    {
      referencia:
        'Bertucci, A. (s.f.). Anatomía y fisiología animal. Facultad de Ciencias Agrarias.',
      link:
        'https://www.fca-ude.edu.uy/upload/Materiales/ANATOMIA_Y_FISIOLOGIA-0113-0003.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2006). Bienestar Animal: Nuevo reto para la ganadería',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/enfermedades-animales',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura (IICA). (2009). Manual de Buenas Prácticas en Explotaciones Ganaderas de Carne Bovina.',
      link: 'https://www.biopasos.com/documentos/048.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura. (s.f.). Capítulo 2. Movilización de ganado',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Paginas/Decreto-1071-2015/CAPITULO-2-Movilizacion-de-Ganado.aspx',
    },
    {
      referencia:
        'Salas, M. & Manteca, X. (2016). Evaluación del bienestar en animales de zoológico: indicadores basados en el animal. Centro de educación en bienestar de animales de zoológico.',
      link: 'http://www.zawec.org/media/com_lazypdf/pdf/Ficha%20ZAWEC%204.pdf',
    },
    {
      referencia:
        'Tafur Garzón, A. & Acosta Barbosa J.M. (2006). Bienestar Animal: Nuevo reto para la ganadería. ICA.',
      link:
        'https://www.ica.gov.co/getattachment/79b98e64-a258-46d5-9ce1-1375a8312434/Publicacion-20.aspx',
    },
    {
      referencia:
        'Universidad de Córdoba. (s.f.). Tema 23. El manejo de los animales domésticos enfocado hacia la protección animal. Control del comportamiento, manejo y modos de contención.',
      link:
        'http://www.uco.es/organiza/departamentos/prod-animal/economia/aula/img/pictorex/06_07_09_TEMA_23.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bacteridiano',
      significado:
        'carbunco o ántrax es una enfermedad infecciosa zoonótica, causada por una bacteria formadora de esporas.',
    },
    {
      termino: 'Encefalomielitis',
      significado:
        'es una virosis equina transmitida por moscos causando inflamación de cerebro en animales la ser zoonótica.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'es la alteración, en su funcionamiento o en su estructura de cualquier parte del organismo animal, causada por la presencia de causas externas o internas del animal, comenzando generalmente con una modificación de la estructura orgánica, que produce una alteración de la función del respectivo órgano.',
    },
    {
      termino: 'Enzootica',
      significado:
        'enfermedad presente en una población en un área, granja región etc.',
    },
    {
      termino: 'Infección',
      significado:
        'es la exposición a un agente etiológico, la cual puede ir seguida o no de enfermedad, dependiendo del grado de inmunidad del huésped, de si está bien nutrido, si está bajo condiciones de estrés, o si tiene alguna otra infección previa, que le impida hacerle frente a la nueva infección.',
    },
    {
      termino: 'Inflamación',
      significado:
        'es un proceso de reacción del organismo hacia una causa irritante, la cual puede ser de origen animado o inanimado. Los animales animados pueden ser los gérmenes patógenos: bacterias o virus, parásitos, etc. Inanimados, como las sustancias químicas y los físicos. Hay síntomas de la inflamación como son: dolor, calor, enrojecimiento, hinchazón y alteración de la función del órgano afectado.',
    },
    {
      termino: 'Micosis',
      significado:
        'enfermedad producida por hongos y afecta a cualquier especie.',
    },
    {
      termino: 'Salud',
      significado:
        'es el estado en que se encuentra el ser vivo cuando está en completa armonía con el medio.',
    },
    {
      termino: 'Tatuaje',
      significado:
        'método de identificación animal, este se realiza en una parte como la oreja o cola.',
    },
    {
      termino: 'Zoonosis',
      significado:
        'son las enfermedades de los animales que se transmiten al hombre. Las más frecuentes son: Carbunco, brucelosis, encefalitis equina, anemia infecciosa equina, hidatidosis, leptospirosis, rabia, salmonelosis, sarna, tenias, toxoplasmosis, tuberculosis, etc.',
    },
  ],
  complementario: [
    {
      tema: '1. Identificación animal',
      referencia:
        'Aula vet. (2021, marzo 22). Terminología Anatómica - Anatomía Veterinaria. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cZGVzjbJKgY',
    },
    {
      tema: '2. Anatomía de las especies pecuarias.',
      referencia:
        'Agro tendencia. (2020, 29 de octubre). Tecnologías de identificación animal | Agro para el siglo 21. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oBd03GITIBM',
    },
    {
      tema: '3. Anatomía de las especies pecuarias.',
      referencia:
        'TvAgro. (2018, 25 de septiembre). INCREÍBLES tratamientos alternativos para ANIMALES - TvAgro por Juan Gonzalo Angel. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qCNc27m-CUk',
    },
    {
      tema: '4. Tratamientos alternativos',
      referencia:
        'Senasa Comunica. (2017, 24 de agosto). Bienestar animal. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eJymjFBeJNE',
    },
    {
      tema: '5. Registro',
      referencia:
        'COASGROP HIJOS DEL CAMPO. (2021, 26 de agosto). Bioseguridad en las explotaciones pecuarias. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zgWVX_cWMeo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio de Jesús Castañeda Valencia',
          cargo: 'Desarrollo Fullstack Junior',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Valencia Ebrat',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
