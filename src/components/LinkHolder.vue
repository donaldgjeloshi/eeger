<template>
  <div>
    <h5>Additional lonks</h5>
    <div class="link-container">
      <p v-for="(link, index) in links" v-bind:key="index">
        <a v-bind:href="link.url">{{ link.name }}</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LinkHolder",
  data() {
    return {
      links: [
        { url: process.env.BASE_URL + "sport/", name: "Sport News " },
        { url: process.env.BASE_URL + "economy/", name: "Economy News " },
        { url: process.env.BASE_URL + "latest/", name: "Latest News " }
      ]
    };
  }
});
</script>
