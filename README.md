# Playbook de Atendimento — Dionísio

Playbook interativo para o time de Atendimentos. Guia o atendente pelas seis etapas
do atendimento, da leitura da conversa da IA até o encerramento com follow-up.

**No ar em:** https://murilobolzan.github.io/playbook-atendimento/

Página única, sem dependências. Abre em qualquer navegador, funciona offline.

---

## Como editar os textos

Todo o conteúdo está em listas de dados no fim do `index.html`, separado da lógica.
Você edita direto aqui no GitHub: clique em `index.html`, clique no lápis (**Edit**),
altere, e clique em **Commit changes**. Em cerca de 40 segundos o site atualiza sozinho.

### Onde fica cada coisa

| Linha | O que você edita ali |
|------:|----------------------|
| 385 | `PORTOES` — etapas 1, 2 e 3: título, texto de abertura, checklist, "não faça" e o texto do botão |
| 447 | `TEMPOS` — escada de autonomia: rótulos de tempo de casa e texto do modo de entrega |
| 458 | `CATEGORIAS` — as 7 naturezas: sequência de ação, quando escalar, não faça, tags |
| 570 | `MODULOS` — os 13 módulos: onde olhar, o que coletar, links da documentação, casos conhecidos |
| 796 | `SEV` — nomes e prazos de P1 / P2 / P3 |
| 801 | `MATRIZ_SEV` — qual severidade cada categoria recebe com a loja aberta ou fechada |
| 807 | `FUP_ESPERA_H` — horas até o segundo follow-up (hoje: 2) |
| 808 | `FUP_LIMITE_H` — horas de tolerância de silêncio após o segundo follow-up (hoje: 1) |
| 841 | `ETAPAS` — nomes que aparecem na trilha numerada do topo |
| 963 | Botão "Emergência: liberar agora" — apague esta linha e as 8 seguintes para exigir as etapas sempre |
| 1086 | Bloco "Explicar ao cliente antes de encerrar" |
| 1187 | Frase pronta do FUP 1 |
| 1229 | Frase pronta do FUP 2 |

As linhas mudam de lugar conforme você adiciona conteúdo. Se estiver perdido, use a busca
do GitHub dentro do arquivo (tecla `/`) e procure pelo nome da lista, ex. `const CATEGORIAS`.

### Anatomia de uma categoria

```js
{
  id:"ajuste",              // NÃO mude — é a chave interna
  nome:"Ajuste",            // aparece no card
  trilha:"Solicitação",     // etiqueta cinza acima do nome
  dono:"Atendimentos",      // pílula azul no resultado
  desc:"Nada quebrado...",  // linha pequena no card
  fluxo:[                   // a sequência numerada de ação
    "Primeiro passo aqui.",
    "Segundo passo, com <strong>destaque</strong>."
  ],
  escalar:["Situação → <strong>Time</strong>"],
  nunca:["O que não fazer"],
  tags:["tipo:ajuste"]
}
```

### Anatomia de um módulo

```js
{
  id:"reserva",             // NÃO mude
  nome:"Reserva",
  area:"Operações",         // etiqueta cinza no card
  onde:"Operações → Reservas. Verifique...",
  coletar:["O que pedir ao cliente antes de agir"],
  docs:[
    { t:"Título do link", u:"/caminho/na/documentacao" }
  ],
  casos:[
    {
      s:"Sintoma como o cliente descreve",
      c:"Explicação da causa mais provável",
      d:"/caminho/do/artigo",
      cat:"bug"             // categoria que este caso costuma ser
    }
  ]
}
```

Para adicionar um caso conhecido, copie um bloco entre chaves, cole e ajuste.
A busca por sintoma indexa automaticamente — não precisa registrar em outro lugar.

Os caminhos em `u` e `d` são relativos à documentação. A base está na linha 382
(`const D`), então `/operacoes/reservas` vira o endereço completo sozinho.

---

## Quatro regras para não quebrar

1. **Toda frase entre aspas duplas**, e cada item da lista separado por vírgula.
   A vírgula que falta no meio da lista quebra a página inteira.
2. **Apóstrofo é seguro** dentro de aspas duplas. Para aspas *dentro* do texto,
   use `&ldquo;` e `&rdquo;` — é o padrão já usado no arquivo.
3. **`<strong>` sempre fecha com `</strong>`.** Tag aberta desconfigura o resto do bloco.
4. **Nunca mude os `id:`.** São as chaves que ligam a matriz de severidade, as tags
   e a busca. Mudar `nome:` é livre; mudar `id:` derruba a página.

**Se a tela ficar branca depois de publicar:** é erro de sintaxe. Abra a página,
pressione `F12`, vá na aba **Console** — ela aponta a linha exata. Para voltar à versão
que funcionava, vá em **Commits**, abra o commit anterior e use **Revert**.

---

## Pontos em aberto para calibrar

Marcados como rascunho porque foram propostos a partir de referência de mercado,
não da operação real:

- Os cortes de tempo de casa (30 e 90 dias) na escada de autonomia
- A matriz de severidade e os prazos de P1 / P2 / P3
- Os tempos de follow-up (2h e 1h)
- Se o botão de emergência que libera as etapas travadas deve continuar existindo
- Campos que o ticket realmente exige no sistema de vocês (etapa 3)
- Se existe identificador da conversa da IA para colar no ticket (etapa 1)

## Lacuna conhecida na taxonomia

A documentação da plataforma cobre **Eventos** e **Links da loja**, mas não existe
subcategoria para nenhum dos dois. Hoje esses tickets caem em "configurações gerais"
ou "outro" e a medição deles se perde. Decidir se entram como módulos ou se ficam
deliberadamente fora do escopo do suporte.
