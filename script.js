const media = document.querySelector(".media");
const img = document.createElement('img');
img.setAttribute('src', 'imagens/teste2.jpeg');
img.setAttribute('class', 'psw-fade-in-out psw-center psw-fill');
media.appendChild(img);

window.addEventListener("resize", function(){
    let widthWindow = window.innerWidth;
    if(widthWindow <= 1024){
        img.setAttribute('src', 'imagens/teste2.jpeg');
    }else{
        img.setAttribute('src', 'imagens/teste.jpeg')
    }
});

window.addEventListener('load', function(){
    let widthWindow = window.innerWidth;
    if(widthWindow <= 1024){
        img.setAttribute('src', 'imagens/teste2.jpeg');
    }else{
        img.setAttribute('src', 'imagens/teste.jpeg')
    }
});