let contador = 1
document.getElementById('radio1').checked = true

setInterval( function(){
    proximaImagem()
}, 60000)

function proximaImagem() {
    contador++
    if(contador>13){
        contador = 1
    }
    document.getElementById('radio'+contador).checked = true
}