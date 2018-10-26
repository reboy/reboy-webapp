<template>
  <div>
    <van-nav-bar
  :title="title"
  left-text="返回"
  right-text="全国"
  left-arrow
   @click-right="onClickRight"
>
   <van-icon name="location" slot="right" />
  </van-nav-bar><van-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="https://img.yzcdn.cn/1.png"
/>
 <van-tabs >
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>

   

 
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    let { data } = await app.$axios.get("v1/SiteApi/getAllSite")
     return {title:data.data.A[0].name};
  },
  methods:{
    onClickRight(){
      this.$dialog.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  this.$toast('我是提示文案，建议不超过十五字~');
});
      
    }
  }
};
</script>

<style lang="less">
</style>