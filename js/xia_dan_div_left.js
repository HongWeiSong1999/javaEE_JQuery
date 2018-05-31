<script>
	window.onload = function(){
		var divs = document.getElementsByTagName("top");
		var len = divs.length;
		for(var i=0;i<len;i++){
			divs[i].onclick = function(){
				for(var j=0;j<len;j++){
					divs[j].style.backgroundColor = "blueviolet";
				}
				this.style.backgroundColor = "pink";
			};
		}
	};
</script>