import Head from "next/head";
import { useRouter } from "next/router";

import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";

import animationData from "../../lotties/check.json";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";

import styles from "./style.module.scss";

export default function NewPasswordSet() {
  const router = useRouter();
  const isSmallScreen = useMediaQuery({ maxWidth: 300 });
  const isBigScreen = useMediaQuery({ minWidth: 1024 });

  function goToLogin() {
    router.push("/");
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nova senha | Da Horta Pra Porta</title>
      </Head>
      <Header />
      <Form>
        <div className={styles.confirmation}>
          {isSmallScreen ? (
            <Lottie options={defaultOptions} height={175} width={175} />
          ) : isBigScreen ? (
            <Lottie options={defaultOptions} height={275} width={275} />
          ) : (
            <Lottie options={defaultOptions} height={200} width={200} />
          )}

          <p>Nova senha cadastrada com sucesso!</p>

          <Button text="Fazer login" variant="primary" onClick={goToLogin} />
        </div>
      </Form>
    </div>
  );
}
