// Could not get it to make a tree shape then tried to "fix it" and now it looks nothing like a tree
var makeTree = {};

var button = document.getElementById("submit");
var enterHeight = document.getElementById("charNumber");
var enterChar = document.getElementById("charType");
var enterButton = document.getElementById("treeBuilder");


function littleTree(clickEvent) {
	makeTree.height = document.getElementById("charNumber").value;
	makeTree.char = document.getElementById("charType").value;
	buildTree(makeTree);
}

function buildTree(makeTree) {
	var spaceNum = makeTree.height;
	var charNum = makeTree.char;
	if (enterChar.value !== "" && enterHeight.value !== "") {
		for(i = 0; i <= makeTree.height; i++) {
			var spaces = makeTree.height.repeat(spaceNum + 2);
			var chars = makeTree.char.repeat(charNum - 1);
			var tree = spaces + chars;
			console.log(tree);
		}
	} else {
		alert("Both fields must have a value.");
	}
}

button.addEventListener("click", littleTree);

enterButton.addEventListener("keypress", function(event) {
	if (this.key === "Enter") {
		littleTree();
	}
});