<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="clickButton">Go</button>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    clickButton () {
      this.$router.push('/users/' + this.userId)
    }
  },
  layout: 'users'
}
</script>