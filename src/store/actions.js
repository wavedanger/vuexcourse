export default {
  buyVip({ commit }, e) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("setMemberInfo", {
          userStatus: e.userStatus,
          vipLevel: e.vipLevel
        })
        resolve("购买成功")
      }, 500)
    })
  },
  getFreeVip({ commit, state }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (state.userStatus === 0) {
          commit('setMemberInfo', {
            userStatus: 1,
            vipLevel: 1
          })
          resolve("分享成功，你已获得一个月免费会员")
        } else {
          resolve("分享成功")
        }
      }, 500)
    })
  }
}