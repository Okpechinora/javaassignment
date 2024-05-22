function displayMessage(){
    let numberInput= document.getElementById("monthnumber").value;
    let welcomeMessage = document.getElementById("output")
    
    if(numberInput == 1){
       welcomeMessage.innerHTML ="welcome to the month of January"
     } else if (numberInput == 2){
     welcomeMessage.innerHTML="Welcome to the month of february"
     }else if(numberInput == 3){
     welcomeMessage.innerHTML ="Welcome to the month of March"
     }else if (numberInput == 4){
   welcomeMessage.innerHTML="Welcome to the month of April"
     }else if (numberInput== 5){
    welcomeMessage.innerHTML ="Welcome to the month of May"
     }else if (numberInput == 6){
   welcomeMessage.innerHTML ="Welcome to the month of june"
     }else if (numberInput == 7){
    welcomeMessage.innerHTML ="Welcome to the month of july"
    }else if (numberInput == 8){
    welcomeMessage.innerHTML ="Welcome to the month of August"
    }else if (numberInput == 9){
   welcomeMessage.innerHTML="Welcome to the month of September"
   }else if (numberInput == 10){
   welcomeMessage.innerHTML ="Welcome to the month of October"
   }else if (numberInput == 11){
   welcomeMessage.innerHTML="Welcome to the Month of November"
   }else if (numberInput == 12){
   welcomeMessage.innerHTML ="Welcome to the month of December"
   }else{
   welcomeMessage.innerHTML ="This is an Invalid Month"

    }
}
