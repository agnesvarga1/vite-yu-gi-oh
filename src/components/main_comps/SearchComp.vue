<script>
import { store } from "../../store";
export default {
  name: "SearchComp",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div>
    <select v-model="store.searchText" name="" id="" @change="$emit('search')">
      <option
        v-for="(archetype, index) in store.archeTypeArr"
        :key="index"
        :value="archetype"
      >
        {{ archetype }}
      </option>
    </select>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
div {
  @include container-setup;
  margin-block: 1rem;
  select {
    padding: 0.3rem;
    width: 10%;
  }
}
</style>
