<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <div class="page">
      <div class="header">
        <div class="center">今天你的能量管理合格吗</div>
      </div>
      <div class="nav">
        <div class="center">
          <a href="#" title="测试训练" @click="handleClickNav(1)" :class="{current:active == 1}">测试训练</a>
          <a href="#" title="相关知识" @click="handleClickNav(2)" :class="{current:active == 2}">相关知识</a>
          <a href="#" title="了解我们" @click="handleClickNav(3)" :class="{current:active == 3}">了解我们</a>
          </div>
      </div>
    </div>
      <div class="container" v-show="active == 1">
        <transition>
        <div :class="{containerOne:sure,'pt-page-moveToTop':as1,'pt-page-moveFromBottom':as2}" v-show="change == 1">
        <div class="one">页面一</div>
        </div>
        </transition>
        <transition>
        <div :class="{containerTwo:sure,'pt-page-moveToTop':as3,'pt-page-moveFromBottom':as4}" v-show="change == 2">
          <TestOne :change="change"/>
        </div>
        </transition>
        <transition>
        <div :class="{containerThree:sure,'pt-page-moveToTop':as5,'pt-page-moveFromBottom':as6}" v-show="change == 3">
        <TestTwo :change="change"/>
        </div>
        </transition>
        <transition>
        <div :class="{containerFour:sure,'pt-page-moveToTop':as1,'pt-page-moveFromBottom':as2}" v-show="change == 4">
        <TestThree :change="change"/>
        </div>
        </transition>
        <transition>
        <div :class="{containerFive:sure,'pt-page-moveToTop':as3,'pt-page-moveFromBottom':as4}" v-show="change == 5">
        <TestFour :change="change"/>
        </div>
        </transition>
        <transition>
        <div :class="{containerFinish:sure,'pt-page-moveToTop':as5,'pt-page-moveFromBottom':as6}" v-show="change == 6">
          <FinishView/>
        </div>
        </transition>
      </div>
      <div class="container-know" v-show="active == 2"><div class="one">页面二</div></div>
      <div class="container-about" v-show="active == 3"><div class="one">页面三</div></div>
    <button class="btn-over" @click="handleClickBtn" v-show="btnShow">{{btnText}}</button>
  </div>
</template>

<script>
import TestOne from './test/TestOne.vue'
import TestTwo from './test/TestTwo.vue'
import TestThree from './test/TestThree.vue'
import TestFour from './test/TestFour.vue'
import FinishView from './finish/FinishView.vue'

export default {
  name: 'home-view',
  components: {
    TestOne,
    TestTwo,
    TestThree,
    TestFour,
    FinishView
  },
  data () {
    return {
      active: 1,
      btnText: '',
      btnShow: true,
      sure: true,
      as1: false,
      as2: false,
      as3: false,
      as4: false,
      as5: false,
      as6: false,
      change: 1
    }
  },
  created () {
    this.btnText = '开始答题'
  },
  methods: {
    handleClickNav (i) {
      this.active = i
      if (this.active !== 1) {
        this.as1 = false
        this.as2 = false
        this.as3 = false
        this.as4 = false
        this.as5 = false
        this.as6 = false
        this.change = 1
        this.btnShow = false
      }
      if (this.active === 1) {
        this.change = 1
        this.as1 = false
        this.as2 = false
        this.as3 = false
        this.as4 = false
        this.as5 = false
        this.as6 = false
        this.btnShow = true
        this.btnText = '开始答题'
      }
    },
    handleClickBtn () {
      let shock = true
      if (shock) {
        this.change += 1
      } else {
        return
      }
      if (this.change >= 7) {
        this.change = 1
      }
      // let lastPage = this.change - 1
      // let nowPage = this.change
      // const inClass = 'pt-page-moveToTop' // 定义出场动画
      // const outClass = 'pt-page-moveFromBottom' // 定义入场动画
      switch (this.change) {
        case 1:
          this.as1 = false
          this.as2 = false
          this.as3 = false
          this.as4 = false
          this.as5 = false
          this.as6 = false
          this.btnText = '开始答题'
          break
        case 2:
          this.as1 = true
          this.as4 = true
          this.btnText = '继续答题'
          break
        case 3:
          this.as1 = false
          this.as4 = false
          this.as3 = true
          this.as6 = true
          this.btnText = '继续答题'
          break
        case 4:
          this.as3 = false
          this.as6 = false
          this.as5 = true
          this.as2 = true
          this.btnText = '继续答题'
          break
        case 5:
          this.as5 = false
          this.as2 = false
          this.as1 = true
          this.as4 = true
          this.btnText = '完成答题'
          break
        case 6:
          this.as1 = false
          this.as4 = false
          this.as3 = true
          this.as6 = true
          this.btnText = '返回首页'
          break
      }
    }
  }
}

</script>

<style lang="scss">
.one {
  position: absolute;
  top: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position:absolute;
  width: 100%;
  height: 100%;
}

.page {
  position: relative;
}
.center {
  margin: auto;
  width: 80%;
}

.container,.container-know,.container-about {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.container-know,.container-about {
  background: linear-gradient(to bottom right, #EAD6EE, #A0F1EA);
}
.containerOne,.containerTwo,.containerThree,.containerFour,.containerFive,.containerFinish {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.containerOne {
  background: linear-gradient(to bottom right, #EAD6EE, #A0F1EA);
}
.containerTwo {
    background: linear-gradient(to bottom right, #9FA5D5, #E8F5C8);
}
.containerThree {
    background: linear-gradient(to bottom right, #F9957F, #F2F5D0);
}
.containerFour {
    background: linear-gradient(to bottom right, #CCFBFF, #EF96C5);
}
.containerFive {
    background: linear-gradient(to bottom right, #92B0E6, #FEFFEB);
}
.containerFinish {
  background: linear-gradient(to bottom right, #EAD6EE, #A0F1EA);
}

</style>
