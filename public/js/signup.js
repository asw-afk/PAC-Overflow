const form_selector = document.querySelector(".signup-form");
const singup_result = document.querySelector("#signup-result");

const handelRegistration = async (e)=>{
    e.preventDefault();
const name = document.getElementById("name-signup").value.trim();
const email= document.getElementById("email-signup").value.trim();
const password = document.getElementById("password-signup").value.trim();
console.log(name);
console.log(email);
console.log(password);
if(name && email && password){
console.log("I have passed the condition");
    const res = await fetch('/api/users/signup',{
        method:"POST",
        body: JSON.stringify({name,email,password}),
        headers: {"Content-Type":"application/json"}, 
    });

    
    if (res.ok){
      
        const data = await res.json();
        const message = data.message;

     singup_result.textContent = message;
     singup_result.setAttribute("class", 'success');
        window.location.href = "/api/users/login"
    }else{
        console.error("Failed to signup:", res.status)
    }

}

}

form_selector.addEventListener("submit",handelRegistration);
