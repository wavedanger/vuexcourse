export default {
  memberInfo(state) {
    switch (state.userStatus) {
      case 0:
        return '普通会员'
      case 1:
        return 'vip会员'
      case 2:
      case 3:
      case 4:
        return `高级${state.vipLevel}会员`
      default:
        return '普通会员'
    }
  }
}