<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<template>
  <div class="mainWrapper">
    <div class="contentWrapper">
      <Header itemLeft itemRight />
      <div class="buttonWrapper">
        <button class="card">
          <img src="../assets/icons/star.svg" class="svg" />
          <p class="text">Matching rolls</p>
        </button>
        <button class="card" @click="this.$router.push('/scan')">
          <img src="../assets/icons/info.svg" class="svg" />
          <p class="text">Roll informations</p>
        </button>
        <button class="card" @click="this.$router.push('/details')">
          <img src="../assets/icons/info.svg" class="svg" />
          <p class="text">Details</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttonWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding-top: 32px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-font);
  box-shadow: 0 4px 16px rgba(112, 144, 176, 0.16);
  border: none;
  margin-top: 16px;
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
