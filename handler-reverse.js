function reverse_it() {                                      
                     
  
  var to_reverse = document.getElementById('to-reverse').value;        
                                 
  
     
   
   
  
  var reversed = to_reverse.split('').reverse().join('');; 

  
  var output_field = document.getElementById('reversed');
  output_field.innerHTML = reversed;
};
