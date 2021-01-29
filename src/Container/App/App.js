import React, { Component } from 'react';
import styles from "./App.module.scss";
import Component1 from "../../Components/Component1";
import Component2 from "../../Components/Component2";

// const Component1 = () => (<h1>Large</h1>);
// const Component2 = () => (<h1>Small</h1>);
const match = document.getElementById('matchM');

const setMatchMInnerHTML = (HTML) => {
  match.innerHTML = HTML; 
};

const mql = window.matchMedia('(max-width: 600px)');

let mobileView = mql.matches;

// if (mobileView) {
//   setMatchMInnerHTML(Component2);
// } else {
//   setMatchMInnerHTML(Component1);
// }

console.log (mobileView)
console.log (match)
console.log(setMatchMInnerHTML())


export default class App extends Component {

  render () {
    if (mobileView) {
      setMatchMInnerHTML(Component1);
    } else {
      setMatchMInnerHTML(Component2);
    }
    return (
      <div className={styles.app} id={styles.app}>
        <div id="matchM">
        {/* <h1>App</h1> */}
        </div>
        <h1>App</h1>
        {/* <Component1 />
        <Component2 /> */}
      </div>
    );
  }
}
