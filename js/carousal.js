$(function () {
	var carousalInfo = $("#carousal-template").html();
	var template = Handlebars.compile(carousalInfo);

	var carousalItems = template({
		bestSellers: [
			{
				course:
					'<a href="#" class="cover"><img src="./images/Mask Group (1) copy 4.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="./images/Mask Group (1) copy.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="./images/Mask Group (2).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="./images/Component 4.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="./images/Mask Group (1) copy 2.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="./images/Mask Group (1) copy 3.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="./images/Mask Group (1).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
		],
		topFree: [
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 4.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (2).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Component 4.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 2.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 3.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
		],
	});
	$("#carousalData").append(carousalItems);

	$(".carousal-btn").click(function () {
		$(this)
			.parents(".sliderComplete")
			.children(".carousal-btn")
			.removeClass("close")
			.fadeIn(300);

		$(this).addClass("close").fadeOut(300);

		$(this)
			.parents(".sliderComplete")
			.children(".wrapper")
			.children(".slider")
			.toggleClass("turn");
	});
});
