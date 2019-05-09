function add() {
  // read and process user input
  var[first,second] = ['first-number','second-number'].map(x => +document.getElementById(x).value) 
    // pass user input through core logic
           

   if ([first,second].some(x => isNaN(x))){
     alert('one or both of the operands are not numbers');
      return;  
    }  /* write a script to cast & add two numbers */
  /* if either one casts to NaN, 
    assign a friendly message to a variable named 'result' */
  /* otherwise assign the result to a variable named 'result' */
  var result = parseInt(first) + parseInt(second); // place-holder, delete this and start over

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result;
}

function subtract() {
  // read and process user input
  
    // read and process user input
    var[first,second] = ['first-number','second-number'].map(x => +document.getElementById(x).value) 
      // pass user input through core logic
             
  
     if ([first,second].some(x => isNaN(x))){
       alert('one or both of the operands are not numbers');
        return;  
      }  /* write a script to cast & add two numbers */
    /* if either one casts to NaN, 
      assign a friendly message to a variable named 'result' */
    /* otherwise assign the result to a variable named 'result' */
    var result = parseInt(first) - parseInt(second); // place-holder, delete this and start over
  
  var output_field = document.getElementById('result');
  output_field.innerHTML = result; 
}

function multiply() {
  // read and process user input
  var[first,second] = ['first-number','second-number'].map(x => +document.getElementById(x).value) 
      // pass user input through core logic
             
  
     if ([first,second].some(x => isNaN(x))){
       alert('one or both of the operands are not numbers');
        return;  
      }  /* write a script to cast & add two numbers */
    /* if either one casts to NaN, 
      assign a friendly message to a variable named 'result' */
    /* otherwise assign the result to a variable named 'result' */
    var result = parseInt(first) * parseInt(second); // place-holder, delete this and start over
  

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result; 
}

function divide() {
   // read and process user input
   var[first,second] = ['first-number','second-number'].map(x => +document.getElementById(x).value) 
      // pass user input through core logic
             
  
     if ([first,second].some(x => isNaN(x))){
       alert('one or both of the operands are not numbers');
        return;  
      }  /* write a script to cast & add two numbers */
    /* if either one casts to NaN, 
      assign a friendly message to a variable named 'result' */
    /* otherwise assign the result to a variable named 'result' */
    var result = parseInt(first) / parseInt(second); // place-holder, delete this and start over
  
  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result;
}