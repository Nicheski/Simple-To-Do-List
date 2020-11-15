let btn = document.getElementById('submit');
let input = document.getElementById("input");
let ul = document.querySelector("ul");
let lii = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return lii.length;
}

function createListElement() {
    var li = document.createElement("li"); 
    li.style.width = '100%';
    li.style.textAlign = 'center';
    li.style.color = 'lightseagreen';
    li.style.backgroundColir = 'lightgrey';
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 

    


	function crossOut() {
		li.classList.toggle("finish");
	}

	li.addEventListener("click",crossOut);



    var dBtn = document.createElement("button");
    dBtn.style.background = 'red';
    dBtn.style.color = 'white';
    dBtn.style.padding = '5px';
    dBtn.style.margin = '10px';
    dBtn.style.border = '1px solid red';
    dBtn.style.fontWeight = 'bold';
    dBtn.style.outline = 'none';

	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);




	function deleteListItem(){
        li.classList.add("delete");
        
        
        
	}

}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		
		createListElement();
	} 
}


btn.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

