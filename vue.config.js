const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      // 页面预渲染
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
      })
    ]
  }
}
