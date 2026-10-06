/* =========================================================
   ROSAMED — SISTEMA DE QUESTÕES
========================================================= */


/* =========================================================
   BANCO DE QUESTÕES
========================================================= */

const questionBank = [

    {
        category: "CONCEITOS",
        topic: "Outubro Rosa",
        difficulty: "FÁCIL",

        question:
            "Qual é o principal objetivo do movimento Outubro Rosa?",

        answers: [
            "Promover exclusivamente o tratamento do câncer de mama.",
            "Conscientizar sobre a saúde da mulher e o câncer de mama.",
            "Defender que toda mulher faça mamografia anualmente.",
            "Substituir consultas médicas por campanhas de prevenção."
        ],

        correct: 1,

        explanation:
            "O Outubro Rosa é principalmente um movimento de conscientização sobre a saúde da mulher, com destaque para o câncer de mama, prevenção, diagnóstico e acesso ao cuidado.",

        study:
            "Revise o conceito, os objetivos e a importância social do Outubro Rosa."
    },


    {
        category: "MITOS",
        topic: "Outubro Rosa",
        difficulty: "FÁCIL",

        question:
            "Verdadeiro ou falso: o Outubro Rosa significa que toda mulher deve fazer mamografia todos os anos, independentemente da idade ou do risco.",

        answers: [
            "Verdadeiro.",
            "Falso.",
            "Verdadeiro apenas para mulheres acima de 40 anos.",
            "Não existe recomendação relacionada ao tema."
        ],

        correct: 1,

        explanation:
            "A indicação de rastreamento não é igual para todas as mulheres. Idade, histórico familiar, fatores de risco e recomendações clínicas devem ser considerados.",

        study:
            "Estude rastreamento do câncer de mama, população-alvo e diferenças entre rastreamento e investigação diagnóstica."
    },


    {
        category: "FATORES DE RISCO",
        topic: "Câncer de mama",
        difficulty: "MÉDIO",

        question:
            "Qual alternativa apresenta um fator associado ao aumento do risco de câncer de mama?",

        answers: [
            "Histórico familiar de câncer de mama em determinadas situações.",
            "Ter realizado atividade física regularmente.",
            "Manter alimentação equilibrada.",
            "Realizar acompanhamento médico."
        ],

        correct: 0,

        explanation:
            "História familiar pode estar associada ao aumento do risco, dependendo do grau de parentesco, idade ao diagnóstico e contexto familiar.",

        study:
            "Revise fatores de risco modificáveis e não modificáveis para câncer de mama."
    },


    {
        category: "ANATOMIA",
        topic: "Anatomia da mama",
        difficulty: "MÉDIO",

        question:
            "Qual estrutura é responsável pela produção do leite materno?",

        answers: [
            "Alvéolos mamários.",
            "Linfonodos axilares.",
            "Músculo peitoral maior.",
            "Pele."
        ],

        correct: 0,

        explanation:
            "A produção do leite ocorre principalmente nos alvéolos mamários, estruturas glandulares da mama.",

        study:
            "Revise a anatomia da mama, incluindo lóbulos, ductos, alvéolos e drenagem linfática."
    },


    {
        category: "CASO CLÍNICO",
        topic: "Nódulo mamário",
        difficulty: "DIFÍCIL",

        question:
            "Uma paciente percebe um novo nódulo na mama. Qual é a conduta conceitualmente mais adequada?",

        answers: [
            "Ignorar caso não exista dor.",
            "Esperar até o próximo Outubro Rosa.",
            "Buscar avaliação profissional para investigação adequada.",
            "Realizar automedicação e observar por alguns meses."
        ],

        correct: 2,

        explanation:
            "Um novo achado mamário deve ser avaliado por profissional de saúde. A ausência de dor não é suficiente para determinar que uma alteração seja benigna.",

        study:
            "Estude abordagem clínica de alterações mamárias e diferenças entre rastreamento e investigação de sintomas."
    },


    {
        category: "MITOS",
        topic: "Câncer de mama",
        difficulty: "MÉDIO",

        question:
            "Qual afirmação é uma impressão falsa comum sobre câncer de mama?",

        answers: [
            "Alguns cânceres podem apresentar poucos sintomas inicialmente.",
            "Todo câncer de mama causa dor intensa desde o início.",
            "Alterações mamárias podem precisar de investigação.",
            "Existem diferentes tipos de câncer de mama."
        ],

        correct: 1,

        explanation:
            "Câncer de mama não necessariamente causa dor intensa. Algumas alterações podem ser assintomáticas ou apresentar sinais discretos.",

        study:
            "Revise sinais e sintomas possíveis do câncer de mama e as limitações de usar apenas a presença de dor."
    },


    {
        category: "DIAGNÓSTICO",
        topic: "Diagnóstico",
        difficulty: "DIFÍCIL",

        question:
            "Qual é a principal diferença entre rastreamento e investigação diagnóstica?",

        answers: [
            "Rastreamento é feito apenas em pessoas com sintomas.",
            "Investigação diagnóstica é feita apenas durante o Outubro Rosa.",
            "Rastreamento busca identificar doença em pessoas sem sintomas dentro de uma estratégia definida.",
            "Os dois termos significam exatamente a mesma coisa."
        ],

        correct: 2,

        explanation:
            "Rastreamento e investigação diagnóstica possuem objetivos diferentes. O rastreamento é direcionado a pessoas assintomáticas dentro de critérios definidos.",

        study:
            "Revise rastreamento, diagnóstico e investigação de alterações mamárias."
    },


    {
        category: "CASO CLÍNICO",
        topic: "Sinais clínicos",
        difficulty: "DIFÍCIL",

        question:
            "Uma paciente apresenta alteração persistente na mama. Qual atitude é mais adequada?",

        answers: [
            "Aguardar uma campanha de conscientização.",
            "Procurar avaliação profissional.",
            "Pesquisar sintomas na internet e definir o diagnóstico.",
            "Assumir que seja câncer."
        ],

        correct: 1,

        explanation:
            "Alterações persistentes devem ser avaliadas por profissional capacitado. Nem toda alteração significa câncer, mas também não deve ser ignorada.",

        study:
            "Revise os principais sinais de alerta e a importância da avaliação clínica."
    },


    {
        category: "PREVENÇÃO",
        topic: "Prevenção",
        difficulty: "MÉDIO",

        question:
            "Qual alternativa representa uma medida relacionada à redução de riscos para diversas doenças crônicas?",

        answers: [
            "Praticar atividade física regularmente.",
            "Evitar consultas médicas.",
            "Ignorar alterações corporais.",
            "Realizar exames sem indicação."
        ],

        correct: 0,

        explanation:
            "Atividade física regular está associada a benefícios para a saúde e pode contribuir para a redução do risco de diversas doenças.",

        study:
            "Revise fatores modificáveis relacionados à prevenção de doenças crônicas."
    },


    {
        category: "SAÚDE DA MULHER",
        topic: "Saúde da mulher",
        difficulty: "FÁCIL",

        question:
            "Por que campanhas como o Outubro Rosa são importantes?",

        answers: [
            "Porque substituem consultas médicas.",
            "Porque aumentam a conscientização e podem estimular o acesso ao cuidado.",
            "Porque garantem que ninguém desenvolverá câncer.",
            "Porque eliminam a necessidade de acompanhamento médico."
        ],

        correct: 1,

        explanation:
            "Campanhas podem aumentar conhecimento, conscientização e procura por serviços de saúde, mas não substituem o cuidado individualizado.",

        study:
            "Revise educação em saúde, prevenção e papel das campanhas de conscientização."
    },


    {
        category: "MITOS",
        topic: "Prevenção",
        difficulty: "MÉDIO",

        question:
            "Verdadeiro ou falso: encontrar qualquer alteração na mama significa que a pessoa tem câncer.",

        answers: [
            "Verdadeiro.",
            "Falso.",
            "Somente durante o Outubro Rosa.",
            "Somente quando existe dor."
        ],

        correct: 1,

        explanation:
            "Existem diversas causas benignas para alterações mamárias. A avaliação profissional é necessária para determinar a causa.",

        study:
            "Estude diagnósticos diferenciais de alterações mamárias."
    },


    {
        category: "CASO CLÍNICO",
        topic: "Fatores de risco",
        difficulty: "DIFÍCIL",

        question:
            "Uma paciente relata histórico familiar importante de câncer de mama. Qual é a melhor abordagem?",

        answers: [
            "Ignorar o histórico se ela não apresentar sintomas.",
            "Avaliar o histórico individual e familiar com profissional de saúde.",
            "Fazer qualquer exame disponível sem avaliação.",
            "Esperar obrigatoriamente até os 60 anos."
        ],

        correct: 1,

        explanation:
            "Histórico familiar pode modificar o risco e a estratégia de acompanhamento. A avaliação deve considerar o contexto individual e familiar.",

        study:
            "Revise avaliação de risco familiar e fatores associados à predisposição hereditária."
    },


    {
        category: "CONCEITOS",
        topic: "Câncer de mama",
        difficulty: "MÉDIO",

        question:
            "Câncer de mama representa uma única doença com comportamento sempre igual?",

        answers: [
            "Sim, todos os tumores são iguais.",
            "Não, existem diferentes tipos e características biológicas.",
            "Sim, desde que o tumor esteja na mama.",
            "Não existem classificações."
        ],

        correct: 1,

        explanation:
            "Câncer de mama é um grupo heterogêneo de doenças, com diferentes características histológicas e moleculares.",

        study:
            "Revise a heterogeneidade do câncer de mama e suas principais classificações."
    },


    {
        category: "RASTREAMENTO",
        topic: "Rastreamento",
        difficulty: "DIFÍCIL",

        question:
            "Qual afirmação melhor descreve um programa de rastreamento?",

        answers: [
            "Investiga exclusivamente pessoas que apresentam sintomas.",
            "Busca detectar uma doença em pessoas assintomáticas dentro de critérios definidos.",
            "Serve para confirmar qualquer diagnóstico.",
            "É sinônimo de tratamento."
        ],

        correct: 1,

        explanation:
            "Rastreamento busca identificar uma condição em pessoas que não apresentam sintomas, seguindo critérios e recomendações específicas.",

        study:
            "Revise conceitos de rastreamento e critérios utilizados em programas de saúde."
    },


    {
        category: "MITOS",
        topic: "Outubro Rosa",
        difficulty: "FÁCIL",

        question:
            "O Outubro Rosa existe apenas para divulgar produtos relacionados à cor rosa?",

        answers: [
            "Sim.",
            "Não. O objetivo principal envolve conscientização e saúde.",
            "Sim, quando realizado por hospitais.",
            "Não existe relação com saúde."
        ],

        correct: 1,

        explanation:
            "O movimento utiliza a cor rosa como símbolo, mas seu propósito está relacionado à conscientização sobre a saúde da mulher e câncer de mama.",

        study:
            "Revise a história, objetivos e importância das campanhas de conscientização."
    },


    {
        category: "CLÍNICA",
        topic: "Sinais clínicos",
        difficulty: "MÉDIO",

        question:
            "Qual situação merece avaliação profissional?",

        answers: [
            "Alteração mamária nova e persistente.",
            "Somente dor após exercício.",
            "Nenhuma alteração.",
            "Apenas quando existe febre."
        ],

        correct: 0,

        explanation:
            "Uma alteração nova e persistente merece avaliação. A investigação adequada depende do quadro clínico.",

        study:
            "Revise sinais e sintomas mamários que justificam avaliação clínica."
    },


    {
        category: "PREVENÇÃO",
        topic: "Prevenção",
        difficulty: "FÁCIL",

        question:
            "Qual alternativa representa uma atitude adequada de cuidado com a saúde?",

        answers: [
            "Ignorar alterações até o próximo Outubro Rosa.",
            "Buscar informações confiáveis e acompanhamento adequado.",
            "Evitar profissionais de saúde.",
            "Realizar todos os exames possíveis sem indicação."
        ],

        correct: 1,

        explanation:
            "Informação confiável e acompanhamento adequado ajudam na tomada de decisões relacionadas à saúde.",

        study:
            "Revise educação em saúde e importância de fontes confiáveis."
    },


    {
        category: "CASO CLÍNICO",
        topic: "Diagnóstico",
        difficulty: "DIFÍCIL",

        question:
            "Uma alteração mamária foi encontrada durante uma avaliação. O que deve determinar os próximos passos?",

        answers: [
            "Somente a opinião da paciente.",
            "Somente a época do ano.",
            "História clínica, exame e avaliação profissional.",
            "A existência do Outubro Rosa."
        ],

        correct: 2,

        explanation:
            "A abordagem depende da história clínica, exame físico e, quando indicado, exames complementares.",

        study:
            "Revise o processo de avaliação clínica e investigação de alterações mamárias."
    },


    {
        category: "CONCEITOS",
        topic: "Saúde da mulher",
        difficulty: "MÉDIO",

        question:
            "Qual é uma característica importante de uma boa campanha de educação em saúde?",

        answers: [
            "Transmitir medo para aumentar a procura.",
            "Fornecer informação clara e incentivar decisões baseadas em evidências.",
            "Garantir que todas as pessoas tenham a mesma conduta.",
            "Substituir profissionais de saúde."
        ],

        correct: 1,

        explanation:
            "Educação em saúde deve favorecer informação compreensível e decisões adequadas, evitando generalizações indevidas.",

        study:
            "Revise princípios de educação em saúde e comunicação de risco."
    }

];


/* =========================================================
   ESTADO DO QUIZ
========================================================= */

let currentQuestions = [];
let currentIndex = 0;

let answered = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let streak = 0;

let history = [];

let reviewMode = false;


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadHistory();

    startQuiz();

});


/* =========================================================
   INICIAR QUIZ
========================================================= */

function startQuiz() {

    currentQuestions = shuffle([...questionBank]);

    currentIndex = 0;

    reviewMode = false;

    loadQuestion();

}


/* =========================================================
   CARREGAR QUESTÃO
========================================================= */

function loadQuestion() {

    const question = currentQuestions[currentIndex];

    if (!question) {

        finishQuiz();

        return;

    }


    document.getElementById("questionNumber").textContent =
        `QUESTÃO ${String(currentIndex + 1).padStart(2, "0")}`;


    document.getElementById("questionText").textContent =
        question.question;


    document.getElementById("questionCategory").textContent =
        question.category;


    document.getElementById("questionDifficulty").textContent =
        question.difficulty;


    document.getElementById("questionResult").innerHTML = "";

    document.getElementById("studyRecommendation").style.display =
        "none";

    document.getElementById("nextQuestion").style.display =
        "none";


    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";

        button.textContent = answer;

        button.onclick = () =>
            answerQuestion(index);

        answersContainer.appendChild(button);

    });


    updateProgress();

}


/* =========================================================
   RESPONDER
========================================================= */

function answerQuestion(selectedIndex) {

    const question = currentQuestions[currentIndex];

    const buttons =
        document.querySelectorAll(".answer-option");


    buttons.forEach(button => {

        button.disabled = true;

    });


    const selectedButton =
        buttons[selectedIndex];

    const correctButton =
        buttons[question.correct];


    if (selectedIndex === question.correct) {

        selectedButton.classList.add("correct");

        correctAnswers++;

        streak++;

        showResult(
            true,
            "Resposta correta! 🎉",
            question.explanation
        );

    } else {

        selectedButton.classList.add("wrong");

        correctButton.classList.add("correct");

        wrongAnswers++;

        streak = 0;

        showResult(
            false,
            "Resposta incorreta.",
            question.explanation
        );

        showStudyRecommendation(question);

    }


    answered++;


    history.push({

        question: question.question,

        topic: question.topic,

        category: question.category,

        correct: selectedIndex === question.correct,

        selected: question.answers[selectedIndex],

        correctAnswer: question.answers[question.correct]

    });


    saveHistory();

    updateStats();

    updateTopicPerformance();


    document.getElementById("nextQuestion").style.display =
        "inline-flex";

}


/* =========================================================
   MOSTRAR RESULTADO
========================================================= */

function showResult(isCorrect, title, explanation) {

    const result =
        document.getElementById("questionResult");


    result.className =
        `question-result ${isCorrect ? "correct" : "wrong"}`;


    result.innerHTML = `

        <strong>
            ${title}
        </strong>

        <p>
            ${explanation}
        </p>

    `;

}


/* =========================================================
   RECOMENDAÇÃO DE ESTUDO
========================================================= */

function showStudyRecommendation(question) {

    const box =
        document.getElementById("studyRecommendation");

    const text =
        document.getElementById("studyRecommendationText");


    text.textContent =
        question.study;


    box.style.display =
        "flex";

}


/* =========================================================
   PRÓXIMA QUESTÃO
========================================================= */

function nextQuestion() {

    currentIndex++;

    loadQuestion();

}


/* =========================================================
   PROGRESSO
========================================================= */

function updateProgress() {

    const total =
        currentQuestions.length;


    const current =
        Math.min(currentIndex + 1, total);


    document.getElementById("progressText").textContent =
        `${current} / ${total}`;


    const percentage =
        ((currentIndex) / total) * 100;


    document.getElementById("progressBar").style.width =
        `${percentage}%`;

}


/* =========================================================
   ESTATÍSTICAS
========================================================= */

function updateStats() {

    document.getElementById("statAnswered").textContent =
        answered;


    document.getElementById("statCorrect").textContent =
        correctAnswers;


    document.getElementById("statWrong").textContent =
        wrongAnswers;


    const accuracy =
        answered === 0
            ? 0
            : Math.round((correctAnswers / answered) * 100);


    document.getElementById("statAccuracy").textContent =
        `${accuracy}%`;


    document.getElementById("streak").textContent =
        `${streak} ${streak === 1 ? "acerto" : "acertos"} consecutivos`;

}


/* =========================================================
   DESEMPENHO POR ASSUNTO
========================================================= */

function updateTopicPerformance() {

    const topics = {};


    history.forEach(item => {

        if (!topics[item.topic]) {

            topics[item.topic] = {
                total: 0,
                correct: 0
            };

        }


        topics[item.topic].total++;


        if (item.correct) {

            topics[item.topic].correct++;

        }

    });


    const topicList =
        document.getElementById("topicList");


    topicList.innerHTML = "";


    const sortedTopics =
        Object.entries(topics)
            .sort((a, b) => {

                const aRate =
                    a[1].correct / a[1].total;

                const bRate =
                    b[1].correct / b[1].total;

                return aRate - bRate;

            });


    sortedTopics.forEach(([topic, data]) => {

        const percentage =
            Math.round(
                (data.correct / data.total) * 100
            );


        const item =
            document.createElement("div");


        item.className =
            "topic-performance-item";


        item.innerHTML = `

            <div class="topic-performance-header">

                <strong>
                    ${topic}
                </strong>

                <span>
                    ${percentage}%
                </span>

            </div>

            <div class="progress-track">

                <div
                    class="progress-bar topic-bar"
                    style="width:${percentage}%">
                </div>

            </div>

            <small>
                ${data.correct} acerto(s)
                de ${data.total}
            </small>

        `;


        topicList.appendChild(item);

    });


    if (sortedTopics.length === 0) {

        topicList.innerHTML = `
            <p>
                Responda questões para visualizar seu desempenho.
            </p>
        `;

        return;

    }


    const worst =
        sortedTopics[0];


    const best =
        sortedTopics[sortedTopics.length - 1];


    const worstPercentage =
        Math.round(
            (worst[1].correct / worst[1].total) * 100
        );


    const bestPercentage =
        Math.round(
            (best[1].correct / best[1].total) * 100
        );


    document.getElementById("weakTopic").textContent =
        `${worst[0]} (${worstPercentage}%).`;


    document.getElementById("bestTopic").textContent =
        `${best[0]} (${bestPercentage}%).`;

}


/* =========================================================
   FINAL DO QUIZ
========================================================= */

function finishQuiz() {

    document.getElementById("questionText").textContent =
        "Você concluiu esta sequência de questões!";


    document.getElementById("answers").innerHTML = `

        <div class="quiz-finished">

            <span>
                🎉
            </span>

            <h3>
                Muito bem!
            </h3>

            <p>
                Seu desempenho foi registrado.
                Agora revise os assuntos em que teve mais dificuldade.
            </p>

        </div>

    `;


    document.getElementById("questionResult").innerHTML = "";

    document.getElementById("studyRecommendation").style.display =
        "none";

    document.getElementById("nextQuestion").style.display =
        "none";


    document.getElementById("progressBar").style.width =
        "100%";

}


/* =========================================================
   REVISAR QUESTÕES ERRADAS
========================================================= */

function reviewWrongQuestions() {

    const wrongQuestions =
        history
            .filter(item => !item.correct)
            .map(item => {

                return questionBank.find(
                    q => q.question === item.question
                );

            })
            .filter(Boolean);


    if (wrongQuestions.length === 0) {

        alert(
            "Você ainda não possui questões erradas para revisar."
        );

        return;

    }


    currentQuestions =
        shuffle(wrongQuestions);


    currentIndex = 0;

    reviewMode = true;


    loadQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   ABRIR MATERIAL DE ESTUDO
========================================================= */

function openStudy(type) {

    const content =
        document.getElementById("studyContent");

    const title =
        document.getElementById("studyContentTitle");

    const badge =
        document.getElementById("studyContentBadge");

    const body =
        document.getElementById("studyContentBody");


    content.style.display =
        "block";


    if (type === "flashcards") {

        badge.textContent =
            "FLASHCARDS";

        title.textContent =
            "Revisão rápida";

        body.innerHTML =
            getFlashcards();

    }


    if (type === "mapas") {

        badge.textContent =
            "MAPAS MENTAIS";

        title.textContent =
            "Mapa mental — Câncer de mama";

        body.innerHTML =
            getMindMaps();

    }


    if (type === "videos") {

        badge.textContent =
            "VÍDEOS";

        title.textContent =
            "Vídeos para complementar seus estudos";

        body.innerHTML =
            getVideos();

    }


    content.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   FECHAR MATERIAL
========================================================= */

function closeStudy() {

    document.getElementById("studyContent").style.display =
        "none";

}


/* =========================================================
   FLASHCARDS
========================================================= */

function getFlashcards() {

    return `

        <div class="flashcard-grid">


            <button class="study-flashcard"
                    onclick="this.classList.toggle('revealed')">

                <span>
                    PERGUNTA
                </span>

                <strong>
                    O que é o Outubro Rosa?
                </strong>

                <small>
                    Clique para revelar
                </small>

                <p>
                    Movimento de conscientização relacionado
                    principalmente à saúde da mulher e ao câncer de mama.
                </p>

            </button>


            <button class="study-flashcard"
                    onclick="this.classList.toggle('revealed')">

                <span>
                    PERGUNTA
                </span>

                <strong>
                    O que é rastreamento?
                </strong>

                <small>
                    Clique para revelar
                </small>

                <p>
                    Estratégia para identificar determinada doença
                    em pessoas assintomáticas dentro de critérios definidos.
                </p>

            </button>


            <button class="study-flashcard"
                    onclick="this.classList.toggle('revealed')">

                <span>
                    PERGUNTA
                </span>

                <strong>
                    Todo nódulo mamário é câncer?
                </strong>

                <small>
                    Clique para revelar
                </small>

                <p>
                    Não. Existem diversas causas benignas,
                    mas uma alteração nova deve ser avaliada adequadamente.
                </p>

            </button>


            <button class="study-flashcard"
                    onclick="this.classList.toggle('revealed')">

                <span>
                    PERGUNTA
                </span>

                <strong>
                    Qual é a importância dos fatores de risco?
                </strong>

                <small>
                    Clique para revelar
                </small>

                <p>
                    Eles podem ajudar a estimar o risco individual
                    e orientar estratégias de acompanhamento.
                </p>

            </button>


        </div>

    `;

}


/* =========================================================
   MAPAS MENTAIS
========================================================= */

function getMindMaps() {

    return `

        <div class="mind-map">

            <div class="mind-map-center">
                CÂNCER DE MAMA
            </div>


            <div class="mind-map-branch pink">

                <strong>
                    Fatores de risco
                </strong>

                <p>
                    • Idade<br>
                    • Histórico familiar<br>
                    • Fatores hormonais<br>
                    • Estilo de vida
                </p>

            </div>


            <div class="mind-map-branch yellow">

                <strong>
                    Investigação
                </strong>

                <p>
                    • História clínica<br>
                    • Exame físico<br>
                    • Exames complementares<br>
                    • Avaliação profissional
                </p>

            </div>


            <div class="mind-map-branch orange">

                <strong>
                    Sinais e sintomas
                </strong>

                <p>
                    • Alterações mamárias<br>
                    • Nódulos<br>
                    • Alterações de pele<br>
                    • Alterações persistentes
                </p>

            </div>


            <div class="mind-map-branch pink">

                <strong>
                    Prevenção
                </strong>

                <p>
                    • Hábitos saudáveis<br>
                    • Informação confiável<br>
                    • Acompanhamento<br>
                    • Estratégias de rastreamento
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   VÍDEOS
========================================================= */

function getVideos() {

    return `

        <div class="video-study-list">


            <article>

                <div class="video-icon">
                    🎥
                </div>

                <div>

                    <h3>
                        Câncer de mama — conceitos básicos
                    </h3>

                    <p>
                        Revisão introdutória sobre fatores de risco,
                        sinais clínicos e diagnóstico.
                    </p>

                </div>

                <button
                    class="btn-primary"
                    onclick="searchVideo('câncer de mama conceitos básicos medicina')">

                    Buscar vídeo →

                </button>

            </article>


            <article>

                <div class="video-icon">
                    🎥
                </div>

                <div>

                    <h3>
                        Outubro Rosa e educação em saúde
                    </h3>

                    <p>
                        Conteúdos relacionados à conscientização,
                        prevenção e saúde da mulher.
                    </p>

                </div>

                <button
                    class="btn-primary"
                    onclick="searchVideo('Outubro Rosa educação em saúde')">

                    Buscar vídeo →

                </button>

            </article>


            <article>

                <div class="video-icon">
                    🎥
                </div>

                <div>

                    <h3>
                        Rastreamento do câncer de mama
                    </h3>

                    <p>
                        Revisão dos conceitos de rastreamento
                        e investigação diagnóstica.
                    </p>

                </div>

                <button
                    class="btn-primary"
                    onclick="searchVideo('rastreamento câncer de mama medicina')">

                    Buscar vídeo →

                </button>

            </article>


        </div>

    `;

}


/* =========================================================
   BUSCAR VÍDEO
========================================================= */

function searchVideo(query) {

    const url =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(query);

    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   HISTÓRICO — LOCALSTORAGE
========================================================= */

function saveHistory() {

    localStorage.setItem(
        "rosamed_question_history",
        JSON.stringify(history)
    );

}


function loadHistory() {

    const saved =
        localStorage.getItem(
            "rosamed_question_history"
        );


    if (!saved)
        return;


    try {

        history =
            JSON.parse(saved);


        answered =
            history.length;


        correctAnswers =
            history.filter(
                item => item.correct
            ).length;


        wrongAnswers =
            history.filter(
                item => !item.correct
            ).length;


        updateStats();

        updateTopicPerformance();


        if (wrongAnswers > 0) {

            document.getElementById("reviewWrong").style.display =
                "inline-flex";

        }

    } catch (error) {

        console.error(
            "Erro ao carregar histórico:",
            error
        );

    }

}


/* =========================================================
   ATUALIZAR BOTÃO DE REVISÃO
========================================================= */

setInterval(() => {

    if (wrongAnswers > 0) {

        document.getElementById("reviewWrong").style.display =
            "inline-flex";

    }

}, 500);


/* =========================================================
   EMBARALHAR
========================================================= */

function shuffle(array) {

    return array.sort(
        () => Math.random() - 0.5
    );

}