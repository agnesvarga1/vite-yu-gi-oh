<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <figure>
      <img src="../assets/img/yu-logo.png" alt="" />
    </figure>
    <div>
      <h1>Yu-Gi-Oh Api</h1>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
header {
  background-color: #fff;
  color: #000;

  padding-left: 2rem;
  display: flex;
  align-items: center;
  figure {
    width: 120px;

    img {
      width: 100%;
    }
  }
  div {
    @include container-setup;
  }
}
</style>
