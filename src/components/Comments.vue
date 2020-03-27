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
        :datetime="item.humanDatetime"
      >
        <p
          slot="content"
          v-html="getFormatedText(item.content)"
        />
      </a-comment>
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
  },
  methods: {
    getFormatedText (content) {
      return content.replace(/^(?:.+\s)?@\w+/i, (match) => {
        return `<span class="ant-tag ant-tag-has-color" style="background-color: rgb(16, 142, 233);">${match}</span>`
      })
    }
  }
}
</script>

<style lang="scss">
</style>
