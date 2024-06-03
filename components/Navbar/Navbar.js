import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";

import styles from "./navbar.module.scss";
import LogoIcon from "../../constants/icons/LogoIcon";
import UserIcon from "./../../constants/icons/UserIcon";
import AddIcon from "./../../constants/icons/AddIcon";
import { useProduct } from "../../contexts/product";
import { auth } from "../../services/firebase"; // Firebase yapılandırma dosyanız

function Navbar() {
  const { resetSkip } = useProduct();
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        >
          <LogoIcon style={styles.logoImg} />
        </div>
        {isAuth ? (
          <div className={styles.navbarButtons}>
            <button
              className={styles.addButton}
              onClick={() => {
                resetSkip();
                router.push("/addProduct");
              }}
            >
              <AddIcon style={styles.icon} size="12.9" color="#4b9ce2" />
            </button>
            <button
              onClick={() => {
                resetSkip();
                router.push("/addProduct");
              }}
            >
              <AddIcon style={styles.icon} size="12.9" color="#4b9ce2" />
              Ürün Ekle
            </button>
            <button
              onClick={() => {
                resetSkip();
                router.push("/account");
              }}
            >
              <UserIcon
                style={styles.icon}
                width="12.4"
                height="13.1"
                color="#4b9ce2"
              />
              Hesabım
            </button>
          </div>
        ) : (
          <div className={styles.navbarButtons}>
            <button
              onClick={() => {
                resetSkip();
                router.push("/login");
              }}
            >
              <UserIcon
                style={styles.icon}
                width="12.4"
                height="13.1"
                color="#4b9ce2"
              />
              Giriş Yap
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
