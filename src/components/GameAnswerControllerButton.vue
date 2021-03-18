<template>
  <button class="answerButton" @click="click">
    <div class="antherButtonIndex" :style="iconStyle">{{ index }}</div>
    <p class="antherButtonText">
      <ruby>
        <rb> {{ answer.value }} </rb>
        <rt> {{ answer.ruby }} </rt>
      </ruby>
    </p>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import { AnswerControllerButtonStyle } from '@/models/AnswerControllerButtonStyle'
import { RubyString } from '@/models/RubyString'
@Component
export default class GameAnswerControllerButton extends Vue {
  @Prop() public index!: number
  @Prop() public answer!: RubyString
  @Prop() public iconColor?: string
  public iconStyle = new AnswerControllerButtonStyle('gray')

  @Watch('iconColor', { immediate: true })
  public iconChange(color: string) {
    this.iconStyle = new AnswerControllerButtonStyle(color)
  }
  @Emit() public click() {
    return this.answer
  }
}
</script>

<style scoped>
/* ボタン全体の設定 */
.answerButton {
  line-height: 1.5em;
  font-size: 1.5em;
  display: flex;
  height: 2.2em;
  margin: 10px 5px;
  background: whitesmoke;
  border: solid 1px;
  align-items: center;
}
.answerButton:hover {
  background-color: #acacac;
}
.answerButton:active {
  background-color: #838383;
}
/* 表示内容について */
.antherButtonText {
  margin: 0px 10px;
}
/* ボタンアイコンの設定 */
.antherButtonIndex {
  width: 2em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  border-radius: 90px;
}
</style>
