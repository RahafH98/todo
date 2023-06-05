var skipMessage = confirm("Do you want to skip the welcoming message?, Press OK to go to the home page, Press Cancel to answer some questions about yourself");
if (!skipMessage){

    var userName = prompt("kindly type your name  ");
    
    var gender = prompt("add your gender(male|female): ");
    
    if(gender != "male" && gender != "female"){
        alert("The gender should be male or female, please try again :)");
    }
    
    var age = prompt("How old are you ");
    
    if(age <= 0){
        alert("Age must be greater than 0");
    }
    
    if(gender === "male"){
        alert("Welcome Mr " + userName);
    }else if(gender === "female"){
        alert("Welcome Ms " + userName);
    }
}