<script>
import { store } from "../../store";
export default {
  name: "CardComp",
  data() {
    return {
      store,
    };
  },
  props: {
    img: String,
    title: String,
    desc: String,
  },
};
</script>
<template>
  <div class="card">
    <figure>
      <img :src="img" />
    </figure>
    <div class="card-footer">
      <h3>{{ title }}</h3>
      <h6>
        {{ desc }}
      </h6>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.card {
  color: #000;
  width: calc(100% / 5 - 15px);
  figure {
    img {
      width: 100%;
    }
  }
  .card-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    min-height: 80px;
    background-color: $main-orange;
    padding: 0.5rem;
    text-align: center;
    h3 {
      color: #fff;
      font-size: 1rem;
    }
  }
}
</style>
