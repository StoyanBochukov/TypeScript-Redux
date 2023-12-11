import { combineReducers } from 'redux'
import repoReducer from './repoReducers'

const reducers = combineReducers({
    repositories: repoReducer,
})

export type RootState = ReturnType<typeof reducers>;
export default reducers