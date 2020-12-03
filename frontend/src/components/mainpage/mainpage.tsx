import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

// Styles
import styles from "./mainpage.module.sass";

const MainPage: React.FC = inject('Contents')(observer(({ Contents }: any) => {
  useEffect(() => {
    Contents.getContents();
  }, [])
  
  return (
    <div className={styles.mainpage}>
      <h1>Главная страница</h1>
      <h2>Последние новости</h2>
      <ul>
        { Contents.data.allContents?.map((content): React.ReactChild => <li dangerouslySetInnerHTML={{__html: content.blockContent}} />) }
      </ul>
    </div>
  )
}))

export default MainPage;
