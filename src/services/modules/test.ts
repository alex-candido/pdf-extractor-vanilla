

// interface QuestionInterval {
//   question_interval: Word[];
// }

// export function findIntervalQuestion(words: Word[]): QuestionInterval[] {
//   const intervals: QuestionInterval[] = [];
//   let questionStart: number | null = null;

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (word.str.startsWith("QUESTÃO")) {
//       if (questionStart === null) {
//         questionStart = i;
//       } else {
//         intervals.push({
//           question_interval: words.slice(questionStart, i),
//         });
//         questionStart = i;
//       }
//     }
//   }

//   // Check for last question interval
//   if (questionStart !== null) {
//     intervals.push({
//       question_interval: words.slice(questionStart),
//     });
//   }

//   return intervals;
// }

// // console.log(intervals);



// interface WordObjectProps {
//   str: string;
//   hasEOL: boolean;
//   dir: string;
//   width: number;
//   height: number;
//   // ... outras propriedades
// }

// interface AlternativeInterval {
//   alternative: string;
//   alternative_interval: WordObjectProps[];
// }

// export function separateAlternatives(questionInterval: WordObjectProps[]): AlternativeInterval[] {
//   const alternativesIntervals: AlternativeInterval[] = [];
//   let currentAlternative: AlternativeInterval | null = null;

//   for (const obj of questionInterval) {
//       const currentWord: string = obj.str;

//       if (/^[A-E]$/i.test(currentWord)) {
//           // Inicia um novo alternative_interval
//           if (currentAlternative !== null) {
//               alternativesIntervals.push(currentAlternative);
//           }
//           currentAlternative = { alternative: currentWord, alternative_interval: [obj] };
//       } else {
//           // Adiciona à alternative_interval atual
//           if (currentAlternative !== null) {
//               currentAlternative.alternative_interval.push(obj);
//           }
//       }
//   }

//   // Adiciona a última alternative_interval ao array de resultados
//   if (currentAlternative !== null) {
//       alternativesIntervals.push(currentAlternative);
//   }

//   return alternativesIntervals;
// }

// interface WordObjectProps {
//   str: string;
//   hasEOL: boolean;
//   dir: string;
//   width: number;
//   height: number;
//   // ... outras propriedades
// }

// interface AlternativeInterval {
//   alternative: string;
//   alternative_interval: WordObjectProps[];
// }

// export function separateAlternatives(questionInterval: WordObjectProps[]): AlternativeInterval[] {
//   const alternativesIntervals: AlternativeInterval[] = [];
//   let currentAlternative: AlternativeInterval | null = null;

//   for (const obj of questionInterval) {
//       const currentWord: string = obj.str;

//       if (/^[A-E]$/i.test(currentWord)) {
//           if (currentAlternative !== null) {
//               // Adiciona a alternativa anterior ao array de resultados
//               alternativesIntervals.push(currentAlternative);
//           }

//           // Inicia um novo intervalo de alternativa
//           currentAlternative = { alternative: currentWord, alternative_interval: [obj] };
//       } else if (currentAlternative !== null) {
//           // Adiciona à alternativa atual
//           currentAlternative.alternative_interval.push(obj);
//       }
//   }

//   // Adiciona a última alternativa ao array de resultados
//   if (currentAlternative !== null) {
//       alternativesIntervals.push(currentAlternative);
//   }

//   return alternativesIntervals;
// }
