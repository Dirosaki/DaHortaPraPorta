import { InputHTMLAttributes, ReactNode, useState } from "react";

import styles from "./style.module.scss";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isFilled: boolean;
  children?: ReactNode;
}

export function Input({
  label,
  isFilled = false,
  children,
  ...rest
}: inputProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.inputContain}>
      <label className={isFilled || active ? styles.active : ""}>{label}</label>
      <input
        type="text"
        {...rest}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />

      {children}
    </div>
  );
}
