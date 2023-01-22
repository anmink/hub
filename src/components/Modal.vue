<template>
  <transition class="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>{{ $t('modalHeader') }}</h3>
          </div>

          <div class="modal-body">
            {{ $t('modalParagraph') }}

            <div class="msg">{{ $t('modalParagraphWarning') }}</div>
          </div>

          <div class="modal-footer">
            <router-link to="/">
              <button :content="$t('modalButtonLeft')" />
            </router-link>

            <button @click="$emit('close')" class="buttonBasic btn">
              {{ $t('modalButtonRight') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script></script>

<style scoped>
.modal {
  font-family: 'Nexa';
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  padding: 16px;
  margin: auto 8px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header h3 {
  margin-top: 0;
}
.modal-body {
  margin: 20px 0;
}
.modal-footer {
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  justify-content: space-between;
}
.msg {
  color: #ff0028;
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
