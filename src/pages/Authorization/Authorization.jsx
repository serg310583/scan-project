import React from "react";
import persons from "../../assets/images/persons.svg";
import styles from "./Authorization.module.scss";
import locker from "../../assets/images/locker.svg";
import Placeholder from "../../components/Placeholder/Placeholder";
import { Outlet } from "react-router-dom";
import ImageVisual from "../../components/ImageVisual/ImageVisual";

function Authorization() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
        <div className={styles.authorizationMob}>
          <img className={styles.locker} width={"60px"} src={locker} alt={locker} />
          <Placeholder>
            <Outlet />
          </Placeholder>
        </div>
        <ImageVisual link={persons} widthDesk={"50%"} widthMob={"100%"} />
      </div>
      <div className={styles.authorizationDesc}>
        <img className={styles.locker} width={"60px"} src={locker} alt={locker} />
        <Placeholder>
          <Outlet />
        </Placeholder>
      </div>
    </section>
  );
}

export default Authorization;
