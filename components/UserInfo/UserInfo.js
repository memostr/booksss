import React, { useState, useEffect } from "react";
import styles from "./userInfo.module.scss";
import AccountIcon from "../../constants/icons/AccountIcon";
import Loading from "../Loading/Loading";
import { getCookie, deleteCookie } from "../../utilies/cookies";
import { useRouter } from "next/router";

function UserInfo() {
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authMail = getCookie("authMail");
    if (authMail) {
      setMail(authMail);
    }
  }, []);

  const logOut = () => {
    setLoading(true);
    deleteCookie("authToken");
    deleteCookie("authMail");
    deleteCookie("authId");
    setMail(""); // Oturumdan çıkarken e-postayı temizleyin
    setLoading(false);
    router.replace("/");
    window.location.reload(); // Sayfa yenileyerek navbar'ın güncellenmesini sağla
  };

  return (
    <div className={styles.info}>
      <div className={styles.infoContent}>
        <div className={styles.userInfo}>
          <AccountIcon size="38" />
          <span>{mail}</span> {/* Giriş yapan kullanıcının e-postası */}
        </div>
        <button
          className={styles.logoutButton}
          onClick={logOut}
          disabled={loading}
        >
          {loading ? <Loading size={30} color="white" /> : "Çıkış Yap"}
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
