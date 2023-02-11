<script>
import Header from '../components/header.vue'
import RollDetails from '../components/rollerDetails.vue'

import axios from 'axios'

export default {
  components: {
    Header,
    RollDetails,
  },
  data() {
    return {
      data: [],
    }
  },

  async mounted() {
    const response = await axios.get(
      'https://mdp-fapp.azurewebsites.net/api/get_mother_roll_dataset?&code=t-zPbkak08dTNYZXcnUogOJL6fKmnBPQH5gS7ZfdfN1AAzFum0Mm3Q==&include-subsystems=true&search=001230160916'
    )
    console.log(response.data)
    this.data = response.data
  },
}
</script>

<template>
  <div>
    <Header itemRight />
    <div class="results">Results:</div>
    <div v-for="detail in this.data" :key="detail.id">
      <div>{{ detail }}</div>
      <div v-for="item in detail" :key="item.id">
        <div>{{ item.factory }}</div>
      </div>
    </div>
    <RollDetails />
  </div>
</template>

<style scoped>
.results {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
