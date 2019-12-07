<template>
  <div class="home">
    <drawing-board></drawing-board>
    <keyboard-keys></keyboard-keys>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingBoard from "@/components/DrawingBoard";
import KeyboardKeys from "@/components/KeyboardKeys";

export default {
  name: "home",
  components: {
    DrawingBoard,
    KeyboardKeys
  }
};
</script>
