<template>
  <div class="news-list list-decimal px-2">
    <story
      v-for="(storyId, idx) in storyIds"
      :key="storyId"
      :id="storyId"
      :idx="idx + 1"
    ></story>
  </div>
</template>

<script>
import { getStories } from "@/services/api";
import Story from "@/components/story.vue";

export default {
  name: "stories",
  created: function () {
    getStories().then((id) => (this.storyIds = id.slice(0, 20)));
  },
  data: function () {
    return {
      storyIds: [],
    };
  },
  components: {
    story: Story,
  },
};
</script>

<style>
.news-list {
  background-color: rgb(246, 246, 239);
}
</style>