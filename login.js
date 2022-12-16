let loginBtn=document.querySelector("div>button:nth-child(2)");
let signUpBtn=document.querySelector("div>button:nth-child(1)");

let signIn=document.querySelector("#signIn")
let signUp=document.querySelector("#signUp")

signIn.style.display="none"

loginBtn.addEventListener("click",function(){
    signUp.style.display="none"
    signIn.style.display="block"
})
signUpBtn.addEventListener("click",function(){
    signUp.style.display="block"
    signIn.style.display="none"
})

signUp.addEventListener('submit',function(event){
 event.preventDefault()
 let username=signUp.name.value;
 let user=signUp.email.value;
 let password=signUp.password.value;

 if(password!=signUp.passwordchk.value){
    alert("Kindly enter the correct password")
 }
 else{
    localStorage.setItem("user",user)
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
    alert("Sign Up successful")
    signUp.reset()
 }
})
signIn.addEventListener("submit",function(event){
event.preventDefault()
let user=signIn.email1.value;
let password=signIn.password1.value;

let storedUser=localStorage.getItem('user');
let storedPassword=localStorage.getItem('password')

if(user!=storedUser){
  alert("user not found")  
}
else{
    if(password!=storedPassword){
        alert("Wrong password")
    }
    else{
        alert("login successful")
        window.location.assign("./Homepage.html")
    }
}
})

