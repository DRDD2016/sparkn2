import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile.js';
import removeCookie from '../lib/removeCookie.js';
import { Actions } from 'react-native-router-flux';
import { changeName, editName } from '../actions/user.js';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        firstName: state.user.firstName,
        lastName: state.user.lastName
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleLogOut: () => {
            removeCookie();
            Actions.login({ type: 'reset' });
        },
        handleChangeName: (inputType, e) => {
            dispatch(changeName(e.target.value, inputType));
        },
        handleEditName: (firstName, lastName) => {
            dispatch(editName(firstName, lastName));
        }
    };
};


const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Profile);

export default ProfileContainer;
