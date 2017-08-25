$(document).ready(function() {
$body = $("body");
function removepopup(){
	$("div.pop-up-box").removeClass("open");
}

$bodywra = $(".body-wrapper");
$login_signup_forms = $("div.login-signup-wrapper");
$(".pop-control").on("click", function(){
	if ($body.find($("div.pop-up-box"))){
		$bodywra.after("<div class='pop-up-box '></div>");
		$("div.pop-up-box").addClass("open");
	}
	if($(this).data("box")=="login-box"){
		$("div.pop-up-box").append($login_signup_forms);
		$login_signup_forms.removeClass("hide");
		$("form.log").removeClass("hide");
	}
	if($(this).data("box")=="signup-box"){
		$("div.pop-up-box").append($login_signup_forms);
		$login_signup_forms.removeClass("hide");
		$("form.sign").removeClass("hide");
	}

});

// $(".strip-banner .container").append('{% for t in tt %} <li>{{ t }}</li>{% end for %}');

$("div.pop-up-box").on("click", function(){
	removepopup();
	alert('hwy');
})

$("video").attr("controls", "true")

$(".load-more").click(function(){
	$.ajax({
		type: "GET",
		url: "/ajax/get_more/",
		success: function(data){
			var x = 0
			var title, img_url, slug, author_name, author_url, short_description
			for (a in data){
				    x+=1
				}
			for (var i = 1; i <= x; i++) {
				title = data[i.toString()]["title"]
				slug = data[i.toString()]["slug"]
				img_url = data[i.toString()]["img_url"]
				short_description = data[i.toString()]["short_description"]
				author_url = data[i.toString()]["author"]["author_url"]
				author_name = data[i.toString()]["author"]["name"]
				$("ul.courses-ul").append('<li class="col-md-3" title="'+title+'">'
											+'<a href="/'+slug+'">'
											+'<img class="img" src="'+img_url+'" style="">'
											+'<i class="fa fa-heart-o"></i>'
											+'<div class="course-info">'
												+'<div class="course-grid-title">'
													+'<h2>'+title+'</h2>'
												+'</div>'
												+'<div class="course-grid-description">'
													+'<p>'+short_description+'</p>'
												+'</div></a>'
													
												+'<p>by <a href="/author/'+author_url+'">'+author_name+'</a></p>'
												+'</div>'
										+'</li>');
				// $("ul.slider-section").append('<li class="col-md-3" title="'+title+'">'
				// 							+'<a href="/'+slug+'">'
				// 							+'<img class="img" src="'+img_url+'">'
				// 							+'<div class="course-info">'
				// 								+'<div class="course-grid-title">'
				// 									+'<h2>'+title+'</h2>'
				// 								+'</div>'
				// 								+'<div class="course-grid-description">'
				// 									+'<p>'+short_description+'</p>'
				// 								+'</div></a>'
													
				// 								+'<p>by <a href="/author/'+author_url+'">'+author_name+'</a></p>'
				// 								+'</div>'
				// 						+'</li>');
			}
			x=0
		}
	});

});

$(".slide-more.home").click(function(){
	$.ajax({
		type: "GET",
		url: "/ajax/slide_more/",
		success: function(data){
			var x = 0
			var title, img_url, slug, author_name, author_url, short_description
			for (a in data){
				    x+=1
				}
			for (var i = 1; i <= x; i++) {
				title = data[i.toString()]["title"]
				slug = data[i.toString()]["slug"]
				img_url = data[i.toString()]["img_url"]
				short_description = data[i.toString()]["short_description"]
				author_url = data[i.toString()]["author"]["author_url"]
				author_name = data[i.toString()]["author"]["name"]
				// $("ul.courses-ul").append('<li class="col-md-3" title="'+title+'">'
				// 							+'<a href="/'+slug+'">'
				// 							+'<img class="img" src="'+img_url+'">'
				// 							+'<div class="course-info">'
				// 								+'<div class="course-grid-title">'
				// 									+'<h2>'+title+'</h2>'
				// 								+'</div>'
				// 								+'<div class="course-grid-description">'
				// 									+'<p>'+short_description+'</p>'
				// 								+'</div></a>'
													
				// 								+'<p>by <a href="/author/'+author_url+'">'+author_name+'</a></p>'
				// 								+'</div>'
				// 						+'</li>');
				$("ul.slider-section").append('<li class="col-md-3" title="'+title+'">'
											+'<a href="/'+slug+'">'
											+'<img class="img" src="'+img_url+'">'
											+'<i class="fa fa-heart-o"></i>'
											+'<div class="course-info">'
												+'<div class="course-grid-title">'
													+'<h2>'+title+'</h2>'
												+'</div>'
												+'<div class="course-grid-description">'
													+'<p>'+short_description+'</p>'
												+'</div></a>'
													
												+'<p>by <a href="/author/'+author_url+'">'+author_name+'</a></p>'
												+'</div>'
										+'</li>');
			}
			x=0
			
		}
	});

});

$(".slide-more.courses-by-author").click(function(){
	
	$author = $("ins.author").text();
	$.ajax({
		type: "GET",
		url: "/ajax/more_courses_by_author/"+$author,
		success: function(data){
			var x = 0
			var title, img_url, slug, author_name, author_url, short_description
			for (a in data){
				    x+=1
				}
			for (var i = 1; i <= x; i++) {
				title = data[i.toString()]["title"]
				slug = data[i.toString()]["slug"]
				img_url = data[i.toString()]["img_url"]
				short_description = data[i.toString()]["short_description"]
				author_url = data[i.toString()]["author"]["author_url"]
				author_name = data[i.toString()]["author"]["name"]
				$("ul.slider-section").append('<li class="col-md-3" title="'+title+'">'
											+'<a href="/'+slug+'">'
											+'<img class="img" src="'+img_url+'">'
											+'<i class="fa fa-heart-o"></i>'
											+'<div class="course-info">'
												+'<div class="course-grid-title">'
													+'<h2>'+title+'</h2>'
												+'</div>'
												+'<div class="course-grid-description">'
													+'<p>'+short_description+'</p>'
												+'</div></a>'
													
												+'<p>by <a href="/author/'+author_url+'">'+author_name+'</a></p>'
												+'</div>'
										+'</li>');
			}
			x=0
			
		}
	});

});

$(".slider-btn.slider-backward a").click(function(){
    var current_left = $("ul.slider-section").css("left");
    current_left = current_left.replace("px", "");
    current_left = parseInt(current_left);
    var new_left = current_left + -1056;
    $("ul.slider-section").css("left", new_left.toString()+"px");
//     if ($("ul.slider-section").css("left") == "0px"){
// 	$(".slider-btn.slider-forward").removeClass("hide");
// }
// 	if ($("ul.slider-section").css("left") != "0px") {
// 		$(".slider-btn.slider-forward").addClass("hide");
// 	}
    

});

$(".slider-btn.slider-forward a").click(function(){
    var current_left = $("ul.slider-section").css("left");
    current_left = current_left.replace("px", "");
    current_left = parseInt(current_left);    
    if (current_left != 0){
        var new_left = current_left - -1056;
        $("ul.slider-section").css("left", new_left.toString()+"px");
    }

});



})