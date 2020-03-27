<template>
  <a-row
    class="i-wing__comments"
    type="flex"
  >
    <a-col :span="24">
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
    </a-col>
    <a-col :span="24">
      <a-comment>
        <div slot="content">
          <a-form-item>
            <a-mentions
              :loading="loading"
              v-model="value"
              @search="onSearch"
            >
              <a-mentions-option
                v-for="({ id, name }) in users"
                :key="id"
                :value="name"
              >
                <span>{{ name }}</span>
              </a-mentions-option>
            </a-mentions>
          </a-form-item>
          <a-form-item>
            <a-button
              html-type="submit"
              type="primary"
              @click="onSubmit"
            >Add Comment</a-button>
          </a-form-item>
        </div>
      </a-comment>
    </a-col>
  </a-row>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  data () {
    return {
      comments: [],
      loading: false,
      value: '',
      users: []
    }
  },
  mounted () {
    this.loadUsers = debounce(this.loadUsers, 800)
  },
  methods: {
    onSubmit () {
      if (!this.value) {
        return
      }

      this.comments = [
        {
          author: 'Example User',
          content: this.value
        },
        ...this.comments
      ]
      this.value = ''
    },
    onChange (e) {
      this.value = e
    },
    onSearch (search) {
      this.search = search
      this.loading = !!search
      this.users = []
      this.loadUsers(search)
    },
    loadUsers (key) {
      if (!key) {
        this.users = []
        return
      }
      fetch(`/api.php?action=query&list=allusers&auprefix=${key}&format=json`)
        .then(res => res.json())
        .then(result => {
          this.users = result.query.allusers
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
.i-wing__comments {
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
