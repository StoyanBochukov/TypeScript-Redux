import { Action } from "../actions/actions"
import { ActionType } from "../action-types/actionTypes"

interface ReposState {
    loading: boolean,
    error: string | null,
    data: string[]
}

const reducer = (state: ReposState, action: Action): ReposState => {
    switch(action.type) {
        case ActionType.SEARCH_REPOS:
            return{
                loading: true,
                error: null,
                data: []
            }
            case ActionType.SEARCH_REPOS_SUCCESS:
                return{
                    loading: false,
                    error: null,
                    data: action.payload
                }
                case ActionType.SEARCH_REPOS_ERROR:
                    return{
                        loading: false,
                        error: action.payload,
                        data: []
                    }
        default:
            return state
    }
}

export default reducer