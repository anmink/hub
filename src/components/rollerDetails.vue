<script>
import Tag from './tag.vue'
import TagRollClass from './tagRollClass.vue'
import moment from 'moment'

export default {
  components: {
    Tag,
    TagRollClass,
  },
  props: ['details'],
  data() {
    return {
      dot: '.',
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="numberContainer">
      <p>{{ this.details.lotno }}</p>
      <Tag :code="this.details" />
      <TagRollClass
        :content="this.details.roll_class"
        :type="this.details.roll_class"
      />
    </div>
    <hr class="line" />
    <div class="detailsContainer space-between">
      <div class="detailRow">
        <div class="detail">
          <p class="headline">Querfestigkeit</p>
          <div v-for="item in this.details.JDE_F3711" :key="item.id">
            <p>{{ item.tensile_strength_cd_dry }} N/mm²</p>
          </div>
        </div>
        <div class="detail">
          <p class="headline">Rollenbreite</p>
          <p>{{ this.details.width }} cm</p>
        </div>
        <div class="detail">
          <p class="headline">Gewicht</p>
          <div v-for="item in this.details.PMI_data" :key="item.id">
            <p>{{ item.quantity_trqt }} kg</p>
          </div>
        </div>
      </div>
      <div class="detailRow">
        <div class="detail">
          <p class="headline">Dehnung</p>
          <div v-for="item in this.details.JDE_F3711" :key="item.id">
            <p>{{ item.elongation_md_dry }} %</p>
          </div>
        </div>
        <div class="detail">
          <p class="headline">Anzahl Abrisse</p>
          <div v-for="item in this.details.JDE_F3711" :key="item.id">
            <p>0</p>
          </div>
        </div>
        <div class="detail">
          <p class="headline">Längsfestigkeit</p>
          <div v-for="item in this.details.JDE_F3711" :key="item.id">
            <p>{{ item.tensile_strength_md_dry }} N/mm²</p>
          </div>
        </div>
      </div>
      <div class="detailRow">
        <div class="detail">
          <p class="headline">Grammatur</p>
          <p>{{ this.details.grammage }} g/m²</p>
        </div>
        <div class="detail">
          <p class="headline">Produktionsdatum</p>
          <p>
            {{ this.details.prod_day }}.{{ this.details.prod_month }}.
            {{ this.details.prod_year }}
          </p>
        </div>
        <div class="detail">
          <p class="headline">Weichheit</p>
          <div v-for="item in this.details.JDE_F3711" :key="item.id">
            <p>{{ item.handfeel_emtec }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- erst einmal ausblenden, da Daten nicht verfügbar -->
    <!--  <hr class="line" />
    <div class="defectContainer space-between">
      <div class="defectRow">
        <p class="headline">Fehlertyp</p>
        <p>Loch sehr groß</p>
        <p>Randriss</p>
      </div>
      <div class="defectRow">
        <p class="headline">Durchmesser (cm)</p>
        <p>38 cm</p>
        <p>32 cm</p>
      </div>
      <div class="defectRow">
        <p class="headline">Laufmeter (m)</p>
        <p>1042 cm</p>
        <p>1078 cm</p>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  height: 100%;
  background-color: var(--color-white);
  color: var(--color-font);
  box-shadow: 0 4px 16px rgba(112, 144, 176, 0.16);
  border: none;
  margin-bottom: 1rem;
}

.numberContainer {
  display: flex;
  align-items: center;
  gap: 8px;
}
.detailsContainer {
  display: flex;
  margin-top: 8px;
}

.detail {
  margin-bottom: 1rem;
}

.defectContainer {
  display: flex;
  margin-top: 16px;
}

.space-between {
  justify-content: space-between;
}

p {
  font-size: 1rem;
  font-family: var(--font-regular);
  color: var(--color-font);
  margin: 4px;
}

.margin {
  margin-left: 1rem;
}

.headline {
  font-size: 14px;
  font-family: var(--font-bold);
  color: var(--color-primary);
  margin-bottom: 4px;
}
.line {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
}
</style>
