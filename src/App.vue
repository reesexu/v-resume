<template>
  <div id="app">
    <section v-for="(item, index) in resumeData" :key="index">
      {{item.title}}
      <template v-for="(sItem, sIndex) in item.msg">
        <p v-if="sItem.type === msgType.paragraph" :key="sIndex">{{sItem.content}}</p>
        <li v-if="sItem.type === msgType.list" :key="sIndex">{{sItem.content}}</li>
      </template>
    </section>
  </div>
</template>

<script>
import {resumeData, msgType} from './const.js'
export default {
  name: 'app',
  data () {
    return {
      resumeData,
      msgType
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
