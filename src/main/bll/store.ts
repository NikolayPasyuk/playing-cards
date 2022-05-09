import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {todolistsReducer} from './reducers/todolists-reducer';
import {tasksReducer} from './reducers/tasks-reducer';


const rootReducers = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

export const store: Store<AppRootStateType> = createStore(rootReducers,
    applyMiddleware(thunkMiddleware)
);

export type AppRootStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store;

