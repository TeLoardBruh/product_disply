<template>
  <v-sheet :max-width="$vuetify.breakpoint.xl ? 800 : 500" :min-width="$vuetify.breakpoint.sm ? 800 : 400">
    <div v-for="i in 4" :key="i">
      <strong>Category {{ i }}</strong>
      <v-slide-group
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="100"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </v-sheet>
</template>
