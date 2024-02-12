<script>
import { store } from "../../store";
import CardComp from "./CardComp.vue";
import Spinner from "../Spinner.vue";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: {
    CardComp,
    Spinner,
  },
};
</script>
<template>
  <div class="wrapper">
    <div class="cards-container">
      <div v-if="store.yuCards.data" class="top">
        <h4>Found {{ store.yuCards.data.length }} cards</h4>
      </div>
      <Spinner v-if="store.loading" />
      <div class="cards">
        <CardComp
          v-for="(item, index) in store.yuCards.data"
          :key="index"
          :img="item.card_images[0].image_url"
          :title="item.name"
          :desc="item.archetype"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
.wrapper {
  @include container-setup;
  background-color: #fff;
  padding: 1rem;
  .cards-container {
    .top {
      background-color: $dark-color;
      padding: 1rem;
    }
    .cards {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }
  }
}
.no-show {
  display: none;
}
</style>
