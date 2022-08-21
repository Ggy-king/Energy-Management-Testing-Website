<template>
    <div class="container">
      <div class="head center">
        <div class="subject">身体专栏</div>
        <span>分数了解：不符合 - 0分、基本不符合 - 0.2分、比较符合 - 0.8分、符合 - 1分</span>
      </div>
      <div class="main center">
        <ul class="body-test">
          <li>
            <span class="test-title">1. 我无法保证每晚至少睡7-8小时，醒来时常常感到疲劳。</span>
            <div class="test">
              <input type="radio" id="baa" v-model="bodyOne" value="0" name="body-one">
              <label for="baa"> A. 不符合</label>
              <input type="radio" id="bab" v-model="bodyOne" :value="0.2" name="body-one">
              <label for="bab"> B. 基本不符合</label>
              <input type="radio" id="bac" v-model="bodyOne" :value="0.8" name="body-one">
              <label for="bac"> C. 比较符合</label>
              <input type="radio" id="bad" v-model="bodyOne" :value="1" name="body-one">
              <label for="bad"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">2. 我经常不吃早餐，要么就是对付着吃些没什么营养的东西。</span>
            <div class="test">
              <input type="radio" id="bba" v-model="bodyTwo" value="0" name="body-two">
              <label for="bba"> A. 不符合</label>
              <input type="radio" id="bbb" v-model="bodyTwo" value="0.2" name="body-two">
              <label for="bbb"> B. 基本不符合</label>
              <input type="radio" id="bbc" v-model="bodyTwo" value="0.8" name="body-two">
              <label for="bbc"> C. 比较符合</label>
              <input type="radio" id="bbd" v-model="bodyTwo" value="1" name="body-two">
              <label for="bbd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">3. 我运动量不够（充足的运动是指每周至少3次循环系统的训练，1次力量训练）。</span>
            <div class="test">
              <input type="radio" id="bca" v-model="bodyThree" value="0" name="body-three">
              <label for="bca"> A. 不符合</label>
              <input type="radio" id="bcb" v-model="bodyThree" value="0.2" name="body-three">
              <label for="bcb"> B. 基本不符合</label>
              <input type="radio" id="bcc" v-model="bodyThree" value="0.8" name="body-three">
              <label for="bcc"> C. 比较符合</label>
              <input type="radio" id="bcd" v-model="bodyThree" value="1" name="body-three">
              <label for="bcd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">4. 在一天的工作中，我没有定时休息的习惯，因此能量得不到真正的补充。</span>
            <div class="test">
              <input type="radio" id="bda" v-model="bodyFour" value="0" name="body-four">
              <label for="bda"> A. 不符合</label>
              <input type="radio" id="bdb" v-model="bodyFour" value="0.2" name="body-four">
              <label for="bdb"> B. 基本不符合</label>
              <input type="radio" id="bdc" v-model="bodyFour" value="0.8" name="body-four">
              <label for="bdc"> C. 比较符合</label>
              <input type="radio" id="bdd" v-model="bodyFour" value="1" name="body-four">
              <label for="bdd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">5. 我要么不吃午餐，要么经常在办公桌旁吃。</span>
            <div class="test">
              <input type="radio" id="bea" v-model="bodyFive" value="0" name="body-five">
              <label for="bea"> A. 不符合</label>
              <input type="radio" id="beb" v-model="bodyFive" value="0.2" name="body-five">
              <label for="beb"> B. 基本不符合</label>
              <input type="radio" id="bec" v-model="bodyFive" value="0.8" name="body-five">
              <label for="bec"> C. 比较符合</label>
              <input type="radio" id="bed" v-model="bodyFive" value="1" name="body-five">
              <label for="bed"> D. 符合</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TestOne',
  data () {
    return {
      bodyOne: '',
      bodyTwo: '',
      bodyThree: '',
      bodyFour: '',
      bodyFive: '',
      finish: false,
      result: 0 * 1
    }
  },
  props: ['change'],
  updated () {
    this.calculation()
    this.shock()
  },
  methods: {
    calculation () {
      this.result = parseFloat(this.bodyOne * 1) + parseFloat(this.bodyTwo * 1) + parseFloat(this.bodyThree * 1) + parseFloat(this.bodyFour * 1) + parseFloat(this.bodyFive * 1)
      console.log(this.result)
      localStorage.setItem('resultOne', this.result)
    },
    shock () {
      if (this.bodyOne !== '' && this.bodyTwo !== '' && this.bodyThree !== '' && this.bodyFour !== '' && this.bodyFive !== '') {
        console.log('成功')
      }
    }
  }
}
</script>

<style lang="css" scoped>
.center {
  margin: auto;
  width: 80%;
}
.container {
  position: absolute;
  top: 1rem;
}
.head {
  background-image: url(../../images/b.jpg);
}

.subject {
  color: #0c7bb3;
}
.test {
  margin-top: .2rem;
  margin-bottom: .2rem;
}
label::before{
border: .01rem solid #E8F5C8;
}

input:checked+label::before{
background-color: #5e69c2;
}
input:checked+label::after{
background-color: #E8F5C8;
}
</style>
