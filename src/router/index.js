import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import About from "../modules/about/About.vue";
import Appeals from "../modules/appeals/Appeals.vue";
import Events from "../modules/events/Events.vue";
import Faq from "../modules/faq/Faq.vue";
import News from "../modules/news/News.vue";
import NewsDetails from "../modules/news/pages/NewsDetails.vue";
import Account from "../modules/account/Account.vue";
import MyAppeals from "../modules/account/MyAppeals.vue";
import MyEvents from "../modules/account/MyEvents.vue";
import MyVisit from "../modules/account/MyVisit.vue";
import MyAccountFrom from "../modules/account/components/MyAccountForm.vue";
import AppealDetails from "../modules/appeals/Appeal-details.vue";
import EventDetails from "../modules/events/Event-details.vue";

const routes = [
  {
    path: "/",
    name: "appeals",
    component: Appeals,
  },
  {
    path: "/appeals",
    name: "appeals",
    component: Appeals,
  },
  {
    path: "/about",
    name: "/about",
    component: About,
  },
  {
    path: "/events",
    name: "events",
    component: Events,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/news/details",
    name: "news-details",
    component: NewsDetails,
  },
  {
    path: "/appeal-details",
    name: "appeal-details",
    component: AppealDetails,
  },
  {
    path: "/event-details",
    name: "event-details",
    component: EventDetails,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    // meta: {
    //   auth: true,
    // },
    children: [
      {
        path: "",
        component: MyAccountFrom,
      },
      {
        path: "my-appeals",
        component: MyAppeals,
      },
      {
        path: "my-events",
        component: MyEvents,
      },
      {
        path: "my-visit",
        component: MyVisit,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

// router.beforeEach((to, from, next) => {
//   const localUser = localStorage.getItem("auth");

//   const requireAuth = to.matched.some((record) => record.meta.auth);

//   if (requireAuth && localUser !== "1") {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router;
