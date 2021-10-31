<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <v-sheet color="grey lighten-4 text-center" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          ></v-img>
        </v-avatar>

        <div>The Display Product Web</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- drawer for small device filter button -->
    <v-navigation-drawer v-model="drawerFilter" absolute temporary>
      <v-container class="mt-4">
        <v-row class="m-10">
          <v-col sm="hidden" class="stickyFilter">
            <div class="stickyFilter">
              <v-flex row wrap class="mx-5">
                <div class="font-weight-bold">Filters</div>
                <v-spacer></v-spacer>
                <div><a>Clear</a></div>
              </v-flex>
              <v-divider class="mt-3 mx-5" width="80%"></v-divider>

              <div class="mt-2"></div>
              <side-drop-down type="price" buttonSize="small" />
              <side-drop-down type="category" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app class="">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-center">Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="">
        <v-btn small text outlined @click.stop="drawerFilter = !drawerFilter">
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-btn small text outlined>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <Nuxt />

      <v-footer dark padless>
        <v-card
          flat
          tile
          class="black lighten-1 white--text text-center"
          width="100%"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus id tenetur eveniet aut reprehenderit quo sit reiciendis
            neque magni excepturi nam nostrum fugit fuga in eaque maiores
            delectus, doloremque sapiente?
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Rax</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      drawerFilter: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
      ],
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      miniVariant: false,
      // right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      links: [
        ["mdi-inbox-arrow-down", "Home"],
        ["mdi-send", "Login/SignUp"],
        ["mdi-delete", "About Us"],
        ["mdi-alert-octagon", "FAQ"],
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
<style scoped></style>
