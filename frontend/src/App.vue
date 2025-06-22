<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
import { onMounted } from 'vue'
// import ArticlePage from './views/ArticlePage.vue'

onMounted(
  document.title = "Lucas Cano's Blog"
)
</script>


<template>
  <div class="wrapper">

    <div class="app-nav-bar">
      <NavBar />
    </div>

    <main>
      <RouterView />
    </main>

    <div class="app-footer">
        <AppFooter />
    </div>

  </div>
</template>


<style scoped>
@import './assets/App.css';
</style>