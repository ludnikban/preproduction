<template>
  <div class="container" id="app">
    <h2 class="text-center">Список пользователей Github, полученный с помощью Vuex</h2>
    <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2">
      <div class="col mb-4" v-for="(user) in usersList" :key="user">
        <div class="card h-100">
          <img class="card-img-top" :src=user.avatar_url alt="">
          <div class="card-text">
            <h5>Логин: {{ user.login }}</h5>
            <h5> ID: {{user.id}} Тип: {{ user.type }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'is_Mobile',
        'is_Desktop',
        'usersList'
      ]),
    },
    methods: {
      ...mapActions([
        'set_Mobile',
        'set_Desktop',
        'getUsersFromAPI'
      ]),
    },
    mounted() {
      if (!this.usersList.length) {
        this.getUsersFromAPI();
      }
    }
  }
</script>
