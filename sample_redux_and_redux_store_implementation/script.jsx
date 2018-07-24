const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state;
    }
} 

const { createStore } = Redux;          //it holds the current application state object and let's us dispatch actions.
const store = createStore(counter);     //We need to specify the reducer that tells how state is updated with actions.

/*
    Store has three methods:
        1. getState()                       => It retrieves the current state of the redux store
        2. dispatch({type: 'INCREMENT'})    => It let's is dispatch actions to change the state of the application.
        3. subscribe()                      => to subscribe to the changes and the dispatch call to a method
*/

//since the state is held inside the redux store, the component can be a simple
//function component
const Counter = ({value, onIncrement, onDecrement}) => {
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
};

const render = () => {
    ReactDOM.render(
        <Counter 
            value={store.getState()} 
            onIncrement={ ()=>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={ ()=>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />, document.getElementById('root')
    );
    //document.body.innerText = store.getState();
};

store.subscribe(render);                    //whenever the dispatch method is called, it will call render which in turn is calling the reducer method
render();                                   //for first time - rendering the state value 0

document.addEventListener('click', () => {  //code to dispatch the store
store.dispatch({ type: 'INCREMENT' });
});