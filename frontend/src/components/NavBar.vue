<template>
  <nav class="navbar">
    <div class="nav-container">
        <div class="blog-title">
            <RouterLink to="/" class="logo">Lucas Cano</RouterLink>
        </div>
        <ul class="nav-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/article">Article</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
    </div>
  </nav>
</template>



<script setup>

</script>

<style scoped>
@import '../assets/NavBar.css';
</style>