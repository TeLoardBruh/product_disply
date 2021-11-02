<template>
  <div>
    <v-card-actions class="justify-center">
      <v-form @submit.prevent="onSubmitted">
        <v-text-field
          v-model="productName"
          :rules="nameRules"
          label="Product Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="productDescription"
          :rules="nameRules"
          label="Product Description"
          required
        ></v-text-field>
        <v-text-field
          v-model="productPrice"
          :rules="priceRules"
          label="Product Price"
          required
        ></v-text-field>
        <v-select
          v-model="status"
          :items="statuses"
          :rules="[(v) => !!v || 'Status is required']"
          label="Product status"
          required
        ></v-select>
        <v-select
          v-model="category"
          :items="categories"
          :rules="[(v) => !!v || 'Category is required']"
          label="Product category"
          required
        ></v-select>

        <v-btn color="success" class="mr-4" type="submit"> Create </v-btn>

        <v-btn color="error" class="mr-4" @click="isLogin = !isLogin">
          Cancel
        </v-btn>
      </v-form>
    </v-card-actions>
  </div>
</template>

<script>
import axios from "axios";
export default {
  middleware: ["checkAuth","auth"],
  data() {
    return {
      isLogin: true,
      productName: "",
      productDescription: "",
      productPrice: "",
      status: false,
      imgLink: "",
      password: "",
      category: "",
      statuses: [true, false],
      categories: ["CATA", "CATB", "CATC", "CATD"],
      nameRules: [
        (v) => !!v || "Input is required",
        (v) => (v && v.length >= 3) || "Input must be more than 3 characters",
      ],
      priceRules: [
        (v) => !!v || "Price is required",
        (v) => Number.isInteger(Number(v)) || "Price must be number",
      ],
    };
  },
  methods: {
    onSubmitted() {
      const email = this.email;
      const password = this.password;
      const username = this.username;
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email,
          username,
          password,
        })
        .then(() => {
          this.$router.push("/admin");
        });
    },
  },
};
</script>
