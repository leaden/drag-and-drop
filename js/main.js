function drag(ev){
	ev.dataTransfer.setData("text", ev.target.id);

}

function finalDrop(ev){
	ev.preventDefault();
}

function drop(ev){
	ev.preventDefault();

	var dato = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(dato));
}
