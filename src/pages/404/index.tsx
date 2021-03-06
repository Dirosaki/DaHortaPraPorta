import { useRouter } from "next/router";

import { Button } from "../../components/Button";

import styles from "./style.module.scss";

export default function Custom404() {
  const router = useRouter();

  function goHome() {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <h1>
        Erro <br />
        <span>404</span>
      </h1>
      <svg
        width="175"
        height="175"
        viewBox="0 0 175 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M175 87.5C175 135.824 135.824 175 87.5 175C39.1806 175 0 135.824 0 87.5C0 39.1806 39.1806 0 87.5 0C135.824 0 175 39.1806 175 87.5Z"
          fill="#FFCC4D"
        />
        <path
          d="M55.9028 97.2223C62.6146 97.2223 68.0556 89.6049 68.0556 80.2084C68.0556 70.8119 62.6146 63.1945 55.9028 63.1945C49.191 63.1945 43.75 70.8119 43.75 80.2084C43.75 89.6049 49.191 97.2223 55.9028 97.2223Z"
          fill="#664500"
        />
        <path
          d="M119.097 97.2223C125.809 97.2223 131.25 89.6049 131.25 80.2084C131.25 70.8119 125.809 63.1945 119.097 63.1945C112.385 63.1945 106.944 70.8119 106.944 80.2084C106.944 89.6049 112.385 97.2223 119.097 97.2223Z"
          fill="#664500"
        />
        <path
          d="M58.3333 136.111C68.0555 111.806 121.528 111.806 121.528 121.528C121.528 126.389 82.6389 116.667 58.3333 136.111Z"
          fill="#664500"
        />
      </svg>

      <p>Página não encontrada ou indisponível.</p>
      <Button text="Ir para a Home" variant="primary" onClick={goHome} />
    </div>
  );
}
