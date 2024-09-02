import {legacy_createStore as createStore} from 'redux'

const store = createStore(function(state = {count: 0}, action){
    // akan dijalankan pertama kali oleh si redux
    console.log("reduce params", {state, action})
    if (action.type === "increment"){
        return {count: state.count + 1}
    }
    return state;
})

console.log(store.getState());

store.dispatch({type: "increment"})

console.log(store.getState());
