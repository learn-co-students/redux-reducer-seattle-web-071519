const INITIALSTATE = {friends: []}
export function manageFriends(state=INITIALSTATE, action){
    switch (action.type){
        case 'ADD_FRIEND':
                return {friends: [...state.friends,action.friend]}
            break;
        case 'REMOVE_FRIEND':
                let newFriends = state.friends.filter(friend => {
                    return friend.id !== action.id
                })
                return {friends: newFriends}
            break;
        default:
            return state
    }
}
