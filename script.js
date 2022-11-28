//My variables that will be used to make up the password
var generateBtn = document.querySelector("#generate");
var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric= [0,1,2,3,4,5,6,7,8,9];
var specialChar= [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\"","]","^","_","`","{","|","}","~","\\"];
//userPref's array is empty because it will be used to store user choices using concat.
var userPref = [];
// passwords array is empty because it is being used to store a variable "random" which is made up of userPref's arrays, in which the array characters are being randomly selected.
var password = [];
//The passwords were generating with commas after each character, so I used the join method to remove the commas.
password = (password.join(''));
// This is a function that will that will prompt, factor in user input, and use that input to create a password that meets all the chosen criteria.
function writePassword() {
    var passLength = window.prompt("How many characters would you like? Must be at least 8 and cannot exceed 128");
    if (passLength<8 || passLength>128) {
      window.alert("Password must be at least 8 characters and must not exceed 128 characters.")
      return;
    };
    var userChoiceOne = window.prompt("Would you like to include lowercase characters? Please say YES or NO.");
    //I used the toUpperCase method to validate a users input reguardless of whether or not they typed it lowercase or uppercase.
    userChoiceOne = userChoiceOne.toUpperCase();
    if (userChoiceOne === "YES") {
      userPref= userPref.concat(lowercase);
    };
    var userChoiceTwo = window.prompt("Would you like to include uppercase characters? Please say YES or NO");
    userChoiceTwo = userChoiceTwo.toUpperCase();
    if (userChoiceTwo === "YES") {
      userPref= userPref.concat(uppercase);
    };
    var userChoiceThree = window.prompt("Would you like to include numbers? Please say YES or NO");
    userChoiceThree = userChoiceThree.toUpperCase();
    if (userChoiceThree === "YES") {
      userPref= userPref.concat(numeric);
    };
    var userChoiceFour = window.prompt("Would you like to include special characters? Please say YES or NO");
    userChoiceFour = userChoiceFour.toUpperCase();
    if (userChoiceFour === "YES") {
      userPref= userPref.concat(specialChar);
    };
    if (userPref.length === 0) {
      window.alert("Password criteria must contain at least one character type.")
      return;
    }
    //This for loop is made to randomly select characters from userPrefs array and store those random characters in passwords array.
    for (var i= 0; i<passLength; i++) {
      var randomIndex= Math.floor(Math.random() * userPref.length);
      var random = userPref[randomIndex];
      password = password.concat(random)
    }

  var passwordText = document.querySelector("#password");

  //This is taking the HTML password element and displaying the generated password instead of the placeholder.
  passwordText.value = password;

  //console.log(password);
  //console.log(userPref); 
  //console.log(writePassword);
}

// In the event that we click the generate button, our writePassword function will execute. 
generateBtn.addEventListener("click", writePassword);