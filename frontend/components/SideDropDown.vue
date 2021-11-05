<template>
  <div>
    <div v-if="type == 'price'">
      <v-expansion-panels flat>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span class="grey--text">Price</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn-toggle color="black" v-if="buttonSize == 'small'">
              <v-btn
                value="none"
                outlined
                small
                @click="choosePriceRange('none')"
              >
                None
              </v-btn>

              <v-btn
                value="lowtohigh"
                outlined
                small
                @click="choosePriceRange('lowtohigh')"
              >
                Low to <br />
                High
              </v-btn>

              <v-btn
                value="hightolow"
                outlined
                small
                @click="choosePriceRange('hightolow')"
              >
                High to <br />
                Low
              </v-btn>
            </v-btn-toggle>
            <v-btn-toggle v-else>
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
            <v-radio-group v-model="radioGroup" @change="chooseCategory">
              <v-radio
                v-for="n in category"
                :key="n.label"
                :label="`${n.label}`"
                :value="n.value"
              ></v-radio>
            </v-radio-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "buttonSize"],
  data() {
    return {
      radioGroup: "",
      category: [
         {
          label: "None",
          value: "",
        },
        {
          label: "Category A",
          value: "CATA",
        },
        {
          label: "Category B",
          value: "CATB",
        },
        {
          label: "Category C",
          value: "CATC",
        },
        {
          label: "Category D",
          value: "CATD",
        },
      ],
    };
  },
  methods: {
    choosePriceRange(priceRange) {
      this.$emit("choosePriceRange", priceRange);
    },
    chooseCategory(radioGroup) {
      // this.$store.dispatch("chooseCategory", this.radioGroup);
      this.$emit("chooseCategory", radioGroup);
    },
  },
};
</script>
