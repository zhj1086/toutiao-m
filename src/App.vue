<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>
    <h1>黑马头条</h1>
    <i class="toutiao toutiao-shouye"></i>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
</style>
