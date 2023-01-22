<script>
import moment from 'moment'

export default {
  created() {
    setInterval(this.getNow, 15000)
  },
  methods: {
    currentTime() {
      return moment().locale(this.$store.state.language).format('LT')
    },
    currentDate() {
      return moment().locale(this.$store.state.language).format('Do MMM')
    },
  },
}
</script>

<template>
  <footer class="wrapper space-between">
    <div>BRI-PM26</div>

    <!--  <div>{{ currentDate() }}<span class="padding" />{{ currentTime() }}</div> -->
  </footer>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  color: var(--color-font-secondary);
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  margin-top: 8px;
  margin-bottom: 8px;
}

.space-between {
  justify-content: space-between;
}

.padding {
  padding-left: 8px;
}
</style>
