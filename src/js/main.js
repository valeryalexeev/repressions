import Vue from "vue";
window.Vue = Vue;

Vue.component('pr-episodes', require("@c/Episodes.vue").default);
Vue.component('pr-help', require("@c/Help.vue").default);
Vue.component('pr-links', require("@c/Links.vue").default);
Vue.component('pr-numbers', require("@c/Numbers.vue").default);

/**
 * Initialize Vue App
 */
var app = new Vue({
    el: '#app'
});