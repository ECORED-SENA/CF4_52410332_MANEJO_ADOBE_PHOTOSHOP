<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Manejo de iluminaciones y sombreados
    .row.bg-c10.mb-5
      .col-12
        .px-5.pb-5
          p.mb-0(data-aos="fade-right") Comencemos estudiando cómo se realiza el manejo de sombras.
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Manejo de sombras
          .row.mb-5
            .col(data-aos="fade-right")
              p.mb-0 Con el manejo de sombras y luces se pueden conseguir grandes acabados y efectos a la hora de trabajar con una fotografía, debido a que se realzan ciertas partes de la imagen, a continuación se presenta un manejo de sombras:
            .col-auto(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img1.svg', style='width: 80px', alt='').m-auto
          .row.justify-content-center(data-aos="fade-down")
            .col-lg-10
              .p-4.bg-c3
                figure
                  img(src='@/assets/curso/tema2/img2.png', style='width: 750px', alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p La imagen original es la del lado izquierdo y la que se retocó con luces y sombras la del lado derecho, pero puede observar que se realzan las partes oscuras y se opacan ciertas partes más brillantes de la fotografía.
        p.mb-0 Con la imagen abierta, cree una capa nueva y cambie el modo de fusión a #[b Luz suave], después seleccione la herramienta #[b Pincel], disminuya la opacidad a un 15 % y con el color blanco, como color principal, pinte sobre las áreas más iluminadas.
      .col-lg-3(data-aos="fade-left")
        .p-4.bg-c4
          figure
            img(src='@/assets/curso/tema2/img3.png', style='width: 100px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img4.png', style='width: 750px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img4m.png', style='width: 400px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img5.png', style='width: 750px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img5m.png', style='width: 400px', alt='').m-auto
    .row.align-items-center.mb-5
      .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img2.svg', style='width: 100px', alt='').m-auto
      .col(data-aos="fade-left")
        p En ese momento, se puede observar un cambio sutil de iluminación en las áreas pintadas con el pincel, entonces aplique un poco de contraste en los espacios donde hay sombras.
        p.mb-0 Cree una capa nueva y coloque el modo de fusión #[b Luz suave], después seleccione la herramienta #[b Pincel] y con el color negro como color principal, pinte sobre las áreas más oscuras que desea resaltar de la imagen.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img6.png', style='width: 750px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img6m.png', style='width: 400px', alt='').m-auto
    p(data-aos="fade-right") Para darle un mejor acabado a la imagen realice lo siguiente:
    p.mb-5(data-aos="fade-right") Cree una capa curva de color en el panel #[b Capas] y ajuste los valores de la siguiente forma, teniendo en cuenta que las configuraciones de curvas dependen mucho de la imagen:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 8.] Ajuste de curvas
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema2/img7.png', style='width: 750px', alt='Imagen que presenta cómo realizar el ajuste de los valores de la capa curva.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema2/img7m.png', style='width: 400px', alt='Imagen que presenta cómo realizar el ajuste de los valores de la capa curva.').m-auto
    p.mb-5(data-aos="fade-right") Ahora la imagen queda sobreexpuesta, entonces seleccione la herramienta #[b Pincel] y con el color negro como principal, pinte sobre el rostro de la imagen para disminuir el efecto realizado.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img8.png', style='width: 750px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img8m.png', style='width: 400px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Cree una capa en la opción #[b Consulta de color...] y seleccione el efecto #[b FoggyNight3DL] para dar un toque más fino a las sombras, después cambie la opacidad de las capas al #[b 50 %].
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img9.png', style='width: 850px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img9m.png', style='width: 400px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Ajuste la capa en la opción #[b Curvas...] y modifique los niveles de la siguiente manera:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 9.] Opción curvas
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema2/img10.png', style='width: 750px', alt='Imagen que presenta cómo ajustar la capa en la opción Curvas.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema2/img10m.png', style='width: 400px', alt='Imagen que presenta cómo ajustar la capa en la opción Curvas.').m-auto
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img11.png', style='width: 850px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img11m.png', style='width: 400px', alt='').m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 HDR (#[i High Dynamic Range])
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Esta técnica es denominada como el conjunto de acciones que mejoran el rango dinámico de iluminación entre zonas claras y oscuras de una imagen, logrando superar las técnicas fotográficas estándar, y se puede simular con #[b Photoshop].
        .row
          .col-12
            .p-3.bg-c2
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style='width: 60px', alt='').m-auto
                .col
                  p.mb-0 Para duplicar la capa diríjase a #[b Imagen / Ajustes / Sombras / iluminaciones...] y en la ventana emergente digite los valores que aparecen en la siguiente imagen para mejorar sombras e iluminaciones.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img12.png', style='width: 500px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img13.png', style='width: 850px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img13m.png', style='width: 440px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Para aplicar el filtro #[b Enfoque suavizado...] diríjase a #[b Filtro / Enfoque / Enfoque suavizado...] y en el panel, ajuste los valores a su gusto.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img14.png', style='width: 850px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img14m.png', style='width: 470px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Cree una capa de tipo #[b Blanco y negro...], modifique los valores que le desea proporcionar al acabado HDR de la imagen y coloque el modo de fusión de la capa, seleccionando las opciones #[b Superponer] o #[b Luz suave], dependiendo del gusto de cada usuario.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img15.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img15m.png', style='width: 400px', alt='').m-auto
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema2/img16.png', style='width: 850px', alt='').m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Efecto dragan
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Este efecto es llamado así por su creador Andrzej Dragan y es utilizado para la edición de retratos, esta técnica consiste en la sobreexposición selectiva de los detalles, además oscurecen los tonos de la piel y aumenta la nitidez de los ojos.
        p A continuación se simulará un efecto dragan de una manera muy sencilla:
        p.mb-0 Con la imagen abierta duplique la capa y después diríjase a capa de relleno y dé clic en #[b Niveles...] y en la primera casilla cambie el valor a 30.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img17.png', style='width: 500px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img18.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img18m.png', style='width: 400px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Cree una capa en #[b Tono / saturación...] y ajuste el nivel de tono a +7.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img19.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img19m.png', style='width: 400px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Cree una capa de niveles y tres puntos de nivel, luego mueva los puntos como aparece en la imagen.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 10.] Capa de niveles
        .row
          .col-12
            .p-4.bg-c3
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema2/img20.png', style='width: 950px', alt='Imagen que presenta cómo mover los puntos al crear una capa de niveles.').m-auto
              figure.d-block.d-lg-none
                img(src='@/assets/curso/tema2/img20m.png', style='width: 400px', alt='Imagen que presenta cómo mover los puntos al crear una capa de niveles.').m-auto
    p.mb-5(data-aos="fade-right") Elija la opción #[b Intensidad...] y disminuya la intensidad a #[b -20].
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure
            img(src='@/assets/curso/tema2/img21.png', style='width: 720px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Ahora seleccione la herramienta #[b Subexponer] y en el menú superior elija #[b Sombras], luego pásela sobre las partes más oscuras de la imagen. Es importante aclarar en qué capa debo hacer la acción de #[b Subexponer] (generalmente en la capa de la imagen o la capa duplicada de la imagen).
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img22.png', style='width: 500px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img22m.png', style='width: 300px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Con la herramienta #[b Sobreexponer] y en el menú superior elija #[b Medios tonos], después pase la herramienta sobre los ojos y alrededor de los mismos.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img23.png', style='width: 500px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img23m.png', style='width: 300px', alt='').m-auto
    p.mb-5(data-aos="fade-right") Para darle un mejor acabado, cree una capa en la opción #[b Degradado...], luego elija el degradado naranja y en modo de fusión seleccione #[b Trama] y baje la opacidad a un #[b 10 %].
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img24.png', style='width: 800px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img24m.png', style='width: 400px', alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img25.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img25m.png', style='width: 400px', alt='').m-auto
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .p-4.bg-c3
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img26.png', style='width: 700px', alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema2/img26m.png', style='width: 400px', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
