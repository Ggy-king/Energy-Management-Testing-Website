<template>
    <div class="container">
      <div class="head center">
        <div class="subject">思想</div>
      </div>
      <div class="main center">
        <ul class="body-test">
          <li>
            <span class="test-title">1. 我很难集中精力善始善终地做好一件事，总是容易为杂事而分心，特别是被社交软件。</span>
            <div class="test">
              <input type="radio" id="taa" value="0" name="body-one">
              <label for="taa"> A. 不符合</label>
              <input type="radio" id="tab" value="0.2" name="body-one">
              <label for="tab"> B. 基本不符合</label>
              <input type="radio" id="tac" value="0.8" name="body-one">
              <label for="tac"> C. 比较符合</label>
              <input type="radio" id="tad" value="1" name="body-one">
              <label for="tad"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">2. 我每天把大把时间用来应付迫在眉睫的危机和需求，而不是专注于具有长远价值，蕴涵巨大优势的活动。</span>
            <div class="test">
              <input type="radio" id="tba" value="0" name="body-two">
              <label for="tba"> A. 不符合</label>
              <input type="radio" id="tbb" value="0.2" name="body-two">
              <label for="tbb"> B. 基本不符合</label>
              <input type="radio" id="tbc" value="0.8" name="body-two">
              <label for="tbc"> C. 比较符合</label>
              <input type="radio" id="tbd" value="1" name="body-two">
              <label for="tbd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">3. 我留不出充足的时间进行内省、战略构想和创造性思考。</span>
            <div class="test">
              <input type="radio" id="tca" value="0" name="body-three">
              <label for="tca"> A. 不符合</label>
              <input type="radio" id="tcb" value="0.2" name="body-three">
              <label for="tcb"> B. 基本不符合</label>
              <input type="radio" id="tcc" value="0.8" name="body-three">
              <label for="tcc"> C. 比较符合</label>
              <input type="radio" id="tcd" value="1" name="body-three">
              <label for="tcd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">4. 我晚间和周末都要工作，几乎没有哪个假期可以不需要关注回复信息。</span>
            <div class="test">
              <input type="radio" id="tda" value="0" name="body-four">
              <label for="tda"> A. 不符合</label>
              <input type="radio" id="tdb" value="0.2" name="body-four">
              <label for="tdb"> B. 基本不符合</label>
              <input type="radio" id="tdc" value="0.8" name="body-four">
              <label for="tdc"> C. 比较符合</label>
              <input type="radio" id="tdd" value="1" name="body-four">
              <label for="tdd"> D. 符合</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TestThree'
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
