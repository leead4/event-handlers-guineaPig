


var buttonSection = document.querySelectorAll("button");
console.log('buttonSection', buttonSection);

 for (var i = 0; i < buttonSection.length; i++){
 	console.log(buttonSection[i]);
 	buttonSection[i].setAttribute("class", "makeBlock");
 	console.log(buttonSection);

 }





console.log('text');
var outputEl = document.getElementById("output-target");
var h1El = document.getElementById("page-title");
var textInput = document.getElementById("keypress-input")
var guineaPig = document.getElementById("guinea-pig");
var addColorButton = document.getElementById("add-color");
var makeBigButton = document.getElementById("make-large");
var captureButton = document.getElementById("add-border");
var rounditButton = document.getElementById("add-rounding");






var sectionList = document.getElementsByClassName("article-section");
console.log(sectionList);
	sectionList[0].className = "bold";
	sectionList[sectionList.length - 1].className = "bold_and_italics";


/*

 var lastSection = document.querySelectorAll("button");
 console.log("lastSection", lastSection);

 for (var i = 0; i < lastSection.length; i++){
 	console.log(lastSection);
 	lastSection[i].className = "bold_and_italics";
 }
 */

function sectionClick(MouseEvent) {

	console.log("MouseEvent");
	var elementText = event.target.innerHTML;

	outputEl.innerHTML = "You clicked on the" + elementText + "section";
	return outputEl;
	}
		

		

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".



function headerMouseOver(mouseEvent){
	outputEl.innerHTML = "You moved your mouse over the header";
}

function headerMouseOut(mouseEvent){
	outputEl.innerHTML = "You left me!";
}

// When you type characters into the input field, the output element should mirror the text in the input field.

function writeIt(){
	outputEl.innerHTML = textInput.innerHTML;
}


// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

function addColor(){
	guineaPig.classList.toggle("blue");
}

function makeHulkify(){
	guineaPig.classList.toggle("big");
}

function makeCaught(){
	guineaPig.classList.toggle("capture");

}


function makeRounded(){
	guineaPig.classList.toggle("rounded");
}


var articleEl = document.getElementsByClassName("article-section");
for (var i = 0; i < articleEl.length; i++) {
  			articleEl.item(i).addEventListener("click", sectionClick);
}







rounditButton.addEventListener("click", makeRounded);

captureButton.addEventListener("click", makeCaught);

makeBigButton.addEventListener("click", makeHulkify);

addColorButton.addEventListener("click", addColor);

h1El.addEventListener("mouseover", headerMouseOver);

h1El.addEventListener("mouseout", headerMouseOut);


textInput.addEventListener("keyup", function(event) {
	console.log("event", event);
	outputEl.innerHTML = event.target.value;
});



















