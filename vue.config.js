const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,

  configureWebpack: config => {
    config.resolve.extensions = ['.js', '.vue', '.json', '.css', '.scss']

    config.plugins.push(
      new CopyWebpackPlugin([{ from: 'public/', to: 'public' }])
    )
  },

  chainWebpack: config => {
    config.module.rule('compile')
      .test(/\.js$/)
      .include
      .add(resolve('src/components'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ],
        plugins: ['@babel/plugin-proposal-object-rest-spread']
      })

    /* const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader') */

    /* config.module.rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        return merge(options, {
          limit: 9999999
        })
      }) */

    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('utils', resolve('src/utils'))
      .set('assets', resolve('src/assets'))
  }
}