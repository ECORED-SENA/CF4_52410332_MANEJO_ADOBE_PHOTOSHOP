export default {
  global: {
    componenteFormativo: 'Retoque y edición de fotografía',
    descripcionCurso:
      'El presente componente formativo una guía detallada sobre técnicas avanzadas de retoque y edición fotográfica, utilizando la herramienta Photoshop. Se abordan métodos para mejorar imágenes mediante la manipulación de luces y sombras, la corrección de imperfecciones, y la aplicación de efectos especiales, como el HDR y el efecto Dragan, que optimizan la calidad visual de las fotografías.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fotografía digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Colorear una imagen a blanco y negro',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Grietas, rasgaduras e imperfecciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cambio de color de ojos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Creación de maquillaje en Photoshop',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Arreglar imperfecciones y suavizar la piel',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de iluminaciones y sombreados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Manejo de sombras',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'HDR (<i>High Dynamic Range</i>)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Efecto dragan',
            hash: 't_2_3',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Fotografía digital',
      referencia:
        'PCN tutoriales de Photoshop. (2023). Suavizado y Retoque de piel de gama alta en Photoshop ¡SUPER FACIL! (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TilIE7PKMUs',
    },
    {
      tema: 'Manejo de iluminaciones y sombreados',
      referencia:
        'PCN tutoriales de Photoshop. (2023). Crea Increíbles Sombreados en Photoshop - ¡Aprende el Secreto! (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fW3SaWv02x4',
    },
  ],
  glosario: [
    {
      termino: 'Capa',
      significado:
        'elemento en Photoshop que permite trabajar de manera independiente sobre una parte de la imagen sin afectar el resto.',
    },
    {
      termino: 'Colorear',
      significado:
        'proceso de añadir color a una imagen en blanco y negro utilizando herramientas como Tono/saturación.',
    },
    {
      termino: 'Contraste',
      significado:
        'diferencia de brillo o color que hace que los elementos de una imagen se distingan entre sí.',
    },
    {
      termino: 'Curvas',
      significado:
        'herramienta en Photoshop que permite ajustar los tonos de la imagen modificando la curva de luminosidad.',
    },
    {
      termino: 'Degradado',
      significado: 'transición suave entre dos o más colores en una imagen.',
    },
    {
      termino: 'Grietas',
      significado:
        'imperfecciones en fotografías antiguas que suelen ser reparadas digitalmente utilizando herramientas como el Pincel corrector.',
    },
    {
      termino: 'HDR (<i>High Dynamic Range</i>)',
      significado:
        'técnica que mejora el rango dinámico de iluminación en una imagen para equilibrar las zonas claras y oscuras.',
    },
    {
      termino: 'Luz suave',
      significado:
        'modo de fusión en Photoshop que se utiliza para aplicar efectos de iluminación sutiles en las imágenes.',
    },
    {
      termino: 'Pincel',
      significado:
        'herramienta en Photoshop que permite pintar sobre una imagen con diferentes colores y opacidades.',
    },
    {
      termino: 'Subexponer',
      significado:
        'técnica que oscurece áreas específicas de una imagen para destacar los detalles en sombras.',
    },
  ],
  referencias: [
    {
      referencia: 'Adobe. (s.f.). Retoque y reparación de fotografías. ',
      link:
        'https://helpx.adobe.com/co/photoshop/using/retouching-repairing-images.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Díaz Botero',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
