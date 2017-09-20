import {
    getLocalStorage
} from '../server/tool.js';
var headers = {
    token: getLocalStorage('token'),
    app_version: '0.0.1',
    os: 'h5',
    station: '440000',
    version: 'v1.2'
};
const fetch = (type, h, url, p) => h.$http({
    method: type ? 'post' : 'get',
    url: url,
    headers: {
        token: getLocalStorage('token'),
        app_version: '0.0.1',
        os: 'h5',
        station: '440000',
        version: 'v1.2'
    },
    params: p
});

const jsonp = (h, url, p, o) => h.$http.jsonp({
    url,
    p,
    o
});

var listIndex = (h) => fetch('get', h, '/manage/api/h5Index/listIndex');
var checkAppValidCode = (h) => fetch('get', h, '/passport/api/user/checkAppValidCode');
var slideshowPics = (h, p) => fetch('get', h, '/mall/api/mOrderMeeting/slideshowPics', p);
var register = (h, p) => fetch('get', h, '/passport/api/user/register', p); //用户注册
var userLogin = (h, p) => fetch(!0, h, '/passport/api/user/userLogin', p); //用户登录
var ycaptcha = (h, p) => fetch('jsonp', h, 'http://web-ycaptcha.111.com.cn/checkfrontjsonp?jsoncallback=jsonp1?', p); //图形验证码
var listIndexFloor = (h, p) => fetch(!0, h, '/manage/api/mobileIndex/listIndexFloor', p); //首页数据
var listIndexFloorNew = (h) => fetch(!0, h, '/manage/api/mobileIndex/listIndexFloorNew'); //首页3=>1数据
var applyChannelapi = (h, p, o) => fetch(!0, h, '/mall/api/applyChannelapi', p, o); // 加入渠道
var mainH5Province = (h) => fetch(!0, h, '/manage/api/mainH5Province'); // 城市列表
var listRecommendShop = (h, p) => fetch(!1, h, '/mall/api/shop/listRecommendShop', p); //首页推荐商业
var listRecommendIndexFloor = (h, p) => fetch(!1, h, '/manage/api/mobileIndex/listRecommendIndexFloor', p); //首页品类列表
var isCommonOrPilotSite = (h, p) => fetch(!1, h, '/manage/api/mobileIndex/isCommonOrPilotSite', p); //是否试点、通用
var queryDrugByPageForAll = (h, p) => fetch(!0, h, '/mall/api/experiment/queryDrugByPageForAll', p); //APP试点首页接口-查询满减、满赠促销商品列表
var getProductDetail = (h, p) => fetch(!1, h, '/mall/api/product/getProductDetail', p); //商品详细信息
var cartAccount = (h) => fetch(!1, h, '/order/api/cart/cartAccount'); //获取购物车数量
var getUserTipInfo = (h) => fetch(!1, h, '/order/api/order/getUserTipInfo'); //个人中心
var listOrder = (h, p) => fetch(true, h, '/order/api/order/listOrder', p); //订单数据
var getShopCartList = (h) => fetch(!1, h, '/order/api/cart/getShopCartList'); //获取购物车详情
var deleteShopCarts = (h, p) => fetch(!0, h, '/order/api/cart/deleteShopCarts', p); //购物车删除商品
var listCategory = (h) => fetch(!1, h, '/manage/api/self/listCategory'); //商品分类
var getReceiverAddressList = (h) => fetch(!1, h, '/usermanage/api/enterpriseInfo/getReceiverAddressList'); //获取收货地址
var deleteReceiverAddress = (h,p) => fetch(!0, h, '/usermanage/api/enterpriseInfo/deleteReceiverAddress',p); //刪除收货地址
var saveReceiverAddress = (h,p) => fetch(!0, h, '/usermanage/api/enterpriseInfo/saveReceiverAddress',p); //保存新增收货地址
var updateReceiverAddress = (h,p) => fetch(!0, h, '/usermanage/api/enterpriseInfo/updateReceiverAddress',p); //修改收货地址
var updDefReceiverAddress = (h,p) => fetch(!0, h, '/usermanage/api/enterpriseInfo/updDefReceiverAddress',p); //设置默认收货地址

export {
    headers,
    userLogin,
    listIndex,
    checkAppValidCode,
    slideshowPics,
    ycaptcha,
    register,
    listIndexFloor,
    listIndexFloorNew,
    listRecommendShop,
    listRecommendIndexFloor,
    applyChannelapi,
    mainH5Province,
    isCommonOrPilotSite,
    queryDrugByPageForAll,
    getProductDetail,
    cartAccount,
    getUserTipInfo,
    listOrder,
    getShopCartList,
    deleteShopCarts,
    listCategory,
    getReceiverAddressList,
    deleteReceiverAddress,
    saveReceiverAddress,
    updateReceiverAddress,
    updDefReceiverAddress
}