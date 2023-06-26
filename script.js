const grid = [
    {
        img: "./imagens/spider-2.jpg",
    },
    {
        img: "./imagens/fifa.jpg",
    },
    {
        img: "./imagens/diablo.jpg",
    },
    {
        img: "./imagens/harry-potter.jpg",
    },
    {
        img: "./imagens/gta.jpg",
    },
    {
        img: "./imagens/mais-aguardados.jpg",
    },
    {
        img: "./imagens/street-fighter.jpg",
    },
    {
        img: "./imagens/nba.jpg",
    },
    {
        img: "./imagens/cod.jpg",
    }
]

const itens = [
    {
        img: "./imagens/FF.jpg",
        desc: "FINAL FANTASY XVI"
    },
    {
        img: "./imagens/spider-2.jpg",
        desc: "Marvel's Spider-Man 2"
    },
    {
        img: "./imagens/diablo.jpg",
        desc: "Diablo® IV"
    },
    {
        img: "./imagens/harry-potter.jpg",
        desc: "Hogwarts Legacy"
    },
    {
        img: "./imagens/fifa.jpg",
        desc: "EA SPORTS™ FIFA 23"
    },
    {
        img: "./imagens/gta.jpg",
        desc: "Grand Theft Auto V (PlayStation®5)"
    },
    {
        img: "./imagens/fortnite.jpg",
        desc: "Fortnite"
    },
    {
        img: "./imagens/cod.jpg",
        desc: "Call of Duty®: Modern Warfare® II"
    },
    {
        img: "./imagens/efootball.jpg",
        desc: "eFootball™ 2023"
    },
    {
        img: "./imagens/harry-potter.jpg",
        desc: "Hogwarts Legacy"
    },
]

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

const span = document.querySelector('.collection-list');

window.addEventListener('DOMContentLoaded', function(e){
    gridObject(grid);
    itemsObject(itens);
});

function gridObject(g){
    let spanItems = g.map(function(item){
        return `<li class="grid-list-collection">
                    <a href="@">
                        <div class="psw-line-center">
                            <span><img src="${item.img}"></span>
                        </div>
                    </a>
                </li>`
    });
    spanItems = spanItems.join(" ");
    span.innerHTML = spanItems;
};

// const showMore = document.querySelector(".mostrar-mais");
// const showMoreBTN = document.querySelector('.mostrar-mais button');

// showMoreBTN.addEventListener("click", function(){
//     showMore.style.marginTop = '20px'
//     showMore.style.height = '0px'
//     showMoreBTN.style.display = 'none'
// });




const ul = document.querySelectorAll(".medium-list-ul");

function itemsObject(i){
    let li = i.map(function(item){
        return `<li class="medium-list-li">
                    <div class="link">
                        <a href="@" class="medium-i">
                            <div class="item">
                            <div class="img">
                                <img src="${item.img}" alt="">
                            </div>
                            <section class="nome">
                                <span>${item.desc}</span>
                            </section>
                            </div>
                        </a>
                    </div>
                </li>`
    });
    li = li.join(" ");
    ul.forEach(function(u){
        u.innerHTML = li
    })
}

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", function(){
    ul.style.left = "-81%"
    nextBtn.style.display = 'none'
    prevBtn.style.display = 'block'
});

prevBtn.addEventListener("click", function(){
    ul.style.left = "0%"
    nextBtn.style.display = 'block'
    prevBtn.style.display = 'none'
});