var local = document.querySelector(".connect1")
var local2 = document.querySelector(".connect2")
local.addEventListener("click",function(){
    window.location.href="https://x.com/ayushhaldankar1?t=oUBxkNGP4IsZO6mtw35KqQ&s=09"
    })
      
        
        
local2.addEventListener("click",function(){
        window.location.href="https://www.linkedin.com/in/ayush-haldankar-014613324/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQZmUQHyyQfWnmnajIlVvJA%3D%3D"
        })


let bttn = document.querySelector(".mode")
let x = "dark";

let sentence = document.querySelector(".detailsPara")
// let y = "changeParaDark";

bttn.addEventListener("click",() =>{
    if(x === "dark"){
        x = "light";
        document.querySelector("body").style.backgroundColor="white"
        sentence.style.color="black"
    }else{
        x = "dark"
        document.querySelector("body").style.backgroundColor="black";
        sentence.style.color="white"
    }
})