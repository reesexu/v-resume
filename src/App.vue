<template>
  <div id="app">
    <!-- 菜单 -->
    <div class="menu">
      <span :class="['icon-v-more', {'open' : showMenu}]" @click="showMenu = !showMenu"/>
      <transition name="slide-fade">
        <ul v-if="showMenu">
          <li v-for="(item, index) in navData" :key="index" @click="onNavClick(index)">
            {{item.title}}
          </li>
        </ul>
      </transition>
    </div>
    <!-- 主体 -->
    <div class="wrapper" ref="wrapper" @click="hideMenu">
      <div class="content">
        <!-- 导航 -->
        <header>XUWENCHAO-RESUME</header>
        <!-- 内容区 -->
        <section :class="item.class" v-for="(item, index) in resumeData" :key="index" :style="{backgroundColor: item.background,}">
          <div>
            <!-- 标题 -->
            <h1 v-if="index !== 0">{{item.title}}</h1>
            <!-- 头像 -->
            <img v-if="item.avatar" :src="item.avatar" alt="avatar" />
            <!-- 内容项 -->
            <template v-for="(sItem, sIndex) in item.msg">
              <h3 v-if="sItem.type === msgType.title" :key="sIndex">{{sItem.content}}</h3>
              <p v-if="sItem.type === msgType.paragraph || sItem.type === msgType.list" :key="sIndex" @click="toNewPage(sItem.link)">
                <span v-if="sItem.icon" :class="sItem.icon" /> {{sItem.content}}
              </p>
            </template>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { resumeData, msgType } from './const.js'
import BScroll from 'better-scroll'
export default {
  name: 'app',
  data() {
    return {
      resumeData,
      msgType,
      showMenu: false
    }
  },
  computed: {
    navData() {
      const data = resumeData.map(item => ({
        title: item.title,
        class: item.class
      }))
      data.push({
        title: '我的博客',
        link: 'https://blog.xuwenchao.site'
      })
      return data
    }
  },
  mounted() {
    // 初始化better-scroll
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: {
          speed: 20,
          easeTime: 300
        }
      })
      this.scroll.on('scrollStart', this.hideMenu)
    })
  },
  methods: {
    // 跳转到制定板块或我的博客
    onNavClick(index) {
      const className = this.navData[index].class
      const { link } = this.navData[index]
      if (className) {
        this.showMenu = false
        this.scroll.scrollToElement(
          document.getElementsByClassName(className)[0],
          600
        )
      } else {
        window.location.href = link
      }
    },
    // 隐藏菜单
    hideMenu() {
      if (this.showMenu) {
        this.showMenu = false
      }
    },
    // 打开新页面
    toNewPage(link) {
      link && (window.location.href = link)
    }
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
// 导航高度
$headerHeight: 5rem;
// 移动端样式
@mixin responsive($width: 760px) {
  @media only screen and (max-width: $width) {
    @content;
  }
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 960px;
  @include responsive() {
    min-width: 100%;
    font-size: 16px;
  }
  height: 100%;
  color: #fff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.5rem;
  @include responsive() {
    font-size: 1.1rem;
  }
}

.menu {
  position: fixed;
  z-index: 2;
  font-size: 1.8rem;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 0.7rem;
  cursor: pointer;
  @include responsive() {
    font-size: 1.1rem;
    padding: 1.1rem;
  }
  span {
    display: inline-block;
    transition: all 0.2s ease-in-out;
    transform: none;
    &.open {
      transform: rotate(45deg);
    }
  }
  ul {
    position: absolute;
    right: 2.5rem;
    top: 70%;
    width: 9rem;
    font-size: 15px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 0 8px rgb(182, 182, 182);
    li {
      padding: 0.7rem 0;
    }
  }
}

h1 {
  margin-bottom: 1.5rem;
  @include responsive() {
    text-align: center;
  }
}

section {
  padding: 3rem 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 600px;
    @include responsive() {
      width: 100%;
    }
  }
  &:last-child {
    > div {
      width: 300px;
    }
  }
  &:nth-child(2) {
    p {
      text-align: center;
      justify-content: center;
    }
  }
  &:last-child {
    p {
      @include responsive() {
        width: 200px;
      }
    }
  }
  p {
    width: 100%;
    text-align: left;
    line-height: 1.8;
    margin: 0 auto;
    display: flex;
    align-items: center;
    span {
      margin: 0.4rem;
      font-size: 25px;
    }
    @include responsive() {
      line-height: 1.6;
    }
  }
  img {
    display: block;
    width: 10rem;
    height: 10rem;
    margin: 1rem auto 2rem;
  }
  h3 {
    margin: 0.5rem 0;
    &:first-child {
      margin-top: 0;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
