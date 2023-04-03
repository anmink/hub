<script>
export default {
  props: { content: String, type: String },
  methods: {
    capitalized(name) {
      const capitalizedFirst = name[0].toUpperCase()
      const rest = name.slice(1)

      return capitalizedFirst + rest
    },
  },
}
</script>

<template>
  <div class="tag" :class="this.type">{{ capitalized(this.content) }}</div>
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

.scrap {
  background-color: #ff4d69;
  color: white;
}

.pulper {
  background-color: #f8b55d;
  color: white;
}

.good {
  background-color: #4db9a7;
  color: white;
}

.unassigned {
  background-color: var(--color-tag-blue);
  color: var(--color-font);
}

.All {
  background-color: #212529;
  color: var(--color-white);
}
</style>
