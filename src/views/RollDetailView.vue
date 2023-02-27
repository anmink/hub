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
      'https://wepasf-staging.azurewebsites.net/api/get_mother_roll_dataset?code=RwT469AkpMG2AcJTXjFibkQXWI_i3qhR2EZM4dtESNi4AzFuq__REA==&include-subsystems=true',
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
    <Header itemLeft itemRight />
    <div class="results">Results: {{ this.data.total }}</div>
    <RollDetails
      v-for="item in this.data.rows"
      :key="item.id"
      :details="item"
    />
  </div>
</template>

<style scoped>
.results {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
