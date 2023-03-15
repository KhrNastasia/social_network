import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Users.module.css";
// import UsersContainer from "./UsersContainer";

let Users = (props) => {
  const [newUsers, setNewUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const new_users = [];
    console.log(props.users);
    let offset = props.pageSize * (props.currentPage - 1);
    for (let i = offset; i < offset + props.pageSize; i++) {
      new_users.push(props.users[i]);
    }
    setNewUsers(new_users);
  }, [props.users, currentPage]);

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onPageChange = (currentPage) => {
    props.setCurrentPage(currentPage);
    setCurrentPage(currentPage);
  };

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {/* <button onClick={this.getUsers}>GET USERS</button> */}
      {newUsers.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={
                    u.photos.small
                      ? u.photos.small
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cYTihODeLNTSImny5ABxWFHWZZ2D6PxD6JjdH8lCvLty9NQ__uQblYqMsRw8V-SWpt8&usqp=CAU"
                  }
                  alt=""
                  className={styles.img}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
              <div></div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
