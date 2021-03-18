export function randomChooseFromTheArray<T>(array: T[], howMany: number): T[] {
  if (array == null || array.length === 0) {
    throw new Error('配列が空です')
  }
  if (array.length < howMany) {
    throw new Error('配列の長さより取得する数が多いです')
  }
  const choices = [...Array(array.length).keys()]
  const selectedValues: T[] = []
  for (let index = 0; index < howMany; index++) {
    const index = Math.floor(Math.random() * choices.length)
    const selectedIndex = choices[index]
    const selectedValue = array[selectedIndex]
    selectedValues.push(selectedValue)
    choices.splice(selectedIndex, 1)
  }
  return selectedValues
}

export function randomInsertToArray<T>(array: T[], insertValue: T): T[] {
  if (array == null || array.length === 0) {
    throw new Error('配列が空です')
  }
  const insertIndex = Math.floor(Math.random() * array.length)
  const insertedArray = array.slice()
  insertedArray.splice(insertIndex, 0, insertValue)
  return insertedArray
}

export function randomSelectFromArray<T>(array: T[]): T {
  if (array == null || array.length === 0) {
    throw new Error('配列が空です')
  }
  const insertIndex = Math.floor(Math.random() * array.length)
  return array[insertIndex]
}
