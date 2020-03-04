<template>
  <div class="home">
    <drawing-board></drawing-board>
    <keyboard-keys></keyboard-keys>

    <!-- 
      ****************** TEST PURPOSE **********
      <textarea rows="10" v-model="text"></textarea>
      -->

    <file-reader @load="text = $event"></file-reader>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingBoard from "@/components/DrawingBoard";
import KeyboardKeys from "@/components/KeyboardKeys";
import FileReader from "@/components/FileReader";

export default {
  name: "home",
  data: () => ({ text: "" }),
  components: {
    DrawingBoard,
    KeyboardKeys,
    FileReader
  }
};
</script>
