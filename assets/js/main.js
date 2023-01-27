(function meuEscopo() {
  const form = document.querySelector(".form");

  function Imc(peso, altura) {
    return { peso, altura };
  }

  function eventoForm(evt) {
    evt.preventDefault();

    const peso = document.querySelector(".input-peso");
    const altura = document.querySelector(".input-altura");
    const resultado = document.querySelector(".resultado");

    const imc = Imc(peso.value, altura.value);

    const resultadoImc = imc.peso / Math.pow(imc.altura, 2);

    console.log(resultadoImc.toFixed(1));

    if (isNaN(resultadoImc)) {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #ff4d4d;
          }
      </style>

      <p>Peso inválido</p>
      `;
    } else if (imc.altura == '') {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #ff4d4d;
          }
      </style>

      <p>Altura inválida</p>
      `;
    } else if (imc.peso == '') {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #ff4d4d;
          }
      </style>

      <p>Peso inválido</p>
      `;
    }
    else if (resultadoImc < 18.5) {
      resultado.innerHTML = `
        <style>
            .resultado {
                background: #4d94ff;
            }
        </style>

        <p>Seu IMC é ${resultadoImc.toFixed(1)} (Abaixo do peso)</p>
        `;
    } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #4d94ff;
          }
      </style>

      <p>Seu IMC é ${resultadoImc.toFixed(1)} (Peso normal)</p>
      `;
    } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #4d94ff;
          }
      </style>

      <p>Seu IMC é ${resultadoImc.toFixed(1)} (Sobrepeso)</p>
      `;
    } else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #4d94ff;
          }
      </style>

      <p>Seu IMC é ${resultadoImc.toFixed(1)} (Obesidade grau 1)</p>
      `;
    } else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #4d94ff;
          }
      </style>

      <p>Seu IMC é ${resultadoImc.toFixed(1)} (Obesidade grau 3)</p>
      `;
    } else if (resultadoImc > 40) {
      resultado.innerHTML = `
      <style>
          .resultado {
              background: #4d94ff;
          }
      </style>

      <p>Seu IMC é ${resultadoImc.toFixed(1)} (Obesidade grau 3)</p>
      `;
    }
  }

  form.addEventListener("submit", eventoForm);
})();
