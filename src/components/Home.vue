<template lang="html">
  <div id="home">
    <h1>Home</h1>
    <md-card v-for="cat in listCat" :key="cat['.key']">
      <md-card-media>
        <img src="cat.url" :alt="cat.comment">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ cat.comment }}</div>
      </md-card-header>

      <md-card-actions>
        <router-link to="'/detail/'+cat['.key']">
          <md-button>Details</md-button>
        </router-link>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listCat: []
    }
  },
  firebase () {
    return {
      cats: this.$db.ref('cats')
    }
  },
  methods: {
    latestCats () {
      this.listCat = this.cats.reverse()
      console.log(this.listCat)
    }
  },
  created () {
    this.latestCats()
  }
}
</script>

<style lang="css">
.md-card {
  margin-bottom: 16px;
}
</style>
