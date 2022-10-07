let mayorEdad = 0;
let menorEdad = 120;

let nombreMayor = '';
let nombreMenor = '';

function comparacion (){
    let name = document.querySelector('.name').value;
    let age = document.querySelector('.age').value;
    // alert(name)
    
 if (age > mayorEdad) {
    mayorEdad = age
    nombreMayor = name
    mayor(nombreMayor,mayorEdad);

    // alert(mayorEdad + nombreMayor);
 }

 if (age < menorEdad) {
    menorEdad = age
    nombreMenor = name
    menor(nombreMenor,menorEdad);

    // alert(menorEdad + nombreMenor);
 }


 tablaFirst(name,age);
}

function tablaFirst (n, a){
    // alert(a)
    document.querySelector('.nameAge').innerHTML += `<tr><td>${n}</td> <td>${a}</td></tr>`;
}
function mayor (nombreMayor,mayorEdad){
    // alert(a)
    document.querySelector('.mayor').innerHTML = `<tr><td>${nombreMayor}</td> <td>${mayorEdad}</td></tr>`;
}
function menor (nombreMenor,menorEdad){
    // alert(a)
    document.querySelector('.menor').innerHTML = `<tr><td>${nombreMenor}</td> <td>${menorEdad}</td></tr>`;
}
