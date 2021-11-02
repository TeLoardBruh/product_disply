import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      token: null,
    },
    mutations: {
      setProduct(state, products) {
        state.products = products;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("http://localhost:3000/products")
          .then((data) => {
            // console.log(data.data);

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
              console.log(data);
              vuexContext.commit("setToken", data.data.accessToken);
              localStorage.setItem("token", data.data.accessToken);
              localStorage.setItem(
                "tokenExpiration",
                new Date().getTime() * 3600
              );
              Cookies.set("jwt", data.data.accessToken);
              Cookies.set("tokenExpiration", new Date().getTime() * 3600);
            });
        }
        return axios
          .post(url + "/signIn", {
            email: payload.email,
            password: payload.password,
          })
          .then((data) => {
            console.log(data);
            vuexContext.commit("setToken", data.data.accessToken);
            localStorage.setItem("token", data.data.accessToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() * 3600
            );
            Cookies.set("jwt", data.data.accessToken);
            Cookies.set("tokenExpiration", new Date().getTime() * 3600);
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
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookies.remove("jwt");
        Cookies.remove("tokenExpiration");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExperation");
        }
      },
    },
    getters: {
      products(state) {
        return state.products;
      },
      token(state) {
        return state.token;
      },
      isAuthenticated(state) {
        return state.token != null;
      },
    },
  });
};

export default createStore;
