const articles = [
  {
    type: "artigos",
    label: "ARTIGO",
    title: "Saúde mental como prioridade global",
    description:
      "A importância da saúde mental para o bem-estar, os direitos humanos e o desenvolvimento das comunidades.",
    time: "Leitura rápida",
    topic: "Saúde mental",
    visual: "◌",
    source: "Nações Unidas",
    sourceUrl: "https://www.un.org/en/global-issues/mental-health",
  },
  {
    type: "artigos",
    label: "ARTIGO",
    title: "Ansiedade: entendendo os sinais",
    description:
      "Saiba como a ansiedade pode ajudar em algumas situações e quando pode prejudicar o funcionamento diário.",
    time: "Leitura rápida",
    topic: "Ansiedade",
    visual: "≈",
    source: "Ministério da Saúde",
    sourceUrl: "https://bvsms.saude.gov.br/ansiedade/",
  },
  {
    type: "artigos",
    label: "ARTIGO",
    title: "Ansiedade: o que é e como se manifesta",
    description:
      "Uma explicação sobre ansiedade, suas manifestações e a importância de buscar orientação adequada.",
    time: "Leitura rápida",
    topic: "Ansiedade",
    visual: "◉",
    source: "Hospital Israelita Albert Einstein",
    sourceUrl: "https://www.einstein.br/n/glossario-de-saude/ansiedade",
  },
  {
    type: "estudos",
    label: "ESTUDO CIENTÍFICO",
    title: "Sono e processamento emocional",
    description:
      "Uma revisão científica explora como o sono e sua privação se relacionam com o processamento das emoções.",
    time: "Estudo científico",
    topic: "Estudo revisado",
    visual: "⌁",
    source: "PubMed Central",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7181893/",
  },
  {
    type: "estudos",
    label: "ESTUDO CIENTÍFICO",
    title: "Sono e regulação emocional na adolescência",
    description:
      "Pesquisa sobre as relações entre qualidade do sono, dificuldades de regulação emocional e saúde mental em adolescentes.",
    time: "Estudo científico",
    topic: "Sono e emoções",
    visual: "⌂",
    source: "PubMed Central",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11130951/",
  },
  {
    type: "artigos",
    label: "ARTIGO",
    title: "A importância do autocuidado",
    description:
      "Uma reflexão sobre o papel do autocuidado na saúde e na prática da psicologia.",
    time: "Leitura rápida",
    topic: "Autocuidado",
    visual: "✦",
    source: "APA",
    sourceUrl: "https://www.apa.org/monitor/2021/04/feature-imperative-self-care",
  },
  {
    type: "artigos",
    label: "ARTIGO",
    title: "Dicas de psicólogos para cuidar da saúde mental",
    description:
      "Sugestões práticas de psicólogos para apoiar o bem-estar e a saúde mental no dia a dia.",
    time: "Leitura rápida",
    topic: "Saúde mental",
    visual: "✧",
    source: "APA",
    sourceUrl: "https://www.apa.org/topics/mental-health/tips-psychologists-use",
  },
];

const glossary = [
  {
    term: "Ansiedade",
    category: "emoções",
    definition:
      "Uma resposta emocional e física diante de situações percebidas como ameaçadoras ou incertas.",
    tag: "Emoções e sentimentos",
    details: {
      overview:
        "A ansiedade é uma reação natural do corpo diante de risco percebido, mas quando se torna frequente ou intensa, pode interferir na rotina, no sono e nos relacionamentos.",
      symptoms:
        "Pensamentos acelerados, tensão muscular, inquietação, palpitações, dificuldade para respirar ou preocupação exagerada.",
      whenToSeekHelp:
        "Vale procurar apoio profissional quando a preocupação passa a controlar grande parte do dia ou prejudica trabalho, estudos e bem-estar.",
      sources: [
        {
          label: "OMS",
          url: "https://www.who.int/health-topics/mental-health",
        },
        {
          label: "Ministério da Saúde",
          url: "https://www.gov.br/saude/pt-br/assuntos/saude-mental",
        },
      ],
    },
  },
  {
    term: "Depressão",
    category: "transtornos",
    definition:
      "Condição de saúde que pode envolver tristeza persistente, perda de interesse e alterações no sono ou energia.",
    tag: "Transtornos do humor",
    details: {
      overview:
        "A depressão não é “frescura” nem falta de força. É uma condição de saúde que pode afetar humor, energia, sono, alimentação e capacidade de concentração.",
      symptoms:
        "Tristeza persistente, perda de interesse, cansaço, alteração de apetite, dificuldades de sono ou sensação de vazio.",
      whenToSeekHelp:
        "Se os sintomas duram mais de duas semanas ou afetam a rotina, é importante procurar um profissional de saúde mental.",
      sources: [
        {
          label: "OMS",
          url: "https://www.who.int/news-room/fact-sheets/detail/depression",
        },
        { label: "CVV", url: "https://www.cvv.org.br/" },
      ],
    },
  },
  {
    term: "Burnout",
    category: "condições",
    definition:
      "Estado de esgotamento relacionado ao estresse crônico no trabalho ou em outras atividades.",
    tag: "Estresse e trabalho",
    details: {
      overview:
        "Burnout é um desgaste emocional e físico resultante de pressão prolongada, excesso de demandas e pouca recuperação.",
      symptoms:
        "Exaustão intensa, irritabilidade, sensação de impotência, dificuldade de concentração e desânimo.",
      whenToSeekHelp:
        "Quando o corpo e a mente se mostram exaustos por semanas ou meses, é um sinal para reduzir carga e buscar apoio.",
      sources: [
        { label: "WHO", url: "https://www.who.int/" },
        { label: "APA", url: "https://www.apa.org/" },
      ],
    },
  },
  {
    term: "Pânico",
    category: "transtornos",
    definition:
      "Episódio súbito de medo intenso, que pode vir acompanhado de sensações físicas marcantes.",
    tag: "Transtornos de ansiedade",
    details: {
      overview:
        "Os ataques de pânico podem provocar medo intenso em poucos minutos e muitas vezes vêm junto de palpitações, tontura e sensação de falta de ar.",
      symptoms:
        "Taquicardia, sudorese, tremor, medo intenso, tensão corporal e sensação de perda de controle.",
      whenToSeekHelp:
        "Quando esses episódios se repetem, tornam-se frequentes ou geram evitação de situações, é importante conversar com ajuda profissional.",
      sources: [
        { label: "APA", url: "https://www.apa.org/topics/anxiety" },
        {
          label: "OMS",
          url: "https://www.who.int/health-topics/mental-health",
        },
      ],
    },
  },
  {
    term: "Autoestima",
    category: "emoções",
    definition:
      "A forma como uma pessoa percebe, avalia e se relaciona consigo mesma.",
    tag: "Autoconhecimento",
    details: {
      overview:
        "A autoestima influencia a forma como reagimos a desafios, críticas e relações. Ela pode aumentar com acolhimento, práticas de autocuidado e apoio seguro.",
      symptoms:
        "Autojulgamento excessivo, dificuldade de aceitar elogios, medo de errar ou de ser rejeitado.",
      whenToSeekHelp:
        "Se a forma como você se vê está sempre muito dura ou constante, vale conversar com um profissional que possa ajudar a construir autocuidado.",
      sources: [
        { label: "APA", url: "https://www.apa.org/topics/self-esteem" },
        { label: "Mind", url: "https://www.mind.org.uk/" },
      ],
    },
  },
  {
    term: "TDAH",
    category: "condições",
    definition:
      "Condição do neurodesenvolvimento que pode afetar atenção, organização e controle de impulsos.",
    tag: "Neurodesenvolvimento",
    details: {
      overview:
        "O TDAH envolve diferenças persistentes de atenção, impulsividade e atividade motora. O diagnóstico depende de avaliação profissional e não é feito apenas por sintomas isolados.",
      symptoms:
        "Dificuldade de foco, esquecimento, distração, inquietação, impulsividade e procrastinação.",
      whenToSeekHelp:
        "Quando esses padrões afetam rotina, estudos ou trabalho, a avaliação de um profissional qualificado é recomendada.",
      sources: [
        {
          label: "NIH",
          url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
        },
        {
          label: "OMS",
          url: "https://www.who.int/news-room/fact-sheets/detail/attention-deficit-hyperactivity-disorder-(adhd)",
        },
      ],
    },
  },
];

const viewButtons = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view");
const toast = document.querySelector("#toast");
const glossaryDetail = document.querySelector("#glossary-detail");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(
    () => toast.classList.remove("visible"),
    2600,
  );
}

function showView(viewName) {
  views.forEach((view) =>
    view.classList.toggle("active-view", view.id === `view-${viewName}`),
  );
  document
    .querySelectorAll(".nav-item[data-view]")
    .forEach((button) =>
      button.classList.toggle("active", button.dataset.view === viewName),
    );
  window.scrollTo({ top: 0, behavior: "smooth" });
}

viewButtons.forEach((button) =>
  button.addEventListener("click", () => showView(button.dataset.view)),
);
document.querySelectorAll("[data-view-link]").forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView(link.dataset.viewLink);
  }),
);

function renderArticles(filter = "todos") {
  const list = document.querySelector("#article-list");
  const visibleArticles =
    filter === "todos" || filter === "salvos"
      ? articles
      : articles.filter((article) => article.type === filter);
  list.innerHTML = visibleArticles
    .map(
      (article) =>
        `<article class="article-card" tabindex="0"><div class="article-visual">${article.visual}</div><div class="article-info"><span class="category-tag">${article.label}</span><h3>${article.title}</h3><p>${article.description}</p><div class="article-meta"><span>${article.time}</span><span>${article.topic}</span></div><a class="article-source" href="${article.sourceUrl}" target="_blank" rel="noreferrer">Fonte: ${article.source}</a></div><button class="article-arrow" aria-label="Abrir artigo">→</button></article>`,
    )
    .join("");
  list
    .querySelectorAll(".article-card")
    .forEach((card) =>
      card.addEventListener("click", () =>
        showToast("Artigo aberto em modo de leitura."),
      ),
    );
}

document.querySelectorAll("[data-forum-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-forum-filter]")
      .forEach((item) => item.classList.toggle("active", item === button));
    renderArticles(button.dataset.forumFilter);
  }),
);

function showGlossaryDetail(item) {
  if (!item || !item.details) return;
  glossaryDetail.dataset.term = item.term;
  glossaryDetail.hidden = false;
  glossaryDetail.innerHTML = `
		<div class="glossary-detail-header">
			<span class="term-letter">${item.term[0]}</span>
			<div>
				<p class="eyebrow">${item.tag}</p>
				<h3>${item.term}</h3>
			</div>
		</div>
		<p>${item.details.overview}</p>
		<div class="glossary-detail-columns">
			<div><strong>Sinais comuns</strong><ul>${item.details.symptoms
        .split(",")
        .map((signal) => `<li>${signal.trim()}</li>`)
        .join("")}</ul></div>
			<div><strong>Quando buscar ajuda</strong><p>${item.details.whenToSeekHelp}</p><div class="glossary-sources"><strong>Fontes confiáveis</strong>${item.details.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`).join("")}</div></div>
		</div>
	`;
  glossaryDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderGlossary(filter = "todos", search = "") {
  const grid = document.querySelector("#glossary-grid");
  const normalizedSearch = search.toLowerCase().trim();
  const terms = glossary.filter(
    (item) =>
      (filter === "todos" || item.category === filter) &&
      (!normalizedSearch ||
        `${item.term} ${item.definition}`
          .toLowerCase()
          .includes(normalizedSearch)),
  );
  grid.innerHTML = terms.length
    ? terms
        .map(
          (item) =>
            `<article class="glossary-card" data-term="${item.term}" tabindex="0"><span class="term-letter">${item.term[0]}</span><h3>${item.term}</h3><p>${item.definition}</p><span class="glossary-tag">${item.tag}</span></article>`,
        )
        .join("")
    : "<p>Nenhum termo encontrado. Tente outra busca.</p>";
  grid.querySelectorAll(".glossary-card").forEach((card) => {
    const term = glossary.find((item) => item.term === card.dataset.term);
    card.addEventListener("click", () => showGlossaryDetail(term));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showGlossaryDetail(term);
      }
    });
  });
  if (
    glossaryDetail.dataset.term &&
    !terms.some((item) => item.term === glossaryDetail.dataset.term)
  ) {
    glossaryDetail.hidden = true;
    glossaryDetail.innerHTML = "";
    delete glossaryDetail.dataset.term;
  }
}

document.querySelectorAll("[data-glossary-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-glossary-filter]")
      .forEach((item) => item.classList.toggle("active", item === button));
    renderGlossary(
      button.dataset.glossaryFilter,
      document.querySelector("#glossary-search").value,
    );
  }),
);
document
  .querySelector("#glossary-search")
  .addEventListener("input", (event) =>
    renderGlossary(
      document.querySelector(".chip.active").dataset.glossaryFilter,
      event.target.value,
    ),
  );

const messages = document.querySelector("#messages");
const chatInput = document.querySelector("#chat-input");
const crisisWords = [
  "me machucar",
  "me matar",
  "suicídio",
  "suicidio",
  "não quero viver",
  "desespero",
];

function assistantReply(text) {
  const normalizedText = text.toLowerCase();
  if (crisisWords.some((word) => normalizedText.includes(word)))
    return "<strong>Você não precisa enfrentar isso sozinho.</strong><br>Se houver risco imediato, ligue para o SAMU (192) ou vá a uma emergência. Para conversar agora, o CVV atende gratuitamente pelo 188, 24 horas.";
  if (normalizedText.includes("ansiedade"))
    return "Ansiedade é uma resposta do corpo diante de uma situação percebida como ameaçadora ou incerta. Ela pode aparecer em pensamentos, sensações físicas e comportamentos. Se estiver atrapalhando sua rotina, conversar com um profissional pode ajudar.";
  if (normalizedText.includes("depress") || normalizedText.includes("humor"))
    return "A depressão é uma condição de saúde que vai além da tristeza momentânea e pode afetar sono, energia, concentração e vontade de fazer coisas. Falar com um profissional é um passo válido e acolhedor.";
  if (normalizedText.includes("estresse") || normalizedText.includes("burnout"))
    return "Estresse crônico e burnout costumam aparecer como cansaço, irritabilidade, sensação de esgotamento e dificuldades de atenção. Reduzir carga, descansar e buscar apoio pode fazer diferença.";
  if (normalizedText.includes("sono") || normalizedText.includes("dormir"))
    return "A qualidade do sono influencia humor, sensação de energia e capacidade de lidar com o dia. Criar uma rotina mais calma e reduzir estímulos antes de dormir ajudam muito.";
  if (
    normalizedText.includes("cuidar") ||
    normalizedText.includes("autocuidado")
  )
    return "Um começo possível é escolher algo pequeno e concreto: respirar com atenção por alguns minutos, descansar, falar com alguém de confiança ou registrar o que você está sentindo. O cuidado não precisa ser perfeito para ser válido.";
  if (normalizedText.includes("artigo") || normalizedText.includes("estudo"))
    return "Você pode encontrar artigos e estudos na área Fórum. Separei conteúdos sobre ansiedade, autocuidado, sono e saúde emocional com fontes confiáveis para você explorar no seu ritmo.";
  if (
    normalizedText.includes("ajuda") ||
    normalizedText.includes("profissional") ||
    normalizedText.includes("psic")
  )
    return "Buscar ajuda profissional é um cuidado importante, não um sinal de fracasso. Um psicólogo ou outro profissional de saúde mental pode te ajudar a entender o que está acontecendo e encontrar caminhos.";
  return "Posso ajudar com termos do glossário, artigos e dúvidas gerais sobre saúde mental. Para uma avaliação individual ou diagnóstico, procure um psicólogo ou outro profissional qualificado.";
}

function addMessage(text, kind) {
  const message = document.createElement("div");
  message.className = `message ${kind === "user" ? "user-message" : "assistant-message"}`;
  message.innerHTML =
    kind === "user"
      ? `<div><p>${text}</p><span class="message-time">agora</span></div>`
      : `<span class="message-avatar">M</span><div><p>${text}</p><span class="message-time">agora</span></div>`;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function submitChat(text) {
  const cleanText = text.trim();
  if (!cleanText) return;
  addMessage(cleanText.replace(/[<>&]/g, ""), "user");
  chatInput.value = "";
  window.setTimeout(
    () => addMessage(assistantReply(cleanText), "assistant"),
    450,
  );
}

document.querySelector("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitChat(chatInput.value);
});
document
  .querySelectorAll("[data-suggestion]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      submitChat(button.dataset.suggestion),
    ),
  );

function getCurrentUser() {
  return typeof MindSafeDB !== "undefined" ? MindSafeDB.getCurrentUser() : null;
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateValue));
}

function formatShortDate(dateValue) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
  }).format(new Date(dateValue));
}

function renderUserData() {
  const user = getCurrentUser();
  if (!user) return;

  const firstName = (user.name || "").trim().split(/\s+/)[0] || "você";
  const welcome = document.querySelector("#welcome-title");
  const miniName = document.querySelector(".user-mini strong");
  const miniAvatar = document.querySelector(".user-mini .avatar");
  const assistantGreeting = document.querySelector("#messages .assistant-message p");

  if (welcome) welcome.innerHTML = `Bom te ver por aqui, ${firstName}<span class="soft-dot">!</span>`;
  if (miniName) miniName.textContent = user.name || "Meu perfil";
  if (miniAvatar) miniAvatar.textContent = getInitials(user.name);
  if (assistantGreeting) assistantGreeting.textContent = `Olá, ${firstName}. Eu estou aqui para ajudar você a entender melhor temas de saúde mental.`;
}

function getInitials(name = "MS") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "MS";
}

function renderHistory() {
  const user = getCurrentUser();
  if (!user || typeof MindSafeDB === "undefined") return;

  const moods = MindSafeDB.getMoods(user.id);
  const diary = MindSafeDB.getDiary(user.id);
  const timeline = document.querySelector(".timeline");
  const summaryCards = document.querySelectorAll(".summary-card strong");

  if (summaryCards[0]) summaryCards[0].textContent = moods.length;
  if (summaryCards[1]) summaryCards[1].textContent = diary.length;
  if (summaryCards[2]) {
    const dates = [...moods, ...diary].map((item) => new Date(item.createdAt).getTime());
    const days = dates.length
      ? Math.max(1, Math.ceil((Date.now() - Math.min(...dates)) / 86400000))
      : 0;
    summaryCards[2].textContent = days ? Math.min(days, 999) : 0;
  }

  if (!timeline) return;
  const heading = timeline.querySelector(".section-heading");
  const items = [
    ...moods.map((item) => ({ type: "mood", title: item.mood, date: item.createdAt, text: "Check-in emocional", dot: "green-dot" })),
    ...diary.map((item) => ({ type: "diary", title: item.text.slice(0, 55) + (item.text.length > 55 ? "…" : ""), date: item.createdAt, text: "Entrada no diário", dot: "blue-dot" })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  timeline.querySelectorAll(".timeline-item").forEach((item) => item.remove());

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "timeline-empty";
    empty.textContent = "Seus registros aparecerão aqui conforme você usar o MindSafe.";
    timeline.appendChild(empty);
    return;
  }

  items.slice(0, 12).forEach((item) => {
    const row = document.createElement("div");
    row.className = "timeline-item";
    row.innerHTML = `<span class="timeline-dot ${item.dot}"></span><div><strong></strong><p></p></div><time></time>`;
    row.querySelector("strong").textContent = item.title;
    row.querySelector("p").textContent = item.text;
    row.querySelector("time").textContent = formatDate(item.date);
    timeline.appendChild(row);
  });

  if (heading) timeline.prepend(heading);

  const recentPanel = document.querySelector(".recent-panel");
  if (recentPanel) {
    recentPanel.querySelectorAll(".record-row").forEach((row) => row.remove());
    const recent = items.slice(0, 2);
    recent.forEach((item) => {
      const row = document.createElement("div");
      row.className = "record-row";
      row.innerHTML = `<span class="record-icon ${item.type === "mood" ? "yellow" : "blue"}">${item.type === "mood" ? "◡" : "☰"}</span><span><strong></strong><small></small></span><span class="record-arrow">→</span>`;
      row.querySelector("strong").textContent = item.title;
      row.querySelector("small").textContent = `${item.text} · ${formatShortDate(item.date)}`;
      recentPanel.appendChild(row);
    });
  }
}

document.querySelectorAll("[data-mood]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-mood]")
      .forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");

    const user = getCurrentUser();
    if (!user || typeof MindSafeDB === "undefined") {
      showToast("Entre ou crie uma conta para salvar seu check-in.");
      return;
    }

    MindSafeDB.addMood(user.id, button.dataset.mood);
    document.querySelector(".saved-mood").textContent =
      `Check-in salvo: ${button.dataset.mood}. Obrigado por se escutar.`;
    renderHistory();
  }),
);

document.querySelector("#save-diary").addEventListener("click", () => {
  const diaryText = document.querySelector("#diary-text");
  if (!diaryText.value.trim()) {
    showToast("Escreva algo antes de salvar seu registro.");
    return;
  }

  const user = getCurrentUser();
  if (!user || typeof MindSafeDB === "undefined") {
    showToast("Entre ou crie uma conta para salvar seu diário.");
    return;
  }

  MindSafeDB.addDiary(user.id, diaryText.value);
  document.querySelector("#diary-status").textContent =
    "Registro salvo com privacidade.";
  diaryText.value = "";
  renderHistory();
});
document.querySelector("#use-prompt").addEventListener("click", () => {
  showView("diario");
  document.querySelector("#diary-text").focus();
});

document
  .querySelector("#global-search")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      showView("glossario");
      document.querySelector("#glossary-search").value = event.target.value;
      renderGlossary("todos", event.target.value);
    }
  });

document.querySelectorAll("[data-view]").forEach((button) => {
  if (button.dataset.view === "glossario" && button.tagName === "BUTTON") {
    button.addEventListener("click", () =>
      showToast(
        "Explore termos e veja informações confiáveis ao clicar neles.",
      ),
    );
  }
});

renderArticles();
renderGlossary();
renderUserData();
renderHistory();
