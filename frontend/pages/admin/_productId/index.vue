<template>
  <div style="margin-bottom: 20% !important">
    <v-card-actions class="justify-center">
      <admin-post @submit="onSubmitted" :product="products" />
    </v-card-actions>
  </div>
</template>

<script>
import axios from "axios";
export default {
  middleware: ["checkAuth", "auth"],
  asyncData(context) {
    return axios
      .get("http://localhost:3000/products" + "/" + context.params.productId)
      .then((res) => {
        return {
          products: { ...res.data },
        };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editProduct", editedPost).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
