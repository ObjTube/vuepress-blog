<template>
  <div>
    <a
      class="github-edit"
      target="_blank"
      :href="'https://github.com/ObjTube/vuepress-blog/edit/master/blog/'+page.relativePath"
    >编辑</a>
  </div>
</template>

<script>
export default {
  props: ["page"]
};
</script>