<template>
  <v-app>
    <v-app-bar color="blue darken" dark app>
      <v-app-bar-nav-icon v-on:click="navigation = !navigation"></v-app-bar-nav-icon>
      <v-toolbar-title>
        НОВОСТИ! ЛУЧШИЕ НОВОСТИ!
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="navigation" absolute temporary>
    </v-navigation-drawer>

    <v-main app>
      <v-container class="grey lighten-5">
    <v-row no-gutters>
      
      <NewsModul v-for="(item,i) in news" v-bind:key="i"
      v-bind:image = "item.urlToImage"
      v-bind:link = "item.url"
      v-bind:title="item.title"
      >
        {{item.description}}
      </NewsModul>

    </v-row>
  </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NewsModul from './components/NewsModul.vue';

export default {
  name: 'App',

  components: {
    NewsModul,
  },

  data: () => ({
    navigation: false,
    news: []
  }),
  methods:{
    getNews(){
      this.axios({
        method: 'GET',
        url: "https://newsapi.org/v2/top-headlines?country=ru&apiKey=d7f41a32c26b4bbfb596d58b1a54c766"
      }).then((response)=>{
        this.news = response.data.articles;
      })
    }
  },
  mounted(){
    this.getNews();
  }
};
</script>
