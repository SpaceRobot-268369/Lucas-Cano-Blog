<template>


  <div class="card">
    <div v-if="loading" class="skeleton-wrapper">
      <div class="skeleton skeleton-title"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text short"></div>
    </div>

    <div v-else class="content">
      <h2>{{ article.title }}</h2>
      <p>{{ article.body }}</p>
    </div>
  </div>



</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const article = ref({ title: '', body: '' })

onMounted(async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   const data = await res.json()
//   article.value = data
  // simulate delay
//   setTimeout(() => loading.value = false, 10000) 
})
</script>


<style scoped>


.card {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: background-color 0.3s ease;
}

.content h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.content p {
  color: var(--text-soft);
  line-height: 1.5;
}

.skeleton-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Skeleton block */
.skeleton {
  border-radius: 6px;
  background: linear-gradient(90deg, var(--skeleton-base), var(--skeleton-highlight), var(--skeleton-base));
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite ease-in-out;
}

.skeleton-title {
  height: 20px;
  width: 60%;
}

.skeleton-text {
  height: 14px;
  width: 90%;
}

.skeleton-text.short {
  width: 70%;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>