<template>
  <div>
    <div class="col-sm-9">
      <canvas
        v-on:keydown="type($event)"
        ref="canvas"
        width="1000px"
        height="70px"
      ></canvas>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    type(event) {
      console.log(event);
      const c = this.$refs.canvas;
      const ctx = c.getContext("2d");
      ctx.font = "30px Arial";
      ctx.fillText(event.keyCode, 20, 20);
    }
  }
};
</script>
<style lang="stylus" scoped>
canvas {
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}
</style>
