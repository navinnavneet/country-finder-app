import { Component } from "react";
import styles from "./Error.module.css";

export default class ErrorPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.ErrorPage}>
        <h3>An Error occured.</h3>
        <p>Error Type: {this.props.message}</p>
      </div>
    );
  }
}
