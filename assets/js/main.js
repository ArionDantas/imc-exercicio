(function meuEscopo(){

  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const inputPeso = e.target.querySelector('.input-peso');
    const inputAltura = e.target.querySelector('.input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (peso === 0 && altura === 0) {
      setResultado('IMC inválido', false)
      return;
    }

    if (peso === 0) {
      setResultado('Peso inválido', false);
      return;
    }

    if (altura === 0) {
      setResultado('Altura inválida', false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivel(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true);
    
  });

  function getNivel(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
  }

  function criaP() {
    const p = document.createElement('p');
    return p;
  }

  function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();

    (isValid) ? p.classList.add('resultado-ok') : p.classList.add('resultado-bad');

    p.innerHTML = msg;
    resultado.appendChild(p);
  };

  function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(1);
  }

})();