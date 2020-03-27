// import axios from 'axios'
export default {
  publishComment ({ commit }, comment) {
    return new Promise((resolve, reject) => {
      commit('ADD_TO_COMMENTS', comment)
      resolve(comment)
    })
  }
}
