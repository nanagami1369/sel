import { Quiz } from './Quiz'
export class FillInTheBlankQuiz extends Quiz {
  constructor(begin: string, end: string, anther: string) {
    super(anther)
    this.begin = begin
    this.end = end
  }
  public begin: string
  public end: string
  public readonly QuizStyle: string = 'FillInTheBlankQuiz'
}
