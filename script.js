const form = document.querySelector(".form")
const user = document.getElementById("user")
const password = document.getElementById("pass")
const email = document.getElementById("email")
const cpassword = document.getElementById("cpass")
const error = document.querySelector(".error")
console.log(form)
console.log(user,password,email,error);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    formValiadtion()
})
function formValiadtion(){
    const userval = user.value.trim()
    const emailval = email.value.trim()
    const passval = password.value.trim()
    const cpassval = cpassword.value.trim()

    if(userval === ""){
        setError(user,"username required")
    }
    else{
        setSuccess(user)
    }
    if(emailval === ""){
        setError(email,"emailrequired")
    }
    else if(!validateEmail(emailval)){
        setError(email,"email is not validated")
    }
    else{
        setSuccess(email)
    }
    if(passval.length<8){
        setError(password,"password required atleast 8 character")
    }
    else{
        setSuccess(password)
    }
    if(cpassval === ""){
        setError(cpassword,"password is incorrect")
    }
    else if(passval === cpassval){
        setSuccess(email)
    }
    else{
        setError(cpassword,"password is incorrect")
    }
}
function setError(element,message){
    const inputGroup = element.parentElement
    inputGroup.querySelector(".error").innerHTML = message
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
function setSuccess(element){
    const inputGroup = element.parentElement    
    inputGroup.querySelector(".error").innerHTML = ""
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
}
function validateEmail(email){
    return String(email)
    .toLowerCase()
    .match("\s*\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*")
}