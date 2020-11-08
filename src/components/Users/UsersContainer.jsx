import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { requestUsers, follow, unfollow, setCurrentPage, toggleIsFollowingProgress } from '../../redux/usersReducer';
import Preloader from '../Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers,getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getIsAuth, getUsersSuper, getUsersSuperSelector } from '../../redux/userSelectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'} />;
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}



export default compose(connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        requestUsers
    }
)
)(UsersContainer);
