	let before = new Date().getTime();

	window.onload = page_load_time;

	function page_load_time() {
		document.getElementById("load_time").innerHTML =
		"Page load time is" + (new Date().getTime() - before) / 1000 + "</b> seconds";
		let s = "Page load time is" + (new Date().getTime() - before) / 1000 + "</b> seconds";
		console.log(s)
	};	