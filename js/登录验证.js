//Ϊ���ı����ı��������ʾ��Ϣ��ѡ��form�е����к��inputԪ�أ�
$("form :input.required").each(function () {
	//ͨ��jquery api��$("HTML�ַ���") ����jquery����
	var $required = $("<strong class='high'>*</strong>");
	//��ӵ�this����ĸ���������
	$(this).parent().append($required);
});

//Ϊ��Ԫ�����ʧȥ�����¼�
$("form :input").blur(function(){
	var $parent = $(this).parent();
	$parent.find(".hws").remove(); //ɾ����ǰ������Ԫ�أ�find()������ƥ��Ԫ�ؼ���Ԫ�ص�����ƥ��Ԫ�أ�
	 //��֤���֤����
	if($(this).is("#identity")){
		var identityVal = $.trim(this.value);
		var regidentity = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if(identityVal== "" || (identityVal != "" && !regidentity.test(identityVal))){
			var errorhws = " ��������ȷ�����֤���룡";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤����
	if($(this).is("#email")){
		var emailVal = $.trim(this.value);
		var regEmail = /.+@.+\.[a-zA-Z]{2,4}$/;
		if(emailVal== "" || (emailVal != "" && !regEmail.test(emailVal))){
			var errorhws = " ��������ȷ��E-Mailסַ��";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤�Ƿ�Ϊ��
	if($(this).is("#iskong")){
		var iskongVal = $.trim(this.value);
		if(iskongVal== ""){
			var errorhws = " ����Ϊ�գ������룡";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤������
	if($(this).is("#isNumber")){
		var isNumberVal = $.trim(this.value);
		var regisNumber = /^\d{5,}$/;
		if(isNumberVal== "" || (isNumberVal != "" && !regisNumber.test(isNumberVal))){
			var errorhws = " ��������ȷ�����֣�������5λ���֣�";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤���ڱ��
	if($(this).is("#weekend")){
		var weekendVal = $.trim(this.value);
		var regweekend = /^[1-6]*$/;
		if(weekendVal== "" || (weekendVal != "" && !regweekend.test(weekendVal))){
			var errorhws = " ��������ȷ�����ڣ��������������1--6֮�䣩";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤���ڱ��
	if($(this).is("#Date")){
		var DateVal = $.trim(this.value);
		var regDate =  /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/; ;
		if(DateVal== "" || (DateVal != "" && !regDate.test(DateVal))){
			var errorhws = " ��������ȷ�����ڣ�������yyyy-mm-dd��";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤�ֻ�����
	if($(this).is("#phone")){
		var phoneVal = $.trim(this.value);
		var CMCC = /(^((13[4-9]{1})|(147)|(15[0-2]{1})|(15[7-9]{1})|(178)|(18[2-4]{1})|(18[7-8]{1}))\d{8}$)|(^((1703)|(1705)|(1706))\d{7}$)/;//�й��ƶ�  
		if(phoneVal== "" || (phoneVal != "" && !CMCC.test(phoneVal))
		   ){
			var errorhws = " ����������ֻ���";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" �ƶ�";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤QQ�˺�
	if($(this).is("#QQ_ID")){
		var QQ_IDVal = $.trim(this.value);
		var regQQ_ID = /[1-9][0-9]{4,}/;
		if(QQ_IDVal== "" || (QQ_IDVal != "" && !regQQ_ID.test(QQ_IDVal))){
			var errorhws = " ������QQ�˺ţ�";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}
	//��֤QQ����
	if($(this).is("#password")){
		var passwordVal = $.trim(this.value);
		var regpassword = /^[a-zA-Z]\w{5,17}$/;
		if(passwordVal== "" || (passwordVal != "" && !regpassword.test(passwordVal))){
			var errorhws = " ���������QQ���룡������ĸ��ͷ��������6~18֮�䣬ֻ�ܰ�����ĸ�����ֺ��»��ߣ�";
			$parent.append("<span class='hws onError'>" + errorhws + "</span>");
		}
		else{
			var okhws=" ������ȷ";
			$parent.find(".high").remove();
			$parent.append("<span class='hws onSuccess'>" + okhws + "</span>");
		}
	}

}).keyup(function(){
	//triggerHandler ��ֹ�¼�ִ�����������Զ�Ϊ��ǩ��ý���
	$(this).triggerHandler("blur"); 
}).focus(function(){
	$(this).triggerHandler("blur");
});

//������ð�ťʱ��ͨ��trigger()�������ı����ʧȥ�����¼�
$("#send").click(function(){
	//trigger �¼�ִ������������Ϊsubmit��ť��ý���
	$("form .required:input").trigger("blur"); 
	var numError = $("form .onError").length;
	if(numError){
		return false;
	}
	alert("ע��ɹ���");
});

