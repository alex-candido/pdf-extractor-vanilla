import { TextItem } from "pdfjs-dist/types/src/display/api";

interface AlternativeInterval {
  alternative: string;
  alternative_interval: TextItem[];
}

export function separateAlternatives(questionInterval: TextItem[]): AlternativeInterval[] {
  const alternativesIntervals: AlternativeInterval[] = [];
  let currentAlternative: AlternativeInterval | null = null;

  for (const obj of questionInterval) {
      const currentWord: string = obj.str;

      if (currentAlternative === null && /^[A-E]$/i.test(currentWord)) {
          currentAlternative = { alternative: currentWord, alternative_interval: [obj] };
      } else if (currentAlternative !== null) {
          currentAlternative.alternative_interval.push(obj);

          if (obj.hasEOL) {
              alternativesIntervals.push(currentAlternative);
              currentAlternative = null;
          }
      }
  }

  const currentAlternativesIntervals = alternativesIntervals.map((alternative) => {
   return {
    alternative: alternative.alternative,
    alternative_interval: alternative.alternative_interval.slice(2,alternative.alternative_interval.length)
   }
  })

  return currentAlternativesIntervals;
}




