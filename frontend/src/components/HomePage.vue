<template>
    <div>
        <h1>Test</h1>
        <p>Test home page</p>
    </div>
    <div>
        <h1>backend response</h1>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref()

onMounted(() => {
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