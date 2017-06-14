var username = function getUsername() {
	var user = window.prompt("What is your name?");
		if (user.length < 4) {
			window.prompt("Please enter a longer name");
		};		
};