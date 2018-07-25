//reducer composition  - abstraction layer for reducer method.

const toDo = (state, action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if(state.id != action.id)
                return state;
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};
const toDos = (state=[], action) => {
    switch(action.type){
        case 'ADD_TODO':
            // return [
            //     ...state,{
            //         id: action.id,
            //         text: action.text,
            //         completed: false
            //     }
            // ];
            return [
                ...state, todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            // return state.map(todo=>{
            //     if(todo.id != action.id)
            //         return todo;
            //     return {
            //         ...todo, 
            //         completed: !todo.completed          //spread operator helps in overwriting the particular property of the todo object
            //     };
            // });
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const testToDo = ()=>{
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
        toDos(stateBefore, action)
    ).toEqual(stateAfter);
};


//test suite for toggling todo
const testToggleToDo = ()=>{
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn React',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn React',
            completed: true
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        toDos(stateBefore, action)
    ).toEqual(stateAfter);
};

testToggleToDo();
testToDo();