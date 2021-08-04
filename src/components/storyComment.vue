<template>
  <div class="mb-5 comment-wrapper" v-if="!comment.deleted">
    <content-placeholders v-if="!comment.id" class="mb-5">
      <content-placeholders-heading />
      <content-placeholders-text :lines="3" class="pl-3" />
    </content-placeholders>
    <div v-else>
      <div style="font-size: 8pt" class="mb-1">
        {{ comment.by }}
        <time-ago :datetime="comment.time * 1000" tooltip></time-ago> ago
        <span class="comment-collapse" @click="showCommentToggle">[–]</span>
      </div>
      <div
        class="text-black comment mb-5 pl-3"
        v-html="comment.text"
        v-show="showComment"
      ></div>
    </div>

    <div class="pl-8" v-if="comment.kids" v-show="showComment">
      <story-comments :commentIds="kids"></story-comments>
    </div>
  </div>
</template>

<script>
import { TimeAgo } from "vue2-timeago";
import "vue2-timeago/dist/vue2-timeago.css";
import { getComment } from "../services/api.js";

export default {
  name: "story-comment",
  created: function () {
    getComment(this.commentId).then((res) => {
      this.comment = res;
      this.kids = res.kids;
    });
  },
  props: {
    commentId: {
      type: Number,
    },
  },
  components: {
    TimeAgo,
    storyComments: () => import("@/components/storyComments.vue"),
  },
  data: function () {
    return {
      comment: {},
      kids: [],
      showComment: true,
    };
  },
  methods: {
    showCommentToggle: function () {
      if (this.showComment === true) {
        this.showComment = false;
      } else {
        this.showComment = true;
      }
    },
  },
};
</script>

<style>
.comment {
  font-size: 9pt;
}

.comment > p {
  margin-top: 8px;
  margin-bottom: 0px;
}

.comment a:link,
.comment a:visited {
  text-decoration: underline;
}

.comment-wrapper {
  position: relative;
}

.comment-wrapper::before {
  content: "";
  position: absolute;
  content: "";
  position: absolute;
  top: 20px;
  left: 2px;
  bottom: 0;
  width: 1px;
  background: #828282;
}

.comment-collapse {
  cursor: pointer;
  user-select: none;
}
</style>