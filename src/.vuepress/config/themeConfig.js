// See more in https://github.com/ktquez/vuepress-theme-ktquez#themeconfig
const en = require('./locales/en/config')
const pt = require('./locales/pt/config')
const es = require('./locales/es/config')

module.exports = {
  locales: {
    '/': en,
    '/pt/': pt,
    '/es/': es
  },
  serviceWorker: {
    updatePopup: { 
      message: "New content 🎉🎉", 
      buttonText: "Update" 
    }
  },
  disqus: 'ktquez',
  url: `https://MY_DOMAIN.COM`,
  cdn: '',
  blackWhite: true,
  topNavigation: false,
  searchMaxSuggestions: 7,
  responsive: {
    active: false,
    ext: 'png',
    breakpoints: []
  },
  lazyLoad: {},
  share: {
    facebook: {
      appId: `MY FACEBOOK APP ID`,
      version: 'v3.1'
    }
  },
  elevator: {
    duration: 4000,
    mainAudio: '/music/elevator.mp3',
    endAudio: '/music/ding.mp3'
  }
}
