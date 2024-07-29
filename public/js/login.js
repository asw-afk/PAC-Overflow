
const loginFormHandler = async (event) => {
  event.preventDefault();

  //collect values from the login form
  const login_result = document.querySelector("#login-result");
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
   console.log(email);
   console.log(password);

  if (email && password) {
    console.log("I have passed the condition");
    //send POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
    console.log(data.message);
    console.log(response.ok);

    if (response.ok) {
      //If successful
      console.log(data);
      document.location.replace("/");
      console.log();
    } else {
    
      const message = data.message;

   login_result.textContent = message;
   login_result.setAttribute("class", 'danger');

    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
