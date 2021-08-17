import { ButtonHTMLAttributes } from "react";
import styles from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "primary" | "secondary";
}

export function Button({ text, variant = "primary", ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]}`}
      {...rest}
    >
      {text}
    </button>
  );
}
