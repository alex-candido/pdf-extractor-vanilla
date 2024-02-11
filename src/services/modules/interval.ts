interface Word {
  str: string;
}

interface QuestionInterval {
  question_interval: Word[];
}

function findIntervalQuestion(words: Word[]): QuestionInterval[] {
  const intervals: QuestionInterval[] = [];
  let questionStart: number | null = null;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.str.startsWith("QUESTÃO")) {
      if (questionStart === null) {
        questionStart = i;
      } else {
        intervals.push({
          question_interval: words.slice(questionStart, i),
        });
        questionStart = i;
      }
    }
  }

  // Check for last question interval
  if (questionStart !== null) {
    intervals.push({
      question_interval: words.slice(questionStart),
    });
  }

  return intervals;
}


const words: Word[] = [
  { str: "Olá" },
  { str: "mundo" },
  { str: "QUESTÃO" },
  { str: "1" },
  { str: "Qual" },
  { str: "é" },
  { str: "a" },
  { str: "capital" },
  { str: "do" },
  { str: "Brasil?" },
  { str: "QUESTÃO" },
  { str: "2" },
  { str: "Quantas" },
  { str: "são" },
  { str: "as" },
  { str: "cores" },
  { str: "da" },
  { str: "bandeira" },
  { str: "brasileira?" },
];

const words_question: any[] = [
  {
      str: "2",
      "dir": "ltr",
      "width": 3.8920000000000003,
      "height": 7,
      "transform": [
          7,
          0,
          0,
          7,
          31.1811,
          31.8317
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "–LC • 1 º",
      "dir": "ltr",
      "width": 25.9756,
      "height": 7,
      "transform": [
          7,
          0,
          0,
          7,
          223.2431,
          31.2005
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.6426000000000077,
      "height": 0,
      "transform": [
          7,
          0,
          0,
          7,
          244.71769999999995,
          31.2005
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "DIA • CADERNO 1 • AZUL",
      "dir": "ltr",
      "width": 87.27390000000003,
      "height": 7,
      "transform": [
          7,
          0,
          0,
          7,
          249.2159,
          31.2005
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 1.0444000000000284,
      "height": 0,
      "transform": [
          7,
          0,
          0,
          7,
          332.47529999999983,
          31.2005
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "–",
      "dir": "ltr",
      "width": 3.8920000000000003,
      "height": 7,
      "transform": [
          7,
          0,
          0,
          7,
          339.78610000000003,
          31.2005
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          10,
          0,
          0,
          10,
          31.1811,
          704.2158
      ],
      "fontName": "g_d0_f1",
      "hasEOL": true
  },
  {
      str: "LINGUAGENS, CÓDIGOS E SUAS TECNOLOGIAS",
      "dir": "ltr",
      "width": 235.59000000000003,
      "height": 10,
      "transform": [
          10,
          0,
          0,
          10,
          31.1811,
          704.2158
      ],
      "fontName": "g_d0_f1",
      "hasEOL": true
  },
  {
      str: "Questões de 01 a 45",
      "dir": "ltr",
      "width": 96.16000000000003,
      "height": 10,
      "transform": [
          10,
          0,
          0,
          10,
          31.1811,
          692.2158
      ],
      "fontName": "g_d0_f1",
      "hasEOL": true
  },
  {
      str: "Questões de 01 a 05 (opção inglês)",
      "dir": "ltr",
      "width": 166.73000000000005,
      "height": 10,
      "transform": [
          10,
          0,
          0,
          10,
          31.1811,
          677.3857999999999
      ],
      "fontName": "g_d0_f1",
      "hasEOL": true
  },
  {
      str: "QUESTÃO 01",
      "dir": "ltr",
      "width": 61.76625,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          657.1772
      ],
      "fontName": "g_d0_f1",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          37.3301,
          500.6265
      ],
      "fontName": "g_d0_f9",
      "hasEOL": true
  },
  {
      str: "The average american tosses 300 pounds of food",
      "dir": "ltr",
      "width": 214.61700000000005,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          37.3301,
          500.6265
      ],
      "fontName": "g_d0_f9",
      "hasEOL": true
  },
  {
      str: "each year, making food the number one contributor to",
      "dir": "ltr",
      "width": 231.41527500000007,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          37.3301,
          488.62425
      ],
      "fontName": "g_d0_f9",
      "hasEOL": true
  },
  {
      str: "America’s landfills. Eat your leftovers and keep your",
      "dir": "ltr",
      "width": 223.6162500000001,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          37.3301,
          476.622
      ],
      "fontName": "g_d0_f9",
      "hasEOL": true
  },
  {
      str: "perishables in the fridge – the Earth is counting on it.",
      "dir": "ltr",
      "width": 227.07750000000001,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          37.3301,
          464.61975
      ],
      "fontName": "g_d0_f9",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          38.9585,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": true
  },
  {
      str: "Disponível",
      "dir": "ltr",
      "width": 28.948200000000007,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          38.9585,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          67.90669999999999,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "em:",
      "dir": "ltr",
      "width": 10.119599999999997,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          69.57469999999999,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          79.6943,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "https://mir-s3-cdn-cf.behance.net.",
      "dir": "ltr",
      "width": 93.78899999999996,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          81.3623,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          175.15130000000013,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "Acesso",
      "dir": "ltr",
      "width": 20.41859999999999,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          176.81930000000014,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          197.23790000000017,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "em:",
      "dir": "ltr",
      "width": 10.11960000000001,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          198.90590000000017,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          209.0255000000002,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "29",
      "dir": "ltr",
      "width": 6.8358000000000105,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          210.6935000000002,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          217.52930000000023,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "out.",
      "dir": "ltr",
      "width": 10.383599999999992,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          219.19730000000024,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          229.58090000000027,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "2021",
      "dir": "ltr",
      "width": 13.604400000000007,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          231.24890000000028,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          244.85330000000033,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "(adaptado).",
      "dir": "ltr",
      "width": 31.274400000000078,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          246.52130000000034,
          445.0165
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          427.6472
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "Esse cartaz de campanha sugere que",
      "dir": "ltr",
      "width": 165.79679999999996,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          427.6472
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          413.1126
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "A",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          413.1126
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "A",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          413.1126
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          413.1126
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "os",
      "dir": "ltr",
      "width": 10.359375,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          413.1126
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.27800000000000036,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          58.544475000000006,
          413.1126
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "lixões precisam de ampliação.",
      "dir": "ltr",
      "width": 131.341275,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          61.25497500000001,
          413.1126
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          398.5779
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "B",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          398.5779
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "B",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          398.5779
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          398.5779
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "o",
      "dir": "ltr",
      "width": 5.421,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          398.5779
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.27800000000000036,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          53.606100000000005,
          398.5779
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "desperdício degrada o ambiente.",
      "dir": "ltr",
      "width": 143.00812499999995,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          56.31660000000001,
          398.5779
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          384.0433
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "C",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          384.0433
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "C",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          384.0433
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          384.0433
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "os mercados doam alimentos perecíveis.",
      "dir": "ltr",
      "width": 177.99112499999987,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          384.0433
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          369.5086
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "D",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          369.5086
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "D",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          369.5086
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          369.5086
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "a",
      "dir": "ltr",
      "width": 5.421,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          369.5086
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.3180000000000004,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          53.606100000000005,
          369.5086
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "desnutrição compromete o raciocínio.",
      "dir": "ltr",
      "width": 170.6522999999999,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          56.70660000000001,
          369.5086
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          354.974
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "E",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          354.974
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "E",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          354.974
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          354.974
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "as",
      "dir": "ltr",
      "width": 10.306725000000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          354.974
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.27790000000000065,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          58.491825000000006,
          354.974
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "residências carecem de refrigeradores.",
      "dir": "ltr",
      "width": 170.78587499999998,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          61.20135000000001,
          354.974
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.171350000000007,
          334.772
      ],
      "fontName": "g_d0_f1",
      "hasEOL": true
  },
  {
      str: "QUESTÃO 02",
      "dir": "ltr",
      "width": 61.76625,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.171350000000007,
          334.772
      ],
      "fontName": "g_d0_f1",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          317.40725
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "No man is an island,",
      "dir": "ltr",
      "width": 88.68307500000004,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          317.40725
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "Entire of itself;",
      "dir": "ltr",
      "width": 62.05192500000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          302.87
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "Every man is a piece of the continent,",
      "dir": "ltr",
      "width": 163.63619999999992,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          288.33275000000003
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "A part of the main.",
      "dir": "ltr",
      "width": 80.22007500000001,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          273.79550000000006
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[...]",
      "dir": "ltr",
      "width": 12.479025000000014,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          259.2582500000001
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "Any man’s death diminishes me,",
      "dir": "ltr",
      "width": 140.20207499999998,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          244.7210000000001
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "Because I am involved in mankind.",
      "dir": "ltr",
      "width": 151.036275,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          59.51460000000001,
          230.1837500000001
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "DONNE, J.",
      "dir": "ltr",
      "width": 30.582600000000017,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          46.0817,
          217.3236
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          76.66430000000001,
          217.3236
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "The Works of John Donne",
      "dir": "ltr",
      "width": 76.3116,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          78.33230000000002,
          217.3236
      ],
      "fontName": "g_d0_f1",
      "hasEOL": false
  },
  {
      str: ".",
      "dir": "ltr",
      "width": 1.6680000000000001,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          154.6277,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          156.2957,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "Londres:",
      "dir": "ltr",
      "width": 24.09479999999996,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          157.96370000000002,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          182.05850000000004,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "John",
      "dir": "ltr",
      "width": 13.423200000000001,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          183.72650000000004,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          197.14970000000008,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "W.",
      "dir": "ltr",
      "width": 7.216199999999993,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          198.8177000000001,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          206.03390000000007,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "Parker,",
      "dir": "ltr",
      "width": 19.61159999999999,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          207.70190000000008,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          227.3135000000001,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "1839",
      "dir": "ltr",
      "width": 13.645800000000015,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          228.9815000000001,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          242.62730000000016,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "(fragmento).",
      "dir": "ltr",
      "width": 33.49859999999994,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          244.29530000000017,
          217.3236
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          199.9543
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "Nesse poema, a expressão “",
      "dir": "ltr",
      "width": 115.01197499999999,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          199.9543
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "No man is an island",
      "dir": "ltr",
      "width": 77.94735000000001,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          145.69484999999997,
          199.9543
      ],
      "fontName": "g_d0_f11",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.10580000000002343,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          223.64219999999992,
          199.9543
      ],
      "fontName": "g_d0_f11",
      "hasEOL": false
  },
  {
      str: "”",
      "dir": "ltr",
      "width": 3.24675,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          224.0654,
          199.9543
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.12463076923076863,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          227.31215,
          199.9543
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "ressalta o(a)",
      "dir": "ltr",
      "width": 49.267724999999935,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          228.5273,
          199.9543
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          185.4197
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "A",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          185.4197
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "A",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          185.4197
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          185.4197
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "medo da morte.",
      "dir": "ltr",
      "width": 68.86522500000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          185.4197
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          170.885
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "B",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          170.885
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "B",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          170.885
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          170.885
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "ideia de conexão.",
      "dir": "ltr",
      "width": 76.64669999999997,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          170.885
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          156.3503
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "C",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          156.3503
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "C",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          156.3503
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          156.3503
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "conceito de solidão.",
      "dir": "ltr",
      "width": 86.81302499999998,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          156.3503
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          141.8157
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "D",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          141.8157
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "D",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          141.8157
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          141.8157
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "risco de devastação.",
      "dir": "ltr",
      "width": 89.92425,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          141.8157
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          127.2811
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "E",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          127.2811
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "E",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          31.1811,
          127.2811
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.7440000000000005,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          40.9311,
          127.2811
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "necessidade de empatia.",
      "dir": "ltr",
      "width": 109.16880000000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          48.185100000000006,
          127.2811
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          704.3978
      ],
      "fontName": "g_d0_f1",
      "hasEOL": true
  },
  {
      str: "QUESTÃO 03",
      "dir": "ltr",
      "width": 61.76625000000003,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          704.3978
      ],
      "fontName": "g_d0_f1",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          10,
          0,
          0,
          10,
          345.2546,
          683.8939
      ],
      "fontName": "g_d0_f1",
      "hasEOL": true
  },
  {
      str: "Things We Carry on the Sea",
      "dir": "ltr",
      "width": 134.3709999999998,
      "height": 10,
      "transform": [
          10,
          0,
          0,
          10,
          345.2546,
          683.8939
      ],
      "fontName": "g_d0_f1",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.6378,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": true
  },
  {
      str: "We",
      "dir": "ltr",
      "width": 14.240850000000025,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.6378,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.3103999999999966,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          311.87865000000005,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "carry",
      "dir": "ltr",
      "width": 21.628424999999957,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.90505,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.3107000000000029,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          336.533475,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "tears",
      "dir": "ltr",
      "width": 21.01125000000005,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          339.56280000000004,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.30999999999999206,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          360.5740500000001,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "in",
      "dir": "ltr",
      "width": 7.398299999999982,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          363.59655000000004,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.31020000000000597,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          370.99485,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "our",
      "dir": "ltr",
      "width": 13.726049999999985,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          374.01930000000004,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.31020000000000014,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          387.74535000000003,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "eyes:",
      "dir": "ltr",
      "width": 22.152000000000037,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          390.76980000000003,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.31099999999999756,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          412.9218000000001,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "good-bye",
      "dir": "ltr",
      "width": 39.62010000000007,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          415.95405000000005,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.3103999999999966,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          455.5741500000001,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "father,",
      "dir": "ltr",
      "width": 26.001300000000004,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          458.60055000000006,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.3101999999999943,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          484.6018500000001,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "good-bye",
      "dir": "ltr",
      "width": 39.62010000000007,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          487.62630000000007,
          666.7246
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.65155000000004,
          655.22935
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[mother",
      "dir": "ltr",
      "width": 30.747600000000027,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.65155000000004,
          655.22935
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry soil in small bags: may home never fade in our",
      "dir": "ltr",
      "width": 229.5861750000003,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.64755,
          640.89685
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[hearts",
      "dir": "ltr",
      "width": 27.56617499999994,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.65155000000004,
          629.4015999999999
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.64755,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": true
  },
  {
      str: "We",
      "dir": "ltr",
      "width": 14.244750000000012,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.64755,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.1529999999999967,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          311.89230000000003,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "carry",
      "dir": "ltr",
      "width": 21.644025000000028,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          313.38405,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.1530999999999949,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          335.02807500000006,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "carnage",
      "dir": "ltr",
      "width": 34.505249999999954,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          336.5208,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.15300000000000835,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          371.02604999999994,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "of",
      "dir": "ltr",
      "width": 7.908224999999999,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          372.5178,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.15289999999999848,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          380.42602500000004,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "mining,",
      "dir": "ltr",
      "width": 30.288375000000055,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          381.9168,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.15249999999999395,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          412.20517500000005,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "droughts,",
      "dir": "ltr",
      "width": 39.231075,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          413.69205,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.1522999999999975,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          452.923125,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "floods,",
      "dir": "ltr",
      "width": 28.015649999999997,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          454.40805,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.152599999999998,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          482.4237,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "genocides",
      "dir": "ltr",
      "width": 43.34752499999993,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          483.91155,
          615.0690999999999
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          600.7366
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry dust of our families and neighbors incinerated",
      "dir": "ltr",
      "width": 229.5861750000001,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          600.7366
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[in mushroom clouds",
      "dir": "ltr",
      "width": 90.64575000000019,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          589.2413499999999
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry our islands sinking under the sea",
      "dir": "ltr",
      "width": 185.59417500000023,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          574.9088499999999
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry our hands, feet, bones, hearts and best minds",
      "dir": "ltr",
      "width": 229.63395000000014,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          563.4135999999999
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[for a new life",
      "dir": "ltr",
      "width": 58.08757500000005,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          551.9183499999998
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry diplomas: medicine, engineer, nurse,",
      "dir": "ltr",
      "width": 201.75967500000021,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          537.5858499999998
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[education, math, poetry, even if they mean",
      "dir": "ltr",
      "width": 187.1951250000004,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          526.0905999999998
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[nothing to the other shore",
      "dir": "ltr",
      "width": 114.21442500000015,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          514.5953499999997
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry railroads, plantations, laundromats,",
      "dir": "ltr",
      "width": 194.9132250000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          500.26284999999973
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[bodegas, taco trucks, farms, factories, nursing",
      "dir": "ltr",
      "width": 204.22252500000022,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          488.76759999999973
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[homes, hospitals, schools, temples... built on",
      "dir": "ltr",
      "width": 197.2220250000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          477.27234999999973
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[our ancestors’ backs",
      "dir": "ltr",
      "width": 92.39295000000006,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          465.77709999999973
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry old homes along the spine, new dreams in our",
      "dir": "ltr",
      "width": 229.6056749999998,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          451.44459999999975
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[chests",
      "dir": "ltr",
      "width": 31.003049999999995,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          439.94934999999975
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We carry yesterday, today and tomorrow",
      "dir": "ltr",
      "width": 175.8997500000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          425.6168499999998
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We’re orphans of the wars forced upon us",
      "dir": "ltr",
      "width": 181.47480000000024,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          411.2843499999998
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "We’re refugees of the sea rising from industrial wastes",
      "dir": "ltr",
      "width": 229.58130000000017,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          396.9518499999998
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "And we carry our mother tongues",
      "dir": "ltr",
      "width": 145.55872500000024,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          382.6193499999998
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[...]",
      "dir": "ltr",
      "width": 12.479025000000028,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          368.28684999999984
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "As we drift... in our rubber boats... from shore... to shore...",
      "dir": "ltr",
      "width": 229.65345000000005,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          297.65729999999996,
          353.95434999999986
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "[to shore...",
      "dir": "ltr",
      "width": 45.7762499999999,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          314.6613,
          341.64984999999984
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          318.2758,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": true
  },
  {
      str: "PING,",
      "dir": "ltr",
      "width": 16.854000000000077,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          318.2758,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          335.1298000000001,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "W.",
      "dir": "ltr",
      "width": 7.214999999999982,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          336.7978000000001,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          344.0128000000001,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "Disponível",
      "dir": "ltr",
      "width": 28.946400000000004,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          345.6808000000001,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          374.62720000000013,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "em:",
      "dir": "ltr",
      "width": 10.119599999999982,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          376.29520000000014,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          386.4148000000001,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "https://poets.org.",
      "dir": "ltr",
      "width": 46.556400000000096,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          388.08280000000013,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          434.63920000000036,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "Acesso",
      "dir": "ltr",
      "width": 20.418600000000048,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          436.30720000000036,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          456.72580000000045,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "em:",
      "dir": "ltr",
      "width": 10.120200000000002,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          458.39380000000045,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          468.51400000000046,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "1",
      "dir": "ltr",
      "width": 3.3360000000000003,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          470.18200000000047,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          473.5180000000005,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "jun.",
      "dir": "ltr",
      "width": 9.968399999999951,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          475.1860000000005,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          485.15440000000046,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "2023",
      "dir": "ltr",
      "width": 13.761000000000031,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          486.82240000000047,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000011,
      "height": 0,
      "transform": [
          6,
          0,
          0,
          6,
          500.58340000000055,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "(fragmento).",
      "dir": "ltr",
      "width": 33.498000000000054,
      "height": 6,
      "transform": [
          6,
          0,
          0,
          6,
          502.25140000000056,
          328.7049
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          311.3356
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "Ao retratar a trajetória de refugiados, o poema recorre à",
      "dir": "ltr",
      "width": 246.63015000000016,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          311.3356
      ],
      "fontName": "g_d0_f2",
      "hasEOL": true
  },
  {
      str: "imagem de viagem marítima para destacar o(a)",
      "dir": "ltr",
      "width": 205.65480000000014,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          299.6356
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          285.101
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "A",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          285.101
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "A",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          285.101
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.744000000000002,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          298.8839,
          285.101
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "risco de choques culturais.",
      "dir": "ltr",
      "width": 116.53200000000007,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          306.1379,
          285.101
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          270.5663
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "B",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          270.5663
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "B",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          270.5663
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.744000000000002,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          298.8839,
          270.5663
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "impacto do ensino de história.",
      "dir": "ltr",
      "width": 130.1985750000001,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          306.1379,
          270.5663
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          256.0317
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "C",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          256.0317
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "C",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          256.0317
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.744000000000002,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          298.8839,
          256.0317
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "importância da luta ambiental.",
      "dir": "ltr",
      "width": 131.39782500000004,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          306.1379,
          256.0317
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          241.497
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "D",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          241.497
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "D",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          241.497
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.744000000000002,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          298.8839,
          241.497
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "existência de experiências plurais.",
      "dir": "ltr",
      "width": 149.3261250000002,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          306.1379,
          241.497
      ],
      "fontName": "g_d0_f2",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          226.9624
      ],
      "fontName": "g_d0_f10",
      "hasEOL": true
  },
  {
      str: "E",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          226.9624
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "E",
      "dir": "ltr",
      "width": 9.75,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          289.1339,
          226.9624
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.744000000000002,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          298.8839,
          226.9624
      ],
      "fontName": "g_d0_f10",
      "hasEOL": false
  },
  {
      str: "necessidade",
      "dir": "ltr",
      "width": 55.34099999999999,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          306.1379,
          226.9624
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2780000000000142,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          361.4788999999999,
          226.9624
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "de",
      "dir": "ltr",
      "width": 10.872224999999974,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          364.18940000000003,
          226.9624
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2779000000000043,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          375.061625,
          226.9624
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "capacitação",
      "dir": "ltr",
      "width": 52.748475000000035,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          377.77115000000003,
          226.9624
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: " ",
      "dir": "ltr",
      "width": 0.2779000000000043,
      "height": 0,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          430.519625,
          226.9624
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "profissional.",
      "dir": "ltr",
      "width": 52.520325000000014,
      "height": 9.75,
      "transform": [
          9.75,
          0,
          0,
          9.75,
          433.22915000000006,
          226.9624
      ],
      "fontName": "g_d0_f3",
      "hasEOL": false
  },
  {
      str: "",
      "dir": "ltr",
      "width": 0,
      "height": 0,
      "transform": [
          20,
          0,
          0,
          20,
          31.1811,
          743.6853
      ],
      "fontName": "g_d0_f6",
      "hasEOL": true
  },
  {
      str: "*010175AZ2*",
      "dir": "ltr",
      "width": 105.38,
      "height": 20,
      "transform": [
          20,
          0,
          0,
          20,
          31.1811,
          743.6853
      ],
      "fontName": "g_d0_f6",
      "hasEOL": false
  }
]

const intervals = findIntervalQuestion(words_question);

console.log(intervals);
