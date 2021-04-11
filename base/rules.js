/**
* & 各种验证规则
* @返回值: 符合返回 true ,否则返回 false
*/
class NL_Rules {
  constructor() {
    // 电话号码的正则表达式
    this.phoneRE = {
      //中国电信号码段			 
      CHINA_TELECOM_PATTERN: /^(?:\+86)?1(?:33|53|7[37]|8[019])\d{8}$|^(?:\+86)?1700\d{7}$/,
      //中国联通号码段
      CHINA_UNICOM_PATTERN: /^(?:\+86)?1(?:3[0-2]|4[5]|5[56]|7[56]|8[56])\d{8}$|^(?:\+86)?170[7-9]\d{7}$/,
      //中国移动号码段
      CHINA_MOBILE_PATTERN: /^(?:\+86)?1(?:3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\d{8}$|^(?:\+86)?1705\d{7}$/,
      //电话座机号码段
      PHONE_CALL_PATTERN: /^(?:\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(?:-\d{1,4})?$/,
      //手机号码
      PHONE_PATTERN: /^(?:\+86)?(?:13\d|14[57]|15[0-35-9]|17[35-8]|18\d)\d{8}$|^(?:\+86)?170[057-9]\d{7}$/,
      //手机号简单校验，不根据运营商分类
      PHONE_SIMPLE_PATTERN: /^(?:\+86)?1\d{10}$/
    }
    // 邮箱号码的正则表达式
    this.emailRE = {
      EMAIL_PATTERN: /^[-\w\+]+(?:\.[-\w]+)*@[-a-z0-9]+(?:\.[a-z0-9]+)*(?:\.[a-z]{2,})$/i
    }
    // 身份证号码的正则表达式
    this.idCardRE = {
      //18位身份证简单校验
      IDCARD_18_SIMPLE_PATTERN: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}(?:1[89]|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}(?:\d|[xX])$/,
      //15位身份证简单校验
      IDCARD_15_SIMPLE_PATTERN: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}$/
    }
  }
  //座机电话号码
  isPhoneCallNum(value) {
    return this.phoneRE.PHONE_CALL_PATTERN.test(value);
  };
  //是否是电信手机号码
  isChinaTelecomPhoneNum(value) {
    return this.phoneRE.CHINA_TELECOM_PATTERN.test(value);
  };
  //中国联通
  isChinaUnicomPhoneNum(value) {
    return this.phoneRE.CHINA_UNICOM_PATTERN.test(value);
  };
  //中国移动
  isChinaMobilePhoneNum(value) {
    return this.phoneRE.CHINA_MOBILE_PATTERN.test(value);
  };
  //手机号码
  isPhoneNum(value) {
    return this.phoneRE.PHONE_PATTERN.test(value);
  };
  //手机号码简单校验，只校验长度
  isPhoneNumBySize(value) {
    return this.phoneRE.PHONE_SIMPLE_PATTERN.test(value);
  };
  //邮箱格式校验
  isEmail(value) {
    return this.emailRE.EMAIL_PATTERN.test(value);
  }
  //18位身份证简单校验
  isSimpleIdCard18(idCard) {
    return this.idCardRE.IDCARD_18_SIMPLE_PATTERN.test(idCard);
  }
  //15位身份证简单校验
  isSimpleIdCard15(idCard) {
    return this.idCardRE.IDCARD_18_SIMPLE_PATTERN.test(idCard);
  }
  //18位身份证校验码校验
  checkCode(idCard) {
    var multiplier = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var idDatas = idCard.split("");
    var len = 17;
    var sum = 0;
    for (var i = 0; i < len; i++) {
      sum += idDatas[i] * multiplier[i];
    }
    var remainder = sum % 11;
    var checkCodeArr = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    var checkCode = checkCodeArr[remainder];
    return checkCode === idCard[17];
  }
  //18位身份证严格校验
  isIdCard18(idCard) {
    //先校验格式
    if (this.isSimpleIdCard18(idCard)) {
      //校验日期时间是否合法
      var dateStr = idCard.substr(6, 8);
      var dateStrNew = dateStr.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3");
      var dateObj = new Date(dateStrNew);
      var month = dateObj.getMonth() + 1;
      if (parseInt(dateStr.substr(4, 2)) === month) {
        return this.checkCode(idCard);
      }
    }
    return false;
  }
}

module.exports = { 
  NL_Rules 
}


