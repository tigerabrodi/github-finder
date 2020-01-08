import {GithubActionTypes} from "./github.types"
import axios from "axios"

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}

export const searchUsers = text => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)

        dispatch({type: GithubActionTypes.SEARCH_USERS, payload: res.data.items})
    } catch (err) {
        dispatch({type: GithubActionTypes.ERROR_MESSAGE, payload: err.message})
    }
}

export const getUserRepos = username => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=30&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

        dispatch({type: GithubActionTypes.GET_REPOS, payload: res.data})
    } catch (err) {
        dispatch({type: GithubActionTypes.ERROR_MESSAGE, payload: err.response.statusText})
    }
}

export const getUser = username => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);

        dispatch({
            type: GithubActionTypes.GET_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({type: GithubActionTypes.ERROR_MESSAGE, payload: err.response.statusText})
    }

}

export const clearUsers = () => async dispatch => {
    dispatch({type: GithubActionTypes.CLEAR_USERS})
}

export const setLoading = () => {
    return {type: GithubActionTypes.SET_LOADING}
}
