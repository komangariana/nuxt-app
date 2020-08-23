<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="clickButton">Go</button>
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
}
</script>