export function manageFriends(state={friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            // let newFriend = {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id}
            // console.log(newFriend)
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND": 
            let myFriends = [...state.friends]
            // console.log(myFriends)
            // let filtered = myFriends.filter(friend => {

            // })
            return {...state, friends: myFriends.filter(friend => {
                return friend.id !== action.id
            })}
        default: 
            return state
    }
}
