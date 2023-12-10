import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types/actionTypes";
import { Action } from "../actions/actions";

export const searchRepos = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOS
        });
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-//v1/search', {
                params: {
                    text: term
                }
            });

          const names = data.objects.map((res: any) => {
                return res.package.name
            });

            dispatch({
                type: ActionType.SEARCH_REPOS_SUCCESS,
                payload: names
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOS_ERROR,
                payload: error.message
            })
        }
    }
}