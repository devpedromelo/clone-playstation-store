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
];

const itens = [
    {
        img: "./imagens/FF.jpg",
        desc: "FINAL FANTASY XVI"
    },
    {
        img: "./imagens/fortnite.jpg",
        desc: "Fortnite"
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
        img: "./imagens/diablo.jpg",
        desc: "Diablo® IV"
    },
    {
        img: "./imagens/harry-potter.jpg",
        desc: "Hogwarts Legacy"
    },
    {
        img: "./imagens/spider-2-normal.jpg",
        desc: "Marvel's Spider-Man 2"
    },
    {
        img: "./imagens/cod.jpg",
        desc: "Call of Duty®: Modern Warfare® II"
    },
    {
        img: "./imagens/efootball.jpg",
        desc: "eFootball™ 2023"
    },
];

const newGames = [
    {
        img: "./imagens/FF.jpg",
        desc: "FINAL FANTASY XVI"
    },
    {
        img: "./imagens/diablo.jpg",
        desc: "Diablo® IV"
    },
    {
        img: "./imagens/street-fighter.jpg",
        desc: "Street Fighter 6"
    },
    {
        img: "./imagens/formula1.jpg",
        desc: "F1® 23"
    },
    {
        img: "./imagens/nba.jpg",
        desc: "NBA 2K23"
    },
    {
        img: "./imagens/crash.jpg",
        desc: "Crash Team Rumble™"
    },
    {
        img: "./imagens/boss.jpg",
        desc: "Crime Boss: Rockay City"
    },
    {
        img: "./imagens/layers.jpg",
        desc: "LAYERS OF FEAR"
    },
    {
        img: "./imagens/hubris.jpg",
        desc: "Hubris"
    },
    {
        img: "./imagens/motogp.jpg",
        desc: "MotoGP™23 PS4 & PS5"
    },
];

const preVenda = [
    {
        img: "./imagens/spider-2.jpg",
        desc: "Marvel's Spider-Man 2 Edição Digital Deluxe",
        preco: "R$399,50"
    },
    {
        img: "./imagens/spider-2-normal.jpg",
        desc: "Marvel's Spider-Man 2",
        preco: "R$349,90"
    },
    {
        img: "./imagens/mk1-premium.jpg",
        desc: "Edição Premium Mortal Kombat 1",
        preco: "R$469,90"
    },
    {
        img: "./imagens/mk1.jpg",
        desc: "Mortal Kombat 1",
        preco: "R$299,90"
    },
    {
        img: "./imagens/cyberpunk.jpg",
        desc: "Cyberpunk 2077: Phantom Liberty",
        preco: "R$159,90"
    },
    {
        img: "./imagens/acmirage.jpg",
        desc: "Assassin's Creed® Mirage",
        preco: "R$239,90"
    },
    {
        img: "./imagens/acmirage-deluxe.jpg",
        desc: "Assassin's Creed® Mirage edição Deluxe",
        preco: "R$299,90"
    },
    {
        img: "./imagens/metalgear.jpg",
        desc: "METAL GEAR SOLID: MASTER COLLECTION Vol.1",
        preco: "R$299,90"
    },
    {
        img: "./imagens/thecrew.jpg",
        desc: "The Crew™ Motorfest Standard Edition",
        preco: "R$299,90"
    },
]

const media = document.querySelector(".media");
const mediaPlus = document.getElementById('ps-plus');
const img = document.createElement('img');
const img2 = document.createElement('img');
img.setAttribute('src', 'imagens/teste2.jpeg');
img2.setAttribute('src', 'imagens/ps-plus.jpeg');
img.setAttribute('class', 'psw-fade-in-out psw-center psw-fill');
img2.setAttribute('class', 'psw-fade-in-out psw-center psw-fill');
media.appendChild(img);
mediaPlus.appendChild(img2);

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

window.addEventListener('DOMContentLoaded', function(){
    let enter = ''
    gridObject(grid);
    itemsObject(itens);
    ngObject(newGames);
    vendaObject(preVenda);
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

const ul = document.querySelector("#medium-list-ul-1");
const ul2 = document.querySelector("#medium-list-ul-2");
const ul3 = document.querySelector("#medium-list-ul-3");

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
    ul.innerHTML = li;
}

function ngObject(i){
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
    ul2.innerHTML = li;
}

function vendaObject(i){
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
                                <span>${item.preco}</span>
                            </section>
                            </div>
                        </a>
                    </div>
                </li>`
    });
    li = li.join(" ");
    ul3.innerHTML = li;
}

// const final = ul.getBoundingClientRect().width;
const nextBtn1 = document.querySelector("#next-btn-1");
const prevBtn1 = document.querySelector("#prev-btn-1");
const nextBtn2 = document.querySelector("#next-btn-2");
const prevBtn2 = document.querySelector("#prev-btn-2");
const nextBtn3 = document.querySelector("#next-btn-3");
const prevBtn3 = document.querySelector("#prev-btn-3");

nextBtn1.addEventListener("click", toLeft);
prevBtn1.addEventListener("click", toRight);
nextBtn2.addEventListener("click", toLeft2);
prevBtn2.addEventListener("click", toRight2);
nextBtn3.addEventListener("click", toLeft3);
prevBtn3.addEventListener("click", toRight3);

function toLeft(){
    ul.style.left = "-81%"
    nextBtn1.style.display = 'none'
    prevBtn1.style.display = 'block'
};

function toRight(){
    ul.style.left = "0%"
    nextBtn1.style.display = 'block'
    prevBtn1.style.display = 'none'
};

function toLeft2(){
    ul2.style.left = "-81%"
    nextBtn2.style.display = 'none'
    prevBtn2.style.display = 'block'
};

function toRight2(){
    ul2.style.left = "0%"
    nextBtn2.style.display = 'block'
    prevBtn2.style.display = 'none'
};

function toLeft3(){
    ul3.style.left = "-81%"
    nextBtn3.style.display = 'none'
    prevBtn3.style.display = 'block'
};

function toRight3(){
    ul3.style.left = "0%"
    nextBtn3.style.display = 'block'
    prevBtn3.style.display = 'none'
};