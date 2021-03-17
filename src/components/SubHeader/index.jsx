import React, { useState } from "react";
import classes from "./styles.module.scss";
import Logo from "../Logo";
import sassLogo from "../../assets/images/sass.svg";

const SubHeader = ({ showTitle }) => {
  const [darkMode, setDarkMode] = useState(true);

  const classNamesToApply = [
    classes.Header,
    darkMode ? classes["is-dark"] : "",
  ].join(" ");

  const onToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  console.log("Classes from CSS Modules", classes);

  return (
    <header className={classNamesToApply}>
      <div className={classes["Header-content"]}>
        <button onClick={onToggleDarkMode}>
          <Logo />
        </button>
        {showTitle && (
          <div className={classes["Header-title"]}>
            <h1>Create React App with</h1>
            <img src={sassLogo} alt="Sass" />
          </div>
        )}
      </div>
    </header>
  );
};

export default SubHeader;
