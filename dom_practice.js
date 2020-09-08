const world = console.log("Hello Boston")
const kik = document.querySelector("footer")
console.log(kik)

const cat= document.querySelectorAll("ol")
 console.log(cat)


const zeus = document.querySelector("#Boston")
console.log(zeus)

const mim = document.querySelector("h2")
console.log(mim)

document.querySelector('h2').innerHTML = "Welcome to Boston!!!"

const kish = document.getElementsByClassName("fun")
console.log([kish])
//Commented it off to do the bonus question
//let text = document.querySelector(".Kay")
//text.style.color = "green
document.querySelector('.Pub').innerHTML = "Jamboree sandwich at the Jambo-ree"

const magz = document.createElement("img")

magz.setAttribute("src", "https://whdh.com/wp-content/uploads/sites/3/2017/12/boston_skyline_over_the_charles_river.jpg?quality=60&strip=color&w=800")
const fun = document.querySelector(".fun")
fun.appendChild(magz)

//Bonus
let text = document.querySelector("ol")
text.style.color = "green"
/*
const final = document.querySelector(".Tea")
console.log(final)
final.remove()
*/