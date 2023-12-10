interface ReposState {
    loading: boolean,
    error: string | null,
    data: string[]
}

interface SearchReposAction {
    type: ActionType.SEARCH_REPOS;
}
interface SearchReposSuccessAction {
    type: ActionType.SEARCH_REPOS_SUCCESS;
    payload: string[];
}
interface SearchReposErrorAction {
    type: ActionType.SEARCH_REPOS_ERROR;
    payload: string;
}
type Action =  SearchReposAction | SearchReposSuccessAction | SearchReposErrorAction;

enum ActionType {
    SEARCH_REPOS = 'search_repos_pending',
    SEARCH_REPOS_SUCCESS = 'search_repos_success',
    SEARCH_REPOS_ERROR = 'search_repos_error'
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