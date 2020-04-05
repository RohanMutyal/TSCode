let ma = new Map();  
  
ma.set('1', 'abhishek');     
ma.set(1, 'www.javatpoint.com');       
ma.set(true, 'bool1');   
ma.set('2', 'ajay');  
  
console.log( "Value1= " +ma.get(1)   );   
console.log("Value2= " + ma.get('1') );   
console.log( "Key is Present= " +ma.has(3) );   
console.log( "Size= " +ma.size );   
console.log( "Delete value= " +ma.delete(1) );   
console.log( "New Size= " +ma.size );  
