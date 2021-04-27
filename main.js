let divv = document.createElement("div");
divv.style.cssText = "width:200px; height:200px; background:red; ";
divv.addEventListener("mouseover", () => tr());
divv.addEventListener("mouseout", () => tr2());
document.body.appendChild(divv);

let h3 = document.createElement("h3");

function tr(){
    h3.innerText = "Это красный квадрат";
    h3.style.cssText = "visibility:visible; ";
    h3.style.cssText = "border: solid 2px black; padding: 10px; position: relative; top: 200px; left:200px ";
    divv.appendChild(h3);
}

function tr2(){
    h3.style.cssText = "visibility: hidden;";
}