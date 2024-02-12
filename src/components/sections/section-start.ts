import * as pdfjslib from 'pdfjs-dist';
// @ts-ignore
const pdfjsWorker = '../../../node_modules/pdfjs-dist/build/pdf.worker.mjs';
pdfjslib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import { PDFDocumentProxy, TextItem } from 'pdfjs-dist/types/src/display/api';
import SectionStartHtml from "./html/section-start.html?raw";

import { findHeaderPage } from '../../services/modules/findHeaderPage';
import { findIntervalAlternativesOfQuestions } from '../../services/modules/findIntervalAlternativesOfQuestions';
import { findIntervalQuestion } from '../../services/modules/findIntervalQuestion';
import { separateAlternatives } from '../../services/modules/separateAlternatives';

export const SectionStartName = "section-start";

export interface StrProps {
  str: string;
}

export default class SectionStart extends HTMLElement {
  static pdf_input: any;
  static pwd: any;
  static upload: any;
  static download: any;
  static pdf_text: any;
  select: any;
  all_text: string[];

  constructor() {
    super();
    this.innerHTML = SectionStartHtml;
    SectionStart.pdf_input = document.querySelector(".select-pdf");
    SectionStart.pwd = document.querySelector(".pwd");
    SectionStart.upload = document.querySelector(".upload");
    SectionStart.download = document.querySelector(".download");
    SectionStart.pdf_text = document.querySelector(".pdf-text");
    this.select = document.querySelector(".select-page");
    this.all_text = []
  }

  async extractText(url: any, pass: any) {
    try {
      let pdf: any;
      if (pass) {
        pdf = pdfjslib.getDocument({ url: url, password: SectionStart.pwd.value });
      } else {
        pdf = pdfjslib.getDocument(url)
      }
      let currentPdf: PDFDocumentProxy = await pdf.promise;
      let pages = currentPdf._pdfInfo?.numPages;

      for (let i = 1; i <= pages; i++) {
        let page = await currentPdf.getPage(i)
        let page_text = await page.getTextContent()
        let text = page_text.items.map((s: any) => s.str).join("")
        this.all_text.push(text)

        const questions_intervals = findIntervalQuestion(page_text.items as TextItem[])

        const headerPage = findHeaderPage(questions_intervals)

        const questions = findIntervalAlternativesOfQuestions(questions_intervals)

        const questions_format = questions.map((question, index) => {
          const alternative = separateAlternatives(question.alternative_interval)
          const text_base = question.text_base
          return {
            alternative,
            text_base
          }
        })

        console.log({
          headerPage,
          questions_format,
          page: i
        })
      }
      this.all_text.map((_e: any, i: any) => {
        let option: any = document.createElement("option")
        option.value = i + 1
        option.innerText = i + 1
        this.select.appendChild(option)
      })
      this.afterProcess()
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  }

  addClickEvent() {
    SectionStart.upload.addEventListener("click", () => {
      let file: File = SectionStart.pdf_input.files[0];
      if (file !== undefined && file.type === "application/pdf") {
        let fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = () => {
          let res = fr.result;
          if (SectionStart.pwd.value=="") {
            this.extractText(res, false)
          } else {
            this.extractText(res, true)
          }
        };
      } else {
        alert("Select a valid pdf file");
      }
    });
  }

  addChangeEvent() {
    this.select.addEventListener("change", () => {
      this.afterProcess()
    })
  }

  afterProcess() {
    SectionStart.pdf_text.value = this.all_text[this.select.value - 1];
    SectionStart.download.href = "data:text/plain;charset=utf-8," + encodeURIComponent(this.all_text[this.select.value - 1]);
  }

  init() {
    if (
      SectionStart.pdf_input &&
      SectionStart.pwd &&
      SectionStart.upload &&
      SectionStart.download &&
      SectionStart.pdf_text
    ) {
      this.addClickEvent();
      this.addChangeEvent();
    }
    return this;
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define(SectionStartName, SectionStart);
}
