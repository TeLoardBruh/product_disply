<template>
  <v-slide-group show-arrows center-active>
    <v-slide-item>
      <v-card :loading="loading" class="mx-2 my-12 p-5" max-width="250">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-card-title>
          <v-row>
            <span
              ><span class="text-caption" v-if="productIsSale"
                >{{ productAfterSale }} $<span
                  class="text-decoration-line-through text-caption"
                >
                  {{ productOriginalPrice }} $</span
                ></span
              >
              <span v-else class="text-caption"
                >{{ productOriginalPrice }} $</span
              >
              <br />
              <div class="mx-auto mb-2" v-if="productIsSale">
                <v-btn depressed color="orange" elevation="2" class="" x-small
                  >Sale</v-btn
                >
              </div>
              <div v-else class="mx-auto mb-2">
                <v-btn depressed x-small></v-btn>
              </div>
            </span>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" fab x-small color="white">
              <v-icon dark> mdi-cart </v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-img
          height=""
          :aspect-ratio="16 / 9"
          style="object-fit: cover"
          :src="imgLink"
        ></v-img>

        <v-card-text >
          <div class="my-4 text-subtitle-1">
            <span class="font-weight-bold">{{ productName }}</span> <br />
            <span class="grey--text caption">{{ productDescription }}</span>
            <br />
            <span>25%</span>
            <span class="grey--text caption"> THC</span>
          </div>

          <div>
            <v-btn
              depressed
              elevation="2"
              outlined
              class="text-center text-sm no-text-transform"
            >
              <span style="white-space: normal"> Click action </span>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  props: [
    "productName",
    "productId",
    "productIsSale",
    "productOriginalPrice",
    "productAfterSale",
    "productCategory",
    "productDescription",
    "imgLink",
  ],
  data: () => ({
    loading: false,
    selection: 1,
    sale: false,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
