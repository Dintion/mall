import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCount(state, payload) {
      payload.count += 1;
    },
    addProduct(state, payload) {
      payload.count = 1
      state.cartList.push(payload);
    }
  },
  actions: {
    addToCart(context, payload) {
      return new Promise(((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct) {
          context.commit('addCount', oldProduct)
          resolve('数量+1')
        } else {
          context.commit('addProduct', payload)
          resolve('加入购物车成功')
        }
      }))

    }
  }

})

export default store
