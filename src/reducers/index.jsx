import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable'

const myTeam = (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_TEAM_INDEX':
      return state.set("selected", action.selected);
    case 'SELECT_HERO':
      if(!state.get("members").includes(action.hero)){
        return state.setIn(["members", `${state.get('selected')}`], action.hero);
      }
      else {
        return state;
      }
    default:
      return state;
  }
};

const reducer = combineReducers({
  myTeam
})

export default reducer;
