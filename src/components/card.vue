<script>
export default {
  props: {
    filename: '',
    content: '',
  },
  data() {
    return {
      quality: this.content,
      filename: this.filename,
    }
  },
}
</script>

<template>
  <button class="card">
    <img :src="require(`../assets/icons/info.svg`)" class="svg" />
    <p class="text">{{ content }}</p>
  </button>
</template>

<style scoped>
.card {
  height: 102px;
  width: 100%;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-font);
  box-shadow: 0 4px 16px rgba(112, 144, 176, 0.16);
  border: none;
  margin-bottom: 8px;
  font-family: var(--font-regular);
}

.card:hover {
  background-color: var(--color-secondary);
}

.card:focus {
  background-color: var(--color-secondary);
}

.svg {
  height: 70px;
  min-width: 120px;
}

.text {
  font-size: 24px;
  line-height: 32px;
  margin-left: 24px;
}

@media (min-width: 640px) {
  .card {
    width: 75vw;
  }
}

@media (min-width: 1024px) {
  .card {
    width: 50vw;
  }
}
</style>
