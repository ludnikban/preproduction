export default {
  set_Mobile({commit}) {
    commit('SWITCH_MOBILE')
  },
  set_Desktop({commit}) {
    commit('SWITCH_DESKTOP')
  },
  getUsersFromAPI({commit}, users) {
    commit('SET_USERS', users);
  }
}
