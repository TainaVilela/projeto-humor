const comeco = document.getElementById('comeco')
const imagem = document.getElementById('imagem1')
let elementoBtn = document.querySelector('alterar')

elementoBtn.addEventListener('click', ()=>{
    if(elementoBtn.value == "Click"){
        imagem.src = "../img/img1.jpg"
        elementoBtn.value = 'abc'
    } 
    else if(elementoBtn.value == 'abc'){
        imagem.src = '../img/img2.jpg'
        elementoBtn = 'bcd'
    } 
    else {
        imagem.src = '../img/img3.jpg'
        elementoBtn.value = 'Click'
    }
})