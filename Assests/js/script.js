// selects the element with id generate and assign it to variable 
var generateBtn = document.querySelector("#generate");


// Create an eventlistener for generate password button to assigns function writepassword when button is clicked
generateBtn.addEventListener("click", writePassword);


// This function invokes another function call generatePassword and pastes return values at password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function to shuffle all the character types in char_shuffle inorder to increase randomness/probability of selection of all character types
function shufflechars(Char_shuffle){
  
Char_shuffle = Char_shuffle.split('');
var n = Char_shuffle.length;
for (var i = n-1; i>0; i--)
{
  var j = Math.floor(Math.random() * (i+1));
  var tmp = Char_shuffle[i];
  Char_shuffle[i] = Char_shuffle[j];
  Char_shuffle[j] = tmp;
}

return Char_shuffle.join("");

}

//Checks userinput and validate password criteria and returns a random secure password for user
function generatePassword(){

var numbers = "0123456789";
var lowercasechars = "abcdefghijklmnopqrstuvwxyz";
var uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var signchars = "!#$%&'()*+,-.\/:;<=>?@[^_`]{|}~";
var chars = '';
var passwd = '';

var passwordlength = prompt("Please enter the length of your password \n *************Password Length  Criteria************ \n A passwor must contain atleast 8 character or 128 at maximun \n Pasword length must be equal to or inbetween 8 and 128");

//Validation for password length

if (passwordlength === null){}//When user clicks cancel:Do nothing

// Check whether the input for passwordlength is a number and that falls inside a password criteria
// Validation for any spacekey,blank or not a number 
else if (isNaN(parseInt(passwordlength)) || isNaN(passwordlength) || parseInt(passwordlength) < 8 || parseInt(passwordlength) > 128){
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
  //Calls function shufflechars to shuffle all the characters inside variable chars  
  chars = shufflechars(chars);
 

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
