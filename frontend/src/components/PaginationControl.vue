<template>
  <div class="pagination-wrapper">
    <div class="pagination-scroll">
      <button
        v-for="n in totalPages"
        :key="n"
        @click="selectPage(n)"
        :class="['page-btn', { active: currentPage === n }]"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  totalPages: {
    type: Number,
    default: 10,
  },
  modelValue: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['update:modelValue']);
const currentPage = ref(props.modelValue);

function selectPage(page) {
  currentPage.value = page;
  emit('update:modelValue', page);
}
</script>

<style scoped>
.pagination-wrapper {
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem;
}

.pagination-scroll {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0.5rem;
  /* Uncomment for blurred edge effect */
  /* mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent); */
  /* -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent); */
}

.page-btn {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  background-color: #f0f0f0;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.page-btn:hover {
  background-color: #d9f5e6;
}

.page-btn.active {
  background-color: #38a169;
  color: white;
}

/* 🌙 Dark Mode Support */
.dark .page-btn {
  background-color: #2a2a2a;
  color: #ccc;
}

.dark .page-btn:hover {
  background-color: #3c3c3c;
}

.dark .page-btn.active {
  background-color: #38a169;
  color: white;
}

</style>