import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { masks } from "../../utils/masks";

import styles from "./style.module.scss";

export default function ResetPassword() {
  const [user, setUser] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const router = useRouter();

  function goToLogin() {
    router.push("/");
  }

  function goToNewPassword() {
    router.push("/nova-senha");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Redefinir senha | Da Horta Pra Porta</title>
      </Head>
      <Header />
      <Form>
        <div>
          <h1>Redefinir senha</h1>
          <Input
            label="CPF"
            isFilled={!!user}
            value={user}
            onChange={(event) => setUser(masks.cpf(event.target.value))}
          />
          <Input
            label="Data de nascimento"
            isFilled={!!birthDate}
            value={birthDate}
            type="text"
            onChange={(event) => setBirthDate(masks.date(event.target.value))}
          />

          {/* Validar Usuario e Data no Banco antes de ir para nova senha */}
          <Button
            text="Redefinir senha"
            variant="primary"
            disabled={!user || !birthDate}
            onClick={goToNewPassword}
          />

          <Link href="/cadastro" passHref>
            <a className="link">Cadastrar</a>
          </Link>

          <div className="divisor" />
          <Button text="Fazer login" variant="secondary" onClick={goToLogin} />
        </div>
      </Form>
    </div>
  );
}
