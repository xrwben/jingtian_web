$(document).ready(function () {
	$('body').scrollspy({ 
		target: '#ScrollListener'
	})
	
	$(window).scroll(function(){
		var topHeight = $("#header_nav").offset().top;
		if(topHeight > 50){
			$("#header_nav").addClass("on");
		}else{
			$("#header_nav").removeClass("on");
		}
	});
	
	$("#ScrollListener ul li a").click(function(e){
		var toTop = $($(this).attr("href")).offset().top;
		$("body,html").animate({
			scrollTop : toTop
		},900);
		e.preventDefault();
	});
	
	// 点击显示弹窗
	$(".range_content .col-md-3").click(function (e) {
		$("#Shadow").show()
		$("html,body").addClass('oh')
		sessionStorage.setItem("type", $(this).index() + 1)
		var value = ''
		switch ($(this).index() + 1) {
			case 1:
				value = '安全'
				break
			case 2:
				value = '优化'
				break
			case 3:
				value = '运维管理'
				break
			case 4:
				value = '容灾备份'
				break
			case 5:
				value = '虚拟化&云计算'
				break
			case 6:
				value = '超融合'
				break
			case 7:
				value = '容器云'
				break
			case 8:
				value = '软件定制'
				break
		}
		$(".needType").val(value)
	})
	
	$("#close").click(function() {
		$("#Shadow").hide()
		$("html,body").removeClass('oh')
		sessionStorage.removeItem("type")	
		$(".companyName").val('')
		$(".companyName").val('')
		$(".contactName").val('')
		$(".contact1").val('')
		$(".email").val('')
		$(".demand").val('')
	})
	
	$(".needType").click(function() {
		$("#menu").slideToggle()
	})
	
	$("#menu ul li").on("click", function(ev) {
		$(".needType").val(ev.target.innerText)
		sessionStorage.setItem("type", $(this).index() + 1)
		$("#menu").slideToggle()
	})
	
})