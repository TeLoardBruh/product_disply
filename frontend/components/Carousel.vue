<template>
  <v-carousel
    v-model="model"
    :show-arrows="false"
    :hide-delimiter-background="true"
    :light="true"
    height="450"
  >
    <template>
      <v-carousel-item v-for="item in items" :key="item.tile">
        <v-row style="height: 100%">
          <template>
            <template>
              <v-col>
                <v-sheet height="100%">
                  <v-row
                    class="fill-height mx-auto"
                    align="center"
                    justify="center"
                  >
                    <v-flex sm6 md6 align="center" justify="center" class="">
                      <v-img
                        :src="item.img"
                        :max-height="$vuetify.breakpoint.xs ? 200 : 500"
                      ></v-img>
                    </v-flex>
                    <v-flex sm6 md6 align="center" justify="center">
                      <h1
                        class="
                          font-weight-black
                          headline
                          grey--text
                          text-center
                        "
                      >
                        {{ item.title }}
                      </h1>
                      <h2
                        class="
                          subtitle-1
                          text-center
                          font-weight-bold
                          grey--text
                          text--lighten-1
                        "
                      >
                        {{ item.subtitle }}
                      </h2>
                      <p
                        class="
                          caption
                          text-center
                          mx-10
                          grey--text
                          text--darken-3
                        "
                      >
                        {{ item.description }}
                      </p>
                      <v-row align="center" justify="space-around">
                        <v-btn tile> Shop Now! </v-btn>
                      </v-row>
                    </v-flex>
                  </v-row>
                </v-sheet>
              </v-col>
            </template>
          </template>
        </v-row>
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      items: [
        {
          title: "Header of product 1",
          subtitle: "Subtitle of product 1",
          img: "https://images.pexels.com/photos/1749799/pexels-photo-1749799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          description: `Morbi mattis ullamcorper velit. Donec orci lectus,
                        aliquam ut, faucibus non, euismod id, nulla. Fusce
                        convallis metus id felis luctus adipiscing. Aenean
                        massa. Vestibulum purus quam, scelerisque ut, mollis
                        sed, nonummy id, metus.`,
        },
        {
          title: "Header of product 2",
          subtitle: "Subtitle of product 2",
          img: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. `,
        },
        {
          title: "Header of product 3",
          subtitle: "Subtitle of product 3",
          img: "https://images.pexels.com/photos/7504611/pexels-photo-7504611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        },
      ],
    };
  },
  computed: {
    columns() {
      return 2;
    },
  },
};
</script>
