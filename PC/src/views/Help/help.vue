<template>
  <div>
    <div class="helpBody">
      <div class="helpBody_left">
        <ul>
          <li>
            <span @click="start_suer()" class="user">开始使用</span>
            <div class="start_use">
              <ul>
                <li @click="showdata(1)" :class="this.show === 1 ? $style.text_color : $style.text_color">关于应用</li>
                <li @click="showdata(2)">主要特点</li>
                <li @click="showdata(3)">如何开始</li>
              </ul>
            </div>
          </li>
          <li>aaa</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <!-- <li @click="showdata(1)">1</li>
          <li @click="showdata(2)">2</li>
          <li @click="showdata(3)">3</li> -->
        </ul>
      </div>
      <div class="helpBody_right">
        <div class="helpBody_right_one" v-show="show === 1"></div>
        <div class="helpBody_right_two" v-show="show === 2"></div>
        <div class="helpBody_right_three" v-show="show === 3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: 1
    }
  },
  methods: {
    showdata (data) {
      console.log(data)
      this.show = data
    },
    start_suer () {
      // eslint-disable-next-line no-undef
      $('.start_use').stop().slideToggle()
    }
  }
}
</script>
<style lang="less" scoped>
.helpBody {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 1330px;
  margin: 0 auto;
}

.helpBody_left {
  width: 170px;
  background: #fbfbfb;
  .user{
    font-size: 16px;
    display: inline-block;
    width: 100%;
    height: 50px;
    background: #ff8200;
    color: #fff;
    padding-left: 20px;
  }
  .start_use{
    display: none;
    ul li{
      padding-left: 20px;
      color: #ababab;
      font-size: 14px;
    }
  }
}
.text_color{
  color: #ff8200;
}

.helpBody_left li {
  //  margin: 20px;
  line-height: 50px;
  cursor: pointer;
}
.helpBody_right {
  width: 500px;
  .helpBody_right_one {
    width: 100%;
    height: 500px;
    background-color: blue;
  }
  .helpBody_right_two {
    width: 100%;
    height: 500px;
    background-color: yellow;
  }
  .helpBody_right_three {
    width: 100%;
    height: 500px;
    background-color: black;
  }
}
</style>
