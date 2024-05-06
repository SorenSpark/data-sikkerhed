

/* branching quiz */

// Definition af spørgsmål og svarmuligheder som objekt array
const questions = [
    /* 0 */
    {
        question: "Du er på en hjemmeside, der tilbyder designer tøj til meget lave priser, men du er usikker på om hjemmesiden er falsk.",
        choices: [
            { text: "Forlader hjemmesiden", nextQuestion: 1 },
            { text: "Fortsætter med at shoppe", nextQuestion: 5 },
        ]
    },
    /* 1 */
    {
        question: "Godt klaret! Her er et nyt scenarie: Du modtager en e-mail fra din bank, der hævder at kræve øjeblikkelig handling vedrørende din konto. E-mailen indeholder et hyperlink, der angiveligt fører til din banks hjemmeside.",
        choices: [
            { text: "Klikker på linket i e-mailen", nextQuestion: 4 },

            { text: "Slet eller markér e-mailen som spam", result: "Hvor er du bare god! Det er den helt korrekte måde at reagere på. Både at forlade hjemmesiden og slette/markere e-mailen som spam, er den korrekte handling da du formindsker chancen for identitetstyveri og økonomisk svindel. Ved at du markere e-mailen som spam så bliver din mailudbyders system klogere og derved forhindre flere af disse mails at dukke op." },

            { text: "Kontakter din banks kundeservice via et velkendt telefonnummer", nextQuestion: 2  },

            { text: "Undersøger om afsenderens mail stemmer overens med bankens maildomæne", nextQuestion: 3 },
        ]
    },
    /* 2 */
    {
        question: "Du er nu kommet igennem til din bank, som forklare at de ikke har sendt en mail til dig og beder dig om at slette mailen eller markér det som spam. Hvad gør du?",
        choices: [
            { text: "Sletter eller markér e-mailen som spam", result: "Hvor er du bare god! Det er den helt korrekte måde at reagere på. Både at forlade hjemmesiden og slette/markere e-mailen som spam, er den korrekte handling da du formindsker chancen for identitetstyveri og økonomisk svindel. Ved at du markere e-mailen som spam så bliver din mailudbyders system klogere og derved forhindre flere af disse mails at dukke op." },
            { text: "Klikker på linket alligevel grundet nysgerrighed", nextQuestion: 4 },
        ]
    },
    /* 3 */
    {
        question: "Du har nu undersøgt om mailens domæne er det som din bank bruger. Det er det ikke. Hvad gør du så?",
        choices: [
            { text: "Sletter eller markér e-mailen som spam", result: "Hvor er du bare god! Det er den helt korrekte måde at reagere på. Både at forlade hjemmesiden og slette/markere e-mailen som spam, er den korrekte handling da du formindsker chancen for identitetstyveri og økonomisk svindel. Ved at du markere e-mailen som spam så bliver din mailudbyders system klogere og derved forhindre flere af disse mails at dukke op." },
            { text: "Klikker på linket alligevel grundet nysgerrighed", nextQuestion: 4 },
            { text: "Kontakter din banks kundeservice via et velkendt telefonnummer", nextQuestion: 2  },
        ]
    },
    /* 4 */
    {
        question: "Du har trykket på linket i mailen og er landet på deres hjemmeside. Hjemmesiden ligner ikke helt din banks hjemmeside, der er for mange tegn på svindel som f.eks. en masse stave- og gramatikfejl. på siden beder den om dine personlige informationer til at logge ind så du kan rette i dine bankoplysninger som mailen angiveligt bedte om.",
        choices: [
            { text: "Følger instruktionerne på siden", result: "You chose spring." },
            { text: "Forlader hjemmesiden", result: "You chose summer." },
        ]
    },
    /* 5 */
    {
        question: "What's your favorite season?",
        choices: [
            { text: "Spring", result: "You chose spring." },
            { text: "Summer", result: "You chose summer." },
            { text: "Autumn", result: "You chose autumn." },
            { text: "Winter", result: "You chose winter." }
        ]
    },
];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const restartBtn = document.getElementById('restartBtn');

// Nulstil det aktuelle spørgsmål til det første
let currentQuestion = 0;

// Funktion til at indlæse spørgsmål og svarmuligheder
const loadQuestion = () => {
    // Hent spørgsmål
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
    questionElement.textContent = 'Resultat:';
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
/* accordion */
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