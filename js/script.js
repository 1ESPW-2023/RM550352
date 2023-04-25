// // Recuperando elementos do HTML com querySelector
// const liElement = document.querySelector("li");
// console.log(liElements)

// // Recuperando elementos do HTML com querySelectorAll
// const liElement = document.querySelectorAll();

// //convertendo node list em array com spread
// const arrayElements = [...liElements];

// console.log(arrayElements);

//convertendo node list em array com spread
let tmp = 0;


function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

   tmp = setTimeout(mudaCor, 1000);

}