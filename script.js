const container = document.querySelector(".container"); //get the container from the HTML
pwShowHide = document.querySelectorAll(".showHide") //get the eyeIcon from the HTML
pwFields = document.querySelectorAll(".password") //get the password class from the HTML
signUp = document.querySelector(".signup-link") //get the signup link from the HTML
login = document.querySelector(".login-link") //get the register from the HTML
newArray = [];  //empty array to store values of the register form 


  // showingpassword
  pwShowHide.forEach(eyeIcon => { //selecting each eyeIcon
    eyeIcon.addEventListener("click", () => { //adding event listener to the eyeicon 
      pwFields.forEach((pwField) => {          //selecting each pwfield inside the pwFields
        if (pwField.type === "password") {      //condition to change the password to text 
          pwField.type = "text";                //show your password text
          pwShowHide.forEach((key) => {          //to get the class key with the eye-slash
            key.classList.replace("uil-eye-slash", "uil-eye");  //changing the eye-slash with eye
          });
        } else {
          pwField.type = "password";       // shows the just the password woth the text being visible 
          pwShowHide.forEach((key) => {    
            key.classList.replace("uil-eye", "uil-eye-slash");
          });
        }
      });
    });
  });

signUp.addEventListener("click", () => { //listens for the click on signup
  container.classList.add("active");     //adds a class active 
});
login.addEventListener("click", () => {  //listens for the click on login
  container.classList.remove("active");   //remove the active class created
});


// registration js

var passw = /^(?=.{8,25}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;   //a regular expression that holds a check for letters numbers and special characters

regEmail = document.getElementById("regemail");  //assigning an id to a variable
regPassword = document.getElementById("regpassword"); //assigning an id to a variable
conPassword = document.getElementById("conpassword");//assigning an id to a variable
name_error = document.getElementById("name_error");  //assigning an id to a variable
let regex = /\d/; //regular exprecion to check for numbers
function validateit(e) {   //a function to validate and the e denotes an event
  if (e.id == "name" && e.value != "") {  //condition to check for the id and its value
    if (regex.test(e.value)) {             //a condition to text if numbes are in the name value
      document.getElementById(e.id + "_error").innerHTML =
        "Name cannot contain numbers";  //the error that is shown
      document.getElementById(e.id + "_error").style.display = "block";  //for the error to be diplayed
    } else {
      document.getElementById(e.id + "_error").style.display = "none"; //for the error to be removed
    }
  }
  if (e.id == "regpassword" && e.value != "") {           //condition to check for the id and its value
    if (!e.value.match(passw)) {          //checks if the password as numbers special characters and letters
      document.getElementById(e.id + "_error").innerHTML =
        "Password must be min 8 characters and must contain lettes, numbers and special characters"; //error to be displayed
      document.getElementById(e.id + "_error").style.display = "block";   //allows error to be displayed
    } else {                                                             //if the condition not #GodIsLove1 is met we do the next line
      document.getElementById(e.id + "_error").style.display = "none";    //condition to be done if the condition is not met
    }
  }
  if (e.id == "conpassword" && e.value != "") {
    pass = document.getElementById("regpassword").value;
    if (!pass) {
      document.getElementById("regpassword_error").innerHTML =
        "Password field cannot be null";
      document.getElementById("regpassword_error").style.display = "block";
    } else if (pass != e.value) {
      document.getElementById(e.id + "_error").innerHTML =
        "Password fields must match";
      document.getElementById(e.id + "_error").style.display = "block";
    } else {
      document.getElementById(e.id + "_error").style.display = "none";
    }
  }
}



function Register() {
  //a function to be called 
  var Name = document.getElementById("name").value; //assigning the value gotten from the resiter from
  var Email = document.getElementById("regemail").value; //assigning the value gotten from the resiter from
  var Password = document.getElementById("regpassword").value; //assigning the value gotten from the resiter from

  if (Name && Email && Password) { //condition to check if the name email and password are filled #GodIsLove1
    newArray.push(Name, Email, Password);   //pushung the values gotten to the array created
    container.classList.remove("active");   //remove the page and transition to the login page
  }
}

// localStorage.setItem('Person', newArray)
// var person = localStorage.getItem('Person')

checkEm = document.getElementById("check_error");
checkPw = document.getElementById("pw_check");
// function check(){
//   if(checkEm.value != newArray[1]){
//     checkEm.innerHTML = "Email Not Found"
//     checkEm.style.display = "block";
    
//   }else{
//       checkEm.style.display = "none";
//     }
//     if(checkPw != newArray[2]){
//       checkPw.innerHTML = "Password not found"
//       checkPw.style.display = "block";
//     } else{
//       checkPw.style.display = "none"
//     }
//   }
//  localStorage.setItem("Person", newArray);
//  var person = localStorage.getItem("Person");
 var Action = document.getElementById("form");
function checkFunction(){
  // alert(newArray)
  emailName = document.getElementById("email-name").value; //assigning the value gotten from the email
  pwCheck = document.getElementById("_password").value; //assigning the value gotten from the password
  Action.addEventListener("submit", function (e){
    e.preventDefault();
    if (emailName === newArray[1] && pwCheck === newArray[2]) {    //to check if they match
      alert("You are logged in," + newArray[0]); //what shows if they actually match
    }else{
      alert("Detials Not Found");
  }
  });
} 




//Get form  #GodIsLove1
//Form.submit(event)