import { ReactNode } from "react";
import styles from "./style.module.scss";

interface FormProps {
  children: ReactNode;
}

export function Form({ children }: FormProps) {
  return <div className={styles.form}>{children}</div>;
}
