import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/feed.js';
import { applyFilter, clearFilter } from '../actions/notifications.js';
import { updateNotification } from '../actions/event.js';
import { listenForUserID } from '../lib/action-listeners.js';
import filterNotifications from '../lib/filterNotifications.js';
import { store } from '../init-store.js';


const mapStateToProps = (state) => {

console.log('matchFeedStateToProps');

    let data = state.notifications.data;
    let feedIsFiltered = state.notifications.filter;
    let isShowHosting = state.notifications.showHosting;
    let notifications = filterNotifications(data, feedIsFiltered, isShowHosting);

    console.log('About to Return Props');

    return {
        allEvents: data,
        user: state.user,
        notifications,
        isFetching: state.notifications.isFetching,
        updateNotification: state.event.updateNotification,
        feedIsFiltered,
        isShowHosting
    };
};
const mapDispatchToProps = (dispatch) => {
    console.log('matchFeedDispatchStateToProps');
    return {
        handleUpdateNotification: (index) => {

            dispatch(updateNotification(index));
        },
        displaySome: (filterChoice) => {

            dispatch(applyFilter(filterChoice));
        },
        displayAll: () => {

            dispatch(clearFilter());
        }
    };
};


const FeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);

export default FeedContainer;
