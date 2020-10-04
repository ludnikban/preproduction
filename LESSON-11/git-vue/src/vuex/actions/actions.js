export default {
  SET_MOBILE({commit}) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP({commit}) {
    commit('SWITCH_DESKTOP')
  },
  GET_USERS_FROM_API({commit}, users) {
    commit('SET_USERS', users);
  }
}
