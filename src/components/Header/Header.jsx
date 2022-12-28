import React from 'react';
import classes from "./Header.module.css";

const Header = () =>{
    return(
      <header className={classes.header_wrapper}>
          <div className={classes.logo}><p>LOGO</p></div>
          <div className={classes.main}><p>MAIN</p></div>
      </header>  
    );
}

export default Header;