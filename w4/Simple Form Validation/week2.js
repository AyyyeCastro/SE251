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
      infoElement.innerText = FName.value;
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

      infoElement.innerText += ' ' + LName.value;
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

      infoElement.innerText += ' ' + Email.value;
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

      infoElement.innerText += ' ' + Phone.value;
   }

   // If feedback contains ANY error log, prevent the user from submitting.
   if(feedback.length > 0)  
   {
      console.log('A field(s) was left empty.')
      e.preventDefault()
      // show user in confirmation div.
      LogElement.innerText = feedback.join(', ');
   }
   else
   {
      //hide the form div, and my log p tag.
      Form.classList.add('hide')
      warning.classList.add('hide')
   }
})

