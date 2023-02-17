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
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    navigation: false,
  }),
};
</script>
