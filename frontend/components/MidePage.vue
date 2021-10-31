<template>
  <v-sheet :max-width="$vuetify.breakpoint.sm ? '' : 500">
    <div>
      <strong>Category A</strong>
      <v-slide-group class="pa-4" active-class="success" show-arrows>
        <v-slide-item
          v-for="product in categoryFilterA"
          :key="product.productId"
        >
          <card-product
            :productName="product.productName"
            :productId="product.productId"
            :productIsSale="product.productIsSale"
            :productOriginalPrice="product.productOriginalPrice"
            :productAfterSale="product.productAfterSale"
            :productCategory="product.productCategory"
            :productDescription="product.productDescription"
          />
        </v-slide-item>
      </v-slide-group>
    </div>
    <div>
      <strong>Category B</strong>
      <v-slide-group class="pa-4" active-class="success" show-arrows>
        <v-slide-item
          v-for="product in categoryFilterB"
          :key="product.productId"
        >
          <card-product
            :productName="product.productName"
            :productId="product.productId"
            :productIsSale="product.productIsSale"
            :productOriginalPrice="product.productOriginalPrice"
            :productAfterSale="product.productAfterSale"
            :productCategory="product.productCategory"
            :productDescription="product.productDescription"
          />
        </v-slide-item>
      </v-slide-group>
    </div>
    <div>
      <strong>Category C</strong>
      <v-slide-group class="pa-4" active-class="success" show-arrows>
        <v-slide-item
          v-for="product in categoryFilterC"
          :key="product.productId"
        >
          <card-product
            :productName="product.productName"
            :productId="product.productId"
            :productIsSale="product.productIsSale"
            :productOriginalPrice="product.productOriginalPrice"
            :productAfterSale="product.productAfterSale"
            :productCategory="product.productCategory"
            :productDescription="product.productDescription"
          />
        </v-slide-item>
      </v-slide-group>
    </div>
    <div>
      <strong>Category D</strong>
      <v-slide-group class="pa-4" active-class="success" show-arrows>
        <v-slide-item
          v-for="product in categoryFilterD"
          :key="product.productId"
        >
          <card-product
            :productName="product.productName"
            :productId="product.productId"
            :productIsSale="product.productIsSale"
            :productOriginalPrice="product.productOriginalPrice"
            :productAfterSale="product.productAfterSale"
            :productCategory="product.productCategory"
            :productDescription="product.productDescription"
          />
        </v-slide-item>
      </v-slide-group>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      productFilter: [],
      products: [
        {
          productId: "1",
          productName: "Product 1",
          productIsSale: true,
          productOriginalPrice: "100",
          productAfterSale: "50",
          productCategory: "a",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "2",
          productName: "Product 2",
          productIsSale: false,
          productOriginalPrice: "100",
          productAfterSale: "",
          productCategory: "b",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "3",
          productName: "Product 3",
          productIsSale: true,
          productOriginalPrice: "100",
          productAfterSale: "50",
          productCategory: "c",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "4",
          productName: "Product 4",
          productIsSale: true,
          productOriginalPrice: "100",
          productAfterSale: "50",
          productCategory: "d",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "5",
          productName: "Product 5",
          productIsSale: false,
          productOriginalPrice: "40",
          productAfterSale: "",
          productCategory: "a",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "6",
          productName: "Product 6",
          productIsSale: false,
          productOriginalPrice: "10",
          productAfterSale: "",
          productCategory: "b",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "7",
          productName: "Product 7",
          productIsSale: true,
          productOriginalPrice: "100",
          productAfterSale: "50",
          productCategory: "c",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "8",
          productName: "Product 8",
          productIsSale: true,
          productOriginalPrice: "100",
          productAfterSale: "50",
          productCategory: "d",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "9",
          productName: "Product 9",
          productIsSale: false,
          productOriginalPrice: "100",
          productAfterSale: "",
          productCategory: "a",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "10",
          productName: "Product 10",
          productIsSale: false,
          productOriginalPrice: "50",
          productAfterSale: "",
          productCategory: "b",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "11",
          productName: "Product 11",
          productIsSale: true,
          productOriginalPrice: "400",
          productAfterSale: "150",
          productCategory: "c",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "12",
          productName: "Product 12",
          productIsSale: true,
          productOriginalPrice: "190",
          productAfterSale: "80",
          productCategory: "d",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "13",
          productName: "Product 13",
          productIsSale: false,
          productOriginalPrice: "10",
          productAfterSale: "",
          productCategory: "a",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "14",
          productName: "Product 14",
          productIsSale: true,
          productOriginalPrice: "100",
          productAfterSale: "50",
          productCategory: "b",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "15",
          productName: "Product 15",
          productIsSale: false,
          productOriginalPrice: "200",
          productAfterSale: "",
          productCategory: "c",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "16",
          productName: "Product 16",
          productIsSale: true,
          productOriginalPrice: "80",
          productAfterSale: "30",
          productCategory: "d",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "17",
          productName: "Product 17",
          productIsSale: true,
          productOriginalPrice: "100",
          productAfterSale: "50",
          productCategory: "a",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "18",
          productName: "Product 18",
          productIsSale: false,
          productOriginalPrice: "10",
          productAfterSale: "",
          productCategory: "b",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          productId: "19",
          productName: "Product 19",
          productIsSale: false,
          productOriginalPrice: "100",
          productAfterSale: "",
          productCategory: "c",
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
      ],
    };
  },
  methods: {
    categoryFilter(productCate) {
      return this.products.filter((product) => {
        product.productCategory == productCate;
      });
    },
  },
  computed: {
    categoryFilterA() {
      return this.products.filter((product) => {
        // console.log(product.productCategory == "a");
        return product.productCategory == "a";
      });
    },
    categoryFilterB() {
      return this.products.filter((product) => {
        // console.log(product.productCategory == "a");
        return product.productCategory == "b";
      });
    },
    categoryFilterC() {
      return this.products.filter((product) => {
        // console.log(product.productCategory == "a");
        return product.productCategory == "c";
      });
    },
    categoryFilterD() {
      return this.products.filter((product) => {
        // console.log(product.productCategory == "a");
        return product.productCategory == "d";
      });
    },
  },
};
</script>
