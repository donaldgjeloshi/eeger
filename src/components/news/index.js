import Vue from "vue";
import NewsHolder from "./NewsHolder";

//two ways how to register components globaly
Vue.component("news-holder", NewsHolder);
Vue.component("link-holder", require("./LinkHolder").default);
Vue.component("adds-holder", require("./AddsHolder").default);
