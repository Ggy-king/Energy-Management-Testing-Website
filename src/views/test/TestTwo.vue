<template>
    <div class="container">
      <div class="head center">
        <div class="subject">情绪</div>
      </div>
      <div class="main center">
        <ul class="body-test">
          <li>
            <span class="test-title">1. 我发现，自己在工作时总是脾气暴躁、缺少耐心、焦虑不安，尤其是碰到棘手任务的时候。</span>
            <div class="test">
              <input type="radio" id="eaa" value="0" name="body-one">
              <label for="eaa"> A. 不符合</label>
              <input type="radio" id="eab" value="0.2" name="body-one">
              <label for="eab"> B. 基本不符合</label>
              <input type="radio" id="eac" value="0.8" name="body-one">
              <label for="eac"> C. 比较符合</label>
              <input type="radio" id="ead" value="1" name="body-one">
              <label for="ead"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">2. 我没有足够的时间陪伴家人和挚爱亲朋，就算我在他们身边，也总是人在心不在。</span>
            <div class="test">
              <input type="radio" id="eba" value="0" name="body-two">
              <label for="eba"> A. 不符合</label>
              <input type="radio" id="ebb" value="0.2" name="body-two">
              <label for="ebb"> B. 基本不符合</label>
              <input type="radio" id="ebc" value="0.8" name="body-two">
              <label for="ebc"> C. 比较符合</label>
              <input type="radio" id="ebd" value="1" name="body-two">
              <label for="ebd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">3. 我没有多少时间从事自己最喜欢的活动。</span>
            <div class="test">
              <input type="radio" id="eca" value="0" name="body-three">
              <label for="eca"> A. 不符合</label>
              <input type="radio" id="ecb" value="0.2" name="body-three">
              <label for="ecb"> B. 基本不符合</label>
              <input type="radio" id="ecc" value="0.8" name="body-three">
              <label for="ecc"> C. 比较符合</label>
              <input type="radio" id="ecd" value="1" name="body-three">
              <label for="ecd"> D. 符合</label>
            </div>
          </li>
          <li>
            <span class="test-title">4. 我很少有空对他人表示赞赏，也不会享受成功和幸福带来的喜悦。</span>
            <div class="test">
              <input type="radio" id="eda" value="0" name="body-four">
              <label for="eda"> A. 不符合</label>
              <input type="radio" id="edb" value="0.2" name="body-four">
              <label for="edb"> B. 基本不符合</label>
              <input type="radio" id="edc" value="0.8" name="body-four">
              <label for="edc"> C. 比较符合</label>
              <input type="radio" id="edd" value="1" name="body-four">
              <label for="edd"> D. 符合</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TestTwo'
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
