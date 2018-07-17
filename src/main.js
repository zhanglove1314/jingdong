import Vue from 'vue';
import axios from 'axios';
import Router from 'vue-router';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

import index from './components/index.vue';
import home from './router/index.vue';
import car from './router/car.vue';
import my from './router/my.vue';
import find from './router/find.vue';
import fei from './router/fei.vue';

Vue.use(Router, VueAxios, axios);
Vue.use(Vuex);
Vue.prototype.axios = axios;


//mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

//jquery
import jquery from 'jquery';
var tool = {
    install: function(vue) {
        Object.defineProperty(Vue.prototype, '$', {
            value: jquery
        })
    }
}
Vue.use(tool);
//IScroll
import IScrollView from 'vue-iscroll-view';
import IScroll from 'iscroll';
Vue.use(IScrollView, IScroll);

var store = new Vuex.Store({
    state: {
        hour: '',
        minute: '',
        secend: '',
        data: ''
    },
    mutations: {
        getdata(state, data) {
            state.data = data.data;
        }
    },
    actions: {
        getidA({ commit }, _this) {
            return new Promise((resolve) => {
                _this.axios.get("/some").then(function(data) {
                    commit("getdata", data)
                })
            })
        },
    }
});
var router = new Router({
    linkActiveClass: 'active',
    routes: [{
        name: 'home',
        path: '/',
        component: home
    }, {
        name: 'fenlei',
        path: '/fenlei',
        component: fei
    }, {
        name: 'find',
        path: '/find',
        component: find
    }, {
        name: 'car',
        path: '/car',
        component: car
    }, {
        name: 'my',
        path: '/my',
        component: my
    }]
})
var vm = new Vue({
    el: '#app',
    store,
    router,
    render: x => x(index)
})