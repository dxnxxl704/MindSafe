const articles = [
	{ type: 'artigos', label: 'ARTIGO', title: 'Quando a mente pede uma pausa', description: 'Entenda por que descansar também é uma forma de cuidado e como reconhecer os sinais de sobrecarga.', time: '6 min de leitura', topic: 'Saúde emocional', visual: '◌' },
	{ type: 'artigos', label: 'ARTIGO', title: 'Ansiedade: ouvindo os sinais do corpo', description: 'Uma conversa clara sobre sintomas, acolhimento e possibilidades de cuidado.', time: '8 min de leitura', topic: 'Ansiedade', visual: '≈' },
	{ type: 'estudos', label: 'ESTUDO CIENTÍFICO', title: 'Sono e regulação emocional', description: 'O que pesquisas recentes mostram sobre a relação entre descanso e bem-estar.', time: '12 min de leitura', topic: 'Estudo revisado', visual: '⌁' },
	{ type: 'artigos', label: 'ARTIGO', title: 'Pequenos hábitos de autocuidado', description: 'Cuidado possível não precisa ser perfeito: comece pelo que cabe no seu dia.', time: '5 min de leitura', topic: 'Autocuidado', visual: '✦' }
];

const glossary = [
	{ term: 'Ansiedade', category: 'emoções', definition: 'Uma resposta emocional e física diante de situações percebidas como ameaçadoras ou incertas.', tag: 'Emoções e sentimentos' },
	{ term: 'Depressão', category: 'transtornos', definition: 'Condição de saúde que pode envolver tristeza persistente, perda de interesse e alterações no sono ou energia.', tag: 'Transtornos do humor' },
	{ term: 'Burnout', category: 'condições', definition: 'Estado de esgotamento relacionado ao estresse crônico no trabalho ou em outras atividades.', tag: 'Estresse e trabalho' },
	{ term: 'Pânico', category: 'transtornos', definition: 'Episódio súbito de medo intenso, que pode vir acompanhado de sensações físicas marcantes.', tag: 'Transtornos de ansiedade' },
	{ term: 'Autoestima', category: 'emoções', definition: 'A forma como uma pessoa percebe, avalia e se relaciona consigo mesma.', tag: 'Autoconhecimento' },
	{ term: 'TDAH', category: 'condições', definition: 'Condição do neurodesenvolvimento que pode afetar atenção, organização e controle de impulsos.', tag: 'Neurodesenvolvimento' }
];

const viewButtons = document.querySelectorAll('[data-view]');
const views = document.querySelectorAll('.view');
const toast = document.querySelector('#toast');

function showToast(message) {
	toast.textContent = message;
	toast.classList.add('visible');
	window.clearTimeout(showToast.timeout);
	showToast.timeout = window.setTimeout(() => toast.classList.remove('visible'), 2600);
}

function showView(viewName) {
	views.forEach((view) => view.classList.toggle('active-view', view.id === `view-${viewName}`));
	document.querySelectorAll('.nav-item[data-view]').forEach((button) => button.classList.toggle('active', button.dataset.view === viewName));
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

viewButtons.forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-view-link]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); showView(link.dataset.viewLink); }));

function renderArticles(filter = 'todos') {
	const list = document.querySelector('#article-list');
	const visibleArticles = filter === 'todos' || filter === 'salvos' ? articles : articles.filter((article) => article.type === filter);
	list.innerHTML = visibleArticles.map((article) => `<article class="article-card" tabindex="0"><div class="article-visual">${article.visual}</div><div class="article-info"><span class="category-tag">${article.label}</span><h3>${article.title}</h3><p>${article.description}</p><div class="article-meta"><span>${article.time}</span><span>${article.topic}</span></div></div><button class="article-arrow" aria-label="Abrir artigo">→</button></article>`).join('');
	list.querySelectorAll('.article-card').forEach((card) => card.addEventListener('click', () => showToast('Artigo aberto em modo de leitura.')));
}

document.querySelectorAll('[data-forum-filter]').forEach((button) => button.addEventListener('click', () => {
	document.querySelectorAll('[data-forum-filter]').forEach((item) => item.classList.toggle('active', item === button));
	renderArticles(button.dataset.forumFilter);
}));

function renderGlossary(filter = 'todos', search = '') {
	const grid = document.querySelector('#glossary-grid');
	const normalizedSearch = search.toLowerCase().trim();
	const terms = glossary.filter((item) => (filter === 'todos' || item.category === filter) && (!normalizedSearch || `${item.term} ${item.definition}`.toLowerCase().includes(normalizedSearch)));
	grid.innerHTML = terms.length ? terms.map((item) => `<article class="glossary-card"><span class="term-letter">${item.term[0]}</span><h3>${item.term}</h3><p>${item.definition}</p><span class="glossary-tag">${item.tag}</span></article>`).join('') : '<p>Nenhum termo encontrado. Tente outra busca.</p>';
}

document.querySelectorAll('[data-glossary-filter]').forEach((button) => button.addEventListener('click', () => {
	document.querySelectorAll('[data-glossary-filter]').forEach((item) => item.classList.toggle('active', item === button));
	renderGlossary(button.dataset.glossaryFilter, document.querySelector('#glossary-search').value);
}));
document.querySelector('#glossary-search').addEventListener('input', (event) => renderGlossary(document.querySelector('.chip.active').dataset.glossaryFilter, event.target.value));

const messages = document.querySelector('#messages');
const chatInput = document.querySelector('#chat-input');
const crisisWords = ['me machucar', 'me matar', 'suicídio', 'suicidio', 'não quero viver', 'desespero'];

function assistantReply(text) {
	const normalizedText = text.toLowerCase();
	if (crisisWords.some((word) => normalizedText.includes(word))) return '<strong>Você não precisa enfrentar isso sozinho.</strong><br>Se houver risco imediato, ligue para o SAMU (192) ou vá a uma emergência. Para conversar agora, o CVV atende gratuitamente pelo 188, 24 horas.';
	if (normalizedText.includes('ansiedade')) return 'Ansiedade é uma resposta do corpo diante de uma situação percebida como ameaçadora ou incerta. Ela pode aparecer em pensamentos, sensações físicas e comportamentos. Se estiver atrapalhando sua rotina, conversar com um profissional pode ajudar.';
	if (normalizedText.includes('cuidar') || normalizedText.includes('autocuidado')) return 'Um começo possível é escolher algo pequeno e concreto: respirar com atenção por alguns minutos, descansar, falar com alguém de confiança ou registrar o que você está sentindo. O cuidado não precisa ser perfeito para ser válido.';
	if (normalizedText.includes('artigo')) return 'Você pode encontrar artigos e estudos na área Fórum. Separei conteúdos sobre ansiedade, autocuidado e sono para você explorar no seu ritmo.';
	return 'Posso ajudar com termos do glossário, artigos e dúvidas gerais sobre saúde mental. Para uma avaliação individual ou diagnóstico, procure um psicólogo ou outro profissional qualificado.';
}

function addMessage(text, kind) {
	const message = document.createElement('div');
	message.className = `message ${kind === 'user' ? 'user-message' : 'assistant-message'}`;
	message.innerHTML = kind === 'user' ? `<div><p>${text}</p><span class="message-time">agora</span></div>` : `<span class="message-avatar">M</span><div><p>${text}</p><span class="message-time">agora</span></div>`;
	messages.appendChild(message);
	messages.scrollTop = messages.scrollHeight;
}

function submitChat(text) {
	const cleanText = text.trim();
	if (!cleanText) return;
	addMessage(cleanText.replace(/[<>&]/g, ''), 'user');
	chatInput.value = '';
	window.setTimeout(() => addMessage(assistantReply(cleanText), 'assistant'), 450);
}

document.querySelector('#chat-form').addEventListener('submit', (event) => { event.preventDefault(); submitChat(chatInput.value); });
document.querySelectorAll('[data-suggestion]').forEach((button) => button.addEventListener('click', () => submitChat(button.dataset.suggestion)));

document.querySelectorAll('[data-mood]').forEach((button) => button.addEventListener('click', () => {
	document.querySelectorAll('[data-mood]').forEach((item) => item.classList.remove('selected'));
	button.classList.add('selected');
	document.querySelector('.saved-mood').textContent = `Check-in salvo: ${button.dataset.mood}. Obrigado por se escutar.`;
}));

document.querySelector('#save-diary').addEventListener('click', () => {
	const diaryText = document.querySelector('#diary-text');
	if (!diaryText.value.trim()) { showToast('Escreva algo antes de salvar seu registro.'); return; }
	document.querySelector('#diary-status').textContent = 'Registro salvo com privacidade.';
	diaryText.value = '';
});
document.querySelector('#use-prompt').addEventListener('click', () => { showView('diario'); document.querySelector('#diary-text').focus(); });

document.querySelector('#global-search').addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && event.target.value.trim()) { showView('glossario'); document.querySelector('#glossary-search').value = event.target.value; renderGlossary('todos', event.target.value); }
});

renderArticles();
renderGlossary();
