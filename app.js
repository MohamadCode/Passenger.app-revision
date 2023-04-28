let decEl = document.getElementById("number-el")
let reachEl = document.getElementById("reach-el")
let decrease = 100


function startbtn() {
    decrease -= 1
    decEl.textContent = decrease
}

function reachedbtn() {
 let save = decrease + " - "   
reachEl.textContent += save
decEl.textContent = 100
decrease = 100 

}

