<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm"

export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  data () {
    return {
      loadedPost: {
        author: 'Komang',
        title: 'Example Post Title',
        content: 'Example Post Content',
        thumbnailLink:  'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
      }
    }
  },
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>