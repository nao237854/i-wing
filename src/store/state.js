export default {
  comments: localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : []
}
