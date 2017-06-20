// After I did the a few of the SPA exercises i'm understanding more kind of??
let treeInput = {
	height: 0,
	character: " "
};
let characterInput = document.getElementById("character");
let heightInput = document.getElementById("height");
let button = document.getElementById("submit");
let enterKey = document.getElementById("height")

function makeTree(){
	for (var i = 0; i < heightInput.value; i++) {
		treeInput.height = treeInput.character.repeat(heightInput.value - i) + characterInput.value.repeat(i * 2 + 1);
		console.log(treeInput.height)
	}
}

button.addEventListener("click", function(){
	if (characterInput.value == "" || heightInput.value == ""){
		alert("Both fields must have a value")
	} else {
		return makeTree()
	}
})






