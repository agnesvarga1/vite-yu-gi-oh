<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <figure>
      <div><img src="../assets/img/yu-logo.png" alt="" /></div>
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
  padding-block: 1rem;
  display: flex;
  align-items: center;

  position: relative;
  figure {
    width: 10%;
    position: absolute;
    left: 2rem;
    img {
      width: 100%;
    }
  }
  div {
    @include container-setup;
  }
}
</style>
