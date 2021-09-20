const dateOfBirth=document.querySelector(".date-of-birth");
const luckyNumber= document.querySelector(".lucky-number");
const checkButton= document.querySelector(".check-btn");
message=document.querySelector(".display-result")
console.log(dateOfBirth.value);

function checkForLuckyNumber(){
    message.style.display="none"; 
    const dob1=dateOfBirth.value;
    console.log(dob1);
    const sum=sumOfDigits(dob1);
    // console.log(sum);
    if(sum&&dob1&&(luckyNumber.value)){
        const luckyFactor=findLucky(sum,luckyNumber.value);
        console.log(luckyFactor);
        if(luckyFactor == 1){
            showMessage("Your Birthdate is Lucky!🔥🤩");
        }else{
            showMessage("Your Birthdate is not Lucky!!😶👻");
        }
    }else{
        showMessage("Please enter valid inputs!🤨");
    }
    
};
function findLucky(sum,luckyNumber){
    const comparison=(sum%luckyNumber);
    if(comparison===0){
        return 1;
    }else{
        return 0;
    }
}


function sumOfDigits(dob1){
    total=0;
    dob1=dob1.replaceAll("-","");
   for(let i=0;i<dob1.length;i++){
       total=total+Number(dob1.charAt(i));
   }
   console.log(total);
   return total;
}
function showMessage(message1){
    message.style.display = "block"; 
    // console.log("in showmsg")        //to unhide message
    message.innerText=message1;
}

checkButton.addEventListener('click', checkForLuckyNumber);