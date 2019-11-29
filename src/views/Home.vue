<template>
  <div class="home">
    <drawing-board></drawing-board>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingBoard from "@/components/DrawingBoard";

export default {
  name: "home",
  components: {
    DrawingBoard
  }
};
</script>
