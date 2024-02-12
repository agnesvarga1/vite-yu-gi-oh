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
      if (!store.searchText) {
        store.apiUrl =
          "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0";
      } else {
        store.apiUrl += `&archetype=${store.searchText}`;
      }
      axios.get(store.apiUrl).then((res) => {
        store.yuCards = res.data;
        store.loading = false;
      });
    },
    getArcheTypeArr() {
      let archeTypeSet = null;
      axios.get(store.apiUrl).then((res) => {
        const result = res.data.data;
        const tempArr = [];
        result.forEach((item) => {
          if (item.archetype === undefined) {
            tempArr.push("No archetype");
          } else {
            tempArr.push(item.archetype);
          }
        });
        archeTypeSet = new Set(tempArr);
        store.archeTypeArr = [...archeTypeSet];
        // console.log(store.archeTypeArr.length);
      });
    },
  },
  mounted() {
    this.fillArrFromApi();
    this.getArcheTypeArr();
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <SearchComp @search="fillArrFromApi" />
    <AppMain />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
