
//1:
var mainContent=document.getElementById("main-content")


//2:

var childEleements=mainContent.children;

//3:
var renderElements=document.getElementById("render")

for(var i=0 ; i<renderElements.lengt ; i++){
    console.log(renderElements[i].innerHTml)
}

//4:
var firstName=document.getElementById("first-name")

firstName.value="Given value";

//5:

document.getElementById("last-name").value="Your name";
document.getElementById("email").value="Your email";

//6:

var consNode=document.getElementById("form-content");

var nodeType=consNode.nodeType;

console.log(nodeType);

//7:

var formContent=document.getElementById("form-content")
console.log(formContent.nodeType);



//8:

var lastName=document.getElementById("last-name")
var nodeType=lastName.nodeType;

var childNode=lastName.firstChild;
var childNodetypr=childNode.nodeType;

console.log(nodeType);
console.log(childNodetypr)

//9:
lastName.textContent="Last Name: David";

console.log(lastName.textContent)

var mainContent=document.getElementById("main-content");
var firstChild=mainContent.firstChild;
var lastChild=mainContent.lastChild;

console.log(firstChild)
console.log(lastChild)


//10:

console.log(lastName.nextSibling)
console.log(lastName.previousSibling)

//11:

var emailparent=document.getElementById("email").parentNode
var emailType=document.getElementById("email").nodeType;
