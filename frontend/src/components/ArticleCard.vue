<template>
  <div class="blog-card">
    <div class="blog-meta-top">
      <!-- <i class="icon">🗂️</i> -->
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <div class="blog-meta-middle">
      <h2 class="blog-title">{{ title }}</h2>
      <p class="blog-subtitle">{{ subtitle }}</p>
    </div>


    <div class="blog-meta-bottom">
      <span class="author">{{ author }}</span>
      <span class="divider">/</span>
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  article_id: String,
  title: String,
  subtitle: String,
  author: String,
  author_id: String,
  date: String,
  tags: Array
})

</script>



<style scoped>
.blog-card {
  border: 1px dashed #ddd;
  /* padding: 1.5rem; */
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(24, 50, 94, 0.108);
  min-width: 400px;
  max-width: 800px;
  /* margin: 20px; */
}

.dark .blog-card {
  background: #1c1c1c;
  border-color: #444;
  box-shadow: 0 4px 20px rgba(25, 25, 25, 0.608);
}

.blog-meta-top {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #dddcdca2;
    padding: 30px;
}


.dark .blog-meta-top{
    border-bottom: 1px solid #32373f;
}

.blog-meta-middle {
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
}

.icon {
  font-size: 1rem;
  color: #555;
}

.dark .icon {
  color: #bbb;
}

.tag {
  background-color: #3cb371;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.8rem;
}

.blog-title {
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.dark .blog-title {
  color: #f0f0f0;
}

.blog-subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.dark .blog-subtitle {
  color: #aaa;
}

.blog-meta-bottom {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  font-size: 0.85rem;
  padding: 30px;
}

.blog-meta-bottom span {
  font-weight: bold;
  font-style: italic;
}

.dark .blog-meta-bottom {
  color: #ccc;
}

.divider {
  color: #999;
}

.dark .divider {
  color: #666;
}
</style>