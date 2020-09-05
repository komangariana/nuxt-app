<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList,
  },
  data () {
    return {
      loadedPosts: [],
    }
  },
  asyncData (context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ 
          loadedPosts: [
            { 
              id: '1',
              title: 'First Title',
              thumbnail: 'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
              previewText: 'Preview Text 1'
            },
            { 
              id: '2',
              title: 'Second Title',
              thumbnail: 'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
              previewText: 'Preview Text 2'
            },
          ]
        })
      }, 1500)
    })
    .then((data) => {
      return data
    })
    .catch((e) => {
      context.error(new Error())
    })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  },
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center; 
}
</style>