export function managePresents(state={
    numberOfPresents:0
}, action){
    console.log(state)
    switch (action.type){
        case "INCREASE":
            return {...state, numberOfPresents:state.numberOfPresents+1}
        default:
            return state
    }
}
