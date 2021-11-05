<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <v-sheet color="grey lighten-4 text-center" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            src="https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          ></v-img>
        </v-avatar>

        <div>The Display Product Web</div>
      </v-sheet>

      <v-divider></v-divider>
      <div v-if="token && userRole">
        <v-list v-for="[icon, text, router] in linksAuth" :key="icon">
          <NuxtLink :to="router" style="text-decoration: none !important">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
        </v-list>
      </div>
      <div v-else-if="token && !userRole">
        <v-list v-for="[icon, text, router] in linksUser" :key="icon">
          <NuxtLink :to="router" style="text-decoration: none !important">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
        </v-list>
      </div>
      <div v-else>
        <v-list v-for="[icon, text, router] in links" :key="icon">
          <NuxtLink :to="router" style="text-decoration: none !important">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
        </v-list>
      </div>
    </v-navigation-drawer>
    <!-- drawer for small device filter button -->

    <v-app-bar app class="">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-center">Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="">
        <v-menu
          offset-y
          :close-on-content-click="false"
          left
          nudge-left="150"
          z-index="1"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text outlined v-bind="attrs" v-on="on">
              <v-icon>mdi-filter</v-icon>
            </v-btn>
          </template>
          <v-container class="mt-10 p-10 white">
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
                  <side-drop-down
                    type="price"
                    buttonSize="small"
                    v-on:choosePriceRange="choosePriceRange($event)"
                  />
                  <side-drop-down type="category" v-on:chooseCategory="chooseCategory($event)"/>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-menu>

        <v-btn small text outlined>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn v-if="token" small text outlined @click="Logout">Logout</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <Nuxt
        :style="
          this.$vuetify.breakpoint.xs ? 'margin-bottom: 50% !important' : ''
        "
      />
      <v-footer dark padless absolute>
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
      absolute: true,
      opacity: 1,
      overlay: false,
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
        ["mdi-inbox-arrow-down", "Home", "/"],
        ["mdi-send", "Login/SignUp", "/auth"],
        ["mdi-delete", "About Us", "/about"],
        ["mdi-alert-octagon", "FAQ", "/faq"],
      ],
      linksUser: [
        ["mdi-inbox-arrow-down", "Home", "/"],
        ["mdi-delete", "About Us", "/about"],
        ["mdi-alert-octagon", "FAQ", "/faq"],
      ],

      linksAuth: [
        ["mdi-inbox-arrow-down", "Home", "/"],
        ["mdi-send", "Product", "/admin"],
        ["mdi-send", "Create Product", "/admin/new-product"],
        ["mdi-delete", "About Us", "/about"],
        ["mdi-alert-octagon", "FAQ", "/faq"],
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    },
    userRole() {
      if (
        this.$store.getters.userRole == "DEV" ||
        this.$store.getters.userRole == "ADMIN"
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    Logout() {
      this.$store.dispatch("logout");
      this.$router.push("/auth");
    },
    choosePriceRange(priceRange) {
      this.$store.dispatch("filterProduct", priceRange);
    },
     chooseCategory(radioGroup) {
      this.$store.dispatch("chooseCategory", radioGroup);
    },
  },
};
</script>
<style scoped>
.stickyFilter {
  position: -webkit-sticky;
  position: sticky;
  top: 16em;
}
</style>
