<template>

  <a-list
    v-if="comments.length"
    :data-source="comments"
    item-layout="horizontal"
  >
    <a-list-item
      slot="renderItem"
      slot-scope="item"
    >
      <a-comment
        :author="item.author"
        :content="item.content"
      />
    </a-list-item>
  </a-list>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({ comments: 'comments' })
  }
}
</script>

<style lang="scss">
</style>
