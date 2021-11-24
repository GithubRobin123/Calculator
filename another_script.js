
let sc = document.getElementById('output-value');


buttons = document.querySelectorAll('button');


let screenvalue = '';


for(item of buttons){
    item.addEventListener("click", (e)=>{
         buttontext = e.target.innerText;
         console.log(buttontext);
         console.log(sc.value);

         if(buttontext == 'C' ){
            screenvalue='';
            sc.value = screenvalue;   

         }
         else if(buttontext == 'CE'){
            screenvalue =screenvalue.substr(0,screenvalue.length-1);
            sc.value = screenvalue;
              
         }
         else if (buttontext == '='){
            buttontext = eval(sc.value)
            sc.value = buttontext;
         }
         else{
            screenvalue += buttontext
            sc.value= screenvalue;
         }
        // }
        
    })
} 
 