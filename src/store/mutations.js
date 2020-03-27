export default {
  ADD_TO_COMMENTS (state, comment) {
    state.comments.push(comment)
    localStorage.setItem('comments', JSON.stringify(state.comments))
  }
}
