/* 

    Variáveis
        Um espaço de memória que vocês reserva e pode guardar o que quiser lá dentro

        3 jeitos de criar uma variável
        - var (jeito antigo - NÃO USE. FOI DESCONTINUADO)
        - let -> você pode alterar o valor depois
        - const -> constante

const numero1 = 100
const numero2 = 300
const numeroTotal = numero1 + numero2

console.log(numeroTotal)


    Funções
        Um trecho de código que, só é executado, qdo é chamado 

const abacate = "Oi, sou um abacate"
const pera = "Oi, sou uma pera"
const conta = 30 + 20

console.log (abacate)
console.log(pera)
console.log(conta) 

const abacate = "Oi, sou um abacate"
const pera = "Oi, sou uma pera"
const numero1 = 100
const numero2 = 200

function soma() {
        const somatoria = numero1 + numero2
        console.log(somatoria)
}


console.log(pera)

soma()
soma()
soma()*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left ="50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function esconderForm(){
   form.style.left ="-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden" 
}


/*{

function cliqueiNaMascara() {
  if (mascara) mascara.style.display = 'none';
    if (form) form.style.display = 'none';

} 

form.style.left = "-300%"
    form.style.display = "none"
    
 const form = document.querySelector(".formulario-fale-conosco")
    const mascara = document.querySelector(".mascara-formulario")

    if (mascara) mascara.style.display = 'none';
    if (form) form.style.display = 'none';


    }*/

 