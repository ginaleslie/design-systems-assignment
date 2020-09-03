$(function () {
	function getName() {
		return localStorage.getItem("userName");
	}

	var name = getName();
	$("#greeting").html(
		"Hi " + name + ", let’s help you get started. Here is the top free!"
	);

	$("#nameBtn").click(function () {
		var name = $("#myInput").val();

		localStorage.setItem("userName", name);
		window.location.href = "./pages/signed-up.html";
	});
	/* jQuery
================================================== */
	$(function () {
		$(".acc__title").click(function (j) {
			var dropDown = $(this).closest(".acc__card").find(".acc__panel");
			$(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();

			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				$(this)
					.closest(".acc")
					.find(".acc__title.active")
					.removeClass("active");
				$(this).addClass("active");
			}

			dropDown.stop(false, true).slideToggle();
			j.preventDefault();
		});
	});
	var realFileBtn = document.getElementById("real-file");
	var customBtn = document.getElementById("custom-button");
	var customTxt = document.getElementById("custom-text");

	customBtn.addEventListener("click", function () {
		realFileBtn.click();
	});

	realFileBtn.addEventListener("change", function () {
		if (realFileBtn.value) {
			customTxt.innerHTML = realFileBtn.value.match(
				/[\/\\]([\w\d\s\.\-\(\)]+)$/
			)[1];
		} else {
			customTxt.innerHTML = "No file chosen, yet.";
		}
	});
});
