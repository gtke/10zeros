function TenZeros(){
  this.api_key = 'AIzaSyAWlCVmtJU_X5iuXzGs1gMzXiKF0WiTFLg';
  this.api_url = 'https://www.googleapis.com/customsearch/v1';
  this.cx      = '016247601864804675758%3Adjpxokroo5q';
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  var tenZeros = new TenZeros();
  tenZeros.onInputEntered(text);
});

TenZeros.prototype = {
  onInputEntered: function(text){
    this.openTabs(text);
  },

  openTabs: function(query){
    var that = this;
    var req = new XMLHttpRequest();
    var query_url = that.api_url + "?q=" + query + "&cx=" + that.cx + "&num=10" + "&key=" + that.api_key;
      req.open("GET", query_url, true);
      req.onreadystatechange = function() {
          if (req.readyState == 4) {
            if (req.status == 200) {
              var json_obj = JSON.parse(req.responseText);
              json_obj.items.forEach(function(item){
                chrome.tabs.create({url: item.link});
              });
            }
          }
        };
      req.send();
  },

  onError: function(errorMsg) {
    console.log(errorMsg);
  },

  onSuccess: function(text) {
    console.log("success: " + text);
  }
}
