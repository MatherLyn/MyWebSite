// 业务模块
const fs = require('fs')
const path = require('path')
const mime = require('mime')

const staticPageResponse = function (response, filename) {
    fs.readFile(path.join(__dirname, 'static', filename), (err, data) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'static', 'error.html'), (err, data) => {
                if (err) throw err
                response.end(data)
            })
        } else {
            response.end(data)
        }
    })
}

const loadcss = function (request, response) {
    staticPageResponse(response, 'global.css')
}

const loadicon = function (request, response) {
    staticPageResponse(response, 'smile.png')
}

const loadRegIcon = function (request, response) {
    staticPageResponse(response, 'RegExp.png')
}

const loadTranscodeIcon = function (request, response) {
    staticPageResponse(response, 'transcode.png')
}
const loadBrowserIcon = function (request, response) {
    staticPageResponse(response, 'browser.png')
}
const loadRSAIcon = function (request, response) {
    staticPageResponse(response, 'rsa.png')
}

// const loadsection1img = function (request, response) {
//     staticPageResponse(response, 'section1.jpg')
// }

const index = function (request, response) {
    staticPageResponse(response, 'index.html')
}

const login = function (request, response) {
    staticPageResponse(response, 'login.html')
}

const messageboard = function (request, response) {
    staticPageResponse(response, 'messageboard.html')
}

const onlinetools = function (request, response) {
    staticPageResponse(response, 'onlinetools.html')
}

const techdiscuz = function (request, response) {
    staticPageResponse(response, 'techdiscuz.html')
}


const handler = {
    index,
    login,
    messageboard,
    onlinetools,
    techdiscuz,
    loadcss,
    loadicon,
    loadRegIcon,
    loadTranscodeIcon,
    loadBrowserIcon,
    loadRSAIcon
    // loadsection1img
}

module.exports = handler