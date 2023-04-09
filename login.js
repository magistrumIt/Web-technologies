function getName() {
	const loginField = document.getElementById("user").value;

	if (loginField !== "") {
		login(loginField);
	}

	else {
		alert("Вы забыли ввести логин")
	}
}

const login = (name) => {
		alert("Добро пожаловать, " + name + "!")
		localStorage.setItem("name", name)
	};


