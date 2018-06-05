const initialState = { count: 0 }
const counter = (state = initialState, action) => {
  switch(action.type) {
    case "IncreaseCounter":
      return Object.assign({}, state, { count: state.count + 1});
    case "DecreaseCounter":
      return Object.assign({}, state, { count: state.count - 1});
    case 'IndexCounter':
      return Object.assign({}, state, { count: action.payload.id});
    default:
      return state;
  }
}
export default counter;
