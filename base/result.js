
/**
* & 简化返回结果
*/ 
function NL_result(status, msg, error) {
  // 除返回码外其他未定义返回 null
  if (status === undefined) throw new Error('返回码不可以是未定义')
  if (msg === undefined) throw new Error('成功信息不可以是未定义,没有请填写null')
  if (error === undefined) throw new Error('错误信息不可以是未定义,没有请填写null')
  return {
    status: status,
    msg: msg,
    error: error
  }
}

module.exports = {
  NL_result
}

/*
// 正常返回
NL_result(200, data, null)
// 正常返回,但是结果为 null 的一种正常返回
NL_result(201, null, null)
// 返回结果,但是结果可能不是请求人想要的,有可能有用
NL_result(202, null, null)

主动返回的错误码, 即 非catch 捕捉的错误,返回格式
NL_result(206, null, '具体错误信息')

catch 捕捉的错误,返回格式
NL_result(205, null, '具体错误信息')

工具类中主动返回的错误码
NL_result(209, null, '具体错误信息')
*/