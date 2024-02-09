<script>
export default {
  name: "SearchComp",
};
</script>
<template>
  <div>
    <select name="" id="">
      <option value="">ALien</option>
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
