import React, { Component } from "react";

// Styles
import styles from "./page1.module.sass";

export default class Page1 extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.page1}>
        <h1>Страница 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          voluptatibus aliquid quisquam atque ipsa labore similique optio quia
          praesentium magnam laboriosam nemo aut modi neque minima soluta
          necessitatibus, facere tempora magni obcaecati perspiciatis. Odit
          provident quam fugit alias consequatur nihil, qui officiis delectus
          aliquid distinctio.
        </p>
      </div>
    );
  }
}
