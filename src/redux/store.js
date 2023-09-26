import { combineReducers } from 'redux';
import { createStore } from 'redux';
import UserReducer from './reducers/UserReducer'
import StudentReducer from './reducers/StudentReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const mainReducer = combineReducers({
    user: UserReducer,
    student: StudentReducer
});

const commonData = {
    user: {
        items: []
    },
    student: {
        studentId: 123,
        marks: 90,
    }
}
const store = createStore(mainReducer, commonData, composeWithDevTools());

export default store;