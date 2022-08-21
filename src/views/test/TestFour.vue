<template>
    <div class="container">
      <div class="head center">
        <div class="subject">精神专栏</div>
        <span>分数了解：不符合 - 0分、基本不符合 - 0.2分、比较符合 - 0.8分、符合 - 1分</span>
      </div>
      <div class="main center">
        <ul class="body-test">
          <li>
            <span class="test-title">1. 我没有为自己最擅长和最喜爱的工作付出足够的时间。</span>
            <div class="test">
              <input type="radio" id="saa" v-model="spritOne" value="0" name="body-one">
              <label for="saa"> A. 不符合</label>
              <input type="radio" id="sab" v-model="spritOne" value="0.2" name="body-one">
              <label for="sab"> B. 基本不符合</label>
              <input type="radio" id="sac" v-model="spritOne" value="0.8" name="body-one">
              <label for="sac"> C. 比较符合</label>
              <input type="radio" id="sad" v-model="spritOne" value="1" name="body-one">
              <label for="sad"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">2. 对于某些事情，虽然我嘴上说它们是我生活的重要部分，但实际上我为他们分配的时间和精力少之又少。</span>
            <div class="test">
              <input type="radio" id="sba" v-model="spritTwo" value="0" name="body-two">
              <label for="sba"> A. 不符合</label>
              <input type="radio" id="sbb" v-model="spritTwo" value="0.2" name="body-two">
              <label for="sbb"> B. 基本不符合</label>
              <input type="radio" id="sbc" v-model="spritTwo" value="0.8" name="body-two">
              <label for="sbc"> C. 比较符合</label>
              <input type="radio" id="sbd" v-model="spritTwo" value="1" name="body-two">
              <label for="sbd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">3. 我的工作决策常常受到外部需求的影响，而不是取决于内心强烈而明确的目标性。</span>
            <div class="test">
              <input type="radio" id="sca" v-model="spritThree" value="0" name="body-three">
              <label for="sca"> A. 不符合</label>
              <input type="radio" id="scb" v-model="spritThree" value="0.2" name="body-three">
              <label for="scb"> B. 基本不符合</label>
              <input type="radio" id="scc" v-model="spritThree" value="0.8" name="body-three">
              <label for="scc"> C. 比较符合</label>
              <input type="radio" id="scd" v-model="spritThree" value="1" name="body-three">
              <label for="scd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">4. 我没有投入足够的时间和精力，对他人或这个世界施加积极的影响。</span>
            <div class="test">
              <input type="radio" id="sda" v-model="spritFour" value="0" name="body-four">
              <label for="sda"> A. 不符合</label>
              <input type="radio" id="sdb" v-model="spritFour" value="0.2" name="body-four">
              <label for="sdb"> B. 基本不符合</label>
              <input type="radio" id="sdc" v-model="spritFour" value="0.8" name="body-four">
              <label for="sdc"> C. 比较符合</label>
              <input type="radio" id="sdd" v-model="spritFour" value="1" name="body-four">
              <label for="sdd"> D. 符合</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TestFour',
  data () {
    return {
      spritOne: '',
      spritTwo: '',
      spritThree: '',
      spritFour: '',
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
      this.result = parseFloat(this.spritOne * 1) + parseFloat(this.spritTwo * 1) + parseFloat(this.spritThree * 1) + parseFloat(this.spritFour * 1)
      console.log(this.result)
      localStorage.setItem('resultFour', this.result)
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
    background-image: url(../../images/e.jpg);
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
