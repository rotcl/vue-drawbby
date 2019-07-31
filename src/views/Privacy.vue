<template>
  <div class="privacy">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200" style="color:#616161">Políticas de privacidad y protección de datos</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-container fluid class="grey lighten-5 py-2">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <v-container class="pa-0 my-0">
            <v-layout wrap align-start justify-start row fill-height class="my-0">
              <v-flex xs12 md8 lg8 class="pa-2 my-0">
                  <p class="p-size-100 hashtag--text">Lee atentamente la política de privacidad y términos de condiciones antes de empezar a ocupar Drawbby y su contenido asociado</p>
                  <p class="p-size-140 font-weight-bold mb-3">Algunos puntos a considerar.</p>
                  <p class="p-size-110">Conforme a los dispuesto en el artículo 19 Nº 4 de la Constitución Política de la República y a las normas pertinentes de la Ley Nº 19.628 sobre protección de la vida privada y sus modificaciones posteriores, el tratamiento de datos personales que se realiza en https://www.drawbby.ml de Drawbby SpA, se rige por las siguientes reglas:</p>
                  <ul class="mt-2 p-size-110">
                    <li class="p-size-100 mb-2">Drawbby asegura la confidencialidad de los datos personales de los usuarios que se registren como tales en el sitio web https://www.drawbby.ml mediante el o los formulario(s) establecido(s) para esos efectos. Sin prejuicio de sus facultades legales, Drawbby sólo efectuará tratamiento de datos personales respecto de aquellos que han sido entregados voluntariamente por los Usuarios en el referido formulario.</li>
                    <li class="p-size-100 mb-2">Los datos personales de los Usuarios serán utilizados para el cumplimiento de los fines indicados en el formulario correspondiente y siempre dentro de la competencia y atribuciones de Drawbby estipuladas en los términos y condiciones.</li>
                    <li class="p-size-100 mb-2">Los datos personales de los Usuarios serán objeto de los siguientes tratamientos: [Escribir ley 19.629], conforme a lo declarado ante el Registro de Bases de Datos que mantiene el Servicio de Registro Civil e Identificación, el cual puede ser consultado en [Link].</li>
                    <li class="p-size-100 mb-2">Drawbby podrá comunicar a otros organismos del Estado, los datos personales de sus usuarios, conforme a lo establecido al efecto de la Ley 19.628.</li>
                    <li class="p-size-100 mb-2">Drawbby, en caso de ser requerido judicialmente al efecto, procederá a comunicar los datos personales de los usuarios que sean solicitados.</li>
                    <li class="p-size-100 mb-2">Drawbby, podrá comunicar a terceros información estadística elaborada a partir de los datos personales de sus usarios, sin el consentimiento expreso del titular, cuando de dichos datos no sea posible identificar individualmente a los titulares, de conformidad a la Ley.</li>
                  </ul>
                  <p class="p-size-110">El usuario podrá en todo momento ejercer los derechos otorgados por la Ley º 19.628 y sus modificaciones posteriores. En específico podrá: </p>
                  <ul class="mt-2 p-size-110">
                    <li class="p-size-100 mb-2">Solicitar información respecto de los bancos de datos de que sea responsable el organismo, el fundamento jurídico de su existencia, su finalidad, tipos de datos almacenados y descripción del universo de personas que comprende;</li>
                    <li class="p-size-100 mb-2">Solicitar información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos de los cuales sus datos son trasmitidos regularmente;</li>
                    <li class="p-size-100 mb-2">Solicitar se modifiquen sus datos personales cuando ellos no sean correctos o no estén actualizados, si fuere procedente;</li>
                    <li class="p-size-100 mb-2">Solicitar la eliminación o cancelación de los datos entregados cuando así lo desee, en tanto fuere procedente;</li>
                    <li class="p-size-100 mb-2">Solicitar de conformidad con lo dispuesto en la Ley 19.628, copia del registro alterado en la parte pertinente, si fuera del caso;</li>
                    <li class="p-size-100 mb-2">Oponerse a que sus datos personales sean utilizados para fines estadísticos, siempre que existe una razón procedente;</li>
                  </ul>
                  <p class="p-size-110">Para ejercer sus derechos el Usuario podrá dirigirse a contacto@drawbby.ml indicando cláramente su solicitud.</p>
                  <p class="p-size-110">En caso de no recibir una respuesta a su comunicación anterior dentro de un plazo de 10 días hábiles, podrá iniciar las acciones legales correspondientes, las cuales deberán ser interpuestas contra el responsable del tratamiento que se señala a continuación:</p>
                  <ul class="mt-2 p-size-110">
                    <li class="p-size-100 mb-2">Gabriel Vial</li>
                    <li class="p-size-100 mb-2">Desarrollador y mantenedor</li>
                    <li class="p-size-100 mb-2">gabriel.vial@drawbby.ml</li>
                    <li class="p-size-100 mb-2">[contactPhone]</li>
                  </ul>
                  <p class="p-size-110">Respecto de la recolección y tratamiento de datos realizado mediante mecanismos automatizados con el objeto de generar registros de actividad de los visitantes y registros de audiencia, Drawbby sólo podrá utilizar dicha información para la elaboración de informes que cumplan con los objetivos señalados. En ningún caso podrá realizar operaciones que impliquen asociar dicha información a algún usuario identificado o identificable.</p>
                  <p class="p-size-110">Para efectos de la presente "Política de Privacidad", se entiende por Usuario a la persona que voluntariamente se registre en https://www.drawbby.ml en los formularios especialmente establecidos al efecto. En tanto, visitante es aquella persona que accede libremente a la información disponible en https://www.drawbby.ml sin necesidad de registrarse previamente.</p>
                </v-flex> 
              <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Privacy extends Vue {}
</script>
