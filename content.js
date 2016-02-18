// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
		var divs = document.getElementsByClassName("rc");
		console.log(divs.length);
		var links = [];
		for (var i=0;i<divs.length;i++){
			var link = divs[i].getElementsByClassName("r")[0].getElementsByTagName("a")[0].getAttribute("href");
			console.log(link);
			if(link!=null){
				links.push(link);
			}
		}
        sendResponse({links: links, len: msg.len});        
    }
});