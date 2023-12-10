interface ReposState {
    loading: boolean,
    error: string | null,
    data: string[]
}

interface SearchReposAction {
    type: 'search_repos_pending';
}
interface SearchReposSuccessAction {
    type: 'search_repos_success';
    payload: string[];
}
interface SearchReposErrorAction {
    type: 'search_repos_error';
    payload: string;
}

const reducer = (state: ReposState, action: SearchReposAction | SearchReposSuccessAction | SearchReposErrorAction): ReposState => {
    switch(action.type) {
        case 'search_repos_pending':
            return{
                loading: true,
                error: null,
                data: []
            }
            case 'search_repos_success':
                return{
                    loading: false,
                    error: null,
                    data: action.payload
                }
                case 'search_repos_error':
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