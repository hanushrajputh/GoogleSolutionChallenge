function getPersonalizedFeedback() {
    let feedbackOptions = [
        "Great work! Your response is well-structured.",
        "Your answer is good, but consider adding more details.",
        "Your explanation lacks clarity. Try to be more specific.",
        "Incorrect response. Review the concept and try again."
    ];
    return feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
}
