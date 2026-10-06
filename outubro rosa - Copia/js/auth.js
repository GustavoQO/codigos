// =========================================================
// ROSAMED - SISTEMA DE AUTENTICAÇÃO
// =========================================================


// =========================================================
// CADASTRO
// =========================================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome = document.getElementById("name").value.trim();
        const curso = document.getElementById("course").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const celular = document.getElementById("phone").value.trim();
        const nascimento = document.getElementById("birth").value;
        const senha = document.getElementById("password").value;


        // Verifica os campos obrigatórios

        if (
            !nome ||
            !curso ||
            !email ||
            !celular ||
            !nascimento ||
            !senha
        ) {

            alert("Por favor, preencha todos os campos.");

            return;
        }


        // Verifica tamanho mínimo da senha

        if (senha.length < 6) {

            alert("A senha deve possuir pelo menos 6 caracteres.");

            return;
        }


        // Verifica se já existe um cadastro

        const usuarioExistente =
            JSON.parse(localStorage.getItem("usuarioRosaMed"));


        if (usuarioExistente) {

            if (usuarioExistente.email === email) {

                alert(
                    "Este e-mail já possui uma conta cadastrada."
                );

                return;
            }

            const continuar =
                confirm(
                    "Já existe uma conta cadastrada neste navegador. " +
                    "Deseja substituí-la por este novo cadastro?"
                );

            if (!continuar) {
                return;
            }
        }


        // Cria o usuário

        const usuario = {

            nome: nome,

            cursoFormacao: curso,

            email: email,

            celular: celular,

            dataNascimento: nascimento,

            senha: senha

        };


        // Salva no navegador

        localStorage.setItem(
            "usuarioRosaMed",
            JSON.stringify(usuario)
        );


        // Remove eventual sessão anterior

        localStorage.removeItem("usuarioLogado");


        alert(
            `Cadastro realizado com sucesso, ${nome}!`
        );


        // Depois do cadastro, vai para o LOGIN

        window.location.href = "login.html";

    });

}



// =========================================================
// LOGIN
// =========================================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim()
                .toLowerCase();


        const senha =
            document
                .getElementById("loginPassword")
                .value;


        // Procura o cadastro

        const usuarioSalvo =
            JSON.parse(
                localStorage.getItem("usuarioRosaMed")
            );


        // Não existe cadastro

        if (!usuarioSalvo) {

            alert(
                "Nenhuma conta foi encontrada. " +
                "Faça seu cadastro primeiro."
            );

            return;
        }


        // Verifica o e-mail

        if (usuarioSalvo.email !== email) {

            alert(
                "E-mail ou senha incorretos."
            );

            return;
        }


        // Verifica a senha

        if (usuarioSalvo.senha !== senha) {

            alert(
                "E-mail ou senha incorretos."
            );

            return;
        }


        // =================================================
        // LOGIN CORRETO
        // =================================================

        localStorage.setItem(
            "usuarioLogado",
            "true"
        );


        localStorage.setItem(
            "usuarioAtual",
            JSON.stringify({
                nome: usuarioSalvo.nome,
                email: usuarioSalvo.email,
                cursoFormacao: usuarioSalvo.cursoFormacao
            })
        );


        alert(
            `Login realizado com sucesso, ${usuarioSalvo.nome}!`
        );


        // Só agora pode entrar no index

        window.location.href = "index.html";

    });

}