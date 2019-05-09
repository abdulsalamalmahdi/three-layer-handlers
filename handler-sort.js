function sort_it() {                                      
                                                           
  // read and process user input
  var to_sort = document.getElementById('to-sort').value;        
         
  // pass user input through core logic
 
        /* if ASCII code greater then swap the elements position*/
        
  
  /* write a script to sort a string */
  /* assign the result to a variable named 'sorted' */
  var sorted = to_sort.split('').sort().join(''); // place-holder, delete this and start over

  // report result to user
  var output_field = document.getElementById('sorted');
  output_field.innerHTML = sorted;
}