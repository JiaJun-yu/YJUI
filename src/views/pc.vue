<template>
  <div class="home">
    <h3>按钮组件</h3>
    <div class="button-module">
      <div><yj-button type="default">default</yj-button></div>
      <div><yj-button type="primary">primary</yj-button></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',

  data () {
    return {
      list: [0, 0, 1, 2, 2, 3, 3]
    }
  },

  methods: {
    result () {
      let slow = 0
      let fast = 1
      let count = 0 
      let arrLength = this.list.length
      
      while (fast < arrLength) {
        if (this.list[slow] !== this.list[fast]) {
          slow++
          this.list[slow] = this.list[fast]
        } else {
          count++
        }
        fast++
      }

      this.list.splice((arrLength - count), count)
      console.log(this.list)
    }
  }
}
</script>

<style lang="scss">
.home {
  padding-left: .3rem;
  user-select:none;
  font-size: 12px;

  h3 {
    color: #8C40FF;
  }

  .button-module {
    display: flex;
    margin-top: .15rem;

    div {
      margin-right: .15rem;
    }
  }
}
</style>

