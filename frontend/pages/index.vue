<template>
  <div>
    <carousel />
    <div class="pt-5 pb-5 black lighten-2 text-center white--text">
      <span><v-icon class="mb-2" color="white">mdi-home</v-icon></span>
      <span>Phnom Penh (រាជធានី​ភ្នំពេញ), Cambodia</span>
    </div>
    <product-carousel />
  </div>
</template>

<script>
import ProductCarousel from "../components/ProductCarousel.vue";
export default {
  components: { ProductCarousel },
  data() {
    return {};
  },
};
</script>
