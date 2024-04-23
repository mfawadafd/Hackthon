// script.js

// Function to store student details in session storage
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const studentDetails = {};
    formData.forEach((value, key) => {
        studentDetails[key] = value;
    });
    sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));
    // Redirect to quiz page
    window.location.href = 'index.html';
});

// Function to evaluate quiz and store marks in session storage
document.addEventListener("DOMContentLoaded", function(){
    const quizForm = document.getElementById("quizForm");
    quizForm.addEventListener("submit", function(event){
        event.preventDefault();
        const formData = new FormData(quizForm);
        let marks = 0;
        formData.forEach((value, key) => {
            if(key === "question1" && value === "3"){
                marks++;
            }
            else if(key === "question2" && value === "1"){
                marks++;
            }
            else if(key === "question3" && value === "2"){
                marks++;
            }
            else if(key === "question4" && value === "2"){
                marks++;
            }
            
        });
        sessionStorage.setItem("marks", marks);
        window.location.href = "result.html";
    });
});


// document.addEventListener("DOMContentLoaded", function(){
//     const quizForm = document.getElementById("quizForm");
//     quizForm.addEventListener("submit", function(event){
//         event.preventDefault();
        
//         // Get all form elements by their name attribute
//         const selectedAnswers = {
//             question1: quizForm.querySelector('input[name="question1"]:checked').value,
//             question2: quizForm.querySelector('input[name="question2"]:checked').value,
//             question3: quizForm.querySelector('input[name="question3"]:checked').value,
//             question4: quizForm.querySelector('input[name="question4"]:checked').value
//         };

//         // Define correct answers
//         const correctAnswers = {
//             question1: "3",
//             question2: "1",
//             question3: "2",
//             question4: "2"
//         };

//         // Compare selected answers with correct answers and calculate marks
//         let marks = 0;
//         for (const question in selectedAnswers) {
//             if (selectedAnswers[question] === correctAnswers[question]) {
//                 marks++;
//             }
//         }

//         // Store marks in session storage
//         sessionStorage.setItem("marks", marks);

//         // Redirect to result page
//         window.location.href = "result.html";
//     });
// });
