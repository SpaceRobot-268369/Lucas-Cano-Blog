<template>


    <div class="container">

    <ArticleCard
        title="📌 Lucas’s Economics Observation Diary"
        subtitle="Sophisticated Economic Terminologies"
        author="Lucas Cano"
        date="2025-06-22"
        :tags="['Vue', 'Props', 'Guide']"
    />

    <ArticleCard
        title="Understanding Vue Props"
        subtitle="A guide to component communication"
        author="Lucas Cano"
        date="2025-06-22"
        :tags="['Vue', 'Props', 'Guide']"
    />

    <ArticleCard
        title="Understanding Vue Props"
        subtitle="A guide to component communication"
        author="Lucas Cano"
        date="2025-06-22"
        :tags="['Vue', 'Props', 'Guide']"
    />



    <ArticleCard
        title="Understanding Vue Props"
        subtitle="A guide to component communication"
        author="Lucas Cano"
        date="2025-06-22"
        :tags="['Vue', 'Props', 'Guide']"
    />

    <ArticleCard
        title="Understanding Vue Props"
        subtitle="A guide to component communication"
        author="Lucas Cano"
        date="2025-06-22"
        :tags="['Vue', 'Props', 'Guide']"
    />
    </div>

    <!-- <div>
        <h1>Test</h1>
        <p>Test home page</p>
    </div>

    <div>
        <h1>backend response</h1>
        <p v-if="data">{{ data }}</p>
        <p v-else>not connected to the backend server</p>
    </div> -->

    <div class="pagination">
        <PaginationControl :totalPages="20" v-model="currentPage" />
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard.vue'
import PaginationControl from '../components/PaginationControl.vue';

const data = ref()
const currentPage = ref(1)


onMounted(
    document.title = "Lucas Cano's Blog",
    () => {
    // Simulate fetching data
    axios.get('/backend/test')
        .then(response => {
            data.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

</script>


<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
    max-width: 1400px;
    margin: 0 auto;
    justify-content: center;
}

.dark .container{
    /* background-color: black; */
}

h1, p {
    color: black;
}


.dark h1,
.dark p {
  color: aliceblue;
}


.pagination {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

</style>