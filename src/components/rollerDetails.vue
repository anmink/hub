<script>
import Tag from './tag.vue'

export default {
  components: {
    Tag,
  },
}
</script>

<template>
  <div class="container">
    <div class="numberContainer">
      <p>001230160916</p>
      <Tag content="FREIGEGEBEN" type="Good" />
    </div>
    <hr class="line" />
    <div class="detailsContainer space-between">
      <div class="detailRow">
        <div class="detail">
          <p class="headline">Querfestigkeit</p>
          <p>4,0 N/mm²</p>
        </div>
        <div class="detail">
          <p class="headline">Rollenbreite</p>
          <p>170 cm</p>
        </div>
        <div class="detail">
          <p class="headline">Längsfestigkeit</p>
          <p>1,2 N/mm²</p>
        </div>
      </div>
      <div class="detailRow">
        <div class="detail">
          <p class="headline">Dehnung</p>
          <p>4,0 %</p>
        </div>
        <div class="detail">
          <p class="headline">Anzahl Abrisse</p>
          <p>0</p>
        </div>
        <div class="detail">
          <p class="headline">Gewicht</p>
          <p>39 kg</p>
        </div>
      </div>
      <div class="detailRow">
        <div class="detail">
          <p class="headline">Grammatur</p>
          <p>40 g/m²</p>
        </div>
        <div class="detail">
          <p class="headline">Produktionsdatum</p>
          <p>17.08.2022</p>
        </div>
      </div>
    </div>
    <hr class="line" />
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
    </div>
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
}

.numberContainer {
  display: flex;
  gap: 1rem;
  align-items: center;
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
