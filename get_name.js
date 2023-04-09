window.onload = function() {
	let name = localStorage.getItem("name");
	const b = document.getElementById("get")
	b.innerHTML = `${name}`

}