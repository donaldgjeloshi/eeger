<template>
  <div>
    <p class="mt-5 text-secondary">Adds</p>
    <div class="mt-2">
      <div v-for="add in adds" v-bind:key="add.id">
        <a href="#">
          <img v-bind:src="add" alt="image" class="d-block mb-3" />
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AddsHolder",
  data() {
    return {
      adds: [
        "https://www.braveterry.com/wp-content/uploads/2015/12/vue.js.png",
        "https://cdn-images-1.medium.com/max/1200/0*iBvb3FQRnC4Xdyv4.jpg",
        "https://www.braveterry.com/wp-content/uploads/2015/12/vue.js.png"
      ]
    };
  }
});
</script>

<style lang="stylus" scoped>
img {
  width: 150px;
}
</style>
