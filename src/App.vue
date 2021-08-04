<template>
  <div id="app" class="container">
    <header class="header p-1">
      <router-link to="/" class="inline-flex text-black font-bold">
        <img
          src="https://news.ycombinator.com/y18.gif"
          class="mr-1"
          width="18"
          height="18"
          style="border: 1px white solid"
        />
        Vue Hacker News
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  color: #828282;
}

.header {
  background-color: #ff6600;
}

.container {
  max-width: 85%;
  margin: 0 auto;
}

.v-timeago {
  font-size: unset !important;
  color: unset !important;
  line-height: unset !important;
}

pre {
    overflow: auto;
    padding: 2px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    font-size: inherit;
}

code {
  font-size: inherit;
}

.vue-content-placeholders-heading__subtitle {
    display: none;
}

[class^="vue-content-placeholders-"] + .vue-content-placeholders-text {
    margin-top: 0 !important;
}

</style>
