<script>
export default {
  props: ['code'],
  data() {
    return {
      key: this.code.last_erp_booking_status,
    }
  },
}
</script>

<template>
  <div>
    <div v-if="this.code.last_erp_booking_status === ''" class="tag green">
      FREIGEGEBEN
    </div>
    <div v-if="this.code.last_erp_booking_status === 'A'" class="tag red">
      CODE - A
    </div>
    <div v-if="this.code.last_erp_booking_status === 'B'" class="tag red">
      CODE - B
    </div>
    <div v-if="this.code.last_erp_booking_status === 'C'" class="tag red">
      CODE - C
    </div>
    <div v-if="this.code.last_erp_booking_status === 'D'" class="tag red">
      CODE - D
    </div>
    <div v-if="this.code.last_erp_booking_status === 'E'" class="tag red">
      CODE - E
    </div>
    <div v-if="this.code.last_erp_booking_status === 'F'" class="tag red">
      CODE - F
    </div>
    <div v-if="this.code.last_erp_booking_status === 'G'" class="tag yellow">
      CODE - G
    </div>
    <div v-if="this.code.last_erp_booking_status === 'H'" class="tag yellow">
      CODE - H
    </div>
    <div v-if="this.code.last_erp_booking_status === 'I'" class="tag red">
      CODE - I
    </div>
    <div v-if="this.code.last_erp_booking_status === 'K'" class="tag yellow">
      CODE - K
    </div>
    <div v-if="this.code.last_erp_booking_status === 'L'" class="tag yellow">
      CODE - L
    </div>
    <div v-if="this.code.last_erp_booking_status === 'Q'" class="tag yellow">
      CODE - Q
    </div>
    <div v-if="this.code.last_erp_booking_status === 'R'" class="tag yellow">
      CODE - R
    </div>
    <div v-if="this.code.last_erp_booking_status === 'T'" class="tag yellow">
      CODE - T
    </div>
    <div v-if="this.code.last_erp_booking_status === 'X'" class="tag yellow">
      CODE - X
    </div>
  </div>
</template>

<style scoped>
.tag {
  font-size: 12px;
  font-family: var(--font-bold);
  padding: 4px;
  color: white;
  border-radius: 2px;
  margin-left: 8px;
}
.red {
  background-color: red;
}

.green {
  background-color: #009b82;
}

.yellow {
  background-color: #dcf500;
  color: #212529;
}
</style>
