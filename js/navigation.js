$(function () {
	var navInfo = $("#nav-template").html();
	var footerInfo = $("#footer-template").html();

	var template = Handlebars.compile(navInfo);
	var footerTemplate = Handlebars.compile(footerInfo);

	Handlebars.registerHelper("makeLink", function (text, url, options) {
		text = Handlebars.Utils.escapeExpression(text);
		url = Handlebars.Utils.escapeExpression(url);

		if (options.hash.link === "logo") {
			return new Handlebars.SafeString(
				'<a href="' +
					url +
					'">' +
					text +
					"<span class='logo-serif'>" +
					"education</span>" +
					"</a>"
			);
		} else {
			return new Handlebars.SafeString(
				'<a class="p" href="' + url + '">' + text + "</a>"
			);
		}
		// SafeString prevents the string from being escaped
	});

	// 5b. Pass an attribute to a helper function

	// 6b. You can also pass options that can be used by all
	// helpers in the template
	// Handlebars.registerHelper("sayHello", function (options) {
	// 	switch (options.data.lang) {
	// 		case "spanish":
	// 			return "Hoa";
	// 			break;
	// 		case "french":
	// 			return "Bonjour";
	// 			break;
	// 		default:
	// 			return "Hello";
	// 	}
	// });

	// 2b. Passing the array data
	var footerItems = footerTemplate(
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			linksOne: [
				{
					link: "What's new",
				},
				{
					link: "Dolor",
				},
				{ link: "Ipsum" },
			],
			linksTwo: [
				{
					link: "Billing information",
				},
				{
					link: "Dolor",
				},
				{ link: "Ipsum" },
				{ link: "Desuid nor" },
			],
			linksThree: [
				{
					link: "Become a teacher",
				},
				{
					link: "Dolor",
				},
				{ link: "Ipsum" },
				{ link: "Nostrud" },
			],
			linksFour: [
				{
					link: "Become partners",
				},
				{
					link: "Ipsum",
				},
			],
			// 3b. Passing tags to the triple stash
			yogiBio:
				'<i>Lawrence Peter "Yogi" Berra (May 12, 1925 - September 22, 2015) was an American professional baseball catcher, manager, and coach who played 19 seasons in Major League Baseball (MLB) (1946 - 63, 1965), all but the last for the New York Yankees. An 18-time All-Star and 10-time World Series champion as a player, Berra had a career batting average of .285, while compiling 358 home runs and 1,430 runs batted in.</i>',
		}
		// 6c. Say hello in passed language
	);

	var navItems = template({
		name: "Yogi Berra",
	});

	$("#footerData").append(footerItems);

	$("#navData").append(navItems);

	// hamburger menu
	$(".cross").hide();
	$(".menu").hide();
	$(".hamburger").click(function () {
		$(".menu").slideToggle("slow", function () {
			$(".hamburger").hide();
			$(".cross").show();
		});
	});

	$(".cross").click(function () {
		$(".menu").slideToggle("slow", function () {
			$(".cross").hide();
			$(".hamburger").show();
		});
	});
});
