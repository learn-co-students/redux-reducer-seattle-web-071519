export function manageFriends(state={
    friends: []
}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, {
                name: "Joe",
                hometown: "Boston",
                id:101
            }]}
        case "REMOVE_FRIEND":
            let currentState = state.friends
            let newState = currentState.filter((friend) => friend.id !== action.id)
            return {...state,friends:newState}
        default:
            return state
        
    }
}
