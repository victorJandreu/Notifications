const numero = document.getElementById("number")
let unread = document.querySelectorAll(".unread")
const headerBtn = document.getElementById("header-btn")

numero.textContent = unread.length


headerBtn.addEventListener("click", function(){
    if(unread.length > 0){
        for(let i = 0; i < unread.length; i++){

            unread[i].querySelector(".rojo").classList.remove("rojo")
            unread[i].classList.remove("unread")
        }
        unread = document.querySelectorAll(".unread")
        numero.textContent = unread.length
    }
})