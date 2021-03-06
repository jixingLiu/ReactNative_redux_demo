/**
 * @Author: Mario
 * @Date:   2018-07-26T19:19:30+08:00
 * @Last modified by:   Mario
 * @Last modified time: 2019-04-05T23:01:06+08:00
 */

"use strict";

import * as types from "../constants/LoginTypes";
import { loginRequest } from "../API/loginRequest";

// action creato
let outData = {
  status: "点击登录",
  isSuccess: false,
  user: null
};
export function change_name(data) {
  return {
    type: types.LOGIN_NAME,
    data
  };
}
export function change_password(data) {
  return {
    type: types.LOGIN_PASSWORD,
    data
  };
}

export function login_doing(data) {
  return {
    type: types.LOGIN_IN_DOING,
    data
  };
}

export function login_done(data) {
  return {
    type: types.LOGIN_IN_DONE,
    data
  };
}

export function login_err(data) {
  return {
    type: types.LOGIN_IN_ERROR,
    data
  };
}

export function login_out(data) {
  return {
    type: types.LOGIN_IN_OUT,
    data
  };
}

// 异步的Action 需要返回的是一个 function 在 createStore 时由middleWare 做处理  普通的action 直接返回纯对象即可
export function requireLogin() {
  return loginRequest();
}
