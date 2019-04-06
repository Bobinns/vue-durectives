// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// custom directives have 3 arguments
//   el - the element the binding stis on
//   binding - an object containing arguments that are passed into the hooks
//   vnode - the element in the virtual DOM

// Demo #1
Vue.directive("sticky", function(el, binding, vnode) {
  el.style.position = "fixed";
});

// Demo #2
Vue.directive("orange", function(el, binding, vnode) {
  el.style.color = "orange";
});

// Demo #3 - Passing a value into our custom directive
// binding will have the passed value to our directive
// value has to be passed as string because if not Vue
// will look for a data attribute called color
Vue.directive("color", function(el, binding, vnode) {
  el.style.color = binding.value;
});

// Demo #4 - Using argument to define how the directive behaves
// I want application to have a header and a footer. I can use
// one custom directive to define the behaviors of both
Vue.directive("sticky", function(el, binding, vnode) {
  const loc = binding.arg === "bottom" ? "bottom" : "top";
  el.style.position = "fixed";
  el.style[loc] = 0;
  if (loc === "bottom") {
    el.style.background = "burlywood";
  } else {
    el.style.background = "#7e7e7e";
  }
});

// Demo #5 - Using modifiers to format text
Vue.directive("format", function(el, binding, vnode) {
  const modifiers = binding.modifiers;

  if (modifiers.underline) {
    el.style.textDecoration = "underline";
  }

  if (modifiers.bold) {
    el.style.fontWeight = "bold";
  }

  if (modifiers.highlight) {
    el.style.background = "#ffff00";
  }
});

// Demo #6 - Using lifecycle hooks
// Available hooks are unbind, bind, inserted, updated
// and componentupdated.
// to access these hooks replace function with an object with
// the hook as the key
Vue.directive("hook-demo", {
  bind(el, binding, vnode) {
    console.log("bind");
  },
  inserted(el, binding, vndoe) {
    console.log("inserted");
  },
  updated(el, binding, vnode) {
    console.log("updated");
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    console.log("componentUpdated");
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
