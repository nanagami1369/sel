import { FillInTheBlankQuiz } from '@/models/FillInTheBlankQuiz'
import { Quiz } from '@/models/Quiz'
import { RubyString } from './RubyString'
export class Config {
  public static QuizData: Quiz[] = [
    new FillInTheBlankQuiz(
      '夏休みの最終日には',
      'があるそうだ',
      new RubyString('花火大会', 'はなびたいかい')
    ),
    new FillInTheBlankQuiz('就職は', 'だ！', new RubyString('臥薪嘗胆', 'がしんしょうたん')),
    new FillInTheBlankQuiz('', 'をして研究を進める', new RubyString('試行錯誤', 'しこうさくご'))
  ]

  public static FillInTheBlankIncorrectAnswers: RubyString[] = [
    new RubyString('画竜点睛', 'がりゅうてんせい'),
    new RubyString('明鏡止水', 'めいきょうしすい'),
    new RubyString('花火大会', 'はなびたいかい'),
    new RubyString('世界平和', 'せかいへいわ '),
    new RubyString('試行錯誤', 'しこうさくご'),
    new RubyString('自画自賛', 'じがじさん')
  ]
}
