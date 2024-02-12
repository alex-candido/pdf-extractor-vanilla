
page_exame: {
  id: "b0c6b22b-74ec-4432-99b6-8581297bad0f"
  questions_interval:
  created_at: "2024-02-11T17:53:47+0000",
  updated_at: "2024-02-11T17:53:47+0000",
}

exame: {
  id: "b0c6b22b-74ec-4432-99b6-8581297bad0f"
  type_exame: "enem"

  title: "1º Dia – Caderno 1 – Azul – Aplicação Regular"
  day_exame:
  day_exame:
  created_at: "2024-02-11T17:53:47+0000",
  updated_at: "2024-02-11T17:53:47+0000",
},



faça uma função findIntervalQuestion, onde vou receber como parametro um array de objectos [{str: "word", hasEOL: "true", dir: "ltr", width: "3.8920000000000003", height: "7", etc..  }], internamente o objeto representa uma palavra "str", o problema é que nessa lista as palavras quando separadas são questões, nesse caso, preciso encontrar as palavras/objetos que iniciam com "QUESTÃO" seguido de um numero, o intervalo do array de objetos termina antes de ser encontrada a próxima palavra "QUESTÃO", ou seja, o intervalo corresponde ao encontro da palavra/objeto mais uma sequencia de objetos que terminam antes de encontrar a proximo palavra/objeto. Portanto, esse array de intervalos quando separado deve ser armazenado separadamento em outro array de intervalos, por exemplo, seria um array de questions_intervals = [{question_interval: [{str: string}, hasEOL: "true", etc...]}, {str: string}, hasEOL: "true", etc...]}etc...], cada question_interval possui um array de palavras/objetos que representão uma questão.

faça uma função findIntervalalTopics

Imagine que eu tenha um numero de provras muito grande para extrair os dados, e essas provas correspondem a diversos exames nacionais,como concursos publicos, vestibulares como enem entre outros.

Vou criar um programa onde vou submeter um pdf das provras disponibilizadas publicamente pelo governo, e armazenar em uma base de dados, e a partir dessa base, vou criar simulados em uma plataforma, para alunos treinarem, e companharem seu desenpenho. Dessa forma, tenho que trabalhar databases models para construir uma arquitetura de dados.

Portanto, vou descrever inicialmente um modelo basico e preciso organiza-los da melhor maneira, primeiro vou criar um modelo que se chama exame, esse modelo vai conter todas a informações sobre aquele exame, tando informações institucinais, tecnicas, detalhes do exame, e toda estrutua vai estar relacionada a paginas do exame, numero de questoes da pagina, numero de alternativas da questao, respostas da questão.

Por exemplo, no model da questão, teria que seguir a metrica como texto base ou conteúdo de apoio (gráfico, charge, história em quadrinho, etc), referencia; enunciado, cinco alternativas,
e resposta.

elabore inicialmente pra essa estrutura representando em interfaces com as propriedades de tipo em typescritp


const words_base = [
    { str: string, hasEOL: "true" },
    { str: string, hasEOL: "true" },
    { str: string, hasEOL: "true" },
    { str: string, hasEOL: "true" },
]

const questions_interval = [
  {
    question_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      etc..
    ],
  }
  {
    question_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      etc..
    ]
  },
  etc..
]


const alternatives_interval = [
  {
    alternative_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
    ],
  }
  {
    alternative_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
    ]
  }
]

const question = {
  words_base: [
    { str: string, hasEOL: "true" },
    { str: string, hasEOL: "true" },
    { str: string, hasEOL: "true" },
    { str: string, hasEOL: "true" },
  ],
  alternatives_interval: [
  {
    alternative_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
    ],
  }
  {
    alternative_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
    ]
  }
]
}

const alternatives_interval = [
  {
    alternative_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
    ],
  }
  {
    alternative_interval: [
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
      { str: string, hasEOL: "true" },
    ]
  }
]

	Com Typescript, faça uma função findIntervalQuestion, onde vai receber como parâmetro um array de objects [{str: string, hasEOL: boolean, dir: string, width: number, height: number, etc..}, etc..], internamente o objeto representa uma word "str", o problema é que nessa lista as words quando separadas são questions, ou seja um intervalo de questions, nesse caso, preciso encontrar as words/objects que iniciam com "QUESTÃO" seguido de space e um numero de dois digitos, além disso, o intervalo do array de objects termina antes de ser encontrado a próxima word/object igual a "QUESTÃO".

	Ou seja, o intervalo corresponde ao encontro da word/object igual a "QUESTÃO", mais uma sequencia de words/object que terminam antes de encontrar a próxima word/object igual a "QUESTÃO". Portanto, esse array de intervalos quando separado deve ser armazenado separadamente em outro array de intervalos, por exemplo, seria um array const questions_interval = [{question_interval: [{ str: "string", hasEOL: "true" },{ str: "string", hasEOL: "true" },etc...]},{question_interval: [{ str: "string", hasEOL: "true" },{ str: "string", hasEOL: "true" },etc...]}, etc...], onde cada question_interval possui um array de words/objects, sendo assim representado um array de questions.

	Nessa segunda etapa, depois de obter o questions_interval, faça uma função findIntervalAlternativesOfQuestions, onde vai receber questions_interval, onde irei verificar cada question_interval. O problema é que cada question_interval possuem alternatives, ou seja, topics de uma question. Por exemplo, as alternatives começam com a sequencia de word/object igual "A" e "A", "B" e "B", "c" e "c", "D" e "D", "E" e "E", nesse caso preciso indentificar em cada question_interval, nas word/object que se repetirem { str: "A" } seguido de { str: "A" }, o intervalo do array de objects de question_interval correspondem a alternativa "A" quando termina antes de ser encontrado o próximo alternative_interval, que seria a alternative "B" que se repete seguindo a ordem {str: "B"} seguido de {str: "B"}, e assim sucessivamente os intervalos de objetos para CC, DD, EE. Ante de ser encontrado e verificado a primeira alternative_interval, as word/object que vinherem antes do primeiro alternative_interval, seriam as base_words, ou seja, na verificação cada word/object que não correspondem ao primeiro alternative_interval seria salvas em base_words.

	Nesse sentido, o alternative_interval corresponde ao encontro da word/object seguido da word/object mais um sequencia de word/objects que terminam antes de encontrar a próxima alternative_interval. Cada alternative_interval extraido de question_interval deve ser armazenado em outro array alternatives_interval. Dessa forma cada question_interval, possui um alternatives_interval, e o resultado seria igual a const alternatives_interval = [{alternative_interval: [{str: string, hasEOL: "true" }, { str: string, hasEOL: "true" },etc..]},{alternative_interval: [{str: string, hasEOL: "true" }, { str: string, hasEOL: "true" },etc..]}]
