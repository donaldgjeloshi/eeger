<template>
  <div id="background" class="row row-no-gutters">
    <div class="col-sm-9">
      <canvas
        ref="canvas"
        v-on:mousedown="handleMouseDown"
        v-on:mouseup="handleMouseUp"
        v-on:mousemove="handleMouseMove"
        width="1000px"
        height="550px"
      ></canvas>
    </div>

    <div class="container col-sm-3">
      <button ref="record" type="button" class="btn btn-info" id="record">
        record
      </button>
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
      <br />
      <br />
      <button
        type="button"
        class="btn btn-info"
        v-on:click="download('data.json', 'text/json')"
      >
        Create file
      </button>
      <br />
      <br />
      <a v-on:click="clear()" ref="download" href="">download</a>
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
      },
      recording: []
    };
  },

  computed: {
    currentMouse: function() {
      // rect is a DOMRect(rectangle) object with eight properties:
      // left, top, right, bottom, x, y, width, height
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
        y: event.pageY,
        //date
        z: Date.now()
      };
      if (this.mouse.down) {
        this.recording.push({
          x: this.mouse.current.x,
          y: this.mouse.current.y - 60,
          time: this.mouse.current.z
        });
        console.log(this.recording);
      }
      this.draw(event);
    },
    clear() {
      const c = this.$refs.canvas;
      const ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath(); //see mdn docu
      this.recording = [];
    },
    download(name, type) {
      const a = this.$refs.download;
      const file = new Blob([JSON.stringify(this.recording, null, 2)], {
        type: "application/json"
      });

      a.href = URL.createObjectURL(file);
      a.download = name;
      this.recording = [];
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
