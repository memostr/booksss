import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./login.module.scss";
import Loading from "../Loading/Loading";
import toastMessage from "./../../constants/toastify";
import { auth } from "../../services/firebase";
import { setCookie } from "../../utilies/cookies";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engelle
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Çerezleri ayarla
      setCookie("authToken", user.accessToken);
      setCookie("authMail", user.email);
      setCookie("authId", user.uid);

      toastMessage("success", "Giriş başarılı, anasayfaya yönlendiriliyorsunuz!");
      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (error) {
      toastMessage("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.formTop}>
        <h1>Giriş Yap</h1>
        <span>Fırsatlardan yararlanmak için giriş yap!</span>
      </div>
      <div className={styles.formMiddle}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.title}>Email</label>
            <input 
              type="text" 
              name="email" 
              placeholder="Email@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.title}>Şifre</label>
            <input 
              type="password" 
              name="password" 
              placeholder="" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <div className={styles.forgetPassword}>Şifremi Unuttum</div>
          </div>
          <div className={`${styles.formGroup} ${styles.formButton}`}>
            <button className={styles.loginButton} type="submit" disabled={loading}>
              {loading ? <Loading size={30} color="white" /> : "Giriş"}
            </button>
          </div>
        </form>
      </div>
      <div className={styles.formBottom}>
        <span>
          Hesabın yok mu?
          <Link href="/register">
            <a className={styles.register}> Üye Ol</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
