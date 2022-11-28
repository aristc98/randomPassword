//Assignment code
var generateBtn = document.querySelector("#generate");
var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric= [0,1,2,3,4,5,6,7,8,9];
var specialChar= [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\"","]","^","_","`","{","|","}","~","\\"];
var userPref = [];
var password = [];
// Write password to the #password input
function writePassword() {
    var passLength = window.prompt("How many characters would you like? Must be at least 8 and cannot exceed 128");
    if (passLength<8 || passLength>128) {
      window.alert("Password must be at least 8 characters and must not exceed 128 characters.")
      return;
    };
    var userChoiceOne = window.prompt("Would you like to include lowercase characters? Please say YES or NO.");
    if (userChoiceOne === "YES") {
      userPref= userPref.concat(lowercase);
    };
    var userChoiceTwo = window.prompt("Would you like to include uppercase characters? Please say YES or NO");
    if (userChoiceTwo === "YES") {
      userPref= userPref.concat(uppercase);
    };
    var userChoiceThree = window.prompt("Would you like to include numbers? Please say YES or NO");
    if (userChoiceThree === "YES") {
      userPref= userPref.concat(numeric);
    };
    var userChoiceFour = window.prompt("Would you like to include special characters? Please say YES or NO");
    if (userChoiceFour === "YES") {
      userPref= userPref.concat(specialChar);
    };
    if (userPref.length === 0) {
      window.alert("Password criteria must contain at least one choice. Please select at least one choice.")
      return;
    }
    for (var i= 0; i<passLength; i++) {
      var randomIndex= Math.floor(Math.random() * userPref.length);
      var random = userPref[randomIndex];
      password = password.concat(random)
    }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  console.log(password);
  console.log(userPref); 
  console.log(writePassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);