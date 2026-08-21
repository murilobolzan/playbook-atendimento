# Playbook de Atendimento — Dionísio

Playbook interativo para o time de Atendimentos. Guia o atendente pelas seis etapas
do atendimento, da leitura da conversa da IA até o encerramento com follow-up.

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

## Não procure no código: use o Modo mapa

Abra o playbook e clique em **Modo mapa** no canto superior direito.

Cada bloco da tela ganha uma etiqueta vinho com um marcador, tipo `[6] fluxo`.
Esse marcador é o endereço dentro do `conteudo.js`. Aí você abre o arquivo,
aperta Ctrl+F, procura `[6]` e cai exatamente no lugar certo.

É o caminho mais rápido: você olha a tela, não o código.

---

## Uma etapa por aba

As seis etapas são abas. A tela mostra **uma só por vez**, com "← Etapa anterior" e
"Próxima etapa →" no rodapé e o indicador "Etapa N de 6" no meio. Clicar direto numa
aba também funciona, então dá para voltar e conferir sem perder nada.

As abas 4, 5 e 6 só mostram conteúdo depois do ticket criado. Antes disso elas abrem,
mas explicam o que falta — ninguém fica preso.

O **Contexto do cliente** não é mais um painel separado: as duas perguntas (tempo de
casa e loja em operação) ficam dentro da **etapa 2**, onde a checklist já manda
confirmá-las. Elas continuam alimentando a severidade e o modo de entrega.

---

## A documentação vive dentro do playbook

O painel de dúvida fica **sempre visível, em todas as abas** — à direita no desktop,
no topo no celular. É o foco da plataforma.

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
| `[2]` | Nomes das 6 etapas, que são os rótulos das abas |
| `[3]` | Etapas 1, 2 e 3 — as travadas: checklist, "não faça", texto do botão |
| `[4]` | Tempo de casa — os três modos de quem executa a ação (aparece na etapa 2) |
| `[5]` | Loja em operação — as duas opções (aparece na etapa 2) |
| `[6]` | As 7 naturezas de ticket: sequência de ação, quando escalar, não faça, tags |
| `[7]` | Os 13 módulos: onde olhar, o que coletar, links, casos conhecidos |
| `[8]` | Severidade e prazos de P1 / P2 / P3 |
| `[9]` | Follow-up: os tempos (2h e 1h) e as frases prontas |
| `[10]` | Todo o texto fixo da tela: títulos, avisos, rótulos |

## Tarefas comuns

| Você quer... | Vá em |
|---|---|
| Mudar uma frase da checklist da etapa 1, 2 ou 3 | `[3]` |
| Mudar os prazos ou os nomes de P1 / P2 / P3 | `[8]`, bloco `SEV` |
| Mudar qual severidade uma categoria recebe | `[8]`, bloco `MATRIZ_SEV` |
| Mudar os cortes de 30 e 90 dias do tempo de casa | `[4]` |
| Mudar as horas do follow-up | `[9]`, `esperaHoras` e `limiteHoras` |
| Mudar a frase que o atendente manda no FUP | `[9]`, `f1Mensagem` e `f2Mensagem` |
| Adicionar um caso conhecido novo | `[7]`, dentro de `casos` do módulo |
| Adicionar ou trocar um link de documentação | `[7]`, dentro de `docs` do módulo |
| Mudar a sequência de ação de uma categoria | `[6]`, dentro de `fluxo` |
| Mudar as regras de escalonamento | `[6]`, dentro de `escalar` |
| Tirar o botão "Emergência: liberar agora" | `[10]`, apague a linha `bloqueioBotao` |
| Mudar o título ou o subtítulo do topo | `[10]`, `titulo` e `subtitulo` |
| Mudar o texto do painel de dúvida | `[10]`, grupo `duvida*` e `busca*` |
| Mudar os botões de navegação entre abas | `[10]`, grupo `nav*` |

### Adicionar uma categoria nova

Em `[6]`, copie um bloco inteiro entre `{ }`, cole antes do `]` final, e troque o
`id` por um nome curto sem espaço nem acento. Depois vá em `[8]` e adicione esse
mesmo `id` nas **duas** linhas de `MATRIZ_SEV`, senão a página quebra ao selecionar
a categoria nova.

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

- Os cortes de tempo de casa, 30 e 90 dias, na escada de autonomia (`[4]`)
- A matriz de severidade e os prazos de P1 / P2 / P3 (`[8]`)
- Os tempos de follow-up, 2h e 1h (`[9]`)
- Se o botão de emergência que libera as etapas travadas deve continuar existindo
- Campos que o ticket realmente exige no sistema de vocês (etapa 3, em `[3]`)
- Se existe identificador da conversa da IA para colar no ticket (etapa 1, em `[3]`)

## Lacuna conhecida na taxonomia

A documentação da plataforma cobre **Eventos** e **Links da loja**, mas não existe
subcategoria para nenhum dos dois. Hoje esses tickets caem em "Configurações gerais"
ou "Outro" e a medição deles se perde. Decidir se entram como módulos (`[7]`) ou se
ficam deliberadamente fora do escopo do suporte.
