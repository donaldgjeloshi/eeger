<template>
  <div class="container col-sm-3">
    <label class="file-reader">
      Read File
      <input type="file" @change="loadJSONFromFile" />
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    loadJSONFromFile(event) {
      const FILE_IN = 0;
      const file = event.target.files[FILE_IN];
      //constructor
      const reader = new FileReader();

      reader.onload = e => {
        this.$emit("load", e.target.result);
        const textFile = e.target.result;
        console.log(textFile);
      };
      reader.readAsText(file);
    }
  }
};
</script>

<style>
.file-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.file-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
