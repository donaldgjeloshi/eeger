<template>
  <div>
    <input type="text" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    typedKey: function() {
      alert("hey there");
    }
  },
  mounted() {
    document.addEventListener("keydown", this.typedKey);
  }
};
</script>
<style lang="stylus" scoped></style>
