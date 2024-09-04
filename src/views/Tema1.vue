<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fotografía digital
    .row
      .col-lg.mb-4.mb-lg-0.bg-c2.pe-lg-0(data-aos="fade-right")
        .p-4
          p La fotografía digital consiste en la captura de imágenes a través de una cámara, esta se asemeja a la fotografía química, en la cual se capturan las imágenes sobre una película fotosensible y se revelan a través de un proceso químico; por su parte, en la fotografía digital, estas imágenes son grabadas mediante un sensor electrónico que las convierte en una señal eléctrica, almacenando las capturas en una memoria.
          p.mb-0 A continuación se explican algunos de los retoques que más se utilizan de Photoshop.
      .col-lg-auto.ps-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', style='width: 450px', alt='').m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Colorear una imagen a blanco y negro
    p.mb-5(data-aos="fade-right") Con la imagen abierta se duplica la capa dando clic derecho en Duplicar capa y luego dando clic en la opción Tono/saturación para crearla.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img3.png', style='width: 900px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img3m.png', style='width: 360px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Sobre la capa de Tono/saturación se ajusta el panel de la capa en modo colorear y se invierte la capa con Ctrl + I (Windows) o Cmd + I (Mac), entonces así debe quedar el color de la capa en negro en dicho panel.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img4.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img4m.png', style='width: 360px', alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Se selecciona la herramienta Pincel y con el Color blanco , como principal, se empieza a pintar sobre la piel, sin hacer trazos sobre el pelo o vestido, ya que se empieza a dar color a la piel, en el caso del ejemplo tampoco se pasa el Pincel sobre los labios, porque ella utiliza labial, entonces se debe dar otro color.
        p.mb-0 Al dar clic en el ícono de la parte izquierda de la capa , se activa el panel de Tono/saturación y se puede ajustar el tono de la piel que se quiere para esta imagen.
      .col-lg-6(data-aos="fade-left")
        .p-4.bg-c4
          figure
            img(src='@/assets/curso/tema1/img5.png', style='width: 490px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img6.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img6m.png', style='width: 360px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Para dar color a los labios y los dientes, se crea una capa de Tono/saturación, se invierte la capa y se selecciona el Pincel con el color blanco, luego se pinta sobre los labios y en el panel Ajustes se da el tono deseado.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img7.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img7m.png', style='width: 360px', alt='').m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Grietas, rasgaduras e imperfecciones
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Las grietas, rasgaduras e imperfecciones son muy comunes a la hora de hablar de fotografías antiguas, ya que estas se tienden a arrugar y el papel se quiebra debido al paso del tiempo, Photoshop trae una gran variedad de herramientas con las cuales se pueden recuperar este tipo de imágenes y así dejarlas como si no hubiera pasado el tiempo en ellas.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style='width: 280px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img8.png', style='width: 490px', alt='').m-auto
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-3.bg-c2
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', style='width: 60px', alt='').m-auto
                .col
                  p.mb-0 Como se presenta en el ejemplo, con el paso del tiempo se ha desquebrajado el papel, dejando imperfecciones en la fotografía, a continuación se verá qué herramientas se pueden utilizar para devolver en el tiempo dicha imagen.
        p.mb-0 Con la fotografía ya abierta en #[b Photoshop], lo primero que se hace es desbloquear la capa, dando doble clic sobre ella, luego en la ventana emergente se hacer clic derecho sobre la opción #[b Duplicar capa], esto se hace con el fin de conservar la imagen original.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img3.svg', style='width: 360px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Cómo conservar la imagen original
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img9.png', style='width: 800px', alt='Imagen que presenta cómo conservar la imagen original.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema1/img9m.png', style='width: 520px', alt='Imagen que presenta cómo conservar la imagen original.').m-auto
    .row.bg-c5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Ahora se selecciona la herramienta #[b Recortar] para eliminar las partes sobrantes de la imagen, luego se da clic en el menú superior en la herramienta #[b Enderezar].
            .col-lg-4(data-aos="fade-left")
              .p-4.bg-c4
                figure
                  img(src='@/assets/curso/tema1/img10.png', style='width: 300px', alt='').m-auto
          .row.justify-content-center.mb-5(data-aos="fade-up")
            .col-lg-10
              .p-4.bg-c3
                figure.d-none.d-lg-block
                  img(src='@/assets/curso/tema1/img11.png', style='width: 800px', alt='').m-auto
                figure.d-block.d-lg-none
                  img(src='@/assets/curso/tema1/img11m.png', style='width: 360px', alt='').m-auto
          .row.align-items-center.mb-5(data-aos="fade-left")
            .col-lg-auto.mb-4.mb-lg-0
              p.mb-0 Seleccione la #[b Herramienta Pincel corrector], allí puede seleccionar el tamaño y la dureza del pincel.
            .col-lg-4
              .p-3.bg-c4
                figure
                  img(src='@/assets/curso/tema1/img13.png', style='width: 300px', alt='').m-auto
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-lg-10
              .p-4.bg-c3
                figure.d-none.d-lg-block
                  img(src='@/assets/curso/tema1/img14.png', style='width: 800px', alt='').m-auto
                figure.d-block.d-lg-none
                  img(src='@/assets/curso/tema1/img14m.png', style='width: 360px', alt='').m-auto
          p.mb-5(data-aos="fade-right") Después con la tecla Alt oprimida dé clic en áreas similares y sanas para reparar la imagen.
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-lg-10
              .p-4.bg-c3
                figure.d-none.d-lg-block
                  img(src='@/assets/curso/tema1/img15.png', style='width: 800px', alt='').m-auto
                figure.d-block.d-lg-none
                  img(src='@/assets/curso/tema1/img15m.png', style='width: 360px', alt='').m-auto
          p(data-aos="fade-right") Se continúa repitiendo esta acción hasta cubrir todas las áreas deterioradas, recuerde que puede variar el tamaño de los pinceles para dar trazos más finos.
          p.mb-5(data-aos="fade-right") Después de finalizar la corrección de la imagen se duplica la capa, dando clic derecho / #[b Duplicar capa], después seleccione la opción #[b Trama] para aumentar la luminosidad.
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 2.] Opción Trama
              .row
                .col-12
                  .p-4.bg-c3
                    figure.d-none.d-lg-block
                      img(src='@/assets/curso/tema1/img16.png', style='width: 800px', alt='Menú donde se presenta dónde se encuentra la opción Trama.').m-auto
                    figure.d-block.d-lg-none
                      img(src='@/assets/curso/tema1/img16m.png', style='width: 520px', alt='Menú donde se presenta dónde se encuentra la opción Trama.').m-auto
    .row.bg-c6
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Para finalizar la reparación de una imagen, ya solo queda exportar, para realizarlo dé clic en Archivo / Guardar como y seleccionar el formato en el que desea guardar la imagen.
              .row.mb-3
                .col-12
                  .p-3.bg-c2
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema1/img4.svg', style='width: 90px', alt='').m-auto
                      .col
                        p.mb-0 En #[b Photoshop] encuentra infinidad de retoques digitales con los cuales se pueden mejorar inmensamente las capturas de imágenes, a continuación verá una serie de retoques para el mejoramiento del aspecto de las personas, como lo son cambios de color de ojos, cabello, entre otros.
              p Ahora, hablemos sobre una herramienta que será de mucha ayuda.
              p El filtro de restauración de fotos dentro de #[b Neural Filters] en #[b Adobe Photoshop] es una poderosa herramienta que emplea inteligencia artificial y aprendizaje automático para revitalizar y reparar fotos antiguas o deterioradas. Este filtro forma parte de la colección de #[b Neural Filters], que incluye una amplia gama de herramientas diseñadas para facilitar la edición y mejora de imágenes de forma automática o semiautomática.
              p.mb-0 Sus características son:
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img18.png', style='width: 410px', alt='').m-auto
          .row.align-items-center.mb-5
            .col-lg-3.order-2.order-lg-1(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img5.svg', style='width: 280px', alt='').m-auto
            .col-lg-9.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  figure.mb-4
                    img(src='@/assets/curso/tema1/img19.png' alt='AvatarTop')
                  .row.justify-content-center
                    .col-10
                      .row.justify-content-center
                        .col-auto
                          .p-3.bg-c7
                            p.text-center.mb-0 #[b Eliminación de daños]
                  .row
                    .col-12
                      .p-4
                        p.mb-0 Puede reparar rasgaduras, manchas, y otros daños físicos en las fotografías.
                .tarjeta.color-acento-botones
                  figure.mb-4
                    img(src='@/assets/curso/tema1/img20.png' alt='AvatarTop')
                  .row.justify-content-center
                    .col-10
                      .row.justify-content-center
                        .col-auto
                          .p-3.bg-c7
                            p.text-center.mb-0 #[b Mejora la calidad de la imagen]
                  .row
                    .col-12
                      .p-4
                        p.mb-0 Aumenta la nitidez y mejora los detalles de las fotos antiguas o de baja resolución.
                .tarjeta.color-acento-botones
                  figure.mb-4
                    img(src='@/assets/curso/tema1/img21.png' alt='AvatarTop')
                  .row.justify-content-center
                    .col-10
                      .row.justify-content-center
                        .col-auto
                          .p-3.bg-c7
                            p.text-center.mb-0 #[b Colorización]
                  .row
                    .col-12
                      .p-4
                        p.mb-0 Puede añadir color a fotos en blanco y negro de manera automática.
                .tarjeta.color-acento-botones
                  figure.mb-4
                    img(src='@/assets/curso/tema1/img22.png' alt='AvatarTop')
                  .row.justify-content-center
                    .col-10
                      .row.justify-content-center
                        .col-auto
                          .p-3.bg-c7
                            p.text-center.mb-0 #[b Reducción de ruido]
                  .row
                    .col-12
                      .p-4
                        p.mb-0 Minimiza el ruido digital y mejora la claridad de la imagen.
                .tarjeta.color-acento-botones
                  figure.mb-4
                    img(src='@/assets/curso/tema1/img23.png' alt='AvatarTop')
                  .row.justify-content-center
                    .col-10
                      .row.justify-content-center
                        .col-auto
                          .p-3.bg-c7
                            p.text-center.mb-0 #[b Ajuste de tonos y contrastes]
                  .row
                    .col-12
                      .p-4
                        p.mb-0 Optimiza los tonos y el contraste para mejorar la apariencia general de la fotografía.
    p.mb-5(data-aos="fade-right") Los pasos para aplicar el filtro de restauración de fotos en #[b Neural Filters], son:
    .row
      .col-12.mb-4
        .p-4.bg-c8
          .row.align-items-center
            .col.mb-4.mb-lg-0(data-aos="fade-right")
              p #[b Abrir la imagen en Photoshop]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-pencil-alt(style="color: #31A8FF")
                  |
                  p.mb-0 Inicia #[b Adobe Photoshop].
                li.d-flex
                  i.fas.fa-pencil-alt(style="color: #31A8FF")
                  |
                  p.mb-0 Abre la imagen que deseas restaurar yendo a #[b Archivo] > #[b Abrir] y seleccionando la foto.
            .col-lg-auto(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img24.png', style='width: 320px', alt='').m-auto
      .col-lg-6.mb-4(data-aos="fade-right")
        .p-4.bg-c8
          p #[b Acceder a Neural Filters]
          ul.lista-ul
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 En la barra de menú superior, seleccione #[b Filtro].
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 En el menú desplegable, seleccione #[b Neural Filters].
          .row
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img25.png', style='width: 320px', alt='').m-auto
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/img26.png', style='width: 320px', alt='').m-auto
      .col-lg-6.mb-4(data-aos="fade-left")
        .p-4.bg-c8.h-100
          p #[b Activar el filtro de restauración de fotos]
          ul.lista-ul
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 En la ventana de #[b Neural Filters], verá una lista de filtros disponibles en la columna de la izquierda.
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 Busque el filtro llamado #[b Restauración de fotos] o #[b #[i Photo Restoration]].
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 Es posible que el filtro no esté descargado, para hacerlo, haga clic en el botón #[b Descargar].
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 Active el filtro haciendo clic en el interruptor al lado del nombre del filtro.
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img27.png', style='width: 200px', alt='').m-auto
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img28.png', style='width: 300px', alt='').m-auto
      .col-12.mb-4(data-aos="fade-down")
        .p-4.bg-c8
          .row.align-items-center
            .col.mb-4.mb-lg-0
              p #[b Ajustar configuraciones:]
              ul.lista-ul
                li.d-flex
                  i.fas.fa-pencil-alt(style="color: #31A8FF")
                  |
                  p.mb-0 Una vez activado, verá varios controles deslizantes y opciones para ajustar los parámetros del filtro.
                li.d-flex
                  i.fas.fa-pencil-alt(style="color: #31A8FF")
                  |
                  p.mb-0 Ajuste la cantidad de restauración en los tres principales controles: #[b Mejora de fotos], #[b Mejorar cara] y #[b Reducción de rasguños]. Puede desplegar el apartado #[b Ajustes] que alberga: #[b Reducción de Ruido] y #[b Reducción de artefactos].
                li.d-flex
                  i.fas.fa-pencil-alt(style="color: #31A8FF")
                  |
                  p.mb-0 Si su foto es en blanco y negro y desea colorizarla, active la opción de colorización y ajuste los parámetros de colorización en el filtro #[b Colorear].
              figure
                img(src='@/assets/curso/tema1/img29.png', style='width: 320px', alt='')
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img30.png', style='width: 320px', alt='').m-auto
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c8
          p #[b Previsualizar los cambios]
          ul.lista-ul
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 Mientras ajusta los parámetros, verá una previsualización en tiempo real de los cambios aplicados a su imagen.
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 Revise la previsualización para asegurarse que los ajustes son los deseados.
          figure
            img(src='@/assets/curso/tema1/img31.png', style='width: 300px', alt='')
      .col-lg-6(data-aos="fade-left")
        .p-4.bg-c8.h-100
          p #[b Aplicar los cambios]
          ul.lista-ul
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 Una vez que esté satisfecho con los ajustes, haga clic en el botón #[b OK] en la parte inferior de la ventana de #[b Neural Filters].
            li.d-flex
              i.fas.fa-pencil-alt(style="color: #31A8FF")
              |
              p.mb-0 Esto aplicará los cambios a su imagen y cerrará la ventana de #[b Neural Filters].
          figure
            img(src='@/assets/curso/tema1/img32.png', style='width: 550px', alt='').m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Cambio de color de ojos
    p(data-aos="fade-right") El cambio de color de ojos es uno de los retoques más utilizados, este es de nivel básico, por lo cual no implica mayor complejidad.
    p.mb-5(data-aos="fade-right") Abrir la imagen con #[b Ctrl + O (Windows)] o #[b Cmd + O (en Mac)] y se duplica la capa dando clic derecho / #[b Duplicar capa].
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img33.png', style='width: 400px', alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Ahora se hará una selección alrededor del ojo, para hacerlo utilice la herramienta #[b Zoom] al momento de acercarlo y después escoja la herramienta #[b Máscara rápida], posteriormente elija el color negro como color principal y seleccione un pincel, en ese momento comience a pintar sobre el ojo y entonces verá como este se va tornando de color rojo conforme se van pasando los trazos.
      .col-lg-3(data-aos="fade-left")
        .p-3.bg-c4
          figure
            img(src='@/assets/curso/tema1/img34.png', style='width: 200px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img35.png', style='width: 900px', alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p Se da de nuevo clic en la herramienta #[b Máscara rápida], entonces se observa que la parte de color rojo se ve seleccionada, después de clic en #[b Menú / Selección / Invertir] para dejar únicamente enmascarados los ojos de la imagen.
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img36.png', style='width: 300px', alt='').m-auto
          .col-lg-8
            p.mb-0 En el panel #[b Capas], con la capa que se duplicó seleccionada, se da clic en la parte inferior en la opción #[b Máscara de capa]. Se coloca el modo de capa en #[b Color] y se baja la opacidad a #[b 35 %].
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img37.png', style='width: 360px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img38.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img38m.png', style='width: 360px', alt='').m-auto
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema1/img6.svg', style='width: 80px', alt='').m-auto
      .col
        p.mb-0 Ahora seleccione #[b Menú / Imagen / Tono/saturación] y en la ventana emergente dé clic en la opción Colorear, entonces se pueden modificar los valores para cambiar el color los ojos.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img39.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img39m.png', style='width: 360px', alt='').m-auto
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido
      h2 1.4 Creación de maquillaje en Photoshop
    p(data-aos="fade-right") Con la imagen abierta se creará una capa dando clic en Nueva capa de relleno, después se selecciona la opción Equilibrio de color y posteriormente se realizan los ajustes.
    p.mb-5(data-aos="fade-right") En la capa Equilibrio de color se ajustan los valores de la siguiente manera:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] Ajuste de color
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img40.png', style='width: 850px', alt='Imagen que presenta los valores de las sombras, medios tonos e iluminaciones, para ajustar el color.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema1/img40m.png', style='width: 370px', alt='Imagen que presenta los valores de las sombras, medios tonos e iluminaciones, para ajustar el color.').m-auto
    p.mb-5(data-aos="fade-right") Cree una capa nueva y presione #[b Ctrl + Shift + E (Windows)] o #[b Cmd + Shift + E (Mac)] para combinar las capas.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img41.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img41m.png', style='width: 360px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Elija la opción #[b Máscara rápida] y con un pincel coloree sobre los labios para crear la selección.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img42.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img42m.png', style='width: 360px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Se vuelve a dar clic en la herramienta #[b Máscara rápida] y se va al #[b Menú / Selección / Invertir] selección.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img43.png', style='width: 500px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Haga clic en #[b Nueva capa de relleno] y seleccione la #[b Capa color uniforme]. Después de crear la capa de color uniforme, se selecciona el color deseado y se coloca la opacidad de la capa en #[b 80 %].
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img44.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img44m.png', style='width: 360px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Se creará una capa nueva.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img45.png', style='width: 360px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Luego, se selecciona un color frontal y con la herramienta #[b Pincel] se colorea sobre los párpados, para dar la sensación de maquillaje.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4.] Colorear los párpados
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img46.png', style='width: 850px', alt='Imagen que presenta dónde seleccionar la opción máscara rápida y luego el color negro como principal.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema1/img46m.png', style='width: 450px', alt='Imagen que presenta dónde seleccionar la opción máscara rápida y luego el color negro como principal.').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img47.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img47m.png', style='width: 360px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Se coloca el modo de fusión de la capa en #[b Tono] y se ajusta la opacidad a gusto de cada usuario, dependiendo de la intensidad con la que se desea que se note el maquillaje.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Opacidad
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img48.png', style='width: 800px', alt='Imagen que presenta los pasos para ajustar la opacidad.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema1/img48m.png', style='width: 300px', alt='Imagen que presenta los pasos para ajustar la opacidad.').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img49.png', style='width: 800px', alt='').m-auto
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .row
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style='width: 60px', alt='').m-auto
          .col.ps-0
            .p-3.bg-c2.h-100
              p.mb-0 #[b Nota:] este paso del maquillaje se puede repetir las veces que sean necesarias, dependiendo del gusto del usuario.
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido
      h2 1.5 Arreglar imperfecciones y suavizar la piel
    .row.mb-5
      .col-12
        .p-4.bg-c9
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p El retoque fotográfico más común en Photoshop es el suavizado de la piel o piel de porcelana, el cual consiste en quitar imperfecciones y dejar la piel tersa, a continuación se explica cómo hacer este fácil y versátil efecto.
              p.mb-0 Con la imagen abierta se duplica la capa para trabajar sobre la copia, recuerde que se debe dar clic derecho sobre la capa y después debe seleccionar la opción #[b Duplicar capa]...
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img8.svg', style='width: 360px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img50.png', style='width: 350px', alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Para corregir las imperfecciones, seleccione el #[b Pincel corrector] y con la tecla #[b Alt] oprimida elija un área sana del rostro como muestra, después comience a reparar las áreas que tienen desperfectos.
      .col-lg-3(data-aos="fade-left")
        .p-3.bg-c4
          figure
            img(src='@/assets/curso/tema1/img51.png', style='width: 160px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img52.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img52m.png', style='width: 360px', alt='').m-auto
    p(data-aos="fade-right") Se puede observar que la piel de la persona se suavizó un poco, con solo utilizar la herramienta #[b Pincel corrector].
    p.mb-5(data-aos="fade-right") Si desea mejorar aún más la piel conservando su textura, debe duplicar la capa y dirigirse a #[b Menú / Imagen / Ajustes / Invertir], entonces verá que la imagen queda en negativo.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img53.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img53m.png', style='width: 400px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Para cambiar el modo de fusión de la capa a #[b Luz intensa], con clic derecho sobre ella se convierte a un objeto inteligente, esto con el fin de aplicar filtros en la imagen sin dañarla.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img54.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img54m.png', style='width: 380px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Al momento de aplicar el filtro #[b Paso alto...], seleccione #[b Menú / Filtros / Otro / Paso alto...] y acomode los valores a su gusto.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img55.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img55m.png', style='width: 380px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Seguidamente aplique el filtro #[b Desenfoque gaussiano...], en #[b Menú / Filtros / Desenfocar / Desenfoque gaussiano...] y ajuste los valores en #[b 2.0 %]. Tenga en cuenta que este proceso depende del tamaño de la imagen.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img56.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img56m.png', style='width: 430px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Ahora se crea una máscara de capa y luego se  digit #[b Ctrl + I (Windows)] o #[b Cmd + I (Mac)], para invertir la máscara y ocultar los efectos que se han aplicado hasta el momento.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 6.] Colorear los párpados
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img57.png', style='width: 850px', alt='Imagen que presenta dónde hacer clic para crear una máscara de capa.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema1/img57m.png', style='width: 450px', alt='Imagen que presenta dónde hacer clic para crear una máscara de capa.').m-auto
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img9.svg', style='width: 80px', alt='').m-auto
          .col
            p Con la capa de máscara seleccionada, se da clic en la herramienta #[b Pincel] y se elige el color #[b blanco], para desenmascarar las partes de la piel a suavizar.
            p Al pintar sobre las partes de la piel que se quieren desenmascarar, se verá que se van descubriendo los efectos que se aplicaron; también se pueden cambiar los valores de opacidad de la capa, para disminuir la intensidad del efecto.
            p.mb-0 A continuación, se presenta cómo va la evolución de la imagen.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img10.svg', style='width: 350px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img58.png', style='width: 800px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Para cambiar el tono de la piel y darle un mejor acabado a la imagen, se crea una nueva capa y se coloca el modo de fusión en #[b Diferencia].
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img59.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img59m.png', style='width: 430px', alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p Se selecciona la herramienta #[b Cuenta gotas] para tomar una muestra de la piel, se elige la herramienta #[b Pincel] y se colorean las áreas de la cara, el cuello y los brazos; sin pintar los ojos, el pelo y los dientes.
        p.mb-0 La capa se coloca en modo #[b Diferencia] para poder ver las zonas por las que se va pasando el pincel.
      .col-lg-4(data-aos="fade-left")
        .p-3.bg-c4
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img60.png', style='width: 300px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img60m.png', style='width: 160px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema1/img61.png', style='width: 850px', alt='').m-auto
    p.txt-c1.mb-5(data-aos="fade-right") Se crea una capa de ajuste de #[b Tono/saturación] y se da clic en la opción de que solo afecte la capa inferior, entonces se cambiará el modo de la capa sobre la que se pintó a #[b Luz suave].
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Ajuste de Tono/saturación
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img62.png', style='width: 850px', alt='Imagen que presenta qué hacer para que solo se afecte una capa con el ajuste.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema1/img62m.png', style='width: 400px', alt='Imagen que presenta qué hacer para que solo se afecte una capa con el ajuste.').m-auto
    p.mb-5(data-aos="fade-right") Finalmente pueden ajustar tono, saturación y luminosidad para dar el color de piel deseado.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img63.png', style='width: 850px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img63m.png', style='width: 400px', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema1',
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
