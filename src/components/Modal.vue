<template>
  <transition class="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="buttonWrapper">
          <button @click="$emit('close')" class="xButton">
            <img src="@/assets/icons/x.svg" />
          </button>
        </div>
        <div class="modal-container">
          <div class="wrapper space-between">
            <div class="numberWrapper space-between">
              <div>JDE number</div>
              <div>JDE number</div>
              <div>JDE number</div>
            </div>
            <div class="content">
              <div class="size">Production time</div>
            </div>
            <div class="content space-between">
              <div>18.01.2022</div>
              <div>11:02 am</div>
              <div>Driver</div>
              <Tag :content="'Good'" :type="'Good'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Tag from '../components/tag.vue'

export default {
  components: {
    Tag,
  },
}
</script>

<style scoped>
.modal {
  font-family: 'Nexa';
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 45, 85, 0.5);
  backdrop-filter: blur(2px);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  padding: 16px;
  margin: auto 16px;
  background-color: var(--color-primary);
  border-radius: 2px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  justify-items: center;
}

.numberWrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}

.space-between {
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: row;
}

.color {
  color: var(--color-primary);
}

.size {
  font-size: var(--font-size-small);
  line-height: 21px;
  color: var(--color-label);
}

.buttonWrapper {
  display: flex;
  justify-content: flex-end;
  margin-left: 16px;
  margin-right: 16px;
}

.xButton {
  background-color: transparent;
  border: none;
}

@media (min-width: 768px) {
  .modal-footer {
    flex-direction: row;
  }
}
@media (min-width: 1024px) {
  .modal-container {
    margin-left: 8rem;
    margin-right: 8rem;
  }
}
</style>
