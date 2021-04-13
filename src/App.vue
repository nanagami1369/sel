<template>
  <div id="app">
    <v-dialog />
    <Game :quiz="quiz" :answers="answers" @answer="answer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Game from '@/components/Game.vue'
import { randomSelectFromArray } from '@/models/RandomUseArrayTools'
import { Quiz } from '@/models/Quiz'
import { Config } from '@/models/config'
import { RubyString } from './models/RubyString'
@Component({
  components: {
    Game
  }
})
export default class App extends Vue {
  constructor() {
    super()
    this.answers = this.questions.map(q => q.anther)
    this.quiz = randomSelectFromArray(this.questions)
  }
  public quiz: Quiz
  public answers: RubyString[]
  private questions: Quiz[] = Config.QuizData
  public answer(isSuccses: boolean) {
    if (!isSuccses) {
      this.show('✕不正解')
      return
    }
    this.show('◯正解')
    this.quiz = randomSelectFromArray(this.questions)
  }

  private show(text: string) {
    this.$modal.show('dialog', {
      text: text,
      buttons: [
        {
          title: '閉じる',
          handler: () => {
            this.$modal.hide('dialog')
          }
        }
      ]
    })
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
#app {
  height: 100%;
}

.vue-dialog-content > div {
  font-size: 2em;
}
</style>
