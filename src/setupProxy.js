const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/proxy', {
        target: 'http://localhost:8080/epidemic_server_war',
        pathRewrite: {
            "^/proxy": "/"
        }
    }))
}
