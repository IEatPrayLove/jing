import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index/index.vue";
import main from "../views/main/main.vue";
import shop_list from "../views/shopList/shop_list.vue";
import person_list from "../views/personList/person_list.vue";
import jingtie from "../views/jingtie/jingtie.vue";
import user from "@/views/User/index.vue";
import selection from "../views/selection/index.vue";
import user_info from "@/views/userInfo/index.vue";
import vippage from "@/views/vip/index.vue";
import vippay from "@/views/vip/pay.vue";
import shops from "@/views/shopList/shop/index.vue";
import goodss from "@/views/selection/goods/index.vue";
//商家建联操作台
import admin from "../views/admin/admin.vue";
import shop from "../views/admin/shop/shop.vue";
import goods from "../views/admin/goods/goods.vue";
import goods_edit from "../views/admin/goods/goods_edit";
import mine from "../views/mine_info.vue";
import hezuo from "../views/hezuo.vue";
import activity from "@/views/admin/activity/index.vue";
import myshop from "@/views/admin/myshop/index.vue";
import alliance from "@/views/admin/alliance/index.vue";
import dataDisk from "@/views/admin/dataDisk/index.vue";
import mytalent from "@/views/admin/mytalent/index.vue";
//带货助手
import cargo_assistant from "../views/cargoAssistant/index.vue";

import manager_shop_list from "../views/managers/shop_list.vue";
import manager_goods_list from "../views/managers/goods_list.vue";
import mannger_shop_edit from "../views/managers/shop/shop.vue";
import mannger_goods_edit from "../views/managers/goods/goods.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    children: [
      {
        path: "/main",
        name: "main",
        component: main,
      },
      {
        path: "/userinfo",
        name: "userinfo",
        component: user_info,
      },
      {
        path: "/vippage",
        name: "vippage",
        component: vippage,
      },
      {
        path: "/vippay",
        name: "vippay",
        component: vippay,
      },
      {
        path: "/person_list",
        name: "person_list",
        component: person_list,
      },
      {
        path: "/shop_list",
        name: "shop_list",
        component: shop_list,
      },
      {
        path: "/jingtie",
        name: "jingtie",
        component: jingtie,
      },

      //选品库
      {
        path: "/selection",
        name: "selection",
        component: selection,
      },
      {
        path: "/user",
        name: "user",
        component: user,
      },
      {
        path: "/shop",
        name: "shop",
        component: shops,
      },
      {
        path: "/goods",
        name: "Goods",
        component: goodss,
      },
    ],
  },
  {
    path: "/hezuo",
    name: "hezuo",
    component: hezuo,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
    meta: "商家中心",
    children: [
      {
        path: "/mine_info",
        name: "mine_info",
        component: mine,
        meta: "个人信息",
      },
      {
        path: "/shop_info",
        name: "shop_info",
        component: shop,
        meta: "店铺信息",
      },
      {
        path: "/goods_list",
        name: "goods_list",
        component: goods,
        meta: "商品管理",
      },
      {
        path: "/activity",
        name: "activity",
        component: activity,
        meta: "官方活动",
      },
      {
        path: "/myshop",
        name: "myshop",
        component: myshop,
        meta: "我的店铺",
      },
      {
        path: "/alliance",
        name: "alliance",
        component: alliance,
        meta: "建联活动",
      },
      {
        path: "/dataDisk",
        name: "dataDisk",
        component: dataDisk,
        meta: "数据大盘",
      },
      {
        path: "/mytalent",
        name: "mytalent",
        component: mytalent,
        meta: "我的达人",
      },
      {
        path: "/goods_edit",
        name: "goods_edit",
        component: goods_edit,
        meta: "编辑商品",
      },
    ],
  },
  {
    path: "/cargo_assistant",
    name: "cargo_assistant",
    component: cargo_assistant,
    meta: "带货助手",
  },
  {
    path: "/manager_shop_list",
    name: "manager_shop_list",
    component: manager_shop_list,
    meta: "平台店铺管理",
  },
  {
    path: "/manager_goods_list",
    name: "manager_goods_list",
    component: manager_goods_list,
    meta: "平台商品管理",
  },
  {
    path: "/mannger_shop_edit",
    name: "mannger_shop_edit",
    component: mannger_shop_edit,
    meta: "编辑店铺",
  },
  {
    path: "/mannger_goods_edit",
    name: "mannger_goods_edit",
    component: mannger_goods_edit,
    meta: "编辑商品",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
