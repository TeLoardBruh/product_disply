import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
    },
    mutations: {
      setProduct(state, products) {
        state.products = products;
      },
      setProductsFilter(state, productsFilter) {
        state.productsFilter = productsFilter;
      },
      setToken(state, token) {
        state.token = token;
      },
      addPost(state, product) {
        state.products.push(product);
      },
      editProduct(state, editProduct) {
        const productIndex = state.products.findIndex(
          (post) => post.id === editProduct.id
        );
        state.products[productIndex] = editProduct;
      },
      // =======================================================
      setUserRole(state, userRole) {
        state.userRole = userRole;
      },
      // =======================================================
      clearToken(state) {
        state.token = null;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("http://localhost:3000/products")
          .then((data) => {
            const productArray = [];
            for (const key in data.data) {
              productArray.push({ ...data.data[key], id: key });
            }
            vuexContext.commit("setProduct", data.data);
          })
          .catch((e) => context.error(e));
      },
      setProduct(vuexContext, products) {
        vuexContext.commit("setProduct", products);
      },
      addPost(vuexContext, product) {
        const createProduct = { ...product };
        const config = {
          headers: { Authorization: `Bearer ${vuexContext.state.token}` },
        };
        return axios
          .post("http://localhost:3000/products/", createProduct, config)
          .then((data) => {
            vuexContext.commit("addPost", { ...createProduct });
          })
          .catch((e) => console.log(e));
      },
      editProduct(vuexContext, editProduct) {
        const config = {
          headers: { Authorization: `Bearer ${vuexContext.state.token}` },
        };

        return axios
          .patch(
            "http://localhost:3000/products/" + editProduct.id + "/status",
            { status: Boolean(editProduct.status) },
            config
          )
          .then((res) => vuexContext.commit("editProduct", editProduct))
          .catch((e) => console.log(e));
      },
      authenticateUser(vuexContext, payload) {
        let url = "http://localhost:3000/auth";
        if (payload.isLogin) {
          return axios
            .post(url + "/signUp", {
              email: payload.email,
              username: payload.username,
              password: payload.password,
            })
            .then((data) => {
              vuexContext.commit("setToken", data.data.accessToken);
              localStorage.setItem("token", data.data.accessToken);
              localStorage.setItem(
                "tokenExpiration",
                new Date().getTime() + 1 * 3600 * 1000
              );
              Cookies.set("jwt", data.data.accessToken);
              Cookies.set(
                "tokenExpiration",
                new Date().getTime() + 1 * 3600 * 1000
              );
            });
        }
        return axios
          .post(url + "/signIn", {
            email: payload.email,
            password: payload.password,
          })
          .then((data) => {
            vuexContext.commit("setToken", data.data.accessToken);
            localStorage.setItem("token", data.data.accessToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + 1 * 3600 * 1000
            );
            Cookies.set("jwt", data.data.accessToken);
            Cookies.set(
              "tokenExpiration",
              new Date().getTime() + 1 * 3600 * 1000
            );
            // vuexContext.commit("setLogOutTimer", 3600);
          });
      },

      initAuth(vuexContext, req) {
        let token;
        let tokenExpiration;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          const jwtExpiration = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("tokenExpiration="))
            .split("=")[1];
          tokenExpiration = jwtExpiration;
        } else if (process.client) {
          token = localStorage.getItem("token");
          tokenExpiration = localStorage.getItem("tokenExpiration");
        } else {
          token = null;
          tokenExpiration = null;
        }
        if (new Date().getTime() > +tokenExpiration || !token) {
          vuexContext.dispatch("logout");
          return;
        }

        vuexContext.commit("setToken", token);
        const { role } = jwt.decode(token);
        vuexContext.commit("setUserRole", role);
      },
      // ==========================================
      setUserRole(vuexContext, userRole) {
        const { role } = jwt.decode(userRole);
        vuexContext.commit("setUserRole", "role");
      },
      // ==========================================
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookies.remove("jwt");
        Cookies.remove("tokenExpiration");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      },

      // filter logic
      filterProduct(vuexContext, payload) {
        if (payload == "lowtohigh") {
          const products = vuexContext.state.products;
          const test = products.sort(
            (a, b) => parseFloat(a.productPrice) - parseFloat(b.productPrice)
          );
          // console.log(test);
          return test;
        } else if (payload == "hightolow") {
          const products = vuexContext.state.products;
          const test = products.sort(
            (a, b) => parseFloat(b.productPrice) - parseFloat(a.productPrice)
          );
          // console.log(test);
          return test;
        } else {
          vuexContext.dispatch("nuxtServerInit");
        }
      },
      chooseCategory(vuexContext, payload) {
        const res = vuexContext.state.products.filter((product) => {
          return product.category === payload;
        });
        // console.log(res);
        vuexContext.commit("setProductsFilter", res);
      },
    },
    getters: {
      products(state) {
        const result = state.products.reduce((r, a) => {
          r[a.category] = [...(r[a.category] || []), a];
          return r;
        }, {});
        return result;
      },

      token(state) {
        return state.token;
      },
      userRole(state) {
        return state.userRole;
      },
      isAuthenticated(state) {
        return state.token != null;
      },
      productsFilter(state) {
        return state.productsFilter;
      },
    },
  });
};

export default createStore;
