{/* <script>                    //two objects i.e name and topic */}
const interviewQuestions = (name) => {

    if(name === "Malika"){
        return function(topic){          //anonymous function because the function is empty.
            console.log(`Hello ${name} . what is ${topic} ? . please explain us .`);
        } 
    }

    if(name === "Mudeera"){
        return function(topic){          //anonymous function because the function is empty.
            console.log(`Hello ${name} . what is ${topic} ? . please explain us .`);
        } 
    }

    if(name === "Fatima"){
        return function(topic){          //anonymous function because the function is empty.
            console.log(`Hello ${name} . what is ${topic} ? . please explain us .`);
        } 
    }

    else{
        return function(){
            console.log("Its all about higher order function");
        }
    }
}

interviewQuestions("Malika")("Javascirpt");
interviewQuestions("Mudeera")("Front end Developer");
interviewQuestions("Fatima")("Full Stack Developer");

const cand1 = interviewQuestions ("Malika");
cand1("Javascript");
cand1("Javascript");
cand1("Javascript");
// </script>