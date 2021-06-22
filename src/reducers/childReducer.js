export const childReducer = (state={}, action) => {
    debugger;
    switch(action.type){
        case 'AddChild':
        return action.payload;
      default:
        return state;
    }
}