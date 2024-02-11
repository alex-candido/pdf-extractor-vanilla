//@ts-ignore

export function analyzeQuestions(questionsText: string): Question[] {
  const questionsRegex = /QUESTÃO\s+(\d+)\s+(.*?)(?:\n\n(.*?)\n\n)?(?:\n(.*?)\n\n)?(.*?)\n\n/g;
  const questionsData = questionsText.matchAll(questionsRegex);


  const questions: Question[] = [];

  for (const questionData of questionsData) {
    const questionNumber = parseInt(questionData[1]);
    const questionType = questionData[2] === "Resposta única" ? "objetiva" : "discursiva";
    const questionDiscipline = getDiscipline(questionData[3]);
    const questionText = questionData[4];
    const questionAnswers = questionData[5].split("\n").map((answer) => answer.trim());

    const question: Question = {
      number: questionNumber,
      type: questionType,
      discipline: questionDiscipline,
      text: questionText,
      answers: questionAnswers,
    };

    questions.push(question);
  }

  return questions;
}

function getDiscipline(disciplineCode: string): string {
  switch (disciplineCode) {
    case "LC":
      return "Linguagens, Códigos e suas Tecnologias";
    case "CH":
      return "Ciências Humanas e suas Tecnologias";
    case "CN":
      return "Ciências da Natureza e suas Tecnologias";
    case "MT":
      return "Matemática e suas Tecnologias";
    default:
      return "Disciplina não identificada";
  }
}

export interface Question {
  number: number;
  type: "objetiva" | "discursiva";
  discipline: string;
  text: string;
  answers: string[];
}


