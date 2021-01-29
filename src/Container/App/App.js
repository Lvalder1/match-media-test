import React, { Component } from 'react';
import styles from "./App.module.scss";

export default class App extends Component {
  render () {
    return (
      <div className={styles.app} id={styles.app}>
        <h1>App</h1>
      </div>
    );
  }
}
