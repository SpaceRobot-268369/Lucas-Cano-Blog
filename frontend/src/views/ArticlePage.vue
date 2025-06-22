<template>
  <div class="card">

    <!-- skeleton -->
    <div v-if="loading" class="skeleton-wrapper">
      <div class="skeleton skeleton-title"></div>
      <div class="skeleton skeleton-description"></div>
      <br>
      <div v-for="skeleton in skeletonLength" v-bind:key="skeleton">
        <div class="skeleton skeleton-text"></div>
        <!-- <div class="skeleton skeleton-text short"></div> -->
      </div>
    </div>

    <!-- content -->
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
const skeletonLength = ref(30)

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
  max-width: 800px;
  height: auto;
  margin: 2rem auto;
  padding: 1.5rem;
  /* margin-left: auto;
  margin-right: 50px; */
  border-radius: 2px;
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
  height: 50px;
  width: 75%;
}


.skeleton-description {
  height: 20px;
  width: 30%;
}

.skeleton-text {
  height: 14px;
  width: 100%;
}

.skeleton-text.short {
  width: 70%;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>