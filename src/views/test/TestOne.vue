<template>
    <div class="container">
      <div class="head center">
        <div class="subject">身体</div>
      </div>
      <div class="main center">
        <ul class="body-test">
          <li>
            <span class="test-title">1. 我无法保证每晚至少睡7-8小时，醒来时常常感到疲劳。</span>
            <div class="test">
              <input type="radio" id="baa" value="0" name="body-one">
              <label for="baa"> A. 不符合</label>
              <input type="radio" id="bab" value="0.2" name="body-one">
              <label for="bab"> B. 基本不符合</label>
              <input type="radio" id="bac" value="0.8" name="body-one">
              <label for="bac"> C. 比较符合</label>
              <input type="radio" id="bad" value="1" name="body-one">
              <label for="bad"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">2. 我经常不吃早餐，要么就是对付着吃些没什么营养的东西。</span>
            <div class="test">
              <input type="radio" id="bba" value="0" name="body-two">
              <label for="bba"> A. 不符合</label>
              <input type="radio" id="bbb" value="0.2" name="body-two">
              <label for="bbb"> B. 基本不符合</label>
              <input type="radio" id="bbc" value="0.8" name="body-two">
              <label for="bbc"> C. 比较符合</label>
              <input type="radio" id="bbd" value="1" name="body-two">
              <label for="bbd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">3. 我运动量不够（充足的运动是指每周至少3次循环系统的训练，1次力量训练）。</span>
            <div class="test">
              <input type="radio" id="bca" value="0" name="body-three">
              <label for="bca"> A. 不符合</label>
              <input type="radio" id="bcb" value="0.2" name="body-three">
              <label for="bcb"> B. 基本不符合</label>
              <input type="radio" id="bcc" value="0.8" name="body-three">
              <label for="bcc"> C. 比较符合</label>
              <input type="radio" id="bcd" value="1" name="body-three">
              <label for="bcd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">4. 在一天的工作中，我没有定时休息的习惯，因此能量得不到真正的补充。</span>
            <div class="test">
              <input type="radio" id="bda" value="0" name="body-four">
              <label for="bda"> A. 不符合</label>
              <input type="radio" id="bdb" value="0.2" name="body-four">
              <label for="bdb"> B. 基本不符合</label>
              <input type="radio" id="bdc" value="0.8" name="body-four">
              <label for="bdc"> C. 比较符合</label>
              <input type="radio" id="bdd" value="1" name="body-four">
              <label for="bdd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">5. 我要么不吃午餐，要么经常在办公桌旁吃。</span>
            <div class="test">
              <input type="radio" id="bea" value="0" name="body-five">
              <label for="bea"> A. 不符合</label>
              <input type="radio" id="beb" value="0.2" name="body-five">
              <label for="beb"> B. 基本不符合</label>
              <input type="radio" id="bec" value="0.8" name="body-five">
              <label for="bec"> C. 比较符合</label>
              <input type="radio" id="bed" value="1" name="body-five">
              <label for="bed"> D. 符合</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TestOne'
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
