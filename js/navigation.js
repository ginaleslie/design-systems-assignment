$(function () {
	var navInfo = $("#nav-template").html();

	var template = Handlebars.compile(navInfo);

	// 4b. You can create your own helper functions
	// This returns a link when text and url are passed in
	// escapeExpression() escapes the passed string so it is
	// safe to use in content. Helpers should use this method
	// when returning content to avoid code injection
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
	var navItems = template(
		{
			name: "Yogi Berra",
			quotes: [
				{
					quote:
						"If you don't know where you are going, you might wind up someplace else.",
				},
				{
					quote:
						"You better cut the pizza in four pieces because I'm not hungry enough to eat six.",
				},
				{ quote: "I never said most of the things I said." },
				{ quote: "Nobody goes there anymore because it's too crowded." },
			],
			// 3b. Passing tags to the triple stash
			yogiBio:
				'<i>Lawrence Peter "Yogi" Berra (May 12, 1925 - September 22, 2015) was an American professional baseball catcher, manager, and coach who played 19 seasons in Major League Baseball (MLB) (1946 - 63, 1965), all but the last for the New York Yankees. An 18-time All-Star and 10-time World Series champion as a player, Berra had a career batting average of .285, while compiling 358 home runs and 1,430 runs batted in.</i>',
		}
		// 6c. Say hello in passed language
	);

	$("#navData").append(navItems);
});
