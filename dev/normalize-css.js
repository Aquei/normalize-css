(function(global){
	var Proto,
		doc,
		tpl,
		NormalizeCss;

	Proto = Object.create(HTMLElement.prototype);
	doc = (document._currentScript || document.currentScript).ownerDocument;
	tpl = doc.querySelector("template").innerHTML;

	Proto.createdCallback = function(){
		var prefix = this.getAttribute("prefix") || '';
		var html = tpl.replace(/replace-me/g, prefix);
		this.innerHTML = html;
	}

	try{
		NormalizeCss = document.registerElement('normalize-css', {prototype: Proto});
	}catch(e){
		console.warn("<normalize-css>は既に登録されています");
		return;
	}


	if((typeof module !== "undefined" && module !== null) && module.exports){
		module.exports = NormalizeCss;
	}else if(typeof global["NormalizeCss"] === "undefined"){
		global["NormalizeCss"] = NormalizeCss;
	}
})((this || 0).self || global);
