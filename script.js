const comeco = document.getElementById('comeco')
const imagem = document.getElementById('imagem1')
let botao = document.querySelector('button')

elementoBtn.addEventListener('click', ()=>{
    if(botao.value == "Click"){
        imagem.src = './assets/img/img1.jpg'
        botao.value = 'abc'
    }

    else if(botao.value == 'abc'){
        imagem.src = './assets/img/img2.jpg'
        botao.value= 'bcd'
    }
    else {
        imagem.src = './assets/img/img3.jpg'
        botao.value = 'Click'
    }
})