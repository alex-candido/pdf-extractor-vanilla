import { TextItem } from "pdfjs-dist/types/src/display/api";
import { QuestionIntervalProps } from "./findIntervalQuestion";

export interface FindHeaderPageProps {
  detailsPage: TextItem[]
}

export function findHeaderPage(questionIntervals: QuestionIntervalProps[]): FindHeaderPageProps {
  return {
    detailsPage: questionIntervals[0].question_interval,
  }
}


