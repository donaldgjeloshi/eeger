<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1 class="text-center mb-5">My component based structure</h1>
    <div class="row">
      <div class="col-md-9 col-12">
        <news-holder v-on:read="newsRead" date="yesterday"></news-holder>
      </div>
      <div class="col-md-2 d-sm-none d-md-block">
        <link-holder></link-holder>

        <adds-holder></adds-holder>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import NewsHolder from "@/components/NewsHolder";
import AddsHolder from "@/components/AddsHolder";
import LinkHolder from "@/components/LinkHolder";

export default {
  name: "home",
  components: {
    NewsHolder,
    LinkHolder,
    AddsHolder
  },
  methods: {
    newsRead(num) {
      alert("You read news! Number is: " + num);
    }
  }
};
</script>
