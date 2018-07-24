# REDUX

- First principle   : Everything that changes in the app, including the data and the uri is contained in the state or the state tree.
- Second principle  : State tree is redundant, we can't modify it. Anytime we need to change the state, we have to dispatch the action. Action is plain JS object describing the change. State is the minimal representation of the data in the app, Action is the minimal description of the change of the data in the app. 
- Third principle   : To describe state mutation, we have to write a function that takes the previous state of the app, action being dispatched, and returns the next state of the app, and the function has to be pure. The function is called **Reducer**.


### PURE FUNCTIONS
Pure functions are the functions whose returned value depends solely on the value of the arguments. They don't have any side effects like network calls. If we call a pure function with the same arguments, we will always receive the same value. They also donot modify the value passed through them.

### IMPURE FUNCTIONS
They may call the network, databased, have side effects and may also override the values passed through them.

**Some of the functions written in Redux have to be Pure.**


## Reducer for a counter example

``` 
const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// assertions using MJ Expect library
expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1)

expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2)

expect(
    counter(2, {type: 'DECREMENT'})
).toEqual(1)

expect(
    counter(1, {type: 'DECREMENT'})
).toEqual(0)

console.log('Tests passed'); 
```



# File Hierarchy

### - **Expect and Deep Freeze demo**
    expect_deep_freeze_demo folder
### - **Sample Redux demo**
    sample_redux_and_redux_store_implementation folder
### - **Redux store implementation**
    sample_redux_and_redux_store_implementation folder
