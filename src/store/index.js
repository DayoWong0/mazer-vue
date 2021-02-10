//store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import sideBarItems from './data/sideBarItems';
Vue.use(Vuex)

const state = {
    sideBarItems
}

const getters = {}
const mutations = {}

export default new Vuex.Store({
    state,
    getters,
    mutations
})
