<template>
  <div>
    <carousel />
    <div class="pt-5 pb-5 black lighten-2 text-center white--text">
      <span><v-icon class="mb-2" color="white">mdi-home</v-icon></span>
      <span>Phnom Penh (រាជធានី​ភ្នំពេញ), Cambodia</span>
      <!-- <div v-for="i in lowTohigh" :key="i.productPrice">
        {{ i.productPrice }}
      </div>
      <br />
      <div v-for="i in highTolow" :key="i.productPrice">
        {{ i.productPrice }}
      </div> -->
      <div v-on:indexListenning="choosePriceRange($event)"></div>
    </div>
    <v-container class="mt-4">
      <v-row>
        <v-col sm="hidden" class="hidden-sm-and-down stickyFilter" lg="3">
          <div class="stickyFilter">
            <v-flex row wrap class="mx-5">
              <div class="font-weight-bold">Filters</div>
              <v-spacer></v-spacer>
              <div><a>Clear</a></div>
            </v-flex>
            <v-divider class="mt-3 mx-5" width="80%"></v-divider>

            <div class="mt-2"></div>
            <side-drop-down type="price" />
            <side-drop-down type="category" />
          </div>
        </v-col>
        <v-col>
          <MidePage
            :products="products"
            style="margin-bottom: 20% !important"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCarousel from "../components/ProductCarousel.vue";
export default {
  middleware: ["checkAuth"],

  components: { ProductCarousel },
  data() {
    return {};
  },
  methods: {
    choosePriceRange(priceRange) {
      console.log(priceRange, "hello from index");
      this.$emit("indexListenning", priceRange);
    },
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    test() {},
    // lowTohigh() {
    //   const products = this.$store.getters.products;
    //   const test = products.sort(
    //     (a, b) => parseFloat(a.productPrice) - parseFloat(b.productPrice)
    //   );
    //   console.log(test);
    //   return test;
    // },
    // highTolow() {
    //   const products = this.$store.getters.products;
    //   const test = products.sort(
    //     (a, b) => parseFloat(b.productPrice) - parseFloat(a.productPrice)
    //   );
    //   console.log(test);
    //   return test;
    // },
  },
};
</script>

<style scoped>
.stickyFilter {
  position: -webkit-sticky;
  position: sticky;
  top: 6em;
}
</style>
