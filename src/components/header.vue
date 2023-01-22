<script>
export default {
  props: {
    itemLeft: Boolean,
    itemRight: Boolean,
    router: String,
  },
  methods: {
    reloadPage() {
      window.location.reload()
    },
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>

<template>
  <div class="wrapper space-between">
    <button class="button" @click="goBack" v-if="itemLeft">
      <img src="@/assets/icons/back.svg" />
    </button>
    <div class="button" v-else></div>
    <img src="@/assets/icons/logo.svg" />

    <button @click="showModal = true" class="button" v-if="itemRight">
      <img src="@/assets/icons/x.svg" />
    </button>
    <button @click="reloadPage" class="button" v-else>
      <img src="@/assets/icons/reload.svg" />
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
