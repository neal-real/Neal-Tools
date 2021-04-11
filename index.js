
const NL_element = require('./base/element.js')
const NL_if = require('./base/if.js')
const NL_object = require('./base/object.js')
const NL_string = require('./base/string.js')
const NL_type = require('./base/type.js')
const { NL_Rules } = require('./base/rules.js')



let abc = new NL_Rules().isIdCard18('110101199003074610')

console.log(abc)


module.exports = {
  NL_element,
  NL_if,
  NL_object,
  NL_string,
  NL_type
}