<template>
  <div>
    <div v-if="type == 'price'">
      <v-expansion-panels flat>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span class="grey--text">Price</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn-toggle color="black" >
              <v-btn value="none" outlined @click="choosePriceRange('none')">
                None
              </v-btn>

              <v-btn
                value="lowtohigh"
                outlined
                @click="choosePriceRange('lowtohigh')"
              >
                Low to <br />
                High
              </v-btn>

              <v-btn
                value="hightolow"
                outlined
                @click="choosePriceRange('hightolow')"
              >
                High to <br />
                Low
              </v-btn>
            </v-btn-toggle>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div v-else-if="type == 'category'">
      <v-expansion-panels flat>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span class="grey--text">Category</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-checkbox
              v-model="selectedCategories"
              label="Product A"
              value="Product A"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedCategories"
              label="Product B"
              value="Product B"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedCategories"
              label="Product C"
              value="Product C"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedCategories"
              label="Product D"
              value="Product D"
            ></v-checkbox>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      selectedCategories: [""],
    };
  },
  methods: {
    choosePriceRange(priceRange) {
      console.log(priceRange);
    },
  },
};
</script>
