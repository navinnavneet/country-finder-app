import { Component } from "react";
import styles from "./Header.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <h1>Where in the world?</h1>
        <p>
          <span>
            <DarkModeIcon />
          </span>
          Dark Mode
        </p>
      </header>
    );
  }
}
