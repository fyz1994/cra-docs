const fs = require('fs')
// 获取该文件夹下的所有文件名
const getFileNames = (parentFileName) => {
  const results = []
  const files = fs.readdirSync(`./docs${parentFileName}`)
  files.forEach((val) => {
    if ('README.md'.includes(val)) {
      // results.push('')
    } else {
      results.push(val)
    }
  })
  return results
}

module.exports = {
  title: 'bs-cra',
  description: 'node-cli，为您准备好开箱即用的业务开发 APP',
  base: "/cra-docs/",
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-144045995-2'
      }
    ],
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    displayAllHeaders: false, // 默认值：false

    lastUpdated: true,

    repo: 'fyz1994/cra-docs',
    editLinks: true,
    docsDir: 'docs',

    smoothScroll: true,//页面滚动

    nav: [
      {
        text: '首页', link: '/',
      },
      {
        text: '文档', link: '/knowledge/docs.md',
      },
      {
        text: '更新日志', link: '/knowledge/VERSIONS.md',
      },
      {
        text: 'V2.0.0',
        link: 'https://www.npmjs.com/package/bs-cra'
      },
    ],
  }
}
