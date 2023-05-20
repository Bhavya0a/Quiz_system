//this would be the object shape for storing the questions  
 const questions = [
    {
        question: "A queue follows _________:",
        optionA: "LIFO principle",
        optionB: "FIFO principle",
        optionC: "Linear tree",
        optionD: "Ordered array",
        correctOption: "optionB"
    },

    {
        question: "Which of these is a postfix expression?",
        optionA: " a+b-c",
        optionB: "+ab",
        optionC: "abc*+de-+",
        optionD: "a*b(c+d)",
        correctOption: "optionC"
    },

    {
        question: "The time complexity used for inserting a node in a priority queue on the basis of key is:",
        optionA: "O(n)",
        optionB: "O(n2)",
        optionC: "O(nlogn)",
        optionD: "O(logn)",
        correctOption: "optionA"
    },

    {
        question: "Which data structure do we use for testing a palindrome?",
        optionA: "Heap",
        optionB: "Tree",
        optionC: "Priority queue",
        optionD: "Stack",
        correctOption: "optionD"
    },

    {
        question: "The tango tree is a type of:",
        optionA: "Binary Search Tree",
        optionB: " K-ary Tree",
        optionC: "Ternary Tree",
        optionD: "AVL Tree",
        correctOption: "optionA"
    },

    {
        question: "Which of the following data Structure is linear type ?",
        optionA: "Strings",
        optionB: "Lists",
        optionC: "Stack",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "A way of storing data in computers memory so that it can used efficiently",
        optionA: " Data Structure",
        optionB: " Data organization",
        optionC: "Data Collection",
        optionD: "Data Presentation",
        correctOption: "optionA"
    },

    {
        question: "When an array can be declared?",
        optionA: " At compile Time",
        optionB: "At run Time",
        optionC: "At Compile or Run time",
        optionD: "In program",
        correctOption: "optionC"
    },

    {
        question: "Named the data structure in which memory occupation  is not fixed",
        optionA: "Dynamic",
        optionB: "Linear",
        optionC: "Primitive",
        optionD: "Non homogeneous",
        correctOption: "optionA"
    },

    {
        question: `How the Array elements are accessed?`,
        optionA: "using data type",
        optionB: "using indices",
        optionC: "using structure",
        optionD: "using element",
        correctOption: "optionB"
    },

    {
        question: "Which of the following data structure is non - linear type?",
        optionA: " string",
        optionB: " stack",
        optionC: "list",
        optionD: " tree",
        correctOption: "optionD"
    },

    {
        question: "In the linked list the elements are connected by the link field which contains the address of the",
        optionA: "Next Node",
        optionB: "Previous node",
        optionC: "The Last node",
        optionD: "None of these",
        correctOption: "optionA"
    },


    {
        question: "The floor and ceiling functions are also called ___ or ___ integer functions.",
        optionA: "Greater, least",
        optionB: "Least, greater",
        optionC: " Small, greater",
        optionD: "Big, small",
        correctOption: "optionA"
    },

    {
        question: "___ is the process of removing a node from the linked list.",
        optionA: "Traversal",
        optionB: "Searching",
        optionC: "Insertion",
        optionD: "Deletion",
        correctOption: "optionD"
    },

    {
        question: "The two basic operations in the stack are ___.",
        optionA: "Insertion and deletion",
        optionB: "Searching and sorting",
        optionC: "Push and pop",
        optionD: "None of these",
        correctOption: "optionC"
    },

    {
        question: "Before executing push operation one must check for the ___ condition.",
        optionA: "Underflow",
        optionB: "Overflow",
        optionC: "Full",
        optionD: "Empty",
        correctOption: "optionB"
    },

    {
        question: "Before executing the pop operation we must check for the ___ condition.",
        optionA: "Underflow",
        optionB: "Overflow",
        optionC: "Full",
        optionD: "Empty",
        correctOption: "optionA"
    },

    {
        question: " ___ is a simplistic method of sorting data that is used very commonly.",
        optionA: "Merge sort",
        optionB: "Insertion sort",
        optionC: "Selection sort",
        optionD: "Bubble sort",
        correctOption: "optionD"
    },

    {
        question: "The process to find the location of the record with the given key value is called ___",
        optionA: "Traversing",
        optionB: "Searching",
        optionC: "Sorting",
        optionD: "Deletion",
        correctOption: "optionB"
    },

    {
        question: "Traversing a linked list means processing each node of the list exactly ___.",
        optionA: "Thrice",
        optionB: "Twice",
        optionC: "Once",
        optionD: "None of these",
        correctOption: "optionC"
    }
   
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "black"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "black"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "black"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}