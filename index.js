let booksBtn = document.getElementById('podContein');
let dvdBtn = document.getElementById('podContein2');

let check1 = false;
let ourBlock = document.getElementById('ourBlock');
let forenBlock = document.getElementById('forenBlock');
let plus1 = document.getElementById('plus1');
booksBtn.addEventListener('click', () => {
    if(check1 == false){
        plus1.src = './img/bx-minus.svg';
        ourBlock.style.display = 'flex';
        forenBlock.style.display = 'flex';
        check1 = true;
    }else{
        plus1.src = './img/bx-plus.svg';
        ourBlock.style.display = 'none';
        forenBlock.style.display = 'none';
        plus3.src = './img/bx-plus.svg';
        detectivesBlock.style.display = 'none';
        scienFictBlock.style.display = 'none';
        historicBlock.style.display = 'none';
        check3 = false;
        check1 = false;
    }
});

let check2 = false;
let ourBlock2 = document.getElementById('ourBlock2');
let forenBlock2 = document.getElementById('forenBlock2');
let plus4 = document.getElementById('plus4');
dvdBtn.addEventListener('click', () => {
    if(check2 == false){
        plus4.src = './img/bx-minus.svg';
        ourBlock2.style.display = 'flex';
        forenBlock2.style.display = 'flex';
        check2 = true;
    }else{
        plus5.src = './img/bx-plus.svg';
        detectivesBlock2.style.display = 'none';
        scienFictBlock2.style.display = 'none';
        historicBlock2.style.display = 'none';
        check4 = false;
        plus4.src = './img/bx-plus.svg';
        ourBlock2.style.display = 'none';
        forenBlock2.style.display = 'none';
        check2 = false;
    }
});

let check3 = false;
let detectivesBlock = document.getElementById('detectivesBlock');
let scienFictBlock = document.getElementById('scienFictBlock');
let historicBlock = document.getElementById('historicBlock');
let plus3 = document.getElementById('plus3');
forenBlock.addEventListener('click', () => {
    if(check3 == false){
        plus3.src = './img/bx-minus.svg';
        detectivesBlock.style.display = 'flex';
        scienFictBlock.style.display = 'flex';
        historicBlock.style.display = 'flex';
        check3 = true;
    }else{
        plus3.src = './img/bx-plus.svg';
        detectivesBlock.style.display = 'none';
        scienFictBlock.style.display = 'none';
        historicBlock.style.display = 'none';
        check3 = false;
    }
})

let check4 = false;
let detectivesBlock2 = document.getElementById('detectivesBlock2');
let scienFictBlock2 = document.getElementById('scienFictBlock2');
let historicBlock2 = document.getElementById('historicBlock2');
let plus5 = document.getElementById('plus5');
ourBlock2.addEventListener('click', () => {
    if(check4 == false){
        plus5.src = './img/bx-minus.svg';
        detectivesBlock2.style.display = 'flex';
        scienFictBlock2.style.display = 'flex';
        historicBlock2.style.display = 'flex';
        check4 = true;
    }else{
        plus5.src = './img/bx-plus.svg';
        detectivesBlock2.style.display = 'none';
        scienFictBlock2.style.display = 'none';
        historicBlock2.style.display = 'none';
        check4 = false;
    }
})
