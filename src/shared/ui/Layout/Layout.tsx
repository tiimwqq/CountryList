import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        <Outlet /> 
      </main>
    </div>
  );
};