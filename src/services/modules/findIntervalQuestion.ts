import { TextItem } from "pdfjs-dist/types/src/display/api";

export interface QuestionIntervalProps {
  question_interval: TextItem[];
}

export function findIntervalQuestion(wordsObject: TextItem[]): QuestionIntervalProps[] {
  const questions_intervals: QuestionIntervalProps[] = [];
  let currentInterval: TextItem[] = []

  for (const word_object of wordsObject) {
      const currentWord: string = word_object.str;
      const isQuestion = /^QUESTÃO \d{2}$/i.test(currentWord);

      if (isQuestion) {
          if (currentInterval.length > 0) {
              const questionInterval: QuestionIntervalProps = { question_interval: currentInterval };
              questions_intervals.push(questionInterval);
          }
          currentInterval = [word_object];
      } else {
          currentInterval.push(word_object);
      }
  }

  if (currentInterval.length > 0) {
      const questionInterval: QuestionIntervalProps = { question_interval: currentInterval };
      questions_intervals.push(questionInterval);
  }

  return questions_intervals;
}

// const alternatives_interval = [
//   {
//     alternative_interval: [
//       { str: "string", hasEOL: "true" },
//       { str: "string", hasEOL: "true" },
//       { str: "string", hasEOL: "true" },
//       { str: "string", hasEOL: "true" },
//     ],
//   }
//   {
//     alternative_interval: [
//       { str: "string", hasEOL: "true" },
//       { str: "string", hasEOL: "true" },
//       { str: "string", hasEOL: "true" },
//       { str: "string", hasEOL: "true" },
//     ]
//   }
// ]

// const questions_interval = [
//   {
//     question_interval: {
//       base_words: [{ str: "string", hasEOL: "true" },{ str: "string", hasEOL: "true" }, etc...],
//       alternatives_interval: {
//         alternative_interval_A: [ { str: "string", hasEOL: "true" }, { str: "string", hasEOL: "true" }, etc..],
//         alternative_interval_B: [ { str: "string", hasEOL: "true" }, { str: "string", hasEOL: "true" }, etc..],
//         alternative_interval_C: [ { str: "string", hasEOL: "true" }, { str: "string", hasEOL: "true" }, etc..]
//       }
//     }
//   },
//   {
//     question_interval: {
//       base_words: [{ str: "string", hasEOL: "true" },{ str: "string", hasEOL: "true" }, etc...],
//       alternatives_interval: {
//         alternative_interval_A: [ { str: "string", hasEOL: "true" }, { str: "string", hasEOL: "true" }, etc..],
//         alternative_interval_B: [ { str: "string", hasEOL: "true" }, { str: "string", hasEOL: "true" }, etc..],
//         alternative_interval_C: [ { str: "string", hasEOL: "true" }, { str: "string", hasEOL: "true" }, etc..]
//       }
//     }
//   }
// ]
