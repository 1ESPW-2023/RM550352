// // Recuperando elementos do HTML com querySelector
// const liElement = document.querySelector("li");
// console.log(liElements)

// // Recuperando elementos do HTML com querySelectorAll
// const liElement = document.querySelectorAll();

// //convertendo node list em array com spread
// const arrayElements = [...liElements];

// console.log(arrayElements);

//convertendo node list em array com spread
const arrayElements = [...document.querySelectorAll("li")];

arrayElements.map((el,key)=>{

    if (el.textContent.indexOf("1")) {
        el.textContent = `[ ${el.textContent} ]`;
    }
});
