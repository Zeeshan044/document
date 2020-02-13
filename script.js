var css =document.querySelector("#css");
var btn1 =document.querySelector("#color1");
var btn2 =document.querySelector("#color2");
var body=document.getElementById("background");
css.innerHTML='linear-gradient(to right, rgb(255, 255, 0), rgb(255, 0, 0))';
function gradient()
{
    body.style="background: linear-gradient(to right , " + btn1.value+" , "+btn2.value+");";
    css.innerHTML=body.style.background;
}
btn1.addEventListener("input", gradient);
btn2.addEventListener("input", gradient);