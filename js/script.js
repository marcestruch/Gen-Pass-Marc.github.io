const contraseña = document.querySelector("#contraseña");
const generar = document.querySelector("#generar");
const copiar = document.querySelector("#copiar");
const longitudI = document.querySelector("#longitud");

const chkMayus = document.querySelector("#mayusculas");
const chkMinus = document.querySelector("#minusculas");
const chkNums = document.querySelector("#numeros");
const chkSimb = document.querySelector("#simbolos");

const letrasMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinus = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_-+=<>?/{}[]";


function generarContrasenya() {
  const longitud = parseInt(longitudI.value);
  const usarMayus = chkMayus.checked;
  const usarMinus = chkMinus.checked;
  const usarNums = chkNums.checked;
  const usarSimb = chkSimb.checked;

  let caracteresDisponibles = "";
  if (usarMayus) caracteresDisponibles += letrasMayus;
  if (usarMinus) caracteresDisponibles += letrasMinus;
  if (usarNums) caracteresDisponibles += numeros;
  if (usarSimb) caracteresDisponibles += simbolos;
  if (caracteresDisponibles === "") {
    alert("Selecciona al menos un tipo de carácter");
    return;
  }
  let password = "";
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
    password += caracteresDisponibles[randomIndex];
  }
  contraseña.value = password;
}


function copiarContrasenya() {
  const texto = contraseña.value;

  if (!texto) {
    alert("No hay contraseña para copiar");
    return;
  }

  navigator.clipboard.writeText(texto)
    .then(() => alert("¡Contraseña copiada!"))
    .catch(() => alert("Error al copiar"));
}


generar.addEventListener("click",(event) => {
    event.preventDefault();
    generarContrasenya();
});


copiar.addEventListener("click", copiarContrasenya)