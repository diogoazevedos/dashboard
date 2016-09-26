const state = {
  dropdowns: {
    show: false
  }
}

const mutations = {
  ['TOGGLE_DROPDOWN'] (state) {
    state.dropdowns.show = !state.dropdowns.show
  }
}

const actions = {
  toggleDropdown: ({commit}) => {
    commit('TOGGLE_DROPDOWN')
  }
}

const getters = {
  dropdownState: state => state.dropdowns.show
}

export default {
  state,
  mutations,
  actions,
  getters
}
