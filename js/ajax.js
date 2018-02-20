$(document).ready(function() {
	
	$("#submit").click(function() {
		var companyName = $.trim($(".companyName").val())
		var contactName = $.trim($(".contactName").val())
		var contact1 = $.trim($(".contact1").val())
		var email = $.trim($(".email").val())
		var demand = $.trim($(".demand").val())
		var type = sessionStorage.getItem("type")
		
		if (!companyName || !contactName || !contact1 || !email || !demand) {
			alert('请提交完整的信息！')
		} else if (!email.indexOf('@')) {
			alert('邮箱格式不正确！')
		} else {
			$.ajax({
				type:"post",
//				url:"http://192.168.1.140:8080/jingtian/demand/save",
				url:"http://www.jentop.com:8088/jingtian/demand/save",
				dataType: "JSON",
				data:{
					companyName: companyName,
					contactName: contactName,
					contact1: contact1,
					email: email,
					demand: demand,
					type: type,
				},
				beforeSend:function(){
					$("#loading").show();
				},
				success: function(result) {
					if (result.code === 0) {
						alert('您的需求已收到，感谢您的信任，我们会在一小时内与您联系！')
						$("#Shadow").hide()
						$("html,body").removeClass('oh')
						sessionStorage.removeItem("type")
						window.location.reload()
					}
				},
				complete: function(){
			     	$("#loading").hide();
			    },
				error: function() {
					alert('网络异常！')
				}
			});
		}
		
	})
	
})
