// Inicializar Ícones Lucide
lucide.createIcons();

// --- LÓGICA DE CADASTRO E AUTHENTICAÇÃO ---
const authModal = document.getElementById('auth-modal');
const btnLoginModal = document.getElementById('btn-login-modal');
const btnCadastroModal = document.getElementById('btn-cadastro-modal');
const closeModal = document.getElementById('close-modal');
const formLogin = document.getElementById('form-login');
const formCadastro = document.getElementById('form-cadastro');
const tabLogin = document.getElementById('tab-login');
const tabCadastro = document.getElementById('tab-cadastro');

// Abrir e Fechar Modal
btnLoginModal.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  switchTab('login');
});

btnCadastroModal.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  switchTab('cadastro');
});

closeModal.addEventListener('click', () => {
  authModal.classList.add('hidden');
});

function switchTab(tab) {
  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabCadastro.classList.remove('active');
    formLogin.classList.remove('hidden');
    formCadastro.classList.add('hidden');
  } else {
    tabCadastro.classList.add('active');
    tabLogin.classList.remove('active');
    formCadastro.classList.remove('hidden');
    formLogin.classList.add('hidden');
  }
}

// Salvar Cadastro de Estudante (Armazenando Dados Requeridos no LocalStorage)
formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuario = {
    nome: document.getElementById('cad-nome').value,
    cursoFormacao: document.getElementById('cad-curso').value,
    email: document.getElementById('cad-email').value,
    celular: document.getElementById('cad-celular').value,
    dataNascimento: document.getElementById('cad-nascimento').value
  };

  // Salva no LocalStorage
  localStorage.setItem('usuarioRosaMed', JSON.stringify(usuario));

  alert(`Estudante ${usuario.nome} cadastrado(a) com sucesso!`);
  authModal.classList.add('hidden');
  formCadastro.reset();
  atualizarInterfaceUsuario();
});

function atualizarInterfaceUsuario() {
  const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioRosaMed'));
  if (usuarioSalvo) {
    btnLoginModal.style.display = 'none';
    btnCadastroModal.textContent = `Olá, Dr(a). ${usuarioSalvo.nome.split(' ')[0]}`;
  }
}

// Executar ao carregar a página
atualizarInterfaceUsuario();


// --- CALCULADORA MÉDICA BI-RADS ---
function calcularBIRADS() {
  const valor = document.getElementById('birads-select').value;
  const resultBox = document.getElementById('calc-result');
  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');

  resultBox.classList.remove('hidden');

  const diretrizes = {
    "1": {
      titulo: "BI-RADS 1: Exame Negativo",
      desc: "Conduta: Manter o rastreamento mamográfico de rotina anual a partir dos 40 anos (CBM/SBM) ou bienal dos 50 aos 69 anos (Ministério da Saúde)."
    },
    "2": {
      titulo: "BI-RADS 2: Achados Benignos",
      desc: "Conduta: Rastreamento mamográfico de rotina idêntico à população geral. Nenhuma intervenção necessária."
    },
    "3": {
      titulo: "BI-RADS 3: Achado Provavelmente Benigno",
      desc: "Conduta: Controle mamográfico unilateral/bilateral em 6 meses. Risco de malignidade menor que 2%."
    },
    "4": {
      titulo: "BI-RADS 4: Suspeito de Malignidade",
      desc: "Conduta: Recomendada investigação histopatológica (Core Biopsy ou Mamotomia). Subdividido em 4A, 4B e 4C."
    },
    "5": {
      titulo: "BI-RADS 5: Altamente Suspeito",
      desc: "Conduta: Biópsia indispensável. Risco de malignidade superior a 95%. Encaminhamento imediato à Oncologia/Mastologia."
    },
    "6": {
      titulo: "BI-RADS 6: Malignidade Comprovada",
      desc: "Conduta: Planejamento terapêutico (Quimioterapia neoadjuvante, cirurgia, radioterapia) por equipe multidisciplinar."
    }
  };

  resultTitle.textContent = diretrizes[valor].titulo;
  resultDesc.textContent = diretrizes[valor].desc;
}


// --- SISTEMA DE QUESTÕES E HISTÓRICO DE PROGRESSO ---
let questoesRespondidas = 0;
let acertos = 0;

function responderQuestao() {
  const opcoes = document.getElementsByName('q1');
  let selecionado = null;

  for (const op of opcoes) {
    if (op.checked) {
      selecionado = op.value;
      break;
    }
  }

  if (!selecionado) {
    alert("Por favor, selecione uma alternativa!");
    return;
  }

  questoesRespondidas++;

  // Resposta Correta: C
  if (selecionado === 'C') {
    alert("Resposta Correta! BI-RADS 4 exige investigação bióptica.");
    acertos++;
  } else {
    alert("Resposta Incorreta. A alternativa correta é a C (BI-RADS 4 — Investigação histopatológica).");
  }

  atualizarHistorico();
}

function atualizarHistorico() {
  document.getElementById('total-questoes').textContent = questoesRespondidas;
  document.getElementById('total-acertos').textContent = acertos;
  
  const taxa = Math.round((acertos / questoesRespondidas) * 100);
  document.getElementById('taxa-acerto').textContent = `${taxa}%`;
  document.getElementById('progress-fill').style.width = `${taxa}%`;
}


// --- FÓRUM DE COMENTÁRIOS ---
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioRosaMed'));
  const autor = usuarioSalvo ? `\({usuarioSalvo.nome} (\){usuarioSalvo.cursoFormacao})` : "Estudante Anônimo";
  const texto = commentInput.value;

  const commentElement = document.createElement('div');
  commentElement.className = 'comment-item';
  commentElement.innerHTML = `
    **${autor}**
${texto}

`;

commentsList.prepend(commentElement);
commentInput.value = '';
});