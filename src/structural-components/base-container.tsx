import { FC } from "react";
import styles from "../styles/structural-components/base-container.module.scss";

const BaseContainer: FC = ({ children }) => {
  return (
    <div className={styles.baseContainer}>
      <div className={`${styles.containerPadding} ${styles.background}`}>
        {children}
      </div>
    </div>
  );
};
BaseContainer.defaultProps = {};
export default BaseContainer;
