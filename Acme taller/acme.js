let producto = ''
let descuento = ''

function registro() {
    let registroPr =document.querySelector('.value').value
    let registroVl =document.querySelector('.value2').value

    if (registroVl) {
        descuento = registroVl*0.07
    }
    
    
    
    
    
    
    document.querySelector('.table').innerHTML += `<tr><td>Producto : ${registroPr}</td><td>Valor : ${registroVl}</td><td>descuento : ${descuento}</td></tr>`
    

    
    
    


}