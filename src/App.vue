<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import SearchComp from "./components/main_comps/SearchComp.vue";
import AppMain from "./components/main_comps/AppMain.vue";

import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    SearchComp,
    AppMain,
  },
  methods: {
    fillArrFromApi: function () {
      store.loading = true;
      axios.get(store.apiUrl).then((res) => {
        store.yuCards = res.data;
        store.loading = false;
      });
    },
  },
  mounted() {
    this.fillArrFromApi();
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <SearchComp />
    <AppMain />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
