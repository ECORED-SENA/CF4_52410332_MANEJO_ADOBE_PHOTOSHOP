<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de iluminaciones y sombreados
    .row.bg-c10
      .col-12
        .px-5.pb-5
          p.mb-0 Comencemos estudiando cómo se realiza el manejo de sombras.
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Manejo de sombras
          .row.mb-5
            .col
              p.mb-0 Con el manejo de sombras y luces se pueden conseguir grandes acabados y efectos a la hora de trabajar con una fotografía, debido a que se realzan ciertas partes de la imagen, a continuación se presenta un manejo de sombras:
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img1.svg', style='width: 80px', alt='').m-auto
          .row.justify-content-center
            .col-lg-10
              .p-4.bg-c3
                figure
                  img(src='@/assets/curso/tema2/img2.png', style='width: 750px', alt='').m-auto

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
