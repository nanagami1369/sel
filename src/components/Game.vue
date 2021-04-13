<template>
  <main id="game">
    <template v-if="quiz.QuizStyle === 'FillInTheBlankQuiz'">
      <FillInTheBlankQuestion :quiz="quiz" />
    </template>

    <GameAnswerController @answer="answer" :choicedAnswer="choicedAnswer" />
  </main>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue, Emit } from 'vue-property-decorator'
import { Quiz } from '@/models/Quiz'
import { randomChooseFromTheArray, randomInsertToArray } from '@/models/RandomUseArrayTools'
import FillInTheBlankQuestion from '@/components/FillInTheBlankQuestion.vue'
import GameAnswerController from '@/components/GameAnswerController.vue'
import { RubyString } from '@/models/RubyString'

@Component({
  components: {
    FillInTheBlankQuestion,
    GameAnswerController
  }
})
export default class Game extends Vue {
  @Prop() private quiz!: Quiz

  public choicedAnswer: RubyString[] = [
    new RubyString('', ''),
    new RubyString('', ''),
    new RubyString('', ''),
    new RubyString('', '')
  ]

  @Prop() private answers!: RubyString[]

  @Emit()
  public answer(value: RubyString) {
    return this.quiz.anther.value === value.value
  }

  @Watch('quiz', { immediate: true })
  public quizChange(newQuiz: Quiz) {
    const incorrectAnswers = this.answers.filter(a => a.value !== newQuiz.anther.value)
    const choicedAnser = randomChooseFromTheArray(incorrectAnswers, 3)
    this.choicedAnswer = randomInsertToArray(choicedAnser, newQuiz.anther)
  }
}
</script>

<style scoped>
#game {
  height: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
