import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  console.log(props);

  // if (!props.profile) {
  //   return <Preloader />;
  // } else {
  return (
    <div>
      <div>
        <img
          className={classes.back}
          src="https://st.renderu.com/image/1200x/26357"
          alt=""
        />
      </div>
      <div className={classes.profile_wrap}>
        <div>
          <img
            className={classes.avatar}
            // src={props.profile.photos.large}
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
// };

export default ProfileInfo;
