const path = require('path')
module.exports = {
    //入口
    entry: './src/main.js',
    //出口
    output:{
        //动态获取路径
        path:path.relative(__dirname,'dist'),//将路径进行拼接
        filename:'bundle.js'
    }
}