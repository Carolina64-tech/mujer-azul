const button=document.getElementById("boton");


function buttonhide(){
    const foto2 = document.getElementById("foto2");
    const status = foto2.className;

    if(status === "escondido") {
        foto2.className="visible";  
    }   
    if(status === "visible"){
        foto2.className = "escondido";
    }
}
button.addEventListener("click", buttonhide);