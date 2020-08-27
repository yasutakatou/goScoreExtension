function getToken(url) {
	return new Promise(function(resolve) {
		fetch(url +"/token", {
			method: 'GET'
		}).then(response => {
			console.log(response);
			return response.json();
		}).then(result => {
			if (result.status == 'Success') {
				console.log(result.message);
				resolve(result.message);
			} else {
				resolve(null);
			}
		});
	});
}

$(function(){
	$('#addButtonTask').click(function () {
		const newTask = $('#taskInput').val();

		getToken(newTask).then(function(result) {
			if (result == null) {
				alert("Service (" + newTask +") not found!");
				return;
			} 
			addListItem(newTask);
			window.localStorage.setItem("goScore", newTask);
			window.localStorage.setItem("Token", result);
			return;
		});
	});
})

function addListItem(value) {
	let ul = document.getElementById("todo-listUl");

	Token = window.localStorage.getItem("Token");
	if (Token == null || Token.length == 0) {
		addUI(ul, value)
	}
}

function addUI(ul, value) {
	const indexs = $(this).index(".close1");

	let li = document.createElement("li");
	$("li").addClass("list-group-item");
	li.appendChild(document.createTextNode(value));

	if (value === '') {
	  return
	} else {
	  ul.appendChild(li);
	}

	let span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close1";
	span.appendChild(txt);
	li.appendChild(span);

	$(".close1").click(function () {
		const index = $(this).index(".close1");
		let div = this.parentElement;
		div.style.display = "none";
		window.localStorage.setItem("goScore", "");
		window.localStorage.setItem("Token", "");
		$(".close1").eq(index).remove();
	})
}

window.onload = function() {
	var restURL;
	restURL = window.localStorage.getItem("goScore");
	if (restURL != null) {
		fetch(restURL + "/token", {
			method: 'GET'
		}).then(response => {
			return response.json();
		}).then(result => {
			if (result.status == 'Success') {
				let ul = document.getElementById("todo-listUl");
				addUI(ul, restURL);
				console.log(result.message);
				window.localStorage.setItem("Token", result.message);
			}
		});
	}
};
