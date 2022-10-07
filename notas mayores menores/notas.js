let notaMayor = '';
let notaMenor = '';
let notaIgual = '';

function comparacion(){
    let numero = document.querySelector('.value').value
     document.querySelector('.value').value =''

    
    if (numero > 0) {
        notaMayor++
        document.querySelector('.table').innerHTML = `<tr><td>Esta es la cantidad de notas mayores a 0 : ${notaMayor}</td></tr>`
    }
    if (numero == 0){
        notaIgual++
        document.querySelector('.table2').innerHTML = `<tr><td>Esta es la cantidad de notas iguales a 0 : ${notaIgual}</td></tr>`

    }
    if(numero < 0){
        notaMenor++
        document.querySelector('.table3').innerHTML = `<tr><td>Esta es la cantidad de notas menores a 0 : ${notaMenor}</td></tr>`

     } 

    
}
