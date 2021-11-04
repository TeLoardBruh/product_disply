<template>
  <v-container style="margin-bottom: 20% !important">
    <div v-for="(index, value) in products" :key="value">
      <v-row dense>
        <v-col
          v-for="card in index"
          :key="card.id"
          cols="4"
          class="d-flex"
          style="flex-direction: column"
        >
          <v-card class="mb-1 flex-grow-1">
            <NuxtLink
              :to="'admin/' + card.id"
              style="text-decoration: none !important"
            >
              <v-img
                :src="card.imgLink"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.productName"></v-card-title>
              </v-img>

              <v-card-actions>
                <div class="text--primary">
                  {{ card.productDescription }}
                </div>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-card-text style="overflow-y: auto; height: 100px">
                <v-chip-group
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>{{ card.category }}</v-chip>

                  <v-chip>{{ card.productPrice }}</v-chip>

                  <v-chip>{{ card.status }}</v-chip>
                </v-chip-group>
              </v-card-text>
            </NuxtLink>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  middleware: ["checkAuth", "auth"],

  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
