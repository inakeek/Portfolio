let menuVisible = false;

//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

//Función para ocultar el menú una vez que selecciono una opción
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//Función para las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss"); 
        habilidades[2].classList.add("java"); 
        habilidades[3].classList.add("databases"); 
        habilidades[4].classList.add("wordpress"); 
        habilidades[5].classList.add("salesforce");
        habilidades[6].classList.add("aprendizaje");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("liderazgo");
        habilidades[11].classList.add("adaptabilidad");  
    }
}

//Detectar el scrolling para aplicar la animación de la barra de las habilidades
window.onscroll=function(){
    efectoHabilidades();
}