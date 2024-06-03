import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Error from "../components/Error/Error";
import Layout from "../components/Layout";
import { ProductProvider } from "../contexts/product";
import { OfferProvider } from "../contexts/offer";
import UserInfo from "../components/UserInfo/UserInfo";
import UserOffers from "../components/UserOffers/UserOffers";

function Account() {
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>İkinci El Project | Hesabım</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProductProvider>
        <Layout>
          
            <>
              <UserInfo />
              <OfferProvider>
                <UserOffers showError={setShowError} />
              </OfferProvider>
            </>
    
        </Layout>
      </ProductProvider>
    </>
  );
}

export default Account;
