function gradeAssignment() {
    let answer = document.getElementById("student-answer").value;
    if (!answer) {
        alert("Please enter an answer first.");
        return;
    }
    let grade = autoGrade(answer);
    document.getElementById("grade-result").innerText = "Grade: " + grade;
}

function generateFeedback() {
    let feedback = getPersonalizedFeedback();
    document.getElementById("feedback-result").innerText = feedback;
}

function askChatbot() {
    let question = document.getElementById("chat-input").value;
    let response = getChatbotResponse(question);
    document.getElementById("chat-response").innerText = response;
}
