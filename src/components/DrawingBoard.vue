<template>
  <div id="background" class="row row-no-gutters">
    <div class="col-sm-9">
      <canvas
        ref="canvas"
        v-on:mousedown="handleMouseDown"
        v-on:mouseup="handleMouseUp"
        v-on:mousemove="handleMouseMove"
        width="800px"
        height="600px"
      ></canvas>
    </div>
    <div class="container col-sm-3">
      <button type="button" class="btn btn-info" id="record">record</button>
      <br />
      <br />
      <button type="button" class="btn btn-info" id="play">Play</button>
      <br />
      <br />
      <button
        v-on:click="clear()"
        type="button"
        class="btn btn-info"
        id="clear"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouse: {
        current: {
          x: 0,
          y: 0
        },
        down: false
      }
    };
  },

  computed: {
    currentMouse: function() {
      // rect is a DOMRect(rectangle) object with eight properties:
      //left, top, right, bottom, x, y, width, height
      const rect = this.$refs.canvas.getBoundingClientRect(); //Assert that c is non-null and access getBoundingClientRect()

      return {
        x: this.mouse.current.x - rect.left,
        y: this.mouse.current.y - rect.top
      };
    }
  },

  methods: {
    draw(event) {
      if (this.mouse.down) {
        const c = this.$refs.canvas;
        const ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    },
    handleMouseDown(event) {
      this.mouse.down = true;
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      };
      const c = this.$refs.canvas;
      const ctx = c.getContext("2d");

      ctx.moveTo(this.currentMouse.x, this.currentMouse.y);
    },
    handleMouseUp() {
      this.mouse.down = false;
    },
    handleMouseMove(event) {
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      };
      this.draw(event);
    },
    clear() {
      const c = this.$refs.canvas;
      const ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath(); //see mdn docu
    }
  }
};
</script>

<style lang="stylus" scoped>
canvas {
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
