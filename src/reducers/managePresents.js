const INITIALSTATE = {numberOfPresents: 0}

export function managePresents(state=INITIALSTATE, action){
    switch (action.type){
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents +1}
            break;
        case 'DECREASE':
            return {numberOfPresents: state.numberOfPresents-1}
            break;
        default:
            return state
    }
}
