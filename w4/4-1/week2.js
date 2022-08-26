// GATHER AND STORE.
// input fields
const FName = document.getElementById('fName');
const LName = document.getElementById('lName');
const Email = document.getElementById('email');
const Phone = document.getElementById('phone');
const Form = document.getElementById('form');
// feedback fields
const warning = document.getElementById('justLettingYouKnow')
const LogElement = document.getElementById('logs');
const ValElement = document.getElementById('validate');
const infoElement = document.getElementById('info');
const FnError = document.getElementById('fn-error');
const LnError = document.getElementById('ln-error');
const EmError = document.getElementById('email-error');
const PnError = document.getElementById('phone-error');
const Labels = document.getElementsByClassName('labels');
// Label fields
const FNameLbl = document.getElementById('fNameLbl');
const LNameLbl = document.getElementById('lNameLbl');
const EmailLbl = document.getElementById('emailLbl');
const PnLbl = document.getElementById('pnLbl');

// Fill in default data to the form.
fName.value='Andrew';
lName.value='Castro';
email.value='nonya@business.com';
phone.value='4012223333';


////--------- --------- ALL DAH WORK --------- ---------////

// Listen for events on the submit click
Form.addEventListener('submit', (e)=>
{ 
   // I did some extra work here on purpose (with the feedback), for practice... 
   //  It's actually the same exact validation style we do in C# w/ ASP Net/Core. 

   //Feedback log to store the messages
   let feedback = []
   
   // if the input is empty or null (repeat for LName, Email, & Phone)
   if (FName.value ==='' || FName.value == null)
   {
      //log error into feedback
      feedback.push('First name cannot be left empty')
      //Display an asterisk where error occurred.
      FnError.innerText = '*';
      // give it the lblError class that changes label color to red.
      FNameLbl.classList.add('lblError');
   }
   else
   {
      // if the error gets fixed =>
      // remove asterisk
      FnError.innerText = '';
      // remove lblError class.
      FNameLbl.classList.remove('lblError');

      // Display the submitted value.
      // infoElement.innerText = FName.value;   /** Removed for the Regex assignment that requires a different output method. */
   }

   if (LName.value ==='' || LName.value == null)
   {
      feedback.push('Last name cannot be left empty')
      LnError.innerText = '*';
      LNameLbl.classList.add('lblError');
   }
   else
   {
      LnError.innerText = '';
      LNameLbl.classList.remove('lblError');

      // infoElement.innerText += ' ' + LName.value;
   }

   if (Email.value ==='' || Email.value == null)
   {
      feedback.push('The email cannot be left empty')
      EmError.innerText = '*';
      EmailLbl.classList.add('lblError');
   }
   else
   {
      EmError.innerText = '';
      EmailLbl.classList.remove('lblError');

      // infoElement.innerText += ' ' + Email.value;
   }

   if (Phone.value ==='' || Phone.value == null)
   {
      feedback.push('Phone number cannot be left empty')
      PnError.innerText = '*';
      PnLbl.classList.add('lblError');
   }
   else
   {
      PnError.innerText = '';
      PnLbl.classList.remove('lblError');

      // infoElement.innerText += ' ' + Phone.value;
   }

   // If feedback contains ANY error log, prevent the user from submitting.
   if(feedback.length > 0)  
   {
      console.log('A field(s) was left empty.')
      e.preventDefault()
      // show user in confirmation div.
      // LogElement.innerText = feedback.join(', ');
   }
   else
   {
      //hide the form div, and my log p tag.
      Form.classList.add('hide')
      warning.classList.add('hide')
   }


   // Call Validation functions
   validateFName();
   validateLName();
   validateEmail();
   validatePhone();

   // Declare an array to store ALL the form data.
   var peopleArray = [];
   // push it in the array.
   peopleArray.push({ First: fName.value, Last: lName.value, Email: email.value ,Phone: phone.value});

  // -> Now for the loop. Remember that all of this will only act upon being submitted and meeting the criteria above.
  // Nothing can be sent to the form or array without the submit button working. Submit button won't work without the criteria being met first.

  // declare variable
	var str = ``
	for(let i =0; i<peopleArray.length; i++)
	{
		// for each VALUE inside the people array -> 
		for(value in peopleArray[i])
		{

			str += `<p>`
			str += `${value}: ${peopleArray[i][value]}`
			str += `</p>`
		}
		//close the div
		str +=`</div>`
	}
   // send it to the log div.
	logs.innerHTML = str;
})



////--------- --------- FUNCTION LIBRARY --------- ---------////

// First name validation
// declare function
function validateFName(){
   // first name regex 
   var regName = /[-'a-zA-Z]$/;
   // get fName element 
   var name = document.getElementById('fName').value;
   // If the regex finds an error
   if(!regName.test(name)){
      // alert them
       alert('Please fill in or do not enter special characters in the first name, Jay.');
       document.getElementById('fName').focus();
       return false;
       
   }else{
       // do nothing if right.
       return true;
   }
}

// Last name validation
function validateLName(){
   var regName = /[-'a-zA-Z]$/;
   var name2 = document.getElementById('lName').value;
   if(!regName.test(name2)){
       alert('Please fill in or do not enter special characters in the last name, Jay.');
       document.getElementById('lName').focus();
       return false;
   }else{
       //
       return true;
   }
}

// Email validation
function validateEmail(){
   var regName = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   var Email = document.getElementById('email').value;
   if(!regName.test(Email)){
       alert('Your email was inputted incorrectly...');
       document.getElementById('email').focus();
       return false;
   }else{
       //
       return true;
   }
}

// Phone validation
function validatePhone(){
   var regName = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
   var Phone = document.getElementById('phone').value;
   if(!regName.test(Phone)){
       alert('Your Phone number can only contain NUMBERS!!!! 😡');
       document.getElementById('phone').focus();
       return false;
   }else{
       //
       return true;
   }
}


