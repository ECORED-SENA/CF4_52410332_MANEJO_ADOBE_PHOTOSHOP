<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.align-items-center.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-3
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/intro/img2.png', style='width: 80px', alt='').m-auto
                .col
                  p.mb-0 En esta actividad de aprendizaje se tocarán a fondo temas relacionados con el retoque digital, reparación de imágenes antiguas, configuración de imagen, y aclarar y oscurecer imágenes; además puede observar el manejo de sombras para generar efectos realistas, el efecto dragan y la creación digital del efecto HDR, dando así acabados de estudio fotográfico a sus imágenes.
              figure
                img(src='@/assets/curso/intro/img4.png', style='width: 680px', alt='').m-auto
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img3.png', style='width: 450px', alt='').m-auto
          figure.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/intro/img1.svg', style='width: 680px', alt='').m-auto
          figure.d-block.d-lg-none(data-aos="fade-right")
            img(src='@/assets/curso/intro/img1m.svg', style='width: 250px', alt='').m-auto
    
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
