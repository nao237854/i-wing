import _ from 'lodash'

export default {
  comments: state => _.sortBy(state.comments, [(o) => { return 1 - o.datetime }])
}
