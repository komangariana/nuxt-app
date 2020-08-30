<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg"
      title="Example Post 1"
      previewText="This is the preview text 1"
    />
    <PostPreview
      id="2"
      thumbnail="https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg"
      title="Example Post 2"
      previewText="This is the preview text 2"
    />
    <PostPreview
      id="3"
      thumbnail="https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg"
      title="Example Post 3"
      previewText="This is the preview text 3"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview,
  }  
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>