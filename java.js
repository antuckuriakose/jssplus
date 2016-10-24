

function element(){
    
  
  			var V = document.getElementById("myno").value;
 			 var result;
 			var sum=0;
 			 var result= V.split('+');
 			 for(var i=0;i<result.length;i++)
  
 		 	{
  			sum=sum+parseInt(result[i]);
  			}

   document.getElementById("result").value=sum;
  }

 

