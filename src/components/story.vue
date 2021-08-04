<template>
  <content-placeholders v-if="!story.id" class="py-2">
    <content-placeholders-heading />
    <content-placeholders-text :lines="1" />
  </content-placeholders>
  <div class="flex py-1" v-else>
    <span v-if="idx">{{ idx }}.</span>
    <div>
      <a :href="story.url" target="__blank" class="story-url">{{
        story.title
      }}</a>
      &nbsp;
      <span v-if="story.url">({{ story.url }})</span>
      <div class="news-item__info flex whitespace-pre" style="font-size: 8pt">
        {{ story.score }} points by <a>{{ story.by }}</a
        >&nbsp;<time-ago
          v-if="storyTime"
          :datetime="storyTime"
          tooltip
        ></time-ago>
        ago |
        <router-link
          :to="{ path: '/stories', query: { id } }"
          class="hover:underline"
          v-if="story.kids"
          >{{ story.descendants }} comments
        </router-link>
        <span v-else>0 comments</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getStory } from "../services/api.js";
import { TimeAgo } from "vue2-timeago";
import "vue2-timeago/dist/vue2-timeago.css";

export default {
  name: "story",
  created: function () {
    getStory(this.id).then((res) => {
      this.story = res;
      this.storyTime = new Date(res.time) * 1000;
    });
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    idx: Number,
  },
  data: function () {
    return {
      story: {},
      storyTime: null,
    };
  },
  components: {
    TimeAgo,
  },
};
</script>

<style scoped>
.story-url:link {
  color: #000;
}
</style>
