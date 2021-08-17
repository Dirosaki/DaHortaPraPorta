import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import styles from "./style.module.scss";

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  function handleChangeViewPassword() {
    setShowPassword(!showPassword);
  }

  function handleChangeViewConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function goToLogin() {
    router.push("/");
  }

  function goToConfirmation() {
    router.push("/nova-senha-definida");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Nova senha | Da Horta Pra Porta</title>
      </Head>
      <Header />
      <Form>
        <div>
          <h1>Nova senha</h1>
          <Input
            label="Nova senha"
            isFilled={!!newPassword}
            value={newPassword}
            type={showPassword ? "text" : "password"}
            onChange={(event) => setNewPassword(event.target.value)}
          >
            {newPassword && showPassword ? (
              <div onClick={handleChangeViewPassword}>
                <FiEyeOff size={20} color="var(--color-placeholder)" />
              </div>
            ) : (
              newPassword && (
                <div onClick={handleChangeViewPassword}>
                  <FiEye size={20} color="var(--color-placeholder)" />
                </div>
              )
            )}
          </Input>
          <Input
            label="Confirmar nova senha"
            isFilled={!!confirmNewPassword}
            value={confirmNewPassword}
            type={showConfirmPassword ? "text" : "password"}
            onChange={(event) => setConfirmNewPassword(event.target.value)}
          >
            {confirmNewPassword && showConfirmPassword ? (
              <div onClick={handleChangeViewConfirmPassword}>
                <FiEyeOff size={20} color="var(--color-placeholder)" />
              </div>
            ) : (
              confirmNewPassword && (
                <div onClick={handleChangeViewConfirmPassword}>
                  <FiEye size={20} color="var(--color-placeholder)" />
                </div>
              )
            )}
          </Input>

          {/* Validar senhas para para confirmar */}
          <Button
            text="Confirmar"
            variant="primary"
            disabled={
              !newPassword ||
              !confirmNewPassword ||
              newPassword !== confirmNewPassword
            }
            onClick={goToConfirmation}
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
