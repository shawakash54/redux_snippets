const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners.filter(l => l !== listener);
        }
    };

    dispatch();
    return {getState, dispatch, subscribe};
};

const store =  createStore(reducer_method);

let listener1;
const l1 = store.subscribe(listener1);
//to unsubscribe the listener
l1();