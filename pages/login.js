//main page showing login

import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { UserProvider } from "../contexts/user";
import LoginPage from "../components/Login/LoginPage";
import { getCookie } from "./../utilies/cookies";

function Login() {
  const router = useRouter();

  useEffect(() => {
    let authToken = getCookie("authToken");
    if (authToken != "") {
      router.replace("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>İkinci El Kitap Proje | Giriş Yap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserProvider>
        <LoginPage />
      </UserProvider>
    </>
  );
}

export default Login;
