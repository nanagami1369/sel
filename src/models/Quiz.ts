import { RubyString } from './RubyString'

export abstract class Quiz {
  constructor(anther: RubyString) {
    this.anther = anther
  }
  public anther: RubyString
  public abstract readonly QuizStyle: string
}
