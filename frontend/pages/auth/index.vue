<template>
  <div>
    <v-card-actions class="justify-center">
      <v-form @submit.prevent="onSubmitted">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          label="Username"
          v-if="isLogin"
          v-model="username"
          :rules="nameRules"
          required
        />
        <v-text-field
          label="Password"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-1"
          hint="At least 8 characters"
          @click:append="showPassword = !showPassword"
          required
        />

        <v-btn color="success" class="mr-4" type="submit">
          {{ isLogin ? "Signup" : "Login" }}
        </v-btn>

        <v-btn color="error" class="mr-4" @click="isLogin = !isLogin">
          Switch to {{ isLogin ? "Signup" : "Login" }}
        </v-btn>
      </v-form>
    </v-card-actions>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isLogin: true,
      email: "",
      username: "",
      password: "",
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name must be more than 3 characters",
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
          this.$router.push("/");
        });
    },
  },
};
</script>
