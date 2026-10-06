// ========================================
// ROSAMED - SISTEMA PRINCIPAL
// ========================================


const user =
    JSON.parse(
        localStorage.getItem("rosaMedUser")
    );


// ========================================
// PROTEGER DASHBOARD
// ========================================

const isDashboard =
    window.location.pathname.includes(
        "dashboard"
    );


if (
    isDashboard &&
    !user
) {

    window.location.href =
        "login.html";

}


// ========================================
// NOME DO USUÁRIO
// ========================================

const userName =
    document.getElementById(
        "userName"
    );


const welcomeName =
    document.getElementById(
        "welcomeName"
    );


if (user) {

    if (userName) {

        userName.textContent =
            user.name;

    }


    if (welcomeName) {

        welcomeName.textContent =
            user.name.split(" ")[0];

    }

}


// ========================================
// HISTÓRICO DE QUESTÕES
// ========================================

const history =
    user?.questionHistory || [];


const totalQuestions =
    document.getElementById(
        "totalQuestions"
    );


const totalCorrect =
    document.getElementById(
        "totalCorrect"
    );


const progressPercent =
    document.getElementById(
        "progressPercent"
    );


const progressNumber =
    document.getElementById(
        "progressNumber"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


let percentage = 0;


if (history.length > 0) {

    const correct =
        history.filter(
            item => item.correct
        ).length;


    percentage =
        Math.round(
            correct /
            history.length *
            100
        );

}


if (totalQuestions) {

    totalQuestions.textContent =
        history.length;

}


if (totalCorrect) {

    totalCorrect.textContent =
        percentage + "%";

}


if (progressPercent) {

    progressPercent.textContent =
        percentage + "%";

}


if (progressNumber) {

    progressNumber.textContent =
        percentage + "%";

}


if (progressBar) {

    progressBar.style.width =
        percentage + "%";

}


// ========================================
// COMENTÁRIOS
// ========================================

function addComment() {

    if (!user) {

        alert(
            "Faça login para comentar."
        );

        return;
    }


    const input =
        document.getElementById(
            "commentInput"
        );


    const text =
        input.value.trim();


    if (!text) {

        alert(
            "Digite um comentário."
        );

        return;
    }


    if (!user.comments) {

        user.comments = [];

    }


    user.comments.push({

        text: text,

        date:
            new Date().toLocaleString(
                "pt-BR"
            )

    });


    localStorage.setItem(
        "rosaMedUser",
        JSON.stringify(user)
    );


    input.value = "";


    renderComments();

}


function renderComments() {

    const container =
        document.getElementById(
            "commentsList"
        );


    if (!container || !user) {
        return;
    }


    const comments =
        user.comments || [];


    container.innerHTML = "";


    if (comments.length === 0) {

        container.innerHTML = `

            <p style="
                color:var(--texto-claro);
                margin-top:15px;
            ">

                Você ainda não possui comentários.

            </p>

        `;

        return;
    }


    comments
        .slice()
        .reverse()
        .forEach(
            comment => {

                const div =
                    document.createElement(
                        "div"
                    );


                div.className =
                    "comment-item";


                div.innerHTML = `

                    <p>
                        ${escapeHTML(
                            comment.text
                        )}
                    </p>

                    <small>
                        ${comment.date}
                    </small>

                `;


                container.appendChild(
                    div
                );

            }
        );

}


function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent = text;

    return div.innerHTML;

}


renderComments();


// ========================================
// LOGOUT
// ========================================

function logout() {

    localStorage.removeItem(
        "rosaMedLogged"
    );

    window.location.href =
        "index.html";

}
