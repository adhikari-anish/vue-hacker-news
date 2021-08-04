<template>
  <div style="background-color: rgb(246, 246, 239)" class="px-2 py-2">
    <story :id="$route.query.id"></story>
    <div class="mt-5">
      <story-comments
        :commentIds="commentIds"
        v-if="story.kids"
      ></story-comments>
    </div>
  </div>
</template>

<script>
import Story from "@/components/story.vue";
import StoryComments from "@/components/storyComments.vue";
import { getStory } from "../services/api.js";

export default {
  name: "storyDetail",
  created: function () {
    getStory(this.$route.query.id).then((res) => {
      this.story = res;
      this.commentIds = res.kids;
    });
  },
  data: function () {
    return {
      story: {},
      commentIds: [],
    };
  },
  components: {
    story: Story,
    storyComments: StoryComments,
  },
};
</script>

<style>
</style>