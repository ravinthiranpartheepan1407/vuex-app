import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actiosn from './actions'

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
