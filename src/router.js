import Vue from "vue";
import VueRouter from "vue-router";
import Dashbord from "./views/Dashbord.vue";
import UI_Element from "./views/UI_Element.vue";
import Charts from "./views/Charts.vue";
import Tabspanel from "./views/Tabspanel.vue";
import Restab from "./views/ResTab.vue";
import Forms from "./views/Forms.vue";
import Multidrop from "./views/Multidrop.vue";
import Emptypage from "./views/Emptypage.vue";
import Modal from "./views/Modal.vue";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Dashbord
    },
    {
      path: "/uielement",
      component: UI_Element
    },
    {
      path: "/charts",
      component: Charts
    },
    {
      path: "/tabs-panel",
      component: Tabspanel
    },
    {
      path: "/responsive-table",
      component: Restab
    },
    {
      path: "/forms",
      component: Forms
    },
    {
      path: "/multilevel-dropdown",
      component: Multidrop
    },
    {
      path: "/empty-page",
      component: Emptypage
    },
    {
      path: "/modal",
      component: Modal
    }
  ]
});
