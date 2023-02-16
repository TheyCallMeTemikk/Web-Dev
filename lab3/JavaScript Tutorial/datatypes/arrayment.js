// // TASK 1:
 function camelize(str) {
     return str
       .split('-')
       .map(

         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
       )
       .join('');
 }
// // TASK 2:
 function filterRange(arr, a, b) {

     return arr.filter(item => (a <= item && item <= b));
 }

   let arr = [5, 3, 8, 1];

   let filtered = filterRange(arr, 1, 4);

   alert( filtered );

 alert(arr);
// TASK 3:
 function filterRangeInPlace(arr, a, b) {
     for (let i = 0; i < arr.length; i++) {
       let val = arr[i];

      if (val < a || val > b) {
         arr.splice(i, 1);
         i--;
       }
     }
   }
   let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4);
 alert(arr);
