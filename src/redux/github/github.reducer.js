import {GithubActionTypes} from "./github.types"

const INITIAL_STATE = {
    users: [],
    loading: false,
    user: {},
    repos: [],
    error: null
}

const githubReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case GithubActionTypes.SEARCH_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case GithubActionTypes.GET_USER:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case GithubActionTypes.CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case GithubActionTypes.GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false
            }
        case GithubActionTypes.ERROR_MESSAGE:
            console.error(payload)
            return {
                ...state,
                error: payload,
                loading: false
            }
        case GithubActionTypes.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}

export default githubReducer