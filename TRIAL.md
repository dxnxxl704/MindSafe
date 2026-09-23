## Guia de Desenvolvimento do Projeto

### Plataforma de Saúde Mental e Chatbot Interativo

Este documento consolida o planejamento estratégico para uma dupla de desenvolvedores focados em front-end criarem um sistema web completo sobre saúde mental. A abordagem utiliza ferramentas modernas de baixo atrito para o back-end e soluções eficientes de inteligência artificial.

### 1. Filosofia de Desenvolvimento: Vibe Coding e MVP

Para evitar frustrações comuns em projetos complexos, a dupla deve focar no conceito de MVP (Produto Mínimo Viável). Não é necessário construir todas as funcionalidades de uma vez: o desenvolvimento deve ser dividido em fases incrementais.

### 2. Cronograma Sugerido de Sprints

| Fase | Foco principal | Tecnologias sugeridas |
| --- | --- | --- |
| Fase 1: Base e Acesso | Criação das telas principais (UI/UX) e sistema de autenticação de usuários | React, Vue ou HTML + CSS + JavaScript; Supabase Auth |
| Fase 2: Conteúdo | Estruturação do banco de dados para artigos da plataforma e postagens do fórum | Supabase Database (PostgreSQL) |
| Fase 3: Interação | Sistema de comentários, notificações e widget de agendamento de consultas | Supabase Realtime, Cal.com ou Calendly, Resend (e-mails) |
| Fase 4: Inteligência Artificial | Integração do chatbot tira-dúvidas baseado no glossário controlado | Dify.ai, Voiceflow ou OpenAI API (Vercel AI SDK) |

### 3. Arquitetura de Back-end de Baixo Atrito

Como ambos os desenvolvedores têm maior afinidade com o front-end, a arquitetura deve usar o conceito de BaaS (Backend as a Service) ou ferramentas full-stack com JavaScript.

- **Banco de dados e login:** o Supabase fornece autenticação via e-mail ou redes sociais, como Google, e armazenamento pronto de dados através de tabelas fáceis de gerenciar, eliminando a necessidade de escrever servidores complexos do zero.
- **Hospedagem:** conectar o repositório do GitHub à Vercel ou Netlify para garantir deploy automatizado (CI/CD) a cada alteração salva.

### 4. Integração do Chatbot: Tira-dúvidas e Glossário

Para garantir que a IA responda estritamente com base nos termos autorizados sobre saúde mental, evitando alucinações, existem dois caminhos viáveis.

#### Caminho A: No-Code ou Low-Code

Utilizar plataformas como Dify.ai ou Voiceflow. Nelas, faz-se o upload do glossário em PDF ou texto como base de conhecimento (RAG). A plataforma gera um script simples de incorporar no front-end, disponibilizando um widget de chat completo.

#### Caminho B: Via Código

Consumir diretamente a API da OpenAI. No comando enviado à IA (System Prompt), injeta-se o texto do glossário e instrui-se o modelo:

> Responda à dúvida do usuário usando apenas as definições do glossário fornecido. Se não souber, responda educadamente que não possui essa informação.

### 5. Protocolo de Segurança Crítico

Dado que o tema envolve saúde mental, é obrigatório implementar uma camada de segurança no chatbot.

- **Filtro de emergência:** o sistema ou o prompt da IA deve monitorar palavras de alto risco, como “desespero” e “me machucar”.
- Caso sejam detectadas, o chat deve exibir imediatamente uma mensagem padrão acolhedora indicando canais de apoio emocional oficiais, como o CVV (Centro de Valorização da Vida), pelo telefone 188.

### 6. Ferramentas para Trabalho em Equipe

- **Live Share (VS Code):** para codificação simultânea no mesmo arquivo em tempo real.
- **Git e GitHub:** criação de branches separadas para evitar conflitos de código durante o desenvolvimento.

> Este documento tem finalidade informativa. Para aconselhamento médico ou diagnóstico, consulte um profissional. Respostas de IA podem conter erros.