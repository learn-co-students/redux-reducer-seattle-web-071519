export function manageFriends(state = { friends: [] }, action) {
  if (action.type == "ADD_FRIEND") {
    return { ...state, friends: [...state.friends, action.friend] };
  } else action.type == "REMOVE_FRIEND";
  {
    let old = state.friends.findIndex(friend => friend.id === action.id);
    return {
      ...state,
      friends: [...state.friends.slice(0, old), ...state.friends.slice(old + 1)]
    };
  }
}
