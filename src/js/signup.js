//Get DOM by id
const fullnameInput = document.querySelector("#fullname")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const rePasswordInput = document.querySelector("#re-password")
const signUpForm = document.querySelector("#sign-up-form")

let accountList = JSON.parse(localStorage.getItem("user-list")) || [];
// Sign-up Handle
function handleSignUp() {
    event.preventDefault()
    //User input data
    let fullname = fullnameInput.value
    let email = emailInput.value
    let password = passwordInput.value
    let rePassword = rePasswordInput.value

    if (!fullname || !email || !password || !rePassword) {
        alert("Please fill all field!")
        return;
    }

    //Check
    if (password != rePassword) {
        alert("Passwords do not match");

        return;
    }
    let accountData = {
        fullname,
        email,
        password,
        rePassword,
    }
    //Add accountdata to accountlist
    accountList.push(accountData)

    //save at localstorage
    localStorage.setItem("user-list", JSON.stringify(accountList))
}


signUpForm.addEventListener("submit", function () {
    // sign up
    handleSignUp()
})


