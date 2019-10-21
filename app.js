// 入口文件

const express = require('express')
const path = require('path')

const config = require('./config.js')
const router = require('./router.js')

const app = express()

// 静态资源托管
// app.use('/static', express.static(path.join(__dirname, 'static')))

// 路由管理
app.use(router)

app.listen(80, () => {
    console.log(`服务器已启动，请通过 ${config.host}:${config.port} 访问……`)
})