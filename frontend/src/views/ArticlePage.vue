<template>

  <div class="container">

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
  
  <CommentSection></CommentSection>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import CommentSection from '@/components/CommentSection.vue'

const loading = ref(false)
const article = ref({ title: 'This is test title', body: 'This is the test content' })
const skeletonLength = ref(30)


// data passed outside
defineProps({
  article_id: String,
  title: String,
  subtitle: String,
  author: String,
  author_id: String,
  date: String,
  tags: Array
})

onMounted(
  async () => {
    document.title = "Article - ???"
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   const data = await res.json()
  //   article.value = data
    // simulate delay
  //   setTimeout(() => loading.value = false, 10000) 
  }
)
</script>


<style scoped>

/* container */
.container {
  max-width: 800px;
  height: auto;
  margin: 2rem auto;
  padding: 1.5rem;
  /* margin-left: auto;
  margin-right: 50px; */
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: background-color 0.3s ease;
}

.dark .container{
  background-color: #1c1c1c;
}


/* LIGHT MODE DEFAULTS */
.content {
  font-family: system-ui, sans-serif;
  color: #1a1a1a;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  font-weight: 600;
  margin: 1.2rem 0 0.6rem;
  color: black;
}

.content h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.content p {
  color: black;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.content a {
  color: #007acc;
  text-decoration: underline;
}

.content a:hover {
  color: #005f99;
}

.content ul,
.content ol {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.content li {
  margin-bottom: 0.5rem;
}

.content blockquote {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #f9f9f9;
  border-left: 4px solid #ccc;
  color: #555;
  font-style: italic;
}

.content code {
  background-color: #f4f4f4;
  color: #c7254e;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: monospace;
}

.content pre {
  background-color: #f4f4f4;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 6px;
  font-size: 0.9rem;
  line-height: 1.4;
}

.content hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 2rem 0;
}

.content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem 0;
}



/* DARK MODE SUPPORT */
.dark .content {
  color: #e0e0e0;
}

.dark .content h1,
.dark .content h2,
.dark .content h3,
.dark .content h4,
.dark .content h5,
.dark .content h6,
.dark .content p {
  color: #e0e0e0;
}

.dark .content a {
  color: #66c2ff;
}

.dark .content a:hover {
  color: #3399cc;
}

.dark .content blockquote {
  background-color: #2b2b2b;
  border-left-color: #555;
  color: #aaa;
}

.dark .content code {
  background-color: #333;
  color: #ff8c8c;
}

.dark .content pre {
  background-color: #2a2a2a;
  color: #e0e0e0;
}

.dark .content hr {
  border-top-color: #444;
}






/* Skeleton block */

.skeleton-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}


.skeleton {
  border-radius: 6px;
  background: linear-gradient(90deg, rgb(188, 186, 186), rgb(236, 236, 236), rgb(191, 191, 191));
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite ease-in-out;
}

.dark .skeleton {
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgb(64, 64, 64),
    rgb(96, 96, 96),
    rgb(64, 64, 64)
  );
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