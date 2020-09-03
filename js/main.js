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
});
