//DOM
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signInForm = document.querySelector("#sign-in-form");

// Handle Sign-in
let accountList = JSON.parse(localStorage.getItem("user-list")) || []
console.log(accountList);


function handleSignIn(event) {
  event.preventDefault()

  let email = emailInput.value;
  let password = passwordInput.value;

  if (!email || !password) {
    alert("Please fill all field!");

    return;
  }

  let accountList = JSON.parse(localStorage.getItem("user-list")) || [];

  // 
  for (let i = 0; i < accountList.length; i++) {
    let currentAccount = accountList[i];

    if (email == currentAccount.email && password == currentAccount.password) {
      alert("Successfully sign in!")

      let userFound = accountList.find((account) => {
        return account.email = email
      });

      localStorage.setItem("account-login", JSON.stringify(userFound.fullname))

      window.location.pathname = "/index.html";

      return;
    }
  }
  alert("Email or Passowrd is not correct!")
}




// Add event listener for sign-in form 
signInForm.addEventListener("submit", function (event) {
  handleSignIn(event)

})

