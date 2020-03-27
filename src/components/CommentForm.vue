<template>
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
        <a-row
          type="flex"
          justify="end"
        >
          <a-col>
            <a-button
              html-type="submit"
              type="primary"
              @click="onSubmit"
            >Add Comment</a-button>
          </a-col>
        </a-row>

      </a-form-item>
    </div>
  </a-comment>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  data () {
    return {
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

      this.$store.dispatch('publishComment', {
        author: 'Example User',
        content: this.value
      })
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
</style>
