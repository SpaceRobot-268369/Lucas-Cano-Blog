<template>
  <footer>
    <button @click="toggleTheme" class="theme-toggle">
      {{ label }}
    </button>
    <br>
    <br>
    <img class="rss-icon" src="../assets/rss_icon.png" alt="rss icon">

  </footer>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const themeMode = ref('adaptive') // 'light' | 'dark' | 'adaptive'
const isDark = ref(false) // internal flag for actual dark mode

const setHTMLThemeClass = () => {
  const html = document.documentElement
  html.classList.remove('dark')
  if (isDark.value) html.classList.add('dark')
}

const applyTheme = () => {
  if (themeMode.value === 'adaptive') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  } else {
    isDark.value = themeMode.value === 'dark'
  }
  setHTMLThemeClass()
  localStorage.setItem('theme-mode', themeMode.value)
}

const toggleTheme = () => {
  themeMode.value = themeMode.value === 'adaptive'
    ? 'light'
    : themeMode.value === 'light'
    ? 'dark'
    : 'adaptive'
  applyTheme()
}

const label = computed(() => {
  return themeMode.value === 'adaptive'
    ? '🖥 Adaptive Mode'
    : isDark.value
    ? '🌙 Dark Mode'
    : '🌞 Light Mode'
})

onMounted(() => {
  themeMode.value = localStorage.getItem('theme-mode') || 'adaptive'
  applyTheme()

  // Listen to system preference changes in adaptive mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (themeMode.value === 'adaptive') {
      isDark.value = e.matches
      setHTMLThemeClass()
    }
  })
})
</script>

<style>
:root {
  --footer-bg: #fefefe;
  --text-color: #2c3e50;
}

.dark {
  --footer-bg: #202029;
  --text-color: rgb(255, 255, 255);
}
</style>

<style scoped>
footer {
  text-align: center;
  transition: background-color 0.3s;
  color: var(--text-color);
  background-color: var(--footer-bg);
}

.theme-toggle {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  background: transparent;
  border: 1px solid #888;
  border-radius: 6px;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.rss-icon {
  max-width: 25px;
}
</style>