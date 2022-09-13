import Vue from "vue";
import VueRouter from "vue-router";
// import { getCookie } from "../utils/cookie/cookies";

Vue.use(VueRouter);

const About = () =>
  import(/* webpackChunkName: "about" */ "../modules/about/About.vue");
const Appeals = () =>
  import(/* webpackChunkName: "appeals" */ "../modules/appeals/Appeals.vue");
const Events = () =>
  import(/* webpackChunkName: "events" */ "../modules/events/Events.vue");
const Faq = () =>
  import(/* webpackChunkName: "faq" */ "../modules/faq/Faq.vue");
const News = () =>
  import(/* webpackChunkName: "news" */ "../modules/news/News.vue");
const NewsDetails = () =>
  import(
    /* webpackChunkName: "news-details" */ "../modules/news/pages/NewsDetails.vue"
  );
const Account = () =>
  import(/* webpackChunkName: "account" */ "../modules/account/Account.vue");
const MyAppeals = () =>
  import(/* webpackChunkName: "account" */ "../modules/account/MyAppeals.vue");
const MyEvents = () =>
  import(/* webpackChunkName: "account" */ "../modules/account/MyEvents.vue");
const MyVisit = () =>
  import(/* webpackChunkName: "account" */ "../modules/account/MyVisit.vue");
const MyAccountFrom = () =>
  import(
    /* webpackChunkName: "account" */ "../modules/account/components/MyAccountForm.vue"
  );
const AppealDetails = () =>
  import(
    /* webpackChunkName: "appeal-details" */ "../modules/appeals/Appeal-details.vue"
  );
const EventDetails = () =>
  import(
    /* webpackChunkName: "event-details" */ "../modules/events/Event-details.vue"
  );

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
    name: "about",
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
    path: "/news-details/:id",
    name: "news-details",
    component: NewsDetails,
  },
  {
    path: "/appeal-details/:id",
    name: "appeal-details",
    component: AppealDetails,
  },
  {
    path: "/event-details/:id",
    name: "event-details",
    component: EventDetails,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: {
      auth: true,
    },
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

router.beforeEach((to, from, next) => {
  const localUser = getCookie("access_token");

  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !localUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
