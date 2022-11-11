const numero = prompt(
    "Olá, vamos calcular?\n" +
    "Informe o número que você deseja calcular:"
)

let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " * " + fator + " = " (numero * fator) + "\n"
}

alert ("Resultado do calculo de " + numero + ":\n\n" + resultado)