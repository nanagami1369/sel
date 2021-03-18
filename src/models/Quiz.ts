export abstract class Quiz {
  constructor(anther: string) {
    this.anther = anther
  }
  public anther: string
  public abstract readonly QuizStyle: string
}
