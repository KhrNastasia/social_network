import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  toggleIsFetching,
} from "../redux/user_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    console.log(props);

    props.setUsers([
      {
        name: "levchuk",
        id: 0,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "potential-hirer",
        id: 1,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "potential_hirer",
        id: 2,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "TanTaJIoS",
        id: 3,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "kumiho",
        id: 4,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "cocojambo",
        id: 5,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "leraKuz",
        id: 6,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "robertch",
        id: 7,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "Xamana",
        id: 8,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: "Nyjat",
        id: 9,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
    ]);
  }
  // componentDidMount() {
  //   this.props.toggleIsFetching(true);
  // axios
  //   .get("https://social-network.samuraijs.com/api/1.0/users")
  //   .then((response) => {
  //     this.props.toggleIsFetching(false);
  //     this.props.setUsers(response.data.items);
  //     });
  // }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChange={this.onPageChange}
          setCurrentPage={this.props.setCurrentPage}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setUsers: (users) => {
//       dispatch(setUserAC(users));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  setUsers,
  toggleIsFetching,
})(UsersContainer);
