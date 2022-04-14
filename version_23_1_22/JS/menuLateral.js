$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
});

//añadido


window.onload = function () {
  console.log(sessionStorage.getItem('rol'));
  constructor(sessionStorage.getItem('rol'));
};

function constructor(rol) {
  var usuario = document.querySelector('#usuario');
  usuario.innerHTML = sessionStorage.getItem('usuario');

  usuario.nextElementSibling.innerHTML = "<li><a href='#edit'>Editar</a></li>"+
  "<li><a href='../index.html'>Cerrar Sesion</a></li>"

  if (rol == "alumno") {
    let home = document.getElementById('home');
    home.setAttribute('href', '../general/principal_alumno.html');

    let tareas = document.getElementById('desplegable');
    tareas.innerHTML = "Tareas <span class='caret'></span>";

    let listaTareas = tareas.nextElementSibling;
    listaTareas.innerHTML = "<li><a href='#biologia'>Biología</a></li>" +
      "<li><a href='../alumnos/asignatura.html'>Matemáticas</a></li>" +
      "<li><a href='#quimica'>Química</a></li>" +
      "<li><a href='#Lengua'>Lengua</a></li>";

    let mensajeria = document.getElementById('mensajeria');
    mensajeria.innerHTML = "<a href='mensajeria.html'>Mensajeria</a>";

  } else if (rol == "profesor") {
    let home = document.getElementById('home');
    home.setAttribute('href', '../general/principal_profesor.html');

    let tareas = document.getElementById('desplegable');
    tareas.innerHTML = "Grupos <span class='caret'></span>";

    let listaTareas = tareas.nextElementSibling;
    listaTareas.innerHTML = " <li><a href='../profesor/grupo.html'>Matemáticas 1º Bach</a></li>"+
   "<li><a href='#matematicas'>Matemáticas 2º Bach</a></li>"+
    "<li><a href='#matematicas'>Matemáticas 3º ESO</a></li>"+
    "<li><a href='#matematicas'>Matemáticas 4º ESO</a></li>";

    let mensajeria = document.getElementById('mensajeria');
    mensajeria.innerHTML = "<a href='mensajeria.html'>Mensajeria</a>";
  }


}
