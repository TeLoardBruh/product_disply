<template>
  <v-sheet :max-width="$vuetify.breakpoint.sm ? '' : 800">
    <div v-for="(index, value) in productsComputed" :key="value">
      <strong
        >Category <span class="text-uppercase"> {{ value }} </span></strong
      >
      <v-slide-group class="pa-4" active-class="success" show-arrows  center-active >
        <v-slide-item v-for="product in index" :key="product.productId">
          <card-product
            :productName="product.productName"
            :productId="product.productId"
            :productIsSale="product.productIsSale"
            :productOriginalPrice="product.productPrice"
            :productAfterSale="product.productAfterSale"
            :productCategory="product.productCategory"
            :productDescription="product.productDescription"
            :imgLink="product.imgLink"
          />
        </v-slide-item>
      </v-slide-group>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      productFilter: [],
    };
  },
  methods: {},
  computed: {
    productsComputed() {
      const result = this.$store.getters.products.reduce((r, a) => {
        r[a.category] = [...(r[a.category] || []), a];
        return r;
      }, {});

      return result;
    },
  },
};
</script>
