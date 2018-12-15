/*function singlePlayerGame(boxes) {
 this.sum = 0;
 this.lastMove = -1;
 this.reason = "";
 this.play = function(move){
  if(move > boxes.length-1 || boxes[move] == 0){
	this.reason = move > boxes.length-1 ?"Index More than Length": "Out of coin";
    return false
  } else {
	this.sum += boxes[move];
	console.log(boxes[move] +"  "+this.sum);
	return true;
  }

 }
 this.getResults = function() {
	 return {
		 sum:this.sum,
		 reason: this.reason
	 }
 }
}

var game = new singlePlayerGame([1,3,4,5,7,0]);
var move =[0,5,3];

for(var i =0;i<move.length ;++i ){
 if(!game.play(move[i])) {
	console.log(game.getResults());
	break;
 }
}*/

/*function h() {
	x()
y();
var y = function x(){
	console.log("sdh")
}


}
*/

function $(selector){
	var self = {};
	self.selector = selector;
	self.element = document.getElementById(self.selector);
	self.awesomeSearch = function(searchObj) {
    self.awesomeSearch.properties = searchObj;
		if(searchObj.placeholder){
			self.element.placeholder = searchObj.placeholder;
		}
    if(searchObj.width) self.element.style.width = searchObj.width;
		return self;
	}
	self.element.onkeyup = function() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var list = JSON.parse(this.responseText);
      var filteredList = list.filter(function(item){
        return item.name.toLowerCase().includes(self.element.value.toLowerCase());
      });
      if(document.getElementById(self.selector+"_search")) self.element.parentNode.removeChild(document.getElementById(self.selector+"_search"));
      var newElement = document.createElement("div");
      newElement.id = self.selector+"_search";
      newElement.className = "awesomeSearch_search";
      newElement.style.width = self.element.style.width;
      var searchChildren ="";
      for(var i =0; i< filteredList.length ;++i){
        searchChildren += "<div class='awesomeSearch_search_children'>"+filteredList[i].name+"</div>"
      }
      newElement.innerHTML = searchChildren;
      self.element.parentNode.appendChild(newElement);
    }
  };
  xhttp.open("GET", self.awesomeSearch.properties.url, true);
  xhttp.send();

	}
	return self;
}
