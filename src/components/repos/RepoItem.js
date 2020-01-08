import React from 'react';

const RepoItem = ({repo}) => {
    return (
        <div className="container">
            <div className="box">
                <h4 className="title is-4">
                    <a href={repo._html_url}>
                        {repo.name}
                    </a>
                </h4>
            </div>
        </div>
    );
}

export default RepoItem;
