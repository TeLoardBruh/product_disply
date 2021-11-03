<template>
  <div style="margin-bottom: 20% !important">
    <v-card-actions class="justify-center">
      <admin-post @submit="onSubmitted" />
    </v-card-actions>
  </div>
</template>

<script>
import axios from "axios";
import AdminPost from "../../../components/AdminPost.vue";
export default {
  middleware: ["checkAuth", "auth"],

  methods: {
    onSubmitted(postData) {
      this.$store
        .dispatch("addPost", postData)
        .then(() => this.$router.push("/admin"));
    },
    cancel() {
      this.productName = "";
      this.productDescription = "";
      this.productPrice = "";
      this.status = "";
      this.imgLink = "";
      this.category = "";
    },
  },
};
</script>
