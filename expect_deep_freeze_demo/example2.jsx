const toggleTodo = (todo)=>{
    //mutation happening
    /*
    todo.completed = !todo.completed;
    return todo;
    */

    //without mutation with Object.assign method
    /*
        Object.assign takes first parameter as the object to mutate, 
        and rest arguments are treated as sources to it. If there are
        multiple arguments with the same property, the last one will
        override.

        Here, we pass the first argument as an empty object, so as to 
        not to mutate the todo object and mutate the empty object
        rather.

        return Object.assign({}, todo, {completed = !todo.completed});
    */
    
    /*
        we can also use object spread operator which is not enabled
        in es6 but is proposed for es7. It is available in babel
    */

    return {
        ...todo,
        completed: !todo.completed
    };
};


const testToggleTodo = ()=>{
    const todoBefore = {
        id: 0,
        text: 'Learn',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Learn',
        completed: true
    };

    deepFreeze(todoBefore);
    
    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);
};