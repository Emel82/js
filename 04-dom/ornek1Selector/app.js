//=====GETELEMENTBYID======

const paragraf=document.getElementById("para").style;
paragraf.backgroundColor="black";
paragraf.color="white";
paragraf.fontSize="20px";

const button=document.getElementById("btn");
button.style.width="100px";
button.style.color="red";
button.style.fontSize="18";

button.textContent="ARA";

//========QuerySelector========

document.querySelector(".title").textContent="DOM SELECTOR😃";
document.querySelector("#govde").style.backgroundImage="linear-gradient(green,blue,pink)";

/**************EVENT*************** */
 
const h= document.querySelector(".H1");

h.onmouseover= function(){
    h.style.color="red";
    h.style.backgroundColor="white";
}

h.onmouseout= function(){
    h.style.color="pink";
    h.style.backgroundColor="yellow";
}

document.querySelector(".bir").onclick= function(){
    document.querySelector(".bir").src="./img/yol.jpg";
    document.querySelector(".iki").src="./img/ev.jpg"
}