<template>
  <div class="full-width center-content">
    <h1>Spaghetti w/ TeatBalls!</h1>
    <hello-component name="Ned" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent';

export default {
  components: {
    HelloComponent,
  },
};
</script>

<!--
<style scoped>
.full-width {
  width: 100%;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
-->
