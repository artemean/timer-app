import { createStore } from 'redux'

const defaultState = {
    searchText: '',
    showCompleted: false,
    todos: [],
    hobbies: []
};

let nextHobbyId = 1;

const changeName = (name) => ({
    type: 'CHANGE_NAME',
    name
});

const NameReducer = (state = 'Anonymus', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

const reducer = (state = defaultState, action) => {
    // console.log('New action ', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter( (hobby) => hobby.id !== action.id )
            };
        default: return state;
    }

};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'New search'
});

// console.log('Current state - ',  store.getState());

const unsubscribe = store.subscribe( () => {
    const state = store.getState();
    console.log('Name is ', state.name);
    console.log('New state ', store.getState());
} );

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andriy'
});

unsubscribe();

store.dispatch(changeName('Andriy'));

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Reading'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Koalla'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});