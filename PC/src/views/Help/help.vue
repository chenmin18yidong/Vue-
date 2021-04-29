<template>
  <div>
    <div class="helpBody">
      <div class="helpBody_box">
        <div class="helpBody_left">
          <ul>
            <li>
              <span @click="start_suer('start_use')" class="user">开始使用</span>
              <div class="start_use">
                <ul>
                  <li @click="showdata(1)" :class="this.show === 1 ? 'text_color' : ' '" >  关于应用  </li>
                  <li @click="showdata(2)" :class="this.show === 2 ? 'text_color' : ' '" >主要特点</li>
                  <li @click="showdata(3)" :class="this.show === 3 ? 'text_color' : ' '" >如何开始</li>
                </ul>
              </div>
            </li>
            <li>
            </li>
            <li>组织考试</li>
            <li>创建群组</li>
            <li>交易试卷</li>
            <li>离线刷题</li>
            <li>章节练习</li>
            <li>定制小程序</li>
            <li>常见问题</li>
          </ul>
        </div>
        <div class="user_right">
          <div class="user_right_one" v-show="show === 1">
            <div class="user_right_one_title">
              <span></span>
              <span>关于应用</span>
            </div>
            <div class="user_right_one_text">
              <span>刷题神器~复习备考智能题库APP，超千万用户使用的刷题利器，现已特权功能永久免费使用。
                精选海量题库，一键导入专属题库，AI智能测评，WEB、IOS、安卓多终端协同，让复习备考更轻松
                、更高效！提供涵盖航空航天、边防出入境、铁楼司机培训、国家电网培训、电力安规、国家
                公务员、医师资格、医学初中高级职称、职业药师、职业护士、卫生招聘、教师资格、消防工程、
                建筑工程、财会经济、警法考试和司法考试各大系列的试题、课程，让学员随时学、随地学、随心学！
              </span>
            </div>
            <div class="user_right_one_img">
              <img src="../../imgs/market/banner.png" alt="">
            </div>
          </div>
          <div class="user_right_two" v-show="show === 2"></div>
          <div class="user_right_three" v-show="show === 3"></div>
        </div>
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
    start_suer (data) {
      // eslint-disable-next-line no-undef
      $('.' + data).stop().slideToggle()
    }
  }
}
</script>
<style lang="less" scoped>

.helpBody{
  width: 100%;
   background: #f7f7f7;
}
.helpBody_box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 1330px;
  margin: 0 auto ;
  padding: 10px 0 0 0;
}

.helpBody_left {
  width: 170px;
  background: #fbfbfb;
  .user {
    font-size: 16px;
    display: inline-block;
    width: 100%;
    height: 50px;
    background: #ff8200;
    color: #fff;
    padding-left: 20px;
  }
  li {
    font-size: 16px;
  }
  .start_use {
    display: none;
    ul li {
      padding-left: 20px;
      color: #ababab;
      font-size: 14px;
    }
  }
}
.text_color {
  color: #ff8200 !important;
}

.helpBody_left li {
  //  margin: 20px;
  line-height: 50px;
  cursor: pointer;
}

.user_right {
  padding-left: 20px;
  width: 100%;
  .user_right_one {
  background: #fff;
    width: 100%;
    height: 100%;
    padding: 40px 0 0 20px;
    .user_right_one_title{
      display: flex;
      span:nth-child(1){
      display: inline-block;
      width: 8px;
      height: 20px;
      margin: 10px 0 0 0;
      background: #ff8200;
    }
   span:nth-child(2){
     font-size: 24px;
     font-weight: 900;
     margin: 0 0 0 10px;
    }
  }
  .user_right_one_text{
    padding: 20px 80px 0 20px;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }
  .user_right_one_img img{
    width: 100%;
    height: 340px;
    padding: 40px 20px 0 0;
  }

  }
  .user_right_two {
    width: 100%;
    height: 500px;
    background-color: yellow;
  }
  .user_right_three {
    width: 100%;
    height: 500px;
    background-color: black;
  }
}
</style>
