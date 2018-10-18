var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  var src = [];
  for(var i = 1; i<=5 ; i++){
  	var lujin =  "images/pic"+i+".jpg";
  	src.push(lujin);
  	console.log(src);
  }
  var i = 0;
  while(i<5){
  	var newImage = document.createElement('img');
  	newImage.setAttribute('src', src[i]);
  	console.log(src[i]);
  	thumbBar.appendChild(newImage);
  	i++;
  }
  // 事件委托 自己写的哦
  thumbBar.addEventListener('click',function(e){
  	displayedImage.setAttribute('src',e.path[0].attributes[0].nodeValue)
  	console.log(e.path[0].attributes[0].nodeValue);
  })

/* Wiring up the Darken/Lighten button */
  console.log(btn.getAttribute('class'));
  btn.onclick = function(){
  	if(btn.getAttribute('class') === 'dark'){
  		btn.setAttribute('class','Lighten');
  		btn.textContent = 'Lighten';
  		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  		console.log(btn.getAttribute('class'));
  	}else{
  		btn.setAttribute('class','dark');
  		btn.textContent = 'Darken';
  		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  	}
  }
 


