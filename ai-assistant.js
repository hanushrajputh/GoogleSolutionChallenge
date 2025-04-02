function getChatbotResponse(question) {
    let responses = {
        "What is AI?": "AI stands for Artificial Intelligence, which enables machines to learn from data and perform human-like tasks.",
        "How does grading work?": "The grading system analyzes key phrases in the student's response to determine the accuracy of the answer.",
        "What is feedback?": "Feedback provides students with insights on their performance and how they can improve."
    };
    return responses[question] || "I'm still learning! Try asking something else.";
}
