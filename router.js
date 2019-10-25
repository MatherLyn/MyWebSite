// 路由模块

const express = require('express')
const handler = require('./handler.js')

const router = express.Router()

// 发起 get 请求，请求静态页面
router.get('/', handler.index)

router.get('/index', handler.index)

router.get('/login', handler.login)

router.get('/messageboard', handler.messageboard)

router.get('/onlinetools', handler.onlinetools)

router.get('/techdiscuz', handler.techdiscuz)

router.get('/global.css', handler.loadcss)

router.get('/smile.png', handler.loadicon)

router.get('/RegExp.png', handler.loadRegIcon)

router.get('/transcode.png', handler.loadTranscodeIcon)

router.get('/browser.png', handler.loadBrowserIcon)

router.get('/rsa.png', handler.loadRSAIcon)

router.get('/onlineRegExpTest', handler.regTest)

router.get('/checked.png', handler.loadCheckedIcon)

router.get('/unchecked.png', handler.loadUncheckedIcon)


// router.get('/section1.jpg', handler.loadsection1img)

module.exports = router