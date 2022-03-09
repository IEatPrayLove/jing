import axios from 'axios';
import QS from 'qs';
import { Toast } from 'element-ui';
import store from '../store/index'


axios.defaults.baseURL = 'https://manager.jjjdada.com/Api/';


// 请求超时时间
axios.defaults.timeout = 10000;

// 跨域请求，允许保存cookie
// axios.defaults.withCredentials = true
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
// axios.interceptors.request.use(config => { 
//     if (config.push === '/') { 
//      } else { 
//       if (localStorage.getItem('token')) { 
//         //在请求头加入token，名字要和后端接收请求头的token名字一样 
//         config.headers.token=localStorage.getItem('token');  
//       } 
//      } 
//       return config; 
//     }, 
//     error => { 
//      return Promise.reject(error);
//     });
// 响应拦截器
axios.interceptors.request.use((config) => {
    if (!config.headers.Authorization && localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
})
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}