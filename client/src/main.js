import Vue from "vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueApollo);

const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const apolloProvider = new VueApollo({ defaultClient });

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
