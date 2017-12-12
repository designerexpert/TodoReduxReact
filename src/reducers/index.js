import {
    NEW_TODO,
    TOGGLE_COMPLETE,
    DEL_TODO
} from '../actions';

//Implementation attempt at using local files
let initialArray = [];

const saveData = (array) => {
    return localStorage.setItem('array', JSON.stringify(array));
}

const retrieveData = () => {
    initialArray = JSON.parse(localStorage.getItem('array'));
    return initialArray;
}

export default (todos = retrieveData(), action) => { // Initialize the state 'todos'

    switch (action.type) {
        case NEW_TODO:
            saveData(todos.concat(action.payload));
            return todos.concat(action.payload);
        case TOGGLE_COMPLETE:
            const newTodos = todos.slice(0);
            newTodos[action.payload].completed = !newTodos[action.payload].completed;
            saveData(newTodos);
            return newTodos;
        case DEL_TODO:
            const newTodos2 = todos.slice(0);
            newTodos2.splice(action.payload, 1);
            saveData(newTodos2);
            return newTodos2;
        default:
            return todos;
    }
}