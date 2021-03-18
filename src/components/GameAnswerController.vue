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
import { RubyString } from '@/models/RubyString'
@Component({
  components: {
    GameAnswerControllerButton
  }
})
export default class GameAnswerController extends Vue {
  @Prop() public choicedAnswer!: RubyString[]

  @Watch('choicedAnswer', { immediate: true })
  public quizChange(answers: RubyString[]) {
    this.choices1 = answers[0]
    this.choices2 = answers[1]
    this.choices3 = answers[2]
    this.choices4 = answers[3]
  }

  public choices1 = new RubyString('', '')
  public choices2 = new RubyString('', '')
  public choices3 = new RubyString('', '')
  public choices4 = new RubyString('', '')

  @Emit() public answer(answer: RubyString) {
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
