# 配置文件
webpack提供的cli支持很多的参数，例如`--mode`，但更多的时候，我们会使用更加灵活的配置文件来控制webpack的行为

默认情况下，webpack会读取webpack.config.js文件作为配置文件，但也可以通过CLI参数--config来制定某个配置文件

配置文件中通过commonjs模块导出一个对象，对象中的各种属性对应不同的webpack配置

**注意：配置文件中代码，必须是有效的node代码**

*Hello*

# 其他细节配置
path.resolve(__dirname, 'target')

**头像**
![loader的执行过程](https://wx.qlogo.cn/mmhead/Q3auHgzwzM61mv7EENIU2WrPo8g2HiaeoicUOFtQJeorBISC3T84dwQA/64)
