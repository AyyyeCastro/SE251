function randomNumber (min, max) {

   return Math.floor (Math.random() * (max - min + 1)) + min;

}

txtBox.value=5;
const Form = document.getElementById('form')

Form.addEventListener('submit', (e)=>
{
   const array1 =txtBox.value;

   let arr = new Array(m); // create an empty array of length n
   for (var i = 0; i < m; i++) {
   arr[i] = new Array(n); // make each element an array
   }
})