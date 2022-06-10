import { FC } from "react";
import styles from "../styles/structural-components/section-header-container.module.scss";

const SectionHeaderContainer: FC = ({ children }) => {
  return (
    <div className={styles.baseContainer}>
      <div className={`${styles.containerPadding} ${styles.background}`}>
        {children}
      </div>
    </div>
  );
};
SectionHeaderContainer.defaultProps = {};
export default SectionHeaderContainer;
