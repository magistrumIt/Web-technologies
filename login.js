function GetName() {
	const LoginField = document.getElementById('user').value;
	
	if (LoginField !== "") {
		login(LoginField);
	}

	else {
		alert("Ты забыл написать имя, лох");
	}
};


const login = (name) => {
	alert("Добро пожаловать, " + name);
	localStorage.setItem("name", name);
};