<template>
  <div class="mainWrapper">
    <div></div>
    <div class="contentWrapper">
      <Header itemRight />

      <div class="descriptionContainer">
        <h2>Scan barcode from sticked label and pull the scan-trigger</h2>
        <div class="descWrapper">
          <img src="../assets/icons/scan.svg" class="svg" />
          <input class="inputField" v-model="code" autofocus />
        </div>

        <p v-if="errorMsg">ErrorMessage</p>
      </div>
    </div>

    <div class="footerWrapper">
      <button @click="submitForm" class="buttonBasic btn">DONE</button>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      v$: useValidate(),
      code: '',
      errorMsg: '',
    }
  },
  methods: {
    changeBarcode() {
      this.$store.commit('changeBarcode', this.code)
    },
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.changeBarcode()
        this.$router.push('/details')
      } else {
        this.errorMsg = true
      }
    },
  },
  validations() {
    return {
      code: { required },
    }
  },

  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.sectionContainer {
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 1rem;
}

.descriptionContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

h2 {
  text-align: center;
}

.description h2 {
  width: 100%;
}

.descWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  padding: 0.25rem 0.5rem 1rem 0.5em;
  box-shadow: 0px 4px 16px rgba(112, 144, 176, 0.16);
  border-radius: 4px;
}

img {
  top: 0;
  left: 0;
}

.inputField {
  background: white;
  width: 210px;
  height: 32px;
  border: 1px solid red;
  border-radius: 4px;
  font-size: 1rem;
  font-family: var(--font-regular);
}

a {
  text-decoration: none;
  color: var(--color-white);
}

p {
  text-align: center;
  margin-top: 0.5rem;
  color: #f54d2e;
}

.footerWrapper {
  margin-top: 40px;
}
</style>
