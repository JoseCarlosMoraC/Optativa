var form = document.getElementById("registroForm");


var inputs = form.querySelectorAll("input, select, textarea");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    validarCampo(this);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var valido = true;

  for (var i = 0; i < inputs.length; i++) {
    if (!validarCampo(inputs[i])) {
      valido = false;
    }
  }

  if (valido) {
    mostrarMensaje("Formulario enviado correctamente", "success");
    form.reset();
    var campos = form.querySelectorAll(".success");
    for (var j = 0; j < campos.length; j++) {
      campos[j].classList.remove("success");
    }
  } else {
    mostrarMensaje("Por favor, revisa los errores", "error");
  }
});

function validarCampo(input) {
  var valor = input.value.trim();
  var id = input.id;
  var errorMsg = "";

  switch (id) {
    case "nombre":
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/.test(valor)) {
        errorMsg = "El nombre debe tener al menos 2 letras.";
      }
      break;

    case "apellidos":
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/.test(valor)) {
        errorMsg = "Los apellidos deben ser válidos.";
      }
      break;

    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
        errorMsg = "Introduce un email válido";
      }
      break;

    case "password":
      if (!/(?=.*[A-Z])(?=.*[0-9]).{6,}/.test(valor)) {
        errorMsg = "La contraseña debe tener 6 caracteres, una mayúscula y un número";
      }
      break;

    case "confirmar":
      var pass = document.getElementById("password").value;
      if (valor !== pass) {
        errorMsg = "Las contraseñas no coinciden";
      }
      break;

    case "telefono":
      if (!/^[0-9]{9}$/.test(valor)) {
        errorMsg = "El teléfono debe tener 9 dígitos";
      }
      break;

    case "fecha":
      if (valor === "") {
        errorMsg = "Introduce tu fecha de nacimiento";
      } else {
        var fecha = new Date(valor);
        var hoy = new Date();
        var edad = hoy.getFullYear() - fecha.getFullYear();
        if (edad < 16) {
          errorMsg = "Debes tener al menos 16 años";
        }
      }
      break;

    case "pais":
      if (valor === "") {
        errorMsg = "Selecciona un país.";
      }
      break;

    case "terminos":
      if (!input.checked) {
        errorMsg = "Debes aceptar los términos.";
      }
      break;
  }

  if (input.name === "genero") {
    var radios = document.querySelectorAll("input[name='genero']");
    var seleccionado = false;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) seleccionado = true;
    }
    if (!seleccionado) {
      errorMsg = "Selecciona un género.";
    }
  }

  mostrarError(input, errorMsg);
  return errorMsg === "";
}

function mostrarError(input, mensaje) {
  var contenedor = input.parentElement;
  if (!contenedor.classList.contains("campo")) {
    contenedor = input.closest("div") || input.parentElement;
  }

  var error = contenedor.querySelector(".error-msg");
  if (!error) {
    error = document.createElement("small");
    error.className = "error-msg";
    contenedor.appendChild(error);
  }

  if (mensaje) {
    input.classList.add("error");
    input.classList.remove("success");
    error.textContent = mensaje;
  } else {
    input.classList.remove("error");
    input.classList.add("success");
    error.textContent = "";
  }
}

function mostrarMensaje(texto, tipo) {
  var alerta = document.createElement("div");
  alerta.className = tipo === "success" ? "alerta success" : "alerta error";
  alerta.textContent = texto;
  document.body.appendChild(alerta);
  setTimeout(function () {
    alerta.remove();
  }, 3000);
}
