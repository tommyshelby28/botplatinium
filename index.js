document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById('userNameInput');
    const userNameDisplay = document.getElementById('userName');

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateUsername(); 
            copyMessageToClipboard();
        }
    });

    document.getElementById('generateButton').addEventListener('click', function() {
        generateUsername();
        copyMessageToClipboard();
    });

    function generateUsername() {
        const inputName = userInput.value.trim();
        const finalUsername = 'M' + inputName + generateRandomNumbers();
        userNameDisplay.textContent = finalUsername;
    }

    function copyMessageToClipboard() {
        const message = "Paso a dejarte información! ❤️\n\n" +
                        "Carga mínima 1000\n" +
                        "Retiro mínimo 2000\n" +
                        "Horario de pagos 08am a 23:50pm\n\n" +
                        "Nombre de usuario: " + userNameDisplay.textContent + "\n" +
                        "Tu contraseña es: *hola123*\n\n" +
                        "Link para ingresar a jugar: Somos _cas.platinium https://jugalodos.com/\n\n" +
                        "*AVISO! EN NUESTRA FOTO DE PERFIL TENEMOS UN NUMERO DE RESPALDO POR CUALQUIER INCONVENIENTE QUE PUEDA SUCEDER*\n\n" +
                        "Si querés realizarla consultanos cbu";

        navigator.clipboard.writeText(message)
            .then(() => {
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err);
                alert("Hubo un error al copiar el mensaje al portapapeles. Por favor, inténtalo de nuevo.");
            });
    }

    function generateRandomNumbers() {
        let randomNumbers = '';
        for (let i = 0; i < 3; i++) {
            randomNumbers += Math.floor(Math.random() * 10); 
        }
        return randomNumbers;
    }

    // Porcentajes
document.getElementById("fifteenButton").addEventListener("click", function() {
    sumarPorcentaje(15);
});

document.getElementById("twentyButton").addEventListener("click", function() {
    sumarPorcentaje(20);
});

document.getElementById("thirtyButton").addEventListener("click", function() {
    sumarPorcentaje(30);
});

function sumarPorcentaje(porcentaje) {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    const numero = parseFloat(numberInput.value);

    if (!isNaN(numero)) {
        const porcentajeCalculado = numero * (porcentaje / 100);
        resultElement.textContent = numero + " + " + porcentajeCalculado.toFixed(2);
    } else {
        resultElement.textContent = "Por favor ingrese un número válido.";
    }
}

    document.getElementById('generatePassword').addEventListener('click', function() {
        const password = 'hola123';
        copyToClipboard(password);
    });
    
    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
});

window.onload = function() {
    const mensajeGuardado = localStorage.getItem('mensaje');
    if (mensajeGuardado) {
      document.getElementById('mensaje').value = mensajeGuardado;
    }
  };

  // Función para copiar el mensaje al portapapeles y guardar en almacenamiento local
  function copiarMensaje() {
    // Obtenemos el contenido del textarea
    const mensaje = document.getElementById("mensaje").value;
    // Guardamos el mensaje en almacenamiento local
    localStorage.setItem('mensaje', mensaje);
    // Creamos un elemento de texto temporal
    const inputTemp = document.createElement("textarea");
    // Asignamos el valor del mensaje al campo temporal
    inputTemp.value = mensaje;
    // Añadimos el campo temporal al documento
    document.body.appendChild(inputTemp);
    // Seleccionamos el contenido del campo temporal
    inputTemp.select();
    // Copiamos el contenido seleccionado al portapapeles
    document.execCommand("copy");
    // Removemos el campo temporal del documento
    document.body.removeChild(inputTemp);
  }


// BOTONES
  document.getElementById("pagosBoton").addEventListener("click", function() {
    const mensaje = "Felicitaciones por tu premio! Nos pone muy contentos que ganes con nosotros! 🥳\nPara poder retirarlo te pido que lo solicites al siguiente número 📲, muchas gracias. Esperamos tu mensaje.\n\nLINK: https://wa.link/iv2wdl\n1132956589";
  
    // Abre el enlace en una nueva ventana
    
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });


  document.getElementById("cargasBoton").addEventListener("click", function() {
    const mensaje = "💖, este numero se encargara unicamente del area de retiros. Para realizar tu carga te dejamos los siguientes numeros, podes optar por uno y el otro dejarlo de soporte📲\n" +
                    "\nLINK 1: https://wa.link/y56xht\n\n" +
                    "LINK 2: https://wa.link/5owglf\n\n" +
                    "Muchas gracias, te esperamos para brindarte la mejor atencion. Mucha suerte☘️\n";
  
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });

  document.getElementById("restableContra").addEventListener("click", function() {
    const mensaje = "Usuario restablecido:\n\n" +
                    "Usuario: \n\n" +
                    "Contraseña: hola123\n\n"
                    "Link: https://jugalodos.com/";
  
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });


  document.getElementById("linkPage").addEventListener("click", function() {
    const mensaje = " te dejo el Link: https://jugalodos.com/";
  
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });
  
//

  

// Variable para hacer un seguimiento del índice del mensaje actual
let indiceMensajeActual = 0;

// Lista de mensajes
const mensajes = [
    "Hola, somos @casplatinium_ 🫶 Te dejamos el link de nuestros juegos: https://jugalodos.com/ Para poder pasarte la info completa te pedimos un nombre para tu usuario",
    "¡Hola! aca @casplatinium_ 🫶. Queríamos compartir nuestro enlace de juegos: https://jugalodos.com/. Para brindarte toda la información, ¿podrías darnos un nombre para crear tu usuario?",
    "¡Hola, somos @casplatinium_ 🫶! Nos gustaría compartir contigo el enlace de nuestros juegos: https://jugalodos.com/. Para poder brindarte toda la información, ¿podrías proporcionarnos un nombre para crear tu usuario?",
    "¡Saludos! Somos @casplatinium_ 🫶. Queremos compartir contigo el enlace de nuestros juegos: https://jugalodos.com/. Para proporcionarte toda la información, ¿podrías indicarnos un nombre para crear tu usuario que te gustaría utilizar?",
    "¡Hola! Somos @casplatinium_ 🫶. Queríamos mostrarte nuestros juegos en el siguiente enlace: https://jugalodos.com/. Para poder ofrecerte toda la información, ¿me dirias tu nombre para la creacion de tu usuario?"
];

function copiarSiguienteMensaje() {
    // Seleccionar el siguiente mensaje
    const mensajeSeleccionado = mensajes[indiceMensajeActual];

    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensajeSeleccionado)
        .then(function() {
            console.log('Mensaje copiado al portapapeles: ' + mensajeSeleccionado);
        })
        .catch(function(err) {
            console.error('Error al copiar el mensaje: ', err);
        });

    // Incrementar el índice del mensaje actual para el próximo clic
    indiceMensajeActual = (indiceMensajeActual + 1) % mensajes.length;
}


let indiceMensaje = 0;

// Lista de mensajes
const mensajesFelicidades = [
    "Felicidades 🥳 Gracias por confiar 🍀! Si nuestra atención te gustó, por favor no olvides recomendarnos con amigos y familiares 🙏🏼♥️ Te dejo el link para que lo reenvíes: \n\n LINK 1: https://wa.link/y56xht\n\n LINK 2: https://wa.link/5owglf",
    "Hola, tengo un plan de bonificación. Si me recomendas con tus amigos/as y me cargan de tu parte, tenés un 10% en tu próxima carga 🎁🎰 Te paso el link a continuación:\n\n LINK 1: https://wa.link/y56xht\n\n LINK 2: https://wa.link/5owglf"
];

function copiarMensajeSiguiente() {
    // Seleccionar el siguiente mensaje
    const mensajeSeleccionado = mensajesFelicidades[indiceMensaje];

    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensajeSeleccionado)
        .then(function() {
            console.log('Mensaje copiado al portapapeles: ' + mensajeSeleccionado);
        })
        .catch(function(err) {
            console.error('Error al copiar el mensaje: ', err);
        });

    // Incrementar el índice del mensaje actual para el próximo clic
    indiceMensaje = (indiceMensaje + 1) % mensajesFelicidades.length;
};
