/*. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. */
				function  animate_string(element){
					var textNode=element.childNodes[0];
					var text= textNode.data;
				setInterval(function(){
					text=text[text.length-1]+text.substring(0,text.length-1);
					textNode.data=text;
				},500);
				}

