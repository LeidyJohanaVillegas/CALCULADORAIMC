# 🧮 Calculadora de IMC
Una aplicación web simple desarrollada con HTML, CSS y JavaScript que permite calcular el Índice de Masa Corporal (IMC) de una persona, mostrar una imagen relacionada y guardar el registro en un listado de pacientes.

# 🚀 Características
Validación de formulario para evitar campos vacíos o incorrectos.
Cálculo automático del IMC con dos decimales.
Clasificación del IMC según la OMS.
Visualización del resultado con mensaje y una imagen representativa.
Almacenamiento simulado de pacientes en un array (opcionalmente puede integrarse localStorage).
Interfaz sencilla y funcional.

# 🖼️ Captura de pantalla
(Puedes agregar una imagen aquí si deseas)

# 📋 Tecnologías utilizadas
React
HTML5
CSS3
JavaScript (Vanilla)

# ⚙️ Cómo usar
Clona este repositorio o descarga los archivos.
Abre el archivo index.html en tu navegador.
Ingresa tu nombre, edad, peso (kg) y estatura (m).
Haz clic en el botón Calcular IMC.
Verás tu resultado con una descripción y una imagen asociada.

# 📁 Estructura del proyecto

```
📦 calculadora-imc
├── node_modules/
├── public/
│   └── img/
│       ├── hiperobeso.png
│       ├── Obeso.png
│       ├── pesoInferiorNormal.png
│       ├── pesoNormal.png
│       └── pesoSuperiorNormal.png
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md 
```

# 📐 Fórmula utilizada
IMC = peso / estatura²

Donde:
peso está en kilogramos (kg).
estatura está en centimetros (cm).

# 📊 Clasificación del IMC (según la OMS)
Clasificación	Rango IMC
Bajo peso	< 18.5
Peso normal	18.5 - 24.9
Sobrepeso	25.0 - 29.9
Obesidad tipo I	30.0 - 34.9
Obesidad extrema (tipo II)	≥ 35.0

# 🧑‍💻 Autor
Desarrollado por Leidy Johana Niño Villegas.
Este proyecto es para fines educativos.