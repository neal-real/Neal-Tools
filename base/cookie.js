/**
* & 为 cookie 封装添加,查询,删除的方法
*/

/**
* > 添加 cookie
* @key(String) = cookie 中的 name
* @value(String) = cookie 中的 value
* @day(int) 有效期; 值是正整数,例如 1 既是 1 天有效期,非必填项目,不填为默认
* @path(String) 是否设置为生效范围 如果需要全路径生效 可设置为 '/'
* @domain(String) 是否需要开启二级域名可访问,例  'knowmap.cn' 则是 knowmap 域名中的二级域名也可以访问
* @return 成功返回 null ,否则返回设置失败的 'key=value'
*/ 
function addCookie(key, value, day, path, domain) {
  try {
    let oldData = document.cookie;
    // 1. 过滤保存路径, 如果未设置为当前路径
    let index = window.location.pathname.lastIndexOf("/");
    let currentPath = window.location.pathname.slice(0, index);
    path = path || currentPath
    // 2. 是否未二级域名开启
    domain = domain || document.domain
    // 3. 处理默认的过期时间 
    if (!day) {
      document.cookie = key + "=" + value + ";path=" + path + ";domain=" + domain + ";";
    } else {
      var date = new Date();
      // 加一天 
      date.setDate(date.getDate() + day);
      // ; 号前设置值,后面设置有效期
      document.cookie = key + "=" + value + ";expires=" + date.toGMTString() + ";path=" + path + ";domain=" + domain + ";";

    }
    return oldData !== document.cookie ? null : key + "=" + value
  } catch (error) {
    return error
  }
}

/**
* > 获得 cookie
* @key(String) =  key
* @return 成功返回 value
*/ 
function getCookie(key) {
  try {
    let res = document.cookie.split(";")
    for (let i = 0; i < res.length; i++) {
      const temp = res[i].split("=");
      if (temp[0].trim() === key) {
        return temp[i]
      } 
    }
  } catch (error) {
    return error
  }
}


/**
* > 删除 cookie
* @key(String) key
* @path(String) 可选,不写则删除默认路径下的 key, 写了则删除指定路径下的 cookie
*/ 
function delCookie(key, path) {
  try {
    // 设置过期时间为昨天,清除 key
    addCookie(key, getCookie(key), -1, path)
  } catch (error) {
    return error
  }
}

module.exports = {
  addCookie,
  getCookie,
  delCookie
}