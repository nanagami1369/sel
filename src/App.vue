<template>
  <Game :quiz="quiz" @answer="answer" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Game from '@/components/Game.vue'
import { randomSelectFromArray } from '@/models/RandomUseArrayTools'
import { Quiz } from '@/models/Quiz'
import { Config } from '@/models/config'
@Component({
  components: {
    Game
  }
})
export default class App extends Vue {
  constructor() {
    super()
    this.quiz = randomSelectFromArray(this.questions)
  }
  public quiz: Quiz
  private questions: Quiz[] = Config.QuizData
  public answer(isSuccses: boolean) {
    if (!isSuccses) {
      alert('不正解')
      return
    }
    alert('正解')
    this.quiz = randomSelectFromArray(this.questions)
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
