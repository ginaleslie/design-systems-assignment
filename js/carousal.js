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
					'<a href="#" class="cover"><img src="../images/Component 4.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Anne Whitehead<span class="grey-two float-r">R50</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (2).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Sipho Thani<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 3.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Connor Decklin<span class="grey-two float-r">R100</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 2.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">John Lorrey<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 3.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Brittney Soils<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Lutho Anitha<span class="grey-two float-r">R30</span></p></a>',
			},
		],
		useful: [
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 4.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Alex Smith<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 2.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Rebecca Forks<span class="grey-two float-r">Free</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (2).png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Tahla Mbeki<span class="grey-two float-r">R20</span></p></a>',
			},
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 2.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Thomas Jones<span class="grey-two float-r">R40</span></p></a>',
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
		student: [
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 3.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Samantha Smith<span class="grey-two float-r">Free</span></p></a>',
			},
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
		insurance: [
			{
				course:
					'<a href="#" class="cover"><img src="../images/Mask Group (1) copy 3.png" class="sliderImg" /><h6>Lorem ipsum dolor sit amet consectetur</h6><p class="grey-one">Elizabeth<span class="grey-two float-r">R120</span></p></a>',
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
