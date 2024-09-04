<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué herramienta se recomienda utilizar para colorear una imagen en blanco y negro en Photoshop?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tono/saturación.', esCorrecta: true },
            { id: 'b', texto: 'Filtro desenfoque.', esCorrecta: false },
            { id: 'c', texto: 'Herramienta lazo.', esCorrecta: false },
            { id: 'd', texto: 'Curvas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el primer paso para reparar grietas e imperfecciones en una fotografía antigua?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Duplicar la capa.', esCorrecta: false },
            { id: 'b', texto: 'Desbloquear la capa.', esCorrecta: true },
            { id: 'c', texto: 'Aplicar filtro de ruido.', esCorrecta: false },
            { id: 'd', texto: 'Cambiar el modo de fusión.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué modo de fusión se utiliza para mejorar el efecto HDR en Photoshop?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Multiplicar.', esCorrecta: false },
            { id: 'b', texto: 'Luz suave.', esCorrecta: true },
            { id: 'c', texto: 'Trama.', esCorrecta: false },
            { id: 'd', texto: 'Superponer.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué valor se recomienda ajustar al crear una capa de niveles en el efecto dragan?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '50.', esCorrecta: false },
            { id: 'b', texto: '30.', esCorrecta: true },
            { id: 'c', texto: '90.', esCorrecta: false },
            { id: 'd', texto: '70.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito del uso de la herramienta Pincel en la técnica de suavizado de piel?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eliminar imperfecciones.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Cambiar el color de los ojos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Ajustar el contraste.', esCorrecta: false },
            { id: 'd', texto: 'Reducir el brillo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué ajuste se realiza para cambiar el color de ojos en una imagen?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Curvas.', esCorrecta: false },
            { id: 'b', texto: 'Niveles.', esCorrecta: false },
            { id: 'c', texto: 'Tono/saturación.', esCorrecta: true },
            { id: 'd', texto: 'Exposición.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué efecto se obtiene al aplicar el filtro Paso alto con el modo de fusión Superponer en Photoshop?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Desenfoque.', esCorrecta: false },
            { id: 'b', texto: 'Aumento de la nitidez.', esCorrecta: true },
            { id: 'c', texto: 'Cambio de color.', esCorrecta: false },
            { id: 'd', texto: 'Reducción de sombras.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué modo de fusión se debe utilizar para resaltar los tonos de la piel en la técnica de maquillaje digital?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diferencia.', esCorrecta: false },
            { id: 'b', texto: 'Luz suave.', esCorrecta: true },
            { id: 'c', texto: 'Trama.', esCorrecta: false },
            { id: 'd', texto: 'Oscurecer.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el efecto principal que se busca con el manejo de sombras en una fotografía?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir la nitidez.', esCorrecta: false },
            { id: 'b', texto: 'Cambiar el color de fondo.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Resaltar ciertas partes de la imagen.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Aumentar la saturación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la técnica utilizada para sobreexponer selectivamente los detalles en un retrato?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Desenfoque gaussiano.', esCorrecta: false },
            { id: 'b', texto: 'Corrección de color.', esCorrecta: false },
            { id: 'c', texto: 'HDR.', esCorrecta: false },
            { id: 'd', texto: 'Efecto dragan.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
