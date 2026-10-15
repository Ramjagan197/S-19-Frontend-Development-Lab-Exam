const quiz = document.querySelector("body > header");

const login = document.createElement("main");
login.id = "login-screen";
login.innerHTML = `
    <h1>Log in to start the quiz</h1>
    <form id="login-form">
        <label for="login-email">Email</label>
        <input id="login-email" name="email" type="email" autocomplete="email" required>

        <label for="login-password">Password</label>
        <input id="login-password" name="password" type="password"
            autocomplete="current-password" required>

        <button type="submit">Log in</button>
    </form>
`;
document.body.prepend(login);

if (quiz) {
    quiz.hidden = true;
}

document.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    login.hidden = true;

    if (quiz) {
        quiz.hidden = false;
        quiz.querySelector("h1").textContent = "Beginner Questions";
    }
});

function submitQuiz() {
    const answers = {
        q1: "Narendra Modi",
        q2: "Mahatma Gandhi",
        q3: "Tiger",
        q4: "Java Development Kit",
        q5: "ChatGPT",
        q6: "Python",
    };

    const score = Object.entries(answers).reduce((total, [question, answer]) => {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        return total + (selected?.value === answer ? 1 : 0);
    }, 0);

    let result = document.querySelector("#quiz-result");
    if (!result) {
        result = document.createElement("p");
        result.id = "quiz-result";
        result.setAttribute("aria-live", "polite");
        quiz.append(result);
    }

    result.textContent = `Test ended. Your score is ${score} out of ${Object.keys(answers).length}.`;

    const endButton = quiz.querySelector("button");
    if (endButton) {
        endButton.disabled = true;
    }
}
