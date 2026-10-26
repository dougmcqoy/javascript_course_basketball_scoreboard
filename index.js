let homeScoreBtnOne =document.getElementById("homeAddPlus1")
let homeScoreBtnTwo =document.getElementById("homeAddPlus2")
let homeScoreBtnThree =document.getElementById("homeAddPlus3")
let guestScoreBtnOne =document.getElementById("guestAddPlus1")
let guestScoreBtnTwo =document.getElementById("guestAddPlus2")
let guestScoreBtnThree =document.getElementById("guestAddPlus3")
let homeStoreEl =document.getElementById("homeScore")
let guestStoreEl =document.getElementById("guestScore")
let homeScore = 0
let guestScore = 0



function homeScorePlus1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function homeScorePlus2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function homeScorePlus3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function guestScorePlus1(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function guestScorePlus2(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function guestScorePlus3(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function resetHomeScore(){
    homeScore = 0
    homeStoreEl.textContent = homeScore
}

function resetGuestScore(){
    guestScore = 0
    guestStoreEl.textContent = guestScore
}