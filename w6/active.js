const FName = document.getElementById('fName');
const LName = document.getElementById('lName');
const Email = document.getElementById('email');
const emailConfirm = document.getElementById('email-confirm');
const Form = document.getElementById('form');
var input = document.querySelectorAll('input')


Form.addEventListener('submit', (e)=>
{ 
   //Feedback log to store the messages
   if (Email.value != emailConfirm.value)
   {
      console.log('Emails does not match confirmation, submission denied.')
      email.setCustomValidity("The email addresses do not match.");
      email.reportValidity();
      e.preventDefault()
   }
   else
   {
      console.log('All criteria met, form submitted.')
      email.setCustomValidity("");
   }
})

// make em upper case, only 4 values so can just do this w/o a function
FName.value = FName.value.toUpperCase()
LName.value = LName.value.toUpperCase()
Email.value = Email.value.toUpperCase()
emailConfirm.value = Email.value.toUpperCase()