const iOS = function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
}
const isAndroid = function () {
    return navigator.userAgent.match(/Android/i) ? true : false;
}
const inWechat = function () {
    return /micromessenger/i.test(navigator.userAgent);
}
const setLocalStorage = function (key, value) {
    if (window.localStorage) {
        window.localStorage.setItem(key, value);
    }
}
const getLocalStorage = function (key) {
    if (window.localStorage) {
        return window.localStorage.getItem(key);
    }
}
/**
 * 获取url参数
 * 使用方式：getLocationParam.key 这里的key是你参数名
 * @returns {{}}
 */
const getLocationParam = function () {
    var url = window.location.search;
    var params = url.toString().slice(1).split("&");
    var returnObject = {};
    for (var i = 0; i != params.length; i++) {
        var index = params[i].indexOf("=");
        returnObject[params[i].slice(0, index)] = params[i].slice(index + 1);
    }
    return returnObject;
}
/**
 * 获取url地址#号后面的参数
 */
const getLocationState = function () {
    var url = window.location.hash;
    var arr = [];
    var returnObject = url.substring(1).split("=");
    arr[returnObject[0]] = returnObject[1];
    return arr;
}
/**
 * 格式化 参数
 * @param url
 * @returns {{}}
 */
const getParam = function (url) {
    url = decodeURIComponent(url);
    var params = url ? url.toString().split("&") : [];
    var returnObject = {};

    for (var i = 0; i != params.length; i++) {
        var canshu = params[i].split("=");
        returnObject[canshu[0]] = canshu[1];
    }
    return returnObject;
}
/**
 * 格式化 参数
 * @param url
 * @returns {{}}
 */
const getURIParams = function (url) {
    url = decodeURIComponent(url);
    var paramsBegin = url.indexOf("?");
    var params = url ? url.toString().substring(paramsBegin + 1, url.length).split("&") : [];
    var returnObject = {};

    for (var i = 0; i != params.length; i++) {
        var canshu = params[i].split("=");
        returnObject[canshu[0]] = canshu[1];
    }
    return returnObject;
}
/**
 * 格式化手机号
 * @param phone
 * @returns {*|XML|void|string}
 */
const formatPhone = function (phone) {
    return phone && phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
/**
 * 获取登陆token
 */
const getToken = function () {
    var self = this;
    if (self.getLocalStorage('token')) {
        self.publicData.token = self.getLocalStorage('token');
    }
}
/**
 * 请求回调
 * @param callback
 * @param response
 */
const doCallback = function (callback, response) {

    if (!callback) return;
    var callbackFunc = callback.func,
        callbackContext = callback.context;
    callbackFunc && typeof (callbackFunc) == 'function' && callbackFunc.call(callbackContext, response.data);
}
//函数节流
const throttle = function (method, context, time) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }, time || 500);
}
export {
    formatPhone,
    getToken,
    doCallback,
    throttle,
    iOS,
    isAndroid,
    inWechat,
    setLocalStorage,
    getLocalStorage,
    getLocationParam,
    getLocationState,
    getParam,
    getURIParams
}