<template>
  <div>
    <v-card-actions class="justify-center">
      <v-form
        @submit.prevent="onSubmitted"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="editedPost.productName"
          :rules="nameRules"
          label="Product Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="editedPost.productDescription"
          :rules="nameRules"
          label="Product Description"
          required
        ></v-text-field>
        <v-text-field
          v-model="editedPost.productPrice"
          :rules="priceRules"
          label="Product Price"
          required
        ></v-text-field>
        <v-text-field
          v-model="editedPost.imgLink"
          :rules="nameRules"
          label="Product Image Link"
          required
        ></v-text-field>
        <v-select
          v-model="editedPost.status"
          :items="statuses"
          :rules="[(v) => v != null || 'Status is required']"
          label="Product status"
          required
        ></v-select>
        <v-select
          v-model="editedPost.category"
          :items="categories"
          :rules="[(v) => !!v || 'Category is required']"
          label="Product category"
          required
        ></v-select>

        <v-btn color="success" class="mr-4" type="submit" :disabled="!valid">
          Create
        </v-btn>

        <v-btn color="error" class="mr-4" @click="cancel"> Cancel </v-btn>
      </v-form>
    </v-card-actions>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.product
        ? { ...this.product }
        : {
            productName: "",
            productDescription: "",
            productPrice: "",
            status: "",
            imgLink: "",
            category: "",
          },
      valid: true,
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
      if (this.$refs.form.validate()) {
        this.$emit("submit", this.editedPost);
      }
    },
    cancel() {
      this.$router.push("/admin/");
    },
  },
};
</script>
