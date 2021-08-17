/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import styles from "../styles/Home.module.scss";
import { masks } from "../utils/masks";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  function handleChangeViewPassword() {
    setShowPassword(!showPassword);
  }

  function goToRegister() {
    router.push("/cadastro");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Da Horta Pra Porta</title>
      </Head>
      <Header />
      <Form>
        <div>
          <h1>Login</h1>
          <Input
            label="CPF"
            isFilled={!!user}
            value={user}
            onChange={(event) => setUser(masks.cpf(event.target.value))}
          />
          <Input
            label="Senha"
            isFilled={!!password}
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={(event) => setPassword(event.target.value)}
          >
            {password && showPassword ? (
              <div onClick={handleChangeViewPassword}>
                <FiEyeOff size={20} color="var(--color-placeholder)" />
              </div>
            ) : (
              password && (
                <div onClick={handleChangeViewPassword}>
                  <FiEye size={20} color="var(--color-placeholder)" />
                </div>
              )
            )}
          </Input>

          {/* Autenticar usuario para efetuar login */}
          <Button
            text="Entrar"
            variant="primary"
            disabled={!user || !password}
          />

          <Link href="/redefinir-senha" passHref>
            <a className="link">Esqueceu a senha?</a>
          </Link>

          <div className="divisor" />
          <Button text="Cadastrar" variant="secondary" onClick={goToRegister} />
        </div>
      </Form>
    </div>
  );
}
