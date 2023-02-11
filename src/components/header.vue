<script>
export default {
  props: {
    itemLeft: Boolean,
    itemRight: Boolean,
    router: String,
  },
}
</script>

<template>
  <div class="wrapper space-between">
    <button class="button" @click="this.$router.go(-1)" v-if="itemLeft">
      <img src="@/assets/icons/back.svg" />
    </button>
    <div class="button" v-else></div>
    <img src="@/assets/icons/logo.svg" />

    <button class="button" v-if="itemRight" @click="this.$router.push('/')">
      <img src="@/assets/icons/home.svg" />
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.space-between {
  justify-content: space-between;
}

.button {
  background-color: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
}
</style>
