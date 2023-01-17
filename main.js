let  celInput = document.querySelector('#celto');
let  kelInput = document.querySelector('#kelto');
let  farInput = document.querySelector('#farto');


const roundToTwoDP = (num) => {
    return num.toFixed(2);
  };

const farToKelvinCelcius = () => {
    const farTemp = parseFloat(farInput.value);
    const celTemp = (farTemp- 32) * (5 / 9);
    const kelTemp = (farTemp + 459.67) * (5 / 9);

    celInput.value = roundToTwoDP(celTemp);
    kelInput.value = roundToTwoDP(kelTemp);
};
const celToFarKelvin = ()=>{
    const celTemp = parseFloat(celInput.value);
    const  farTemp = (celTemp * 1.8) + 32;
    const kelTemp = celTemp + 273.15;

    farInput.value = roundToTwoDP(farTemp);
  kelInput.value = roundToTwoDP(kelTemp);
};
const kelToCelciusKelvin = ()=>{
    const kelTemp = parseFloat(kelInput.value);
    const celTemp = kelTemp - 273;
    const farTemp = 1.8 * (kelTemp - 273) + 32;

    celInput.value = roundToTwoDP(celTemp);
  farInput.value = roundToTwoDP(farTemp);
};

const changeTemp = ()=>{
    celInput.addEventListener('input',celToFarKelvin);
    kelInput.addEventListener('input',kelToCelciusKelvin);
    farInput.addEventListener('input',farToKelvinCelcius);
};


changeTemp();