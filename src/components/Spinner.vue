<script>
export default {
  name: "Spinner",
};
</script>
<template>
  <div>
    <svg height="120" width="120" xmlns="http://www.w3.org/2000/svg">
      <circle r="50" cx="60" cy="60" stroke-width="5" fill="none" />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
div {
  width: 150px;
  margin: 0 auto;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  svg {
    stroke: $main-orange;
    stroke-dasharray: 280;
    transform: rotate(0);
    stroke-dashoffset: 0;
    animation: 2s infinite linear spinning;
  }
  @keyframes spinning {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
