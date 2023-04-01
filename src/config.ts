import path from 'path'
// var path = require('path')
// swagger配置信息
export const swaggerConfig = {
    openapi: '3.0.0',
    title: 'Express Template',
    version: '1.0.0',
    apis: [
        path.join(__dirname, '/routes/*.js')
    ],
    routerPath: '/api-docs'
}