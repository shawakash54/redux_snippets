const todo = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false,
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
  
        return {
          ...state,
          completed: !state.completed,
        };
      default:
        return state;
    }
  };
  
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const { combineReducers } = Redux;                //ES6 destructuring


//combine reducer combines the value from both the reducers into a single object and returns it.
const todoApp = combineReducers({
  todos,                                          //ES6 short-hand notation   Representing `todos: todos` as `todos` only.
  visibilityFilter,
});

const { createStore } = Redux;
const store = createStore(todoApp);

//adding view using React
const { component } = React;

let nextToDoId = 0;
class ToDoApp extends component{
  render(){
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }}/>
        <button onClick={()=>{
            store.dispatch({
              type: 'ADD_TODO',
              //text: 'Test',
              text: this.input.value,
              id: nextToDoId++
            });
            this.input.value='';  //reseting the value after dispatching the action
          }}
        >Add ToDo
        </button>
        <ul>
          {this.props.todos.map(todo => 
            <li key={todo.id}>
              {todo.text}
            </li>
            )}
        </ul>
      </div>
    );
  }
}

const render = ()=>{
  ReactDOM.render(
    <ToDoApp 
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
};
store.subscribe(render);
render();
