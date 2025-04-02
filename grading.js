function autoGrade(answer) {
    let keywords = ["correct", "accurate", "right", "clear"];
    let score = 0;
    keywords.forEach(word => {
        if (answer.toLowerCase().includes(word)) {
            score += 25;
        }
    });
    return score > 100 ? 100 : score; // Cap score at 100%
}
