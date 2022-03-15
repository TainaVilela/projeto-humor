const imagem = document.getElementById('imagem1')
let botao = document.getElementById('button')

botao.addEventListener('click', ()=>{
    if(botao.value == "click"){
        imagem.srcset = './assets/img/img2.jpg'
        botao.value = 'abc'
    }

    else if(botao.value == 'abc'){
        imagem.srcset = './assets/img/img3.jpg'
        botao.value= 'bcd'
    }
    else {
        imagem.srcset = './assets/img/img1.jpg'
        botao.value = 'click'
    }
})