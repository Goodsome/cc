<template>
  1
</template>

<script>

export default {
  name: 'ComTest',
  data() {
    return {
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
  },
  created() {
    console.log(11)
    new Promise((resolve, reject) => {
      const a = 0
      const b = 1
      if (b === 0) {
        reject('wrong')
      } else {
        resolve(a)
      }
    }).then(val => {
      console.log(val)
    })
  },
  mounted() {
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    handleLogin() {
      this.$refs.loginRef.validate().then(_value => {
        this.loading = true
        const request = {}
        request.username = aes_encrypt(this.loginForm.username)
        request.password = sha256_encrypt(this.loginForm.password)
        this.$store.dispatch('account/login', request)
          .then(() => {
            var apps = this.$store.getters.apps
            store.dispatch('permission/generateRoutes', apps)
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
            console.log(this.$router)
            this.loading = false
          })
          .catch(() => {
            this.loading = false
          })
      }).catch(formError => {
        console.error(formError)
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style scoped>
</style>