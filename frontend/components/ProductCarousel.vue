<template>
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
        <MidePage />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideDropDown from "./SideDropDown.vue";
export default {
  components: { SideDropDown },
  data() {
    return {
      priceRange: "",
    };
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
