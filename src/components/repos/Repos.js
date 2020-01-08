import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({repos}) => {
    return (
        <div className="columns">
            <div className="column is-4">
                {repos.map(repo => (
                    <RepoItem repo={repo} key={repo.id} />
                ))}
            </div>
        </div>
    )
}

export default Repos;
