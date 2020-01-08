import React, {useState} from 'react';
import {connect} from 'react-redux';
import {searchUsers, clearUsers} from "../../redux/github/github.actions"

const SearchInput = ({searchUsers, users, clearUsers, loading}) => {

    const [text,
        setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please type something!")
        } else {
            searchUsers(text)
            setText("")
        }
    }

    const onChange = e => setText(e.target.value);

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="my-10">
                <div className="field">
                    <input
                        type="text"
                        value={text}
                        onChange={onChange}
                        className="input mt-20 is-primary"/>

                    <input
                        className="button is-primary my-30 is-fullwidth"
                        type="submit"
                        value="Search"/>
                         {users.length > 0 && (
                        <input
                        className="button is-primary is-outlined my-30 is-fullwidth"
                        onClick={() => clearUsers()}
                        type="button"
                        value="Clear"/>)}
                </div>
            </form>

        </div>
    );
}

const mapStateToProps = state => ({
    users: state.githubReducer.users,
    loading: state.githubReducer.loading
})

export default connect(mapStateToProps, {searchUsers, clearUsers})(SearchInput);
