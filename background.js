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

chrome.contextMenus.create({
	"title" : "Check the URL score",
	"type"  : "normal",
	"contexts" : ["link"],
	"onclick" : function(info){
		//alert(info.linkUrl);
		chrome.tabs.create({ url: 'newtab.html?'+info.linkUrl });
	}
});
