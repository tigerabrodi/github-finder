import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({
    user: {
        login,
        avatar_url
    }
}) => {
    return (
        <div className="container">
        <div className="card">
            <div className="card-image">
                <figure className="image is-128x128">
                    <img className="is-rounded" src={avatar_url} alt={login}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="box">
                        <p>{login}</p>
                        <br/>
                        <Link to={`/user/${login}`}  className="button  is-primary is-rounded"> 
                        More
                        </Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UserItem;
