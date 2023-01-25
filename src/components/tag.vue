<script>
export default {
  props: { content: String, type: String },
}
</script>

<template>
  <div class="tag" :class="this.type">{{ this.content }}</div>
</template>

<style scoped>
.tag {
  height: 24px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 2px;
  background-color: var(--color-tag-blue);
  color: var(--color-font);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-normal);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.Scrap {
  background-color: #ff4d69;
  color: white;
}

.Pulper {
  background-color: #f8b55d;
  color: white;
}

.Good {
  background-color: #4db9a7;
  color: white;
}

.Ready {
  background-color: var(--color-tag-blue);
  color: var(--color-font);
}

.All {
  background-color: #212529;
  color: var(--color-white);
}
</style>
