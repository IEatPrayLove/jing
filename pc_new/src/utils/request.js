import { get, post } from './http.js'

// 获取商家数量
export const BusinessNumber = p => get('Plblics/customOther', p);

// 获取分类信息
export const GetCategory = p => get('Plblics/getCategory/', p);

// 获取店铺列表
export const GetShopList = p => get('Shop/shopListPc', p);

// 获取用户信息
export const GetUserInfo = p => get('User/getUserInfo/', p);

//登录
export const Login = p => post('Login/pc_login', p);

//获取商品信息
export const GoodsInfo = p => get('Goods/Info', p);

// 获取是否绑定手机号
export const isMobile = p => get('User/isMobile/', p);

// 获取用户商家会员信息
export const getVipInfo = p => get('User/getVipInfo/', p);

// 发送短信验证码
export const sendEms = p => post('User/sendEms/', p);

// 绑定手机号码
export const bindMobile = p => post('User/bindMobile/', p);

//用户选择身份
export const userCheckUserType = p => post('User/userCheckUserType/', p);

//获取商家信息
export const ShopInfo = p => get('Shop/Info', p);

//工作台
//商品更新
export const GoodsUpdate = p => post('Goods/update', p);

//商品添加
export const GoodsAdd = p => post('Goods/add', p);

export const ShopList = p => get('Workbench/lists', p);



export const ManagerShopList = p =>get('Manager/lists',p);