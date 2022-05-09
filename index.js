class Question {
    constructor(question, ...answers) {
        this.question = question;
        this.answers = answers;

        this.selected = undefined;
        setInterval(this.checkSelected(), 500);
    }

    display(form) {
        // create question
        let q = document.createElement("p");
        q.id = this.question;
        q.innerHTML = this.question;
        form.appendChild(q);
        // create answer selections
        this.answerButtons = [];
        for (let i = 0; i < this.answers.length; i++) {
            // create quetsion option
            this.answerButtons[i] = document.createElement("input");
            this.answerButtons[i].type = "radio";
            this.answerButtons[i].name = this.question;
            this.answerButtons[i].id = this.answers[i];
            this.answerButtons[i].setAttribute("value", this.answers[i]);
            form.appendChild(this.answerButtons[i]);
            // create label
            let label = document.createElement("label");
            label.setAttribute("for", this.answers[i]);
            label.innerHTML = this.answers[i];
            form.appendChild(label);
            // create linebreak
            form.appendChild(document.createElement("br"));
        }
    }
    checkSelected() {
        for (let i = 0; i < this.answers.length; i++) {
            if (document.getElementById(this.answers[i]) == null) {
                continue;
            }
            if (document.getElementById(this.answers[i]).selected) {
                this.selected = this.answers[i];
                break;
            }
        }
    }
    checkAnswer(correctAnswer) {
        return correctAnswer == this.selected;
    }
}

class Form {
    constructor(answers, questions) {
        this.answers = answers;
        this.questions = questions;
        this.createForm();
        for (let question = 0; question < this.questions.length; question++) {
            if (question % 2 == 0) {
                document.getElementById(this.questions[question].question).classList.add("qevenhead");
            } else {
                document.getElementById(this.questions[question].question).classList.add("qoddhead");
            }
            for (let answer = 0; answer < this.questions[question].answers.length; answer++) {
                if (question % 2 == 0) {
                    document.getElementById(this.questions[question].answers[answer]).classList.add("qeven");
                } else {
                    document.getElementById(this.questions[question].answers[answer]).classList.add("qodd");
                }
            }
        }
    }

    createForm() {
        let startForm = document.createElement("form");
        // statForm.setAttribute("action", "/action_page.php");
        for (let i = 0; i < questions.length; i++) {
            questions[i].display(startForm);
        }
        this.button = document.createElement("button");
        this.button.type = "submit";
        this.button.id = this.answer;
        this.button.innerHTML = "Submit";
        // this.button.onclick = (function checkAnswer() {saveSelected()})
        this.button.onclick = (function checkAnswer() {console.log("PENIS")});
        startForm.appendChild(this.button);
        document.body.appendChild(startForm);
    }
    saveSelected() {
        let sum = 0;
        for (let i = 0; i < this.questions.length; i++) {
            console.log("Checking");
            if (this.questions[i].selected == this.answers[i]) {
                sum++;
            }
        }
        return sum;
    }
}

let q1 = new Question("What is Vincent eating?", "pizza", "mac and cheese",
"spagetti", "ice cream");
let q2 = new Question("What is Vincent doing?", "Nothing", "Homework", "Eating", "Sleeping");
let q3 = new Question("What is Vincent's favorite color?", "Blue", "Yellow", "Red", "Green");
let q4 = new Question("Does Vincent have a gf?", "Yes :)", "No :(");
let q5 = new Question("Does Vincent Lin have a life?", "No :(", "No :(");
let questions = [q1, q2, q3, q4, q5];
let answers = ["ice cream", "Nothing", "Blue", "No :(", "No :("];
let form1 = new Form(answers, questions);