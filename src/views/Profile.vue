<template>
  <div class="profile">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <h1 class="display-2 font-italic mb-3">Perfil de {{ user.name }}</h1>
        <div v-if="user.human == 1">
          <p class="orange--text">pro</p>
        </div>
      </v-layout>
      <div class="card" v-if="user">
        <ul class="list-group">
          <li class="list-group-item">Name: {{ user.name }}</li>
          <li class="list-group-item">Email: {{ user.email }}</li>
          <li class="list-group-item">Username: {{ user.username }}</li>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['user', 'token']),
})
export default class Profile extends Vue {}
</script>
