window.onload = function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (e) => {
		const url = e[0].url.split("?")[1];

		console.log("Rating: " + url);
		var restURL;
		restURL = window.localStorage.getItem("goScore");
		if (restURL != null) {
			Token = window.localStorage.getItem("Token");
			fetch(restURL + "/" + Token + "/api/" + btoa(url), {
				method: 'GET'
			}).then(response => {
				return response.json();
			}).then(result => {
				if (result.status == 'Success') {
					drawStar(result.message);
					drawButton(url)
				}
			});
		}
	});
};

function drawStar(score) {
	let element = document.getElementById('score');
	element.innerHTML = ""
	if (score.charAt(0) == "0") {
		element.innerHTML += "<i class=\"fas fa-star fa-5x staryellow\">"
	} else {
		element.innerHTML += "<i class=\"fas fa-star fa-5x\">"
	}

	if (score.charAt(1) == "0") {
		element.innerHTML += "<i class=\"fas fa-star fa-5x staryellow\">"
	} else {
		element.innerHTML += "<i class=\"fas fa-star fa-5x\">"
	}

	if (score.charAt(2) == "0") {
		element.innerHTML += "<i class=\"fas fa-star fa-5x staryellow\">"
	} else {
		element.innerHTML += "<i class=\"fas fa-star fa-5x\">"
	}
	element.innerHTML += "<br><h8>[DNS]　[SEARCH]　[SSL]</h1>"
}

function drawButton(url) {
	let element = document.getElementById('goto');
	//element.innerHTML = "<button> Goto " + url  + "</button>"
	//element.innerHTML = "<input type=\"button\" onClick=\"location.href='" + url + "'\" value=\" Goto [" + url  + "]\">"
	element.innerHTML = "<font size=\"5\" color=\"#FFFFFF\"><a href=\""+ url + "\">Goto [" + url  + "]</a></font>"
}
