// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//Checks userinput and validate password criteria and returns a random secure password for user
function generatePassword(){

var numbers = "0123456789";
var lowercasechars = "abcdefghijklmnopqrstuvwxyz";
var uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var signchars = "!#$%&'()*+,-./:;<=>?@[^_`]{|}~\ ";
var chars = '';
var passwd = '';

var passwordlength = prompt("Please enter the length of your password \n *************Password Length  Criteria************ \n Should contain atleast 8 characters and maximum 128 characters");

//Validation for password length

if (passwordlength === null){}//When user clicks cancel:Do nothing

else if (passwordlength == '' || parseInt(passwordlength) < 8 || parseInt(passwordlength) > 128){
  alert("Invalid Password Length \nPlease follow password length criteria");
}


//Allow users to include character types in their password
else{

  var lowercaseanswer = confirm("Do you want lowercase characters in your password?");
  if (lowercaseanswer ){
    chars = chars + lowercasechars;
  }
  
  var uppercaseanswer =  confirm("Do you want uppercase characters in your password?");
  if (uppercaseanswer ){
    chars = chars + uppercasechars;
  }
 
  var numberanswer =  confirm("Do you want numbers in your password?");
  if (numberanswer ){
    chars = chars + numbers;
  }

  var signsanswer = confirm("Do you want special characters in your password?");
  if (signsanswer){
    chars = chars + signchars;
  }

  if (chars != ''){
  
  //Generates random password with given passwordlength
  for (var i=0; i<passwordlength; i++){
    var randomnum = Math.floor(Math.random() * chars.length);
    passwd += chars.substring(randomnum,randomnum+1);
    
  }
  }
  else{
    alert("************** Invalid Charater types selection ***************** \nPlease select atleat one character types");
  }

  }

  return passwd;
  }



