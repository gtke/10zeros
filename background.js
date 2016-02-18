// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
//console.log("backgroung.js");

//firest API
/*
function fireApiCall(text){
	text.replace(/ /g, "+");
	var jsonResults;
//"https://www.googleapis.com/customsearch/v1?q=donald+trump&cx=016247601864804675758%3Adjpxokroo5q&num=5&key=AIzaSyAWlCVmtJU_X5iuXzGs1gMzXiKF0WiTFLg"
	$.ajax({
    url: "https://www.googleapis.com/customsearch/v1?q="+text+"&cx=016247601864804675758%3Adjpxokroo5q&num=5&key=AIzaSyAWlCVmtJU_X5iuXzGs1gMzXiKF0WiTFLg",
    dataType: 'json',
    async: false,
    success: function(data){
        jsonResults = data;
    }
	})
	return jsonResults;
}


chrome.omnibox.onInputEntered.addListener(
  function(text) {
  	if(text!=""){
    	console.log('inputEntered: ' + text);
    	var jsonResult = fireApiCall(text);
    	console.log(JSON.stringify(jsonResult));
    	openTabs(jsonResult);
  	}
  });


function openTabs(jsonResult){

}
*/

function openTabs(response) {
    if(response.links.length > 0){
	    for(var i=0;i<response.links.length && i<response.len;i++){
	    	chrome.tabs.create({'url': response.links[i]});
	    }
    }
}


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'report_back', len: 20}, openTabs);
});




