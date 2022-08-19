<template>
    <div class="container">
      <div class="head center">
        <div class="subject">精神</div>
      </div>
      <div class="main center">
        <ul class="body-test">
          <li>
            <span class="test-title">1. 我没有为自己最擅长和最喜爱的工作付出足够的时间。</span>
            <div class="test">
              <input type="radio" id="saa" value="0" name="body-one">
              <label for="saa"> A. 不符合</label>
              <input type="radio" id="sab" value="0.2" name="body-one">
              <label for="sab"> B. 基本不符合</label>
              <input type="radio" id="sac" value="0.8" name="body-one">
              <label for="sac"> C. 比较符合</label>
              <input type="radio" id="sad" value="1" name="body-one">
              <label for="sad"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">2. 对于某些事情，虽然我嘴上说它们是我生活的重要部分，但实际上我为他们分配的时间和精力少之又少。</span>
            <div class="test">
              <input type="radio" id="sba" value="0" name="body-two">
              <label for="sba"> A. 不符合</label>
              <input type="radio" id="sbb" value="0.2" name="body-two">
              <label for="sbb"> B. 基本不符合</label>
              <input type="radio" id="sbc" value="0.8" name="body-two">
              <label for="sbc"> C. 比较符合</label>
              <input type="radio" id="sbd" value="1" name="body-two">
              <label for="sbd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">3. 我的工作决策常常受到外部需求的影响，而不是取决于内心强烈而明确的目标性。</span>
            <div class="test">
              <input type="radio" id="sca" value="0" name="body-three">
              <label for="sca"> A. 不符合</label>
              <input type="radio" id="scb" value="0.2" name="body-three">
              <label for="scb"> B. 基本不符合</label>
              <input type="radio" id="scc" value="0.8" name="body-three">
              <label for="scc"> C. 比较符合</label>
              <input type="radio" id="scd" value="1" name="body-three">
              <label for="scd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">4. 我没有投入足够的时间和精力，对他人或这个世界施加积极的影响。</span>
            <div class="test">
              <input type="radio" id="sda" value="0" name="body-four">
              <label for="sda"> A. 不符合</label>
              <input type="radio" id="sdb" value="0.2" name="body-four">
              <label for="sdb"> B. 基本不符合</label>
              <input type="radio" id="sdc" value="0.8" name="body-four">
              <label for="sdc"> C. 比较符合</label>
              <input type="radio" id="sdd" value="1" name="body-four">
              <label for="sdd"> D. 符合</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TestFour'
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
  height: 1rem;
  margin-top: .1rem;
  box-shadow: .02rem .02rem .02rem .02rem rgba(0, 0, 0, 0.1);
}
.subject {
  font-size: .20rem;
  font-weight: bold;
  line-height: .4rem;
  padding-left: .1rem;
  color: #104597;
  border-left: .15rem solid #01847f;
}
.body-test {
  margin-top: .2rem;
}
.test-title {
  display: block;
  font-size: .18rem;
  font-weight: bold;
}
.test {
  /* display: inline-block; */
  font-size: .18rem;
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
