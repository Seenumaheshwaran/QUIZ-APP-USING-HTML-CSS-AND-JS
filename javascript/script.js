let mes1=document.getElementById("answer");
mes1.addEventListener("click",ans());
let m1=document.getElementById("a1");
m1.addEventListener("click",ans())

function ans(){
    document.getElementById("answer").style="background-color:green;";
    document.getElementById("a1").style="background-color:green;";
}
let mes2=document.getElementById("wrong1");
mes2.addEventListener("click",wrong1());
let m2=document.getElementById("w1");
m2.addEventListener("click",wrong1());

function wrong1(){
    document.getElementById("wrong1").style="background-color:red; ";
    document.getElementById("w1").style="background-color:red;";
}
let mes3=document.getElementById("wrong2");
mes3.addEventListener("click",wrong2());
let m3=document.getElementById("w2");
m3.addEventListener("click",wrong2());

function wrong2(){
    document.getElementById("wrong2").style="background-color:red;";
    document.getElementById("w2").style="background-color:red;";
}
let mes4=document.getElementById("wrong3");
mes4.addEventListener("click",wrong3());
let m4=document.getElementById("w3");
m4.addEventListener("click",wrong3());

function wrong3(){
    document.getElementById("wrong3").style="background-color:red;";
    document.getElementById("w3").style="background-color:red;";
}

function answers(element) {
    let options = element.parentNode.querySelectorAll('li');
    options.forEach(option => {
        option.style.backgroundColor = 'rgb(177, 232, 240)';
        option.style.color = 'black';
        option.querySelector('span').style.backgroundColor = 'rgb(122, 230, 247)';
    });
    if (element.classList.contains("answer")) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
        element.querySelector('span').style.backgroundColor = "green";
    } else {
        element.style.backgroundColor = "red";
        element.style.color = "white";
        element.querySelector('span').style.backgroundColor = "red";
    }
}