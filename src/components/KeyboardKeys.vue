<template>
  <div>
    <div class="col-sm-9">
      <canvas ref="canvas2" width="200px" height="70px"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    typedKey: function(event) {
      const c = this.$refs.canvas2;
      const ctx = c.getContext("2d");
      ctx.font = "30px Arial";
      //clear the canvas before typing the new number
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath(); //see mdn docu
      const char = event.key;
      //console.log(e);
      ctx.fillText(char, 40, 50);
    }
  },
  mounted() {
    //event keydown
    document.addEventListener("keydown", this.typedKey);
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
