import { FillInTheBlankQuiz } from '@/models/FillInTheBlankQuiz'
import { Quiz } from '@/models/Quiz'
export class Config {
  public static QuizData: Quiz[] = [
    new FillInTheBlankQuiz('夏休みの最終日には', 'あるそうだ', '花火大会'),
    new FillInTheBlankQuiz('就職は', 'だ！', '臥薪嘗胆'),
    new FillInTheBlankQuiz('', 'をして研究を進める', '試行錯誤')
  ]

  public static FillInTheBlankIncorrectAnswers: string[] = [
    '画竜点睛',
    '明鏡止水',
    '花火大会',
    '世界平和',
    '試行錯誤',
    '自画自賛'
  ]
}
