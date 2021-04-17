
// 返回结果
const { NL_result } = require('./base/result.js')
// 定义一个跨文件全局方法
global.NL_result = NL_result
const NL_fs = require('./base/fs')

const NL_element = require('./base/element.js')
const NL_if = require('./base/if.js')
const NL_object = require('./base/object.js')
const NL_string = require('./base/string.js')
const NL_type = require('./base/type.js')
const { NL_Rules } = require('./base/rules.js')


async function name(params) {
  try {
    let a = await NL_fs.upDirOrFileName('/Volumes/neal/git/Neal-Tools/aaa.thm', '/Volumes/neal/git/Neal-Tools/bbb.html')
    console.log(a);
  } catch (error) {
    console.log(error);
    
  }
}
name()
module.exports = {
  NL_element,
  NL_if,
  NL_object,
  NL_string,
  NL_type
}