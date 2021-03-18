<template>
  <div id="question">
    <p>
      <span>{{ quiz.begin }}</span>
      <input type="text" readonly />
      <span>{{ quiz.end }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Quiz } from '@/models/Quiz'

@Component
export default class FillInTheBlankQize extends Vue {
  @Prop() public quiz!: Quiz
}
</script>

<style scoped>
#question > p {
  margin: 20px;
  font-size: 1.5em;
}
#question > p > input[type='text'] {
  width: 2em;
  font-size: 1em;
}
</style>
