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
      'https://mdp-fapp.azurewebsites.net/api/get_mother_roll_dataset?&code=t-zPbkak08dTNYZXcnUogOJL6fKmnBPQH5gS7ZfdfN1AAzFum0Mm3Q==&include-subsystems=true',
      {
        params: { search: this.$store.state.barcode },
      }
    )
    console.log(response.data)
    this.data = response.data
  },
}
</script>

<template>
  <div>
    <Header itemRight />
    <div class="results">Results: {{ this.data.total }}</div>
    <div>{{ this.$store.state.barcode }}</div>
    <div v-for="detail in this.data.rows" :key="detail.id">
      {{ detail.PMI_data }}
      <div v-for="item in detail.PMI_data" :key="item.id">
        <div>{{ item.core_weight }}</div>
      </div>
    </div>
    <RollDetails
      v-for="item in this.data.total"
      :key="item.id"
      :details="this.data.rows"
    />
  </div>
</template>

<style scoped>
.results {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
