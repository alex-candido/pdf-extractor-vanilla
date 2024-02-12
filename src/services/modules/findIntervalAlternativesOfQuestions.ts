import { TextItem } from "pdfjs-dist/types/src/display/api";
import { QuestionIntervalProps } from "./findIntervalQuestion";

export interface AlternativeInterval {
  text_base: TextItem[],
  alternative_interval: TextItem[];
}

export function findIntervalAlternativesOfQuestions(questionIntervals: QuestionIntervalProps[]): AlternativeInterval[] {
  const currentQuestionIntervals = questionIntervals.slice(1,questionIntervals.length)
  const alternativesIntervals: AlternativeInterval[] = [];

  for (const questionInterval of currentQuestionIntervals) {
      const alternatives: TextItem[][] = [];
      let currentAlternative: TextItem[] = [];
      let textBase: TextItem[] = [];

      for (const obj of questionInterval.question_interval) {
          const currentWord: string = obj.str;
          const isAlternative = /^[A-E]$/i.test(currentWord);

          if (isAlternative) {
              if (currentAlternative.length > 0) {
                alternatives.push(currentAlternative);
              }
              currentAlternative = [obj];
          } else {
              if (currentAlternative.length === 0) {
                  textBase.push(obj);
              } else {
                  currentAlternative.push(obj);
              }
          }
      }

      if (currentAlternative.length > 0) {
          alternatives.push(currentAlternative);
      }

      const alternativesInterval: AlternativeInterval = { alternative_interval: alternatives.flat(),
        text_base: textBase
      };
      alternativesIntervals.push(alternativesInterval);
  }

  return alternativesIntervals;
}



