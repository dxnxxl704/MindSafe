# Árvore de Alterações do Front-end

Este documento registra a estrutura e as responsabilidades do código implementado no front-end do MindSafe.

## Árvore de arquivos

```text
MindSafe/
├── ESTUDO DE CASO.md
├── MVP.md
├── TRIAL.md
├── FRONTEND-ALTERACOES.md
└── frontend/
    ├── home.html
    ├── home.css
    └── index.js
```

## Visão geral

O front-end foi implementado como uma aplicação de página única (SPA) usando HTML, CSS e JavaScript puro. As telas são alternadas sem recarregar a página, e os dados demonstrativos ficam atualmente no próprio arquivo JavaScript.

O protótipo contempla:

- dashboard inicial;
- fórum de artigos e estudos científicos;
- glossário de saúde mental;
- autoatendimento com chatbot informativo;
- check-in emocional;
- diário pessoal; e
- histórico de registros.

## Arquivos alterados

### `frontend/home.html`

Estrutura semântica e conteúdo visual da aplicação.

Principais partes:

- **Sidebar:** marca MindSafe, navegação principal e acesso às áreas de acompanhamento.
- **Topbar:** busca global, notificações e configurações.
- **Início:** saudação, chamada para check-in, conteúdos em destaque e registros recentes.
- **Fórum:** filtros para todos, artigos, estudos científicos e salvos.
- **Glossário:** busca por termos e filtros por categoria.
- **Autoatendimento:** janela de conversa, sugestões de perguntas e orientação de segurança.
- **Diário:** campo para registrar pensamentos e sentimentos.
- **Histórico:** resumo e linha do tempo dos registros.
- **Toast:** mensagens breves de confirmação ou orientação.
- **Acessibilidade básica:** `aria-label`, `aria-labelledby`, `aria-live`, campos associados a labels e suporte a elementos focáveis.

O arquivo carrega `home.css` para os estilos e `index.js` para o comportamento da aplicação.

### `frontend/home.css`

Folha de estilos principal da aplicação.

Responsabilidades:

- define as variáveis de cor, tipografia, espaçamentos e sombras em `:root`;
- organiza a estrutura da sidebar, topbar e conteúdo principal;
- estiliza cards de artigos, termos do glossário, chat, diário e histórico;
- define estados ativos, hover e foco dos controles;
- cria a identidade visual em tons verdes, amarelos, azuis e coral;
- implementa animação de entrada das telas;
- adapta o layout para tablets e celulares com media queries; e
- mantém os componentes com dimensões estáveis para evitar deslocamentos durante a interação.

As fontes utilizadas são `DM Sans` para textos e `Manrope` para títulos.

### `frontend/index.js`

Controla a navegação, a renderização dos dados locais e as interações do usuário.

#### Dados locais

- `articles`: lista demonstrativa de artigos e estudos científicos do fórum.
- `glossary`: lista demonstrativa de termos com categoria, definição e tema.
- `crisisWords`: palavras e expressões que ativam a orientação de emergência do chatbot.

Esses dados devem ser substituídos ou complementados por uma API ou banco de dados quando o back-end for implementado.

## Funções do JavaScript

### `showToast(message)`

Exibe uma mensagem temporária na área de toast. Também limpa o temporizador anterior para evitar mensagens acumuladas.

**Uso atual:** avisar que um artigo foi aberto ou que é necessário preencher o diário antes de salvar.

### `showView(viewName)`

Alterna a tela visível adicionando ou removendo a classe `active-view`. Também atualiza o item ativo da navegação e retorna a página para o topo.

**Uso atual:** navegação entre início, fórum, glossário, autoatendimento, diário e histórico.

### `renderArticles(filter = 'todos')`

Filtra os artigos pelo tipo selecionado e gera os cards dentro de `#article-list`.

**Filtros aceitos:**

- `todos`;
- `artigos`;
- `estudos`; e
- `salvos`.

No protótipo, o filtro `salvos` ainda exibe todos os artigos porque não existe persistência de favoritos.

### `renderGlossary(filter = 'todos', search = '')`

Filtra os termos do glossário por categoria e texto de busca. Depois, gera os cards dentro de `#glossary-grid`.

**Categorias atuais:**

- `emoções`;
- `transtornos`; e
- `condições`.

### `assistantReply(text)`

Produz uma resposta informativa com base em palavras-chave da mensagem enviada ao chatbot.

A ordem de avaliação é:

1. verifica expressões relacionadas a risco ou emergência;
2. identifica dúvidas sobre ansiedade;
3. identifica perguntas sobre autocuidado;
4. identifica pedidos relacionados a artigos; e
5. utiliza uma resposta geral quando não encontra um tema conhecido.

A função não realiza diagnóstico e não substitui um modelo de inteligência artificial ou atendimento profissional.

### `addMessage(text, kind)`

Cria e adiciona uma mensagem à janela do chatbot.

- `kind = 'user'`: mensagem enviada pelo usuário.
- qualquer outro valor: mensagem do assistente.

Depois de inserir a mensagem, a função rola a área de conversa até o conteúdo mais recente.

### `submitChat(text)`

Valida e envia uma mensagem do usuário. Remove espaços vazios, limpa caracteres básicos de marcação, insere a mensagem e agenda a resposta do assistente após um pequeno intervalo.

### Eventos de navegação

Os elementos com `data-view` chamam `showView()` ao serem clicados. Links com `data-view-link` também impedem o comportamento padrão do navegador e trocam a tela internamente.

### Eventos do fórum

Os elementos com `data-forum-filter` atualizam o estado visual da aba selecionada e chamam `renderArticles()` com o filtro correspondente.

### Eventos do glossário

Os elementos com `data-glossary-filter` alteram a categoria ativa. O campo `#glossary-search` atualiza os resultados a cada alteração digitada.

### Eventos do chatbot

- `#chat-form` envia mensagens pelo formulário.
- Elementos com `data-suggestion` enviam perguntas prontas.
- A resposta é gerada por `assistantReply()`.

### Eventos do check-in

Os elementos com `data-mood` marcam a opção selecionada e mostram uma confirmação de check-in salvo. Atualmente, o registro é apenas visual e não é persistido após recarregar a página.

### Eventos do diário

O botão `#save-diary` valida o texto e exibe a confirmação de registro privado. O botão `#use-prompt` leva à tela do diário e posiciona o cursor no campo de texto.

### Busca global

Ao pressionar `Enter` no campo `#global-search`, a aplicação abre o glossário, copia o termo para a busca específica e filtra os termos disponíveis.

## Fluxo simplificado

```text
Usuário acessa home.html
        |
        v
index.js carrega os dados locais
        |
        +--> renderArticles()
        +--> renderGlossary()
        |
        v
Usuário interage com a navegação
        |
        +--> showView()
        +--> renderArticles(filter)
        +--> renderGlossary(filter, search)
        +--> submitChat(text)
        +--> check-in ou diário
```

## Estado atual e próximos passos

O front-end está funcional como protótipo local, mas ainda não possui:

- autenticação real;
- banco de dados;
- persistência de check-ins e diário;
- cadastro de usuários;
- API de artigos e estudos;
- glossário completo com todas as condições;
- chatbot conectado a um serviço de IA; ou
- integração com psicólogos e agendamento.

Para a próxima etapa, recomenda-se criar uma API segura, adicionar autenticação e persistir os dados pessoais com controle de acesso. O chatbot também deverá utilizar uma base de conhecimento revisada por profissionais e manter o protocolo de encaminhamento para situações de emergência.

> O MindSafe é uma ferramenta informativa. Não realiza diagnóstico e não substitui psicólogos, médicos ou serviços de emergência.
