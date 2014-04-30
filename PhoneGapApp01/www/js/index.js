var camera;
var containerView;

//document.addEventListener('deviceready', deviceready, false);
pageLoad("containerView.html");

function deviceready() {
	console.log('deviceready');
	containerView = $("#containerView");
	pageLoad("containerView.html");
}

function pageLoad(u) {
	console.log("load " + u);
	var data = {};
	if (u.indexOf("?") >= 0) {
		var qs = u.split("?")[1];
		var parts = qs.split("&");
		for (var i = 0, len = parts.length; i < len; i++) {
			var bits = parts[i].split("=");
			data[bits[0]] = bits[1];
		}
	}

	$.get(u, function(res, code) {
		mainView.html(res);
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent("pageload", true, true, data);
		var page = $("div", mainView);
		page[0].dispatchEvent(evt);
	});
}

$(document).on("pageload", "#containerView", function(e) {

	navigator.camera.getPicture(onCameraSuccess, onCameraFail, {quality:50, destinationType:Camera.DestinationType.FILE_URI});
	
	function onCameraSuccess(imgdata) {
		console.log(imgdata);
		$("#entryPicture").val(imgdata);
		$("#imgPreview").attr("src", imgdata);
	}
	
	function onCameraFail(e) {
		console.log('camFail');
		console.dir(e);
		navigator.notification.alert("Sorry, something went wrong.", null, "Oops!");
	}
});