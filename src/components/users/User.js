import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getUser, getUserRepos} from "../../redux/github/github.actions"
import {withRouter} from 'react-router-dom';

const User = ({
    match,
    getUser,
    user,
    repos,
    loading,
    getUserRepos
}) => {
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        html_url,
        followers,
        following,
        email
    } = user;

    if (loading) 
        return (
            <progress class="progress is-small is-primary" max="100">15%</progress>
        )

    return (
        <Fragment>
            <figure className="image container is-128x128">
                <a href={html_url}>
                    <img src={avatar_url} className="is-rounded my-30" alt={name}/>
                </a>
            </figure>
            <br/>
            <h1 className="has-text-centered title">
                {name}
            </h1>
            <br/> {bio
                ? (
                    <h2 className="subtitle has-text-centered">
                        {bio}
                    </h2>
                )
                : null}
            <br/>
            <div className="columns is-vcentered is-mobile">
                <div className="column">
                    <h1 className="has-text-centered">
                        Following:
                        <strong>{following}</strong>
                    </h1>
                </div>
                <div className="column">
                    <h1 className="has-text-centered">
                        Followers:
                        <strong>{followers}</strong>
                    </h1>
                </div>
            </div>
            <div className="columns is-vcentered is-mobile">
                <div className="column">
                    <h1 className="has-text-centered">
                        Company:
                        <strong>{company}
                        </strong>
                    </h1>
                </div>
                <div className="column">
                    <h1 className="has-text-centered">
                        Location:
                        <strong>{location}
                        </strong>
                    </h1>
                </div>
                <div className="column">
                    <h1 className="has-text-centered">
                        Blog:
                        <strong>{blog}
                        </strong>
                    </h1>
                </div>
                <div className="column">
                    <h1 className="has-text-centered">
                        Email:
                        <strong>{email}
                        </strong>
                    </h1>
                </div>
            </div>
            <br/>
            <h1 className="has-text-centered title">
                Repos
            </h1>

            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>

                    {repos.map(repo => (
                        <tr>
                            <td>
                                <a href={html_url}>
                                    {repo.name}</a>
                            </td>
                            <td>
                                {repo.description}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </Fragment>
    )

}

const mapStateToProps = state => ({user: state.githubReducer.user, repos: state.githubReducer.repos, loading: state.githubReducer.loading})

export default withRouter(connect(mapStateToProps, {getUser, getUserRepos})(User));
