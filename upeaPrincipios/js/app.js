//

 function toggleMenu(){
    let sidebar = document.querySelector('.sidebar')
    let srcBtn = document.querySelector('.src')
    let btn = document.querySelector('#btn')
    let logo = document.querySelector('.logo2')
    let imgSearch = document.querySelector('#img-search')
    imgSearch.classList.toggle('active');
    btn.classList.toggle('active');
    console.log('toggle bars active');
    logo.classList.toggle('active');
    sidebar.classList.toggle('active');
    srcBtn.classList.toggle('active');
} 

 function toggleSearch(){
    toggleMenu();
    console.log('toggle search active');
} 
/***************************************/
$(document).ready(function(){ 
        console.log("run links");
       $(".enlace a").each(function(){
          var href = $(this).attr("href");
          $(this).attr({ href: "#"});
          $(this).click(function(){
             $("#content").load(href);
          });
       });
    });

/**************************************/

var modal = document.getElementById('modal-login');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function usuario(){
    letra =document.getElementById("span")
    letra.innerHTML="Recupera Contraseña";
}
function usuario_new(){
    letra =document.getElementById("span")
    letra.innerHTML=" Nuevo Usuario NATSUKI";
}
function usuario_login(){
    letra =document.getElementById("span")
    letra.innerHTML="Usuario NATSUKI";
}

document.write('<style type="text/css">div.olvido{display: none;}</style>'); 
function muestra_oculta(id,id1){
    if (document.getElementById){ 
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
    }
      if(document.getElementById){
        var ele = document.getElementById(id1); 
        ele.style.display = (ele.style.display == 'block') ? 'none' : 'block';
        usuario();
      }

    }
function muestra_registrar(id,id1){
    if (document.getElementById){ 
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'block') ? 'none' : 'block';
         usuario_new();
    }

    if(document.getElementById){
        var ele = document.getElementById(id1); 
        ele.style.display = (ele.style.display == 'none') ? 'block' : 'none'; 
    }
}
function oculta_login(id,id1){
    if (document.getElementById){ 
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
         usuario();
    }

    if (document.getElementById){ 
        var el = document.getElementById(id1);
        el.style.display = (el.style.display == 'block') ? 'none' : 'block';
    }
}
function muestra_login(id,id1){
    if (document.getElementById){ 
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'block') ? 'none' : 'block';
        usuario_login();
    }

    if (document.getElementById){ 
        var el = document.getElementById(id1);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
    }
}
