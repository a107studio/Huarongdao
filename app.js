var htmlWidth =document.documentElement.clientWidth || document.body.clientWidth;
var htmlDom =document.getElementsByTagName('html')[0];
htmlDom.style.fontSize=htmlWidth / 10+'px';
window.addEventListener('resize',function(){
	var htmlWidth =document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize=htmlWidth / 10+'px';
})