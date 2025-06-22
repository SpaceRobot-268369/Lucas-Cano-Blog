<template>
    <div class="comment-section">
    <h2>Leave a Comment</h2>
    <form class="comment-form">
        <div class="input-group">
        <input type="text" placeholder="Name *" required />
        <input type="email" placeholder="Email *" required />
        <input type="url" placeholder="Website" />
        </div>
        <textarea placeholder="Add Comment" required></textarea>
        <div class="checkbox-group">
        <input type="checkbox" id="save-info" />
        <label for="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
        <button type="submit">Post Comment</button>
    </form>
    </div>
</template>



<style scoped>

/* Base styles */
.comment-section {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  color: #2c3e50;
  font-family: system-ui, sans-serif;
  max-width: 800px;
  margin: auto;
}

.comment-section h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.input-group input {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem;
  border: 1px solid #ccd1d1;
  border-radius: 6px;
  font-size: 1rem;
}

textarea {
  width: 100%;
  padding: 1rem;
  height: 150px;
  border: 1px solid #ccd1d1;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

button[type="submit"] {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  background-color: #28a36f;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #21865f;
}

/* Dark Mode Support */
.dark .comment-section {
  background-color: #1c1c1c;
  color: #e0e0e0;
}

.dark .comment-form input,
.dark .comment-form textarea {
  background-color: #1f2024;
  color: #f1f1f1;
  border: 1px solid #444;
}

.dark .comment-form input::placeholder,
.dark .comment-form textarea::placeholder {
  color: #aaa;
}

.dark .checkbox-group label {
  color: #ccc;
}

.dark button[type="submit"] {
  background-color: #34976d;
}

.dark button[type="submit"]:hover {
  background-color: #2e7d5c;
}

</style>