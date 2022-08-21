<template>
    <div class="container">
        <div class="center">
            <div class="show">您的结果是：<span>您属于{{showText}}类，您的分数是{{showNumber}}</span></div>
            <div class="main">
                <div class="main-left">
                    <div class="main-left-top">
                    <span class="main-left-top-title">A类：0 ~ 4 分，能量管理技能卓越</span>
                    <div class="main-left-top-content">能量管理技能卓越能量管理技能卓越能量管理技能卓越能量管理技能卓越</div>
                    </div>
                <div class="main-left-bottom">
                    <span class="main-left-bottom-title">B类：4 ~ 7 分，能量管理技能合格</span>
                    <div class="main-left-bottom-content">能量管理技能合格能量管理技能合格能量管理技能合格</div>
                </div>
            </div>
            <div class="main-right">
                <div class="main-right-top">
                    <span class="main-right-top-title">C类：7 ~ 11 分，能量管理技能不合格</span>
                    <div class="main-right-top-content">能量管理技能不合格能量管理技能不合格能量管理技能不合格</div>
                </div>
                <div class="main-right-bottom">
                    <span class="main-right-bottom-title">D类：11 ~ 16 分，能量管理陷入危机</span>
                    <div class="main-right-bottom-content">能量管理陷入危机能量管理陷入危机能量管理陷入危机</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FinishView',
  data () {
    return {
      showText: '',
      showNumber: ''
    }
  },
  updated () {
    const one = localStorage.getItem('resultOne') * 1
    const two = localStorage.getItem('resultTwo') * 1
    const three = localStorage.getItem('resultThree') * 1
    const four = localStorage.getItem('resultFour') * 1
    this.showNumber = one + two + three + four
  }
}
</script>

<style lang="scss" scoped>
.center {
  margin: auto;
  width: 80%;
}
.container {
  position: absolute;
  top: 1rem;
}
.show {
    margin: .2rem 0 0 .1rem;
    font-size: .22rem;
    font-weight: bold;
    color: #0c7bb3;
}
.main {
    margin-top: .5rem;
    &-left {
    float: left;
    width: 50%;
    height: 4rem;
    &-top {
        padding-bottom: .7rem;
        padding-left: .4rem;
        margin-bottom: .2rem;
        margin-right: .1rem;
        background-color: #eee;
        border-radius: .8rem;
        &-title {
            font-size: .18rem;
            font-weight: bold;
        }
        &-content {
            font-size: .14rem;
        }
    }
    &-bottom {
        padding-bottom: .7rem;
        margin-right: .1rem;
        padding-left: .4rem;
        background-color: #ddd;
        border-radius: .8rem;
         &-title {
            font-size: .18rem;
            font-weight: bold;
        }
        &-content {
            font-size: .14rem;
        }
    }
}
    &-right {
    float: right;
    width: 50%;
    height: 4rem;
    &-top {
        padding-bottom: .7rem;
        margin-bottom: .2rem;
        padding-left: .4rem;
        background-color: #ccc;
        border-radius: .8rem;
         &-title {
            font-size: .18rem;
            font-weight: bold;
        }
        &-content {
            font-size: .14rem;
        }
    }
    &-bottom {
        padding-bottom: .7rem;
        padding-left: .4rem;
        background-color: #bbb;
        border-radius: .8rem;
         &-title {
            font-size: .18rem;
            font-weight: bold;
        }
        &-content {
            font-size: .14rem;
        }
    }
}
}

</style>
