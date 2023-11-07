if (localStorage.getItem("darkMode") === "true") {
	document.getElementById("checkbox-dark-mode").checked = true;
	document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
	document.body.classList.toggle("dark-mode");
	if (!document.getElementById("checkbox-dark-mode").checked) {
		localStorage.setItem("darkMode", false);
	} else {
		localStorage.setItem("darkMode", true);
	}
}
