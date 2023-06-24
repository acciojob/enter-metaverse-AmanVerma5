//your JS code here. If required.
 function enterMetaverse(){
    let stat = document.getElementById("status");
	 var h1Tag = document.createElement("h1");
	 h1Tag.id="status"
     h1Tag.textContent = "Entered Metaverse";
     stat.replaceWith(h1Tag);
 }
