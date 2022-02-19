const btn = document.querySelector(".btn")
const inputBox = document.querySelector("#input-box")
const lastMsg = document.querySelector(".msg-dlvd")
const alertParagraph = document.querySelector(".alertParagraph")

//Try to implement if else statements

btn.addEventListener("click", ()=> {
    let message = inputBox.value
    if(message === "") {
        alertParagraph.innerHTML = "Please enter message"
        setTimeout(()=>{
            alertParagraph.innerHTML = ""
        },2000)
} else {
    lastMsg.innerHTML = message
    inputBox.value = ""
}
})

inputBox.addEventListener("keyup",(e)=> {
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById("mybtn").click()
    }
    if(inputBox.value === "") {
        alertParagraph.innerHTML = "Please enter message"
}
})
