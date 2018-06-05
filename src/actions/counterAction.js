export const increaseCounter = () => {
  return {
    type: "IncreaseCounter"
  }
}
export const decreaseCounter = () => {
  return {
    type: 'DecreaseCounter'
  }
}
export const indexCounter = (id) => {
  return {
    type: 'IndexCounter',
    payload: {
      id,
    },
  }
}