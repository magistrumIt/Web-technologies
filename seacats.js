window.onload = function() {
	let name = localStorage.getItem("name");
	const b = documentElementById("get");
	document.body.innerHTML = `${name}`;
}
