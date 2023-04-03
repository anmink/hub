<script>
import Header from '../components/header.vue'
import RollDetails from '../components/rollerDetails.vue'
import TagRollClass from '../components/tagRollClass.vue'

import axios from 'axios'

export default {
  components: {
    Header,
    RollDetails,
    TagRollClass,
  },
  data() {
    return {
      data: [],
      filterTag: '',
      ready: '',
      good: 'good',
      scrap: 'scrap',
      pulper: 'pulper',
    }
  },
  methods: {
    filteredArray(filterTag) {
      axios
        .get(
          'https://wepasf-staging.azurewebsites.net/api/get_mother_roll_dataset?code=RwT469AkpMG2AcJTXjFibkQXWI_i3qhR2EZM4dtESNi4AzFuq__REA==&include-subsystems=true',
          {
            params: { 'filter-roll-class': filterTag },
          }
        )
        .then((response) => {
          this.data = response.data
        })
    },

    capitalized(name) {
      const capitalizedFirst = name[0].toUpperCase()
      const rest = name.slice(1)
      return capitalizedFirst + rest
    },
    reload() {
      window.location.reload(true)
    },
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
    <div class="filterWrapper">
      <TagRollClass
        :content="capitalized('All')"
        :type="'All'"
        class="pointer"
        @click="this.reload()"
      />
      <TagRollClass
        :content="capitalized('unassigned')"
        :type="'ready'"
        class="pointer"
        @click="this.filteredArray(this.ready)"
      />
      <TagRollClass
        :content="capitalized('good')"
        :type="'good'"
        class="pointer"
        @click="this.filteredArray(this.good)"
      />
      <TagRollClass
        :content="capitalized('scrap')"
        :type="'scrap'"
        class="pointer"
        @click="this.filteredArray(this.scrap)"
      />
      <TagRollClass
        :content="capitalized('pulper')"
        :type="'pulper'"
        class="pointer"
        @click="this.filteredArray(this.pulper)"
      />
    </div>
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

.filterWrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
