let booksBtn = document.getElementById('podContein');
let dvd = document.getElementById('podContein2');
let check = true;
booksBtn.addEventListener('click',() => {
    let domestic = document.getElementById('ourBlock');
    let foreign = document.getElementById('forenBlock');
    let detectives = document.getElementById('detectivesBlock');
    let fiction = document.getElementById('scienFictBlock');
    let hictory = document.getElementById('historicBlock');
    let pl = document.getElementById('plus1');
    let pl3 = document.getElementById('plus3');
    if(check == true){
        pl.src = './img/bx-minus.svg'
        pl3.src = './img/bx-plus.svg'
        domestic.style.display = 'flex'
        foreign.style.display = 'flex'
        check = false;
        
    }else if(check == false){
        pl.src = './img/bx-plus.svg'
        pl3.src = './img/bx-minus.svg'
        domestic.style.display = 'none'
        foreign.style.display = 'none'
        detectives.style.display = 'none';
        fiction.style.display = 'none';
        hictory.style.display = 'none';
        check = true;
        check3 = true;
    }
});
let check2 = true;
dvd.addEventListener('click', () => {
    let domestic = document.getElementById('ourBlock2');
    let foreign = document.getElementById('forenBlock2');
    let pl2 = document.getElementById('plus4');
    let detectives = document.getElementById('detectivesBlock2');
    let fiction = document.getElementById('scienFictBlock2');
    let hictory = document.getElementById('historicBlock2');
    let pl5 = document.getElementById('plus5');
    if(check2 == true){
        pl2.src = './img/bx-minus.svg';
        pl5.src = './img/bx-plus.svg'
        domestic.style.display = 'flex'
        foreign.style.display = 'flex'
        check2 = false;
    }else if(check2 == false){
        pl2.src = './img/bx-plus.svg';
        pl5.src = './img/bx-minus.svg'
        domestic.style.display = 'none'
        foreign.style.display = 'none'
        detectives.style.display = 'none';
        fiction.style.display = 'none';
        hictory.style.display = 'none';
        check2 = true;
        check3 = true;
    }
})

let check3 = true;
let foreign1 = document.getElementById('forenBlock');
foreign1.addEventListener('click', () => {
    let detectives = document.getElementById('detectivesBlock');
    let fiction = document.getElementById('scienFictBlock');
    let hictory = document.getElementById('historicBlock');
    let pl3 = document.getElementById('plus3');
    if(check3 == true){
        pl3.src = './img/bx-minus.svg';
        detectives.style.display = 'flex';
        fiction.style.display = 'flex';
        hictory.style.display = 'flex';
        check3 = false;
    }else{
        pl3.src = './img/bx-plus.svg';
        detectives.style.display = 'none';
        fiction.style.display = 'none';
        hictory.style.display = 'none';
        check3 = true
    }
})

let check4 = true;
let our2 = document.getElementById('ourBlock2');
our2.addEventListener('click', () => {
    let detectives = document.getElementById('detectivesBlock2');
    let fiction = document.getElementById('scienFictBlock2');
    let hictory = document.getElementById('historicBlock2');
    let pl5 = document.getElementById('plus5');
    if(check3 == true){
        pl5.src = './img/bx-minus.svg';
        detectives.style.display = 'flex';
        fiction.style.display = 'flex';
        hictory.style.display = 'flex';
        check3 = false;
    }else{
        pl5.src = './img/bx-plus.svg';
        detectives.style.display = 'none';
        fiction.style.display = 'none';
        hictory.style.display = 'none';
        check3 = true
    }
})