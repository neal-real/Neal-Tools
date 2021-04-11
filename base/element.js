/**
* 设置元素的内容,解决兼容性问题
* @obj 需要设置的对象
* @value 需要设置的文本字符串
*/ 
function setText(obj, value) {
  if("textContent" in obj){
      obj.textContent = value;
  }else{
      obj.innerText = value;
  }
}

module.exports = {
  setText
}