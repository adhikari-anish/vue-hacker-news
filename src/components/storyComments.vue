<template>
  <div>
    <story-comment v-for="commentId in commentIds" :key="commentId" :commentId="commentId"></story-comment>
  </div>
</template>

<script>
import StoryComment from '@/components/storyComment.vue';
export default {
  name: "storyComments",
  props: {
    commentIds: {
      type: Array,
    },
  },
  components: {
    'storyComment': StoryComment
  }
}
</script>

<style>

</style>