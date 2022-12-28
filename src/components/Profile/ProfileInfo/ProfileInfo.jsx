import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  // console.log(props)

  return (
    <div>
      <div>
        <img
          className={classes.back}
          src="https://phonoteka.org/uploads/posts/2021-04/1619376445_13-phonoteka_org-p-khayao-miyadzaki-foni-14.jpg"
          alt=""
        />
      </div>
      <div className={classes.profile_wrap}>
        <div>
          <img
            className={classes.avatar}
            src="https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_640.png"
            alt=""
          />
        </div>

        <div className={classes.description}>
          <div>name</div>
          <p>Stacy</p>
          <div>surname</div>
          <p>Kukharenko</p>
          <div>age</div>
          <p>22</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
