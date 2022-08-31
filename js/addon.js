var signature = "<img src='https:\/\/harnerdesigns.com\/wp-content\/uploads\/2018\/05\/logo-spaceship-icon-landed.svg\'><strong>Jack Harner<\/strong><br><strong><a href=\"http:\/\/www.harnerdesigns.com\/?utm_source=codepen&utm_medium=sig&utm_campaign=codepen\" target=\"_blank\">Website<\/a><\/strong><br><strong><a href=\"http:\/\/www.twitter.com\/jackharner\" target=\"_blank\">Twitter<\/a><\/strong>",
		style = "#signature{font-family: sans-serif; color:#000; font-size:13px; position:fixed; bottom: -80px; bottom:-5rem; right: 16px; right:1rem; z-index:99999; opacity:0.6 ;  -webkit-transition: all 0.3s cubic-bezier(0.680, -.7, 0.265, 1.7); transition:all 0.3s cubic-bezier(0.680, -.7, 0.265, 1.7); text-align:center; margin-top:100px;}#signature:hover{opacity:1; bottom: 0px; bottom:0rem;}#signature:hover strong, #signature:hover a{opacity:1;}#signature img{-webkit-filter:invert(1); height:4em;position:absolute; top:-60%; left:50%; -webkit-transform:translatex(-50%); transform:translatex(-50%); }#signature strong, #signature a{ color:#000;text-decoration:none; padding-left:0.5em; line-height:2em;}#signature.light strong, #signature.light a{ text-shadow:0px 0px 2px #000; color:#fff;}#signature a{text-decoration:none;} #signature.light img{-webkit-filter:invert(0);}";

jackHarnerSig = function(light) {
		var _container, _signature, _style;
		if (!light) {
				light = "";
		}
		_style = document.createElement("style");
		_style.innerHTML = style;
		_signature = document.createElement("div");
		_signature.id = "signature"
		_signature.className = light;
		_signature.innerHTML = signature;
		_container = document.createElement("div");
		_container.appendChild(_signature);
		document.body.appendChild(_style);
		document.body.appendChild(_container);
}
// jackHarnerSig("light");