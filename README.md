# Playbook de Atendimento — Dionísio

Ferramenta interna do time de Atendimentos, com três seções na barra lateral:
o **guia de atendimento** em cinco etapas, os **critérios de avaliação** e as
**respostas rápidas** — a biblioteca de respostas padrão, com busca por palavra-chave.

**No ar em:** https://murilobolzan.github.io/playbook-atendimento/

---

## Você só edita um arquivo

| Arquivo | O que é |
|---|---|
| **[`conteudo.js`](conteudo.js)** | **Todo o texto do playbook. É aqui que você mexe.** |
| `index.html` | O motor. Não precisa abrir. |

Para editar: clique em **[`conteudo.js`](conteudo.js)** → ícone de lápis (**Edit**) →
altere → **Commit changes**. Cerca de 40 segundos depois o site já mostra a versão nova.

---

## As três seções

A barra da esquerda tem uma **lupa** no topo e, logo abaixo, o **seletor de tópico**.
São três tópicos separados: você está em um de cada vez, e a barra mostra só o
conteúdo daquele. Guia e respostas rápidas nunca dividem a mesma tela.

| Tópico | O que é |
|---|---|
| **Guia de atendimento** | As cinco etapas, uma por tela, na ordem |
| **Critérios de avaliação** | A régua de 4 critérios, de consulta |
| **Respostas rápidas** | As respostas padrão, por aba e sub-aba da plataforma |

### A lupa é das respostas rápidas

A busca aparece só no tópico **Respostas rápidas** e procura só ali: **título, corpo,
tags, nome da aba e da sub-aba**. Funciona com ou sem acento — "satisfacao" acha
"Satisfação". O termo encontrado vem destacado, e cada resposta tem botão de **copiar**.

Atalho: tecla `/` ou `Ctrl+K` já leva para as respostas e põe o cursor na busca.

Se nada servir, o rodapé sempre oferece **perguntar para a IA da documentação**.

### A barra tem largura ajustável

Arraste a borda direita da barra para alargar ou estreitar, entre 180 e 460 pixels.
Duplo clique volta ao padrão, e as setas do teclado ajustam de 16 em 16 quando o
puxador está focado. A largura escolhida fica lembrada no navegador.

## Como achar o que você quer mudar no arquivo

Abra o `conteudo.js`, aperte Ctrl+F e procure o marcador da seção, por exemplo
`[6]`. O índice completo está logo abaixo, e também no topo do próprio arquivo.

---

## Uma etapa por aba

As cinco etapas são abas. A tela mostra **uma só por vez**, com "← Etapa anterior" e
"Próxima etapa →" no rodapé e o indicador "Etapa N de 5" no meio.

| Aba | O que acontece |
|---|---|
| 1 | Ler a conversa do cliente |
| 2 | Entender o problema |
| 3 | Criar o ticket — e **classificar** natureza e módulo |
| 4 | Guia de atendimento — quem executa, casos conhecidos e documentação |
| 5 | Follow-up e encerramento |

Depois delas, separada por uma barra na trilha, fica a aba **Avaliação** — a régua de
avaliação de atendimento. Ela é de consulta: não faz parte da sequência, não dá nota,
só mostra os quatro critérios com seus pesos e as notas de 0 a 5.

**Não existe atalho.** O botão de emergência que liberava as etapas travadas foi
removido: o atendente passa por todas, em ordem. A etapa 3 só libera depois que a
natureza e o módulo forem escolhidos, porque é a classificação que monta o guia.

As abas 4 e 5 abrem antes disso, mas em vez de conteúdo mostram o que falta.

O **tempo de plataforma do cliente** é a única pergunta de contexto e vive na
**etapa 4**, junto da entrega: dois cards lado a lado, "até 45 dias" e "mais de 45
dias", e o escolhido define quem executa o ajuste.

A **central de dúvidas** aparece apenas na etapa 4, o guia de atendimento, que é onde
o atendente resolve de fato. Nas outras, o conteúdo ocupa a largura inteira da tela.

---

## A documentação vive dentro do playbook

O painel de dúvida vive na **etapa 4**, o guia de atendimento — à direita no desktop,
no topo no celular. É o foco da plataforma, e fica onde a solução acontece.

O atendente digita a dúvida e a documentação abre numa gaveta por cima do playbook,
já com a pergunta feita para a IA que vive dentro dela — sem perder o atendimento em
andamento. Enter no campo também envia.

Todo link de documentação do playbook abre nessa mesma gaveta: os guias de caso
conhecido e a lista de artigos do módulo. `Esc` fecha, e o botão **Abrir em nova aba**
sai para o GitBook quando o atendente quiser a tela cheia. Ctrl+clique nos links
continua abrindo em nova aba direto.

Enquanto ele digita, os **casos conhecidos** que combinam aparecem abaixo do campo —
resposta instantânea sem precisar perguntar para a IA.

Para mudar esses textos, veja `[10]` no `conteudo.js`.

---

## Índice do conteudo.js

Se preferir ir direto, cada seção tem um marcador. Ctrl+F com ele no `conteudo.js`:

| Marcador | O que muda |
|---|---|
| `[1]` | Endereço da documentação (a base de todos os links) |
| `[2]` | Nomes das 5 etapas, que são os rótulos das abas |
| `[3]` | Etapas 1, 2 e 3 — as travadas: checklist, "não faça", texto do botão |
| `[4]` | Tempo de plataforma — os dois modos de quem executa a ação (aparece na etapa 4) |
| `[6]` | As 7 naturezas de ticket: quando escalar, não faça, tags |
| `[7]` | Os 13 módulos: onde olhar, o que coletar, links, casos conhecidos |
| `[8]` | Severidade e prazos de P1 / P2 / P3 |
| `[9]` | Follow-up: os tempos (30 min e 30 min) e as frases prontas |
| `[10]` | Todo o texto fixo da tela: títulos, avisos, rótulos |
| `[11]` | A régua de avaliação: grupos, critérios, pesos e as notas de 0 a 5 |
| `[12]` | As respostas rápidas: abas, sub-abas e as respostas padrão |

## Tarefas comuns

| Você quer... | Vá em |
|---|---|
| Mudar uma frase da checklist da etapa 1, 2 ou 3 | `[3]` |
| Mudar os prazos ou os nomes de P1 / P2 / P3 | `[8]`, bloco `SEV` |
| Mudar qual severidade uma categoria recebe | `[8]`, bloco `SEV_POR_CATEGORIA` |
| Mudar o corte de 45 dias do tempo de plataforma | `[4]` |
| Mudar os minutos do follow-up | `[9]`, `esperaMin` e `limiteMin` |
| Mudar a frase que o atendente manda no FUP | `[9]`, `f1Mensagem` e `f2Mensagem` |
| Adicionar um caso conhecido novo | `[7]`, dentro de `casos` do módulo |
| Adicionar ou trocar um link de documentação | `[7]`, dentro de `docs` do módulo |
| Mudar as regras de escalonamento | `[6]`, dentro de `escalar` |
| Mudar o título ou o subtítulo do topo | `[10]`, `titulo` e `subtitulo` |
| Mudar o texto do painel de dúvida | `[10]`, grupo `duvida*` e `busca*` |
| Mudar os botões de navegação entre abas | `[10]`, grupo `nav*` |
| Mudar um nível da régua de avaliação | `[11]`, dentro de `niveis` do critério |
| Mudar o peso de um critério | `[11]`, o campo `peso` |
| Mudar o nome que aparece no canto da tela | `[10]`, `marca` |
| **Adicionar uma aba de respostas** | `[12]`, copie um bloco `{ id, aba, subs }` |
| **Adicionar uma sub-aba** | `[12]`, dentro de `subs`, um bloco `{ id, sub, itens }` |
| **Adicionar uma resposta pronta** | `[12]`, dentro de `itens`, um `{ titulo, tags, resposta }` |
| Fazer a busca achar por outra palavra | `[12]`, acrescente em `tags` |
| Trocar o print de uma resposta | `[12]`, o campo `imagem`, e o arquivo em `img/` |

### Imagens nas respostas

Os prints ficam na pasta [`img/`](img) e são ligados à resposta pelo campo
`imagem: "img/nome.png"` em `[12]`. Na tela aparecem abaixo do texto, e um clique
abre em tamanho cheio.

Para trocar um print: suba o arquivo novo em `img/` pelo GitHub e aponte o campo
`imagem` para ele. Para adicionar onde não tem, é só acrescentar o campo.

### Adicionar uma categoria nova

Em `[6]`, copie um bloco inteiro entre `{ }`, cole antes do `]` final, e troque o
`id` por um nome curto sem espaço nem acento. Depois vá em `[8]` e adicione esse
mesmo `id` em `SEV_POR_CATEGORIA`, senão a categoria nova entra como P3.

### Adicionar um módulo novo

Em `[7]`, copie um bloco inteiro entre `{ }`, cole antes do `]` final, e troque o
`id`. Não precisa mexer em mais nada — os cards e a busca se atualizam sozinhos.

---

## Cores

A paleta sai da cor da marca declarada no tema da documentação
(`--primary-original: 187 149 212`, ou seja **#BB95D4**). Para texto e bordas o
playbook usa **#6D3D93**, uma versão escurecida do mesmo lilás que atinge 7,7:1 de
contraste sobre branco; no tema escuro o lilás original cobre 8,5:1. Os cinzas puxam
de leve para o roxo em vez de serem neutros puros.

Cor é a única coisa que **não** fica no `conteudo.js`: ela mora no bloco `:root` no
começo do `index.html`. São quatro declarações — `:root`, o bloco
`prefers-color-scheme: dark`, e os dois `[data-theme]`. Mudar só a primeira quebra o
tema escuro, então mude nas quatro.

Se for trocar de cor, confira o contraste antes: texto pequeno precisa de 4,5:1 contra
o fundo em que ele aparece.

---

## Quatro regras para não quebrar

1. **Toda frase fica entre "aspas duplas"**, e cada item da lista termina com vírgula —
   **menos o último**. Cuidado ao **reordenar itens**: se você move o último item para
   cima, ele passa a precisar de vírgula. É de longe o erro mais comum.
2. **Apóstrofo pode.** Para aspas dentro do texto use `&ldquo;` e `&rdquo;`.
3. **`<strong>` sempre fecha com `</strong>`.** Tag aberta desconfigura o bloco.
4. **Nunca mude os `id:`.** Mudar `nome:` é livre; mudar `id:` derruba a página.

## Se você quebrar algo

O playbook avisa. Em vez de tela vazia, aparece um painel vermelho dizendo
**em qual linha** o navegador parou, as quatro causas mais comuns, um botão que abre
o `conteudo.js` já naquela linha, e outro que leva ao histórico para reverter.

Um detalhe que economiza tempo: quando o problema é **vírgula faltando**, o navegador
acusa a linha **seguinte**. O painel já avisa isso e indica as duas linhas.

Para desfazer sem entender o erro: **Commits** → abra o último commit → **Revert**.
O playbook volta ao ar em cerca de 40 segundos.

Se quiser conferir antes de publicar, baixe a pasta e abra o `index.html` com dois
cliques. Os dois arquivos precisam estar juntos na mesma pasta.

---

## Pontos em aberto para calibrar

Marcados como rascunho porque foram propostos a partir de referência de mercado,
não da operação real:

- O corte de 45 dias do tempo de plataforma, na escada de autonomia (`[4]`)
- A severidade por natureza de ticket e os prazos de P1 / P2 / P3 (`[8]`) — virou uma
  lista só depois de a pergunta "a casa está aberta?" sair do fluxo
- Os tempos de follow-up, 30 min e 30 min (`[9]`)
- Se o botão de emergência que libera as etapas travadas deve continuar existindo
- Campos que o ticket realmente exige no sistema de vocês (etapa 3, em `[3]`)
- Se existe identificador da conversa da IA para colar no ticket (etapa 1, em `[3]`)

## Lacuna conhecida na taxonomia

A documentação da plataforma cobre **Eventos** e **Links da loja**, mas não existe
subcategoria para nenhum dos dois. Hoje esses tickets caem em "Configurações gerais"
ou "Outro" e a medição deles se perde. Decidir se entram como módulos (`[7]`) ou se
ficam deliberadamente fora do escopo do suporte.
