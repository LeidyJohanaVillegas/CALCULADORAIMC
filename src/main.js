//Referencias al Dom para los botones
document.getElementById('btnNew').addEventListener('click', clearForm);
document.getElementById('btnCal').addEventListener('click', calcularIMC);

//Constantes de Clasificacion
const MJS1 = "Peso inferior al normal";
const MJS2 = "Peso normal";
const MJS3 = "Peso superior al normal";
const MJS4 = "Obeso";
const MJS5 = "Hiperobeso";

//Memoria: Base de datos de pacientes (Simulada)
let pacientes = [];

//Funcion para calcular el IMC
function calcular(peso, estat){
  return (peso / (estat ** 2)).toFixed(2);// Redondea el resultado a dos decimales
}
//funcion principal
function calcularIMC() {
  //Datos
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const estat = parseFloat(document.getElementById('estat').value);
  //Verificando campos 
  if (!name || isNaN(age) || isNaN(peso) || isNaN(estat)){
    alert("Complete todos los campos correctamente, por favor.");
    return;
  }
  //Conociendo el Indice de Masa Corporal 
  let IMC = calcular(peso, estat);
  //Clasificacion
  let MJS, img;
  if (IMC < 18.5) {
    MJS = MJS1;
    img = "../public/img/pesoInferiorNormal.png"
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    MJS = MJS2;
    img = "../public/img/pesoNormal.png"
  } else if (IMC >= 25.0 && IMC <= 29.9) {
    MJS = MJS3;
    img = "../public/img/pesoSuperiorNormal.png"
  } else if (IMC >= 30.0 && IMC <= 34.9) {
    MJS = MJS4;
    img = "../public/img/Obeso.png"
  } else {
    MJS = MJS5;
    img = "../public/img/hiperobeso.png"
  }
  //Guardar Registro
  pacientes.push({ name, age, peso, estat, IMC, MJS }); 
  console.log(pacientes);
  //Resultados
  document.getElementById('card').style.display = 'block';
  document.getElementById('nameResult').textContent = `Nombre: ${name}`;
  document.getElementById('ageResult').textContent = `Edad: ${age}`;
  document.getElementById('IMC').textContent = `Indice de masa corporal (IMC): ${IMC}`;
  document.getElementById('MJS').textContent = MJS;
  document.getElementById('img').innerHTML = `<img src= "${img}" alt="imagen" width="150"/>`;
  disableFields(); // Desactiva los campos después de calcular
}

//Limpiar formulario (campo)
function clearForm(){
  const fields = ['name', 'age', 'peso', 'estat'];
  //metodo del array para cada elemento id
  fields.forEach(id => {
    const field = document.getElementById(id);//recorre cada array 
    field.value = '';
    field.disabled = false;
  });
  //Mantener la card no visible
  document.getElementById('card').style.display = 'none';
}

//Bloquear los campos del formulario
function disableFields() {
  const fields = ['name', 'age', 'peso', 'estat'];
  //Metodo del array para cada elemento id
  fields.forEach(id => {
    document.getElementById(id).disabled = true; // Desabilita cada campo del formulario
  });
}
