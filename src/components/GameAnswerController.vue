<template>
  <div id="controllers">
    <GameAnswerControllerButton @click="answer" index="1" :answer="choices1" iconColor="#ac1743" />
    <GameAnswerControllerButton @click="answer" index="2" :answer="choices2" iconColor="#ffa500" />
    <GameAnswerControllerButton @click="answer" index="3" :answer="choices3" iconColor="#008000" />
    <GameAnswerControllerButton @click="answer" index="4" :answer="choices4" iconColor="#24a7ff" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import GameAnswerControllerButton from '@/components/GameAnswerControllerButton.vue'
@Component({
  components: {
    GameAnswerControllerButton
  }
})
export default class GameAnswerController extends Vue {
  @Prop() public choicedAnswer!: string[]

  @Watch('choicedAnswer', { immediate: true })
  public quizChange(answers: string[]) {
    this.choices1 = answers[0]
    this.choices2 = answers[1]
    this.choices3 = answers[2]
    this.choices4 = answers[3]
  }

  public choices1 = ''
  public choices2 = ''
  public choices3 = ''
  public choices4 = ''

  @Emit() public answer(answer: string) {
    return answer
  }
}
</script>

<style scoped>
#controllers {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
