//为表单的必填文本框添加提示信息（选择form中的所有后代input元素）
$("form :input.required").each(function () {
	//通过jquery api：$("HTML字符串") 创建jquery对象
	var $required = $("<strong class='high'>*</strong>");
	//添加到this对象的父级对象下
	$(this).parent().append($required);
});

//为表单元素添加失去焦点事件
$("form :input").blur(function(){
	var $parent = $(this).parent();
	$parent.find(".hws").remove(); //删除以前的提醒元素（find()：查找匹配元素集中元素的所有匹配元素）
	 //验证身份证号码
	if($(this).is("#identity")){
		var identityVal = $.trim(this.value);
		var regidentity = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if(identityVal== "" || (identityVal != "" && !regidentity.test(identityVal))){
			var errorhws = " 请输入正确的身份证号码！";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证邮箱
	if($(this).is("#email")){
		var emailVal = $.trim(this.value);
		var regEmail = /.+@.+\.[a-zA-Z]{2,4}$/;
		if(emailVal== "" || (emailVal != "" && !regEmail.test(emailVal))){
			var errorhws = " 请输入正确的E-Mail住址！";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证是否为空
	if($(this).is("#iskong")){
		var iskongVal = $.trim(this.value);
		if(iskongVal== ""){
			var errorhws = " 不能为空，请输入！";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证是数字
	if($(this).is("#isNumber")){
		var isNumberVal = $.trim(this.value);
		var regisNumber = /^\d{5,}$/;
		if(isNumberVal== "" || (isNumberVal != "" && !regisNumber.test(isNumberVal))){
			var errorhws = " 请输入正确的数字！（至少5位数字）";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证星期表达
	if($(this).is("#weekend")){
		var weekendVal = $.trim(this.value);
		var regweekend = /^[1-6]*$/;
		if(weekendVal== "" || (weekendVal != "" && !regweekend.test(weekendVal))){
			var errorhws = " 请输入正确的星期！（输入的数字在1--6之间）";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证日期表达
	if($(this).is("#Date")){
		var DateVal = $.trim(this.value);
		var regDate =  /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/; ;
		if(DateVal== "" || (DateVal != "" && !regDate.test(DateVal))){
			var errorhws = " 请输入正确的日期！（形如yyyy-mm-dd）";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证手机号码
	if($(this).is("#phone")){
		var phoneVal = $.trim(this.value);
		var CMCC = /(^((13[4-9]{1})|(147)|(15[0-2]{1})|(15[7-9]{1})|(178)|(18[2-4]{1})|(18[7-8]{1}))\d{8}$)|(^((1703)|(1705)|(1706))\d{7}$)/;//中国移动  
		if(phoneVal== "" || (phoneVal != "" && !CMCC.test(phoneVal))
		   ){
			var errorhws = " 请输入你的手机号";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 移动";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证QQ账号
	if($(this).is("#QQ_ID")){
		var QQ_IDVal = $.trim(this.value);
		var regQQ_ID = /[1-9][0-9]{4,}/;
		if(QQ_IDVal== "" || (QQ_IDVal != "" && !regQQ_ID.test(QQ_IDVal))){
			var errorhws = " 请输入QQ账号！";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//验证QQ密码
	if($(this).is("#password")){
		var passwordVal = $.trim(this.value);
		var regpassword = /^[a-zA-Z]\w{5,17}$/;
		if(passwordVal== "" || (passwordVal != "" && !regpassword.test(passwordVal))){
			var errorhws = " 请输入你的QQ密码！（以字母开头，长度在6~18之间，只能包含字母、数字和下划线）";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" 输入正确";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}

}).keyup(function(){
	//triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
	$(this).triggerHandler("blur"); 
}).focus(function(){
	$(this).triggerHandler("blur");
});

//点击重置按钮时，通过trigger()来触发文本框的失去焦点事件
$("#send").click(function(){
	//trigger 事件执行完后，浏览器会为submit按钮获得焦点
	$("form .required:input").trigger("blur"); 
	var numError = $("form .onError").length;
	if(numError){
		return false;
	}
	alert("注册成功！");
});

