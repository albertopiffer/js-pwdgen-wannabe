let nome
let cognome
let colorePreferito
let numero

let pswd


nome = prompt('Inserire NOME')
console.log('nome: ', nome)

cognome = prompt('Inserire COGNOME')
console.log('cognome: ', cognome)

colorePreferito = prompt('Inserire COLORE PREFERITO')
console.log('colore preferito: ', colorePreferito)

numero = prompt('Inserire un NUMERO')
console.log('numero: ', numero)


pswd = nome + cognome + colorePreferito + numero
console.log('password: ', pswd)


const password = document.getElementById('password')
password.innerHTML = pswd