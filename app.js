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


// lab 06 solution 

const questions = ["Do you like coding?", "Is Java Script coding fun ?", "Do you like  to challange yourself?"];
const answers = [];

//function 1
function pushQustionsToArray(){

    for (let i = 0; i <questions.length; i++){
        var answer = prompt(questions[i] + " answer with Yes|No");
        if (answer.toLowerCase !== "Yes" && answer.toLowerCase !== "No" && answer =="") {
            answer = "invalid";
        }
        answers.push(answer);
    }

}

//function 2 (Traverse)
function print(){
    for (let i = 0; i < answers.length; i++) {
        console.log(answers[i]);
    }
    // console.log(answers);
}

pushQustionsToArray();
print();

if(gender === "male"){
    alert("Welcome Mr " + userName);
    alert("Welcome Mr " + userName + " Thanks for answering, have a good day!");
}else if(gender === "female"){
    alert("Welcome Ms " + userName);
    alert("Welcome Ms " + userName + " Thanks for answering, have a good day!");
}
