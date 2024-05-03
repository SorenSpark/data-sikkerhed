

/* branching quiz */

// Definition af spørgsmål og svarmuligheder som objekt array
const questions = [
    {
        question: "What's your favorite color?",
        choices: [
            { text: "Red", nextQuestion: 1 },
            { text: "Blue", nextQuestion: 2 },
            { text: "Green", nextQuestion: 3 },
            { text: "Yellow", result: "You chose yellow." }
        ]
    },
    {
        question: "What's your favorite animal?",
        choices: [
            { text: "Dog", result: "You chose dog." },
            { text: "Cat", result: "You chose cat." },
            { text: "Bird", result: "You chose bird." },
            { text: "Fish", result: "You chose fish." }
        ]
    },
    {
        question: "What's your favorite food?",
        choices: [
            { text: "Pizza", result: "You chose pizza." },
            { text: "Burger", result: "You chose burger." },
            { text: "Salad", result: "You chose salad." },
            { text: "Sushi", result: "You chose sushi." }
        ]
    },
    {
        question: "What's your favorite season?",
        choices: [
            { text: "Spring", result: "You chose spring." },
            { text: "Summer", result: "You chose summer." },
            { text: "Autumn", result: "You chose autumn." },
            { text: "Winter", result: "You chose winter." }
        ]
    }
];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const restartBtn = document.getElementById('restartBtn');

// Initialiseringsvariabler
let currentQuestion = 0;

// Funktion til at indlæse det aktuelle spørgsmål og svarmuligheder
const loadQuestion = () => {
    // Hent det aktuelle spørgsmål
    const q = questions[currentQuestion];
    // Opdater spørgsmålet i HTML
    questionElement.textContent = q.question;
    // Slet tidligere svarmuligheder
    choicesElement.innerHTML = '';
    // Tilføj knapper til valgmuligheder
    q.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice.text;
        choiceButton.addEventListener('click', () => handleChoice(choice));
        choicesElement.appendChild(choiceButton);
    });
    // Nulstil resultatfeltet
    resultElement.textContent = '';
};

// Funktion til at håndtere brugerens valg af svarmulighed
const handleChoice = (choice) => {
    // Hvis valgmuligheden fører til et nyt spørgsmål
    if (choice.nextQuestion !== undefined) {
        currentQuestion = choice.nextQuestion;
        loadQuestion();
    // Hvis valgmuligheden fører til et resultat
    } else if (choice.result !== undefined) {
        showResult(choice.result);
    }
};

// Funktion til at vise resultatet
const showResult = (result) => {
    // Opdater spørgsmålet til resultat
    questionElement.textContent = 'Result:';
    // Fjern valgmuligheder
    choicesElement.innerHTML = '';
    // Vis resultattekst
    resultElement.textContent = result;
    // Vis "Restart Quiz" knappen
    restartBtn.style.display = 'block';
};

// Funktion til at nulstille quizzen
const restartQuiz = () => {
    // Nulstil det aktuelle spørgsmål til det første
    currentQuestion = 0;
    // Indlæs det første spørgsmål
    loadQuestion();
    // Skjul "Restart Quiz" knappen
    restartBtn.style.display = 'none';
};

// Indlæs det første spørgsmål, når siden indlæses
loadQuestion();

// Lyt efter klik på "Restart Quiz" knappen og nulstil quizzen
restartBtn.addEventListener('click', restartQuiz);


/* variabler */

const knap = document.querySelectorAll(".accordion-item h3"); /* henter alle h3'er i alle accordion item */

knap.forEach((accordionToggle) => {
accordionToggle.addEventListener("click", () => {
    
    let accordionItem = accordionToggle.parentNode; /* henter elementer ind fra accordiontoggle via parentNode*/

    let accordionContent = accordionToggle.nextElementSibling; /* henter elementer ind fra accordiontoggle via nextElementSibling */

    /* hvis Accordion er åben, så skal den lukkes */
    if(accordionContent.style.maxHeight){
    
        accordionContent.style.maxHeight = null; /* maxhøjde sættes til null= 0px */
        
        accordionItem.classList.remove("active"); /* klassen active fjernes fra vores accordion */

    }else{
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; /* maxhøjde sættes til scrollhøjde + 0px */
    accordionItem.classList.add("active"); /* klassen active tilføjes til vores accordion */}
        
})  

});