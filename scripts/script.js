const img = document.getElementById("image")

const button = document.querySelector(".clickMenu")
const nav = document.querySelector(".nav")

button.addEventListener("click", function(){
    nav.classList.toggle("see")
})


const count =[
    one = `img/landing1.jpeg`,
    two = `img/landing2.jpg`,
    three = `img/landing3.jpg`,
]

let num = 0

function goToLeft(){

    if(num <= 2 && num !=0){
        num = --num  
    }else if(num == 0){
        num = 2
    }

    img.style.backgroundImage = `url(${count[num]})`
}

function goToRight(){
    
    if(num >= 0 && num != 2){
        num = ++num
    }else if(num == 2){
        num = 0;
    }

    img.style.backgroundImage = `url(${count[num]})`
}

setInterval(
    function(){
        goToLeft()
    },10000
)



