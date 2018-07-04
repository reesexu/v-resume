export const msgType = {
  title: 'title',
  paragraph: 'paragraph',
  list: 'list'
}
const getMsgObj = (type, content) => ({
  type,
  content
})
export const resumeData = [{
  title: '关于我',
  avatar: require('./assets/img/me.png'),
  msg: [
    getMsgObj(msgType.paragraph, '徐文超'),
    getMsgObj(msgType.paragraph, '前端开发工程师'),
    getMsgObj(msgType.paragraph, '北京师范大学珠海分校(2013.9~2017.6)/本科/软件工程'),
    getMsgObj(msgType.paragraph, '籍贯广东梅州/现居珠海'),
    getMsgObj(msgType.paragraph, '喜欢编程/健身')
  ]
}, {
  title: '个人技能',
  msg: [
    getMsgObj(msgType.list, '熟悉react,vue技术栈的应用开发'),
    getMsgObj(msgType.list, '熟练使用常用的ES6/7标准进行项目编码,有良好的编码风格'),
    getMsgObj(msgType.list, '熟悉使用webpack等前端工程化构建工具, 对前后端分离以及混合开发有一定认识与实践经验'),
    getMsgObj(msgType.list, '能够使用nodejs,mongodb进行后端开发，了解基本后端mvc架构'),
    getMsgObj(msgType.list, '熟练使用chrome等调试工具，对web项目性能优化有一定经验'),
    getMsgObj(msgType.list, '熟练使用HTML5、CSS3、SASS等预编译css完成前端页面构建和响应式布局等'),
    getMsgObj(msgType.list, '具备在ubuntu系统下进行开发和使用nginx的基本运维的能力'),
    getMsgObj(msgType.list, '有良好的自学能力，能够独立解决问题，热衷探索新技术'),
    getMsgObj(msgType.list, '具备良好的沟通能力和团队协作精神，对工作负责')
  ]
}, {
  title: '工作经验',
  msg: [
    getMsgObj(msgType.title, '珠海市旗云科技有限公司(2018/5~至今)'),
    getMsgObj(msgType.paragraph, 'web前端开发'),
    getMsgObj(msgType.list, '负责前端的架构选型、实现'),
    getMsgObj(msgType.list, '帮助前端团队进行react方向的技术架构迁移'),
    getMsgObj(msgType.list, '开发、维护基于react的pc、微信端以及混合app项目'),
    getMsgObj(msgType.list, '维护已有的vue项目'),
    getMsgObj(msgType.title, '珠海多士科技有限公司(2017/5~2018/5)'),
    getMsgObj(msgType.paragraph, 'web前端开发'),
    getMsgObj(msgType.list, '负责公司前端项目的调研，架构，实现'),
    getMsgObj(msgType.list, '帮助前端团队进行react方向的技术架构迁移'),
    getMsgObj(msgType.list, '官方网站,app内嵌h5的开发与维护'),
    getMsgObj(msgType.list, '基于reactjs的hybrid app 诸葛小明2的技术选型与实现，在保证用户体验的同时，降低了开发以及维护的成本')
  ]
}, {
  title: '个人项目',
  msg: []
}, {
  title: '联系我',
  msg: []
}]
