import { Quiz } from './Quiz'
import { RubyString } from './RubyString'
export class FillInTheBlankQuiz extends Quiz {
  constructor(begin: string, end: string, anther: RubyString) {
    super(anther)
    this.begin = begin
    this.end = end
  }
  public begin: string
  public end: string
  public readonly QuizStyle: string = 'FillInTheBlankQuiz'
}
