<template>
  <div id="canvas">
    <canvas
      ref="canvas"
      v-on:mousedown="handleMouseDown"
      v-on:mouseup="handleMouseUp"
      v-on:mousemove="handleMouseMove"
      width="700px"
      height="600px"
    ></canvas>
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
        previous: {
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
      const rect = this.refs.canvas.getBoundingClientRect(); // Assert that c is non-null and access getBoundingClientRect()

      return {
        x: this.mouse.current.x - rect.left,
        y: this.mouse.current.y - rect.top
      };
    }
  },

  methods: {
    draw(event) {
      if (this.mouse.down) {
        const c = this.refs.canvas;
        if (canvas.getContext) {
          const stx = c.getContext("2d");

          ctx.clearRect(0, 0, 800, 800);
          ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
          ctx.strokeStyle = "#F60E02";
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          alert("your Browser doesn't support canvas HTMLElement!!!");
        }
      }
    },
    handleMouseDown(event) {
      this.mouse.down = true;
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      };
      const c = this.refs.canvas;
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
    }
  }
};
</script>
