import React from 'react';
import UserItem from "./UserItem"
import { connect } from 'react-redux';

const Users = ({users, loading}) => {
    if (loading) {
        return (
            <progress class="progress is-small is-primary" max="100">15%</progress>
        )
    } else {
        return (
            <div className="columns is-mobile is-multiline">
            {users.map(user => (
                <div className="column">
                    <UserItem user={user} key={user.id}  />
                </div>
            ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.githubReducer.users,
    loading: state.github
})

export default connect(mapStateToProps)(Users);
