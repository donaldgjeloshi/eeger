<template>
  <div>
    <div
      class="col-sm-9"
      v-focus
      tabindex="0"
      @keyup="squack('a button was clicked')"
    >
      <p>Press left or right button to get squack!</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    squack(text) {
      alert(text);
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
div {
  margin-top: 20px;
}
</style>
