<template>
    <div class="container">
      <div class="head center">
        <div class="subject">思想专栏</div>
        <span>分数了解：不符合 - 0分、基本不符合 - 0.2分、比较符合 - 0.8分、符合 - 1分</span>
      </div>
      <div class="main center">
        <ul class="body-test">
          <li>
            <span class="test-title">1. 我很难集中精力善始善终地做好一件事，总是容易为杂事而分心，特别是被社交软件。</span>
            <div class="test">
              <input type="radio" id="taa" v-model="thoughtOne" value="0" name="body-one">
              <label for="taa"> A. 不符合</label>
              <input type="radio" id="tab" v-model="thoughtOne" value="0.2" name="body-one">
              <label for="tab"> B. 基本不符合</label>
              <input type="radio" id="tac" v-model="thoughtOne" value="0.8" name="body-one">
              <label for="tac"> C. 比较符合</label>
              <input type="radio" id="tad" v-model="thoughtOne" value="1" name="body-one">
              <label for="tad"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">2. 我每天把大把时间用来应付迫在眉睫的危机和需求，而不是专注于具有长远价值，蕴涵巨大优势的活动。</span>
            <div class="test">
              <input type="radio" id="tba" v-model="thoughtTwo" value="0" name="body-two">
              <label for="tba"> A. 不符合</label>
              <input type="radio" id="tbb" v-model="thoughtTwo" value="0.2" name="body-two">
              <label for="tbb"> B. 基本不符合</label>
              <input type="radio" id="tbc" v-model="thoughtTwo" value="0.8" name="body-two">
              <label for="tbc"> C. 比较符合</label>
              <input type="radio" id="tbd" v-model="thoughtTwo" value="1" name="body-two">
              <label for="tbd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">3. 我留不出充足的时间进行内省、战略构想和创造性思考。</span>
            <div class="test">
              <input type="radio" id="tca" v-model="thoughtThree" value="0" name="body-three">
              <label for="tca"> A. 不符合</label>
              <input type="radio" id="tcb" v-model="thoughtThree" value="0.2" name="body-three">
              <label for="tcb"> B. 基本不符合</label>
              <input type="radio" id="tcc" v-model="thoughtThree" value="0.8" name="body-three">
              <label for="tcc"> C. 比较符合</label>
              <input type="radio" id="tcd" v-model="thoughtThree" value="1" name="body-three">
              <label for="tcd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">4. 我晚间和周末都要工作，几乎没有哪个假期可以不需要关注回复信息。</span>
            <div class="test">
              <input type="radio" id="tda" v-model="thoughtFour" value="0" name="body-four">
              <label for="tda"> A. 不符合</label>
              <input type="radio" id="tdb" v-model="thoughtFour" value="0.2" name="body-four">
              <label for="tdb"> B. 基本不符合</label>
              <input type="radio" id="tdc" v-model="thoughtFour" value="0.8" name="body-four">
              <label for="tdc"> C. 比较符合</label>
              <input type="radio" id="tdd" v-model="thoughtFour" value="1" name="body-four">
              <label for="tdd"> D. 符合</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TestThree',
  data () {
    return {
      thoughtOne: '',
      thoughtTwo: '',
      thoughtThree: '',
      thoughtFour: '',
      finish: false,
      result: 0 * 1
    }
  },
  props: ['change'],
  updated () {
    this.calculation()
  },
  methods: {
    calculation () {
      this.result = parseFloat(this.thoughtOne * 1) + parseFloat(this.thoughtTwo * 1) + parseFloat(this.thoughtThree * 1) + parseFloat(this.thoughtFour * 1)
      console.log(this.result)
      localStorage.setItem('resultThree', this.result)
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
   background-image: url(../../images/d.jpg);
}
.subject {
  color: #0c7bb3;
}
.test {
  margin-top: .25rem;
  margin-bottom: .25rem;
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
