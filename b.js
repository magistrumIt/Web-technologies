function Click() {
 	let input = document.getElementById("input").value;
 	if (input != 0) {
	 	let ul = document.getElementById("list");
	 	let li =  document.createElement('li');
	 	li.appendChild(document.createTextNode(input));
		ul.appendChild(li);
		document.getElementById("input").value = null;
	}

	else {
		alert('Боже, слепошара тупая');
	};
};