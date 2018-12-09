var results = ""
var result = ""
var calresults = ""
var count = 0
var display = document.querySelector("#display")
function calculater(){
	if(event.srcElement){
		var content = event.srcElement.innerText;
	}else{
		var content = event.target.innerText;
	}
	if(content == "=" || content == "C"){
		return
	}
	if(content == "+" || content == "-" || content == "*" || content == "/"){
		count = 0
		result = ""
		display.innerText = content;
		if(results[results.length-1]=="+" || results[results.length-1]=="-" || results[results.length-1]=="*" || results[results.length-1]=="/"){
			results[results.length-1] = content
			return 
		}else{
			results += content;
			return 
		}
	}
	if(count!=0){
		var reg = /[0-9]/
		if(reg.test(event.srcElement.innerText)){
			results = event.srcElement.innerText;
			display.innerText = results;
			count = 0
			return 
		}else if(event.srcElement.innerText == "+" || event.srcElement.innerText == "-" || event.srcElement.innerText == "*" || event.srcElement.innerText == "/"){
			results += event.srcElement.innerText;
			result = event.srcElement.innerText
			display.innerText = result
			return
		}
	}
	results += event.srcElement.innerText;
	result += event.srcElement.innerText;
	display.innerText = result;
	console.log(results)
}

function del(){
	display.innerText = "0"
	results = ""
	result = ""
	count = 0
}

function resultcalculate(){
	count++
	console.log(count)
	if(results==""){
		display.innerText = "0"
		results = ""
		result = ""
		return 
	}else{
		var ending = eval(results)
		display.innerText = ending
		results = ending
		result = ending
		console.log(results)
		return 
	}


}