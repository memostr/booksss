import React, { useEffect, useState } from "react";

import styles from "./userOffers.module.scss";
import Loading from "../Loading/Loading";
import { useOffer } from "../../contexts/offer";
import BuyDialog from "../BuyDialog/BuyDialog";
import toastMessage from "../../constants/toastify";

function UserOffers({ showError }) {
  const [loading, setLoading] = useState(false);
  const [acceptloading, setAcceptLoading] = useState(false);
  const [deniedloading, setDeniedLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("receivedOffers");
  const { getGivenOffers, getReceivedOffers, acceptOffer, deniedOffer } = useOffer();
  const [buyDialog, setBuyDialog] = useState(false);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    getOffers();
  }, [selectedOption]);

  const getOffers = async () => {
    setLoading(true);
    let offerData = [];
    // Statik teklif verileri
    const staticReceivedOffers = [
      {
        id: 1,
        product: { id: 101, name: "Ürün 1", image: { url: "/static/images/product1.jpg" }, isSold: false },
        offerPrice: 100,
        isStatus: null
      },
      {
        id: 2,
        product: { id: 102, name: "Ürün 2", image: { url: "/static/images/product2.jpg" }, isSold: true },
        offerPrice: 200,
        isStatus: true
      },
    ];

    const staticGivenOffers = [
      {
        id: 3,
        product: { id: 103, name: "Ürün 3", image: { url: "/static/images/product3.jpg" }, isSold: false },
        offerPrice: 150,
        isStatus: false
      },
      {
        id: 4,
        product: { id: 104, name: "Ürün 4", image: { url: "/static/images/product4.jpg" }, isSold: true },
        offerPrice: 250,
        isStatus: true
      },
    ];

    if (selectedOption === "receivedOffers") {
      offerData = staticReceivedOffers; // await getReceivedOffers();
    } else {
      offerData = staticGivenOffers; // await getGivenOffers();
    }

    if (offerData.length > 0) {
      setOffers(offerData);
      showError(false);
    } else {
      showError(true);
    }
    setLoading(false);
  };

  const acOffer = async (offerId) => {
    setAcceptLoading(true);
    const res = await acceptOffer(offerId);
    if (res == 200) {
      toastMessage("success", "Teklif Onaylandı");
      await getOffers();
    } else {
      toastMessage("error", "Bir hata ile karşılaşıldı!");
    }
    setAcceptLoading(false);
  };

  const denOffer = async (offerId) => {
    setDeniedLoading(true);
    const res = await deniedOffer(offerId);
    if (res == 200) {
      toastMessage("success", "Teklif Reddedildi");
      await getOffers();
    } else {
      toastMessage("error", "Bir hata ile karşılaşıldı!");
    }
    setDeniedLoading(false);
  };

  const closeDialog = async () => {
    setBuyDialog(false);
    await getOffers();
  };

  return (
    <>
      <div className={styles.offers}>
        <div className={styles.offersContent}>
          <div className={styles.offersHeader}>
            <button
              className={
                selectedOption === "receivedOffers"
                  ? `${styles.option} ${styles.selected}`
                  : styles.tab
              }
              onClick={() => setSelectedOption("receivedOffers")}
            >
              Teklif Aldıklarım
            </button>
            <button
              className={
                selectedOption === "givenOffers"
                  ? `${styles.option} ${styles.selected}`
                  : styles.tab
              }
              onClick={() => setSelectedOption("givenOffers")}
            >
              Teklif Verdiklerim
            </button>
          </div>
          <div className={styles.offersList}>
            {offers.length > 0 &&
              offers.map((offer) => (
                <div key={offer.id} className={styles.offerItem}>
                  <div className={styles.offerDetail}>
                    <div className={styles.productImg}>
                      {offer.product?.image?.url ? (
                        <img
                          className={styles.productPhoto}
                          src={offer.product.image.url}
                          alt={offer.product.name ? offer.product.name : "Adlandırılmamış"}
                        />
                      ) : (
                        <img
                          className={styles.noPhoto}
                          src="/static/images/noPhoto.png"
                          alt="Fotoğraf Yok"
                        />
                      )}
                    </div>
                    <div className={styles.productDetail}>
                      <span className={styles.productName}>
                        {offer.product?.name ? offer.product.name : "Belirtilmemiş"}
                      </span>
                      <div className={styles.offerPrice}>
                        <span>
                          {selectedOption === "givenOffers"
                            ? "Verilen Teklif:"
                            : "Alınan Teklif:"}
                        </span>
                        {offer.offerPrice.toLocaleString("tr-TR", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + " TL"}
                      </div>
                    </div>
                  </div>
                  <div className={styles.offerStatus}>
                    {offer.isStatus != null ? (
                      offer.product?.isSold ? (
                        selectedOption === "givenOffers" ? (
                          <span className={styles.solded}>Satın Alındı</span>
                        ) : (
                          <span className={styles.solded}>Satıldı</span>
                        )
                      ) : offer.isStatus ? (
                        <div className={styles.acceptOffer}>
                          {selectedOption === "givenOffers" && (
                            <button
                              className={styles.buyButton}
                              onClick={() => {
                                setProductId(offer.product.id);
                                setBuyDialog(true);
                              }}
                            >
                              Satın Al
                            </button>
                          )}
                          <span className={styles.accepted}>Onaylandı</span>
                        </div>
                      ) : (
                        <span className={styles.denied}>Reddedildi</span>
                      )
                    ) : selectedOption === "receivedOffers" ? (
                      <div className={styles.offerOptions}>
                        <button
                          className={styles.acceptButton}
                          onClick={() => acOffer(offer.id)}
                          disabled={acceptloading}
                        >
                          {acceptloading ? (
                            <Loading size={30} color="white" />
                          ) : (
                            "Onayla"
                          )}
                        </button>
                        <button
                          className={styles.deniedButton}
                          onClick={() => denOffer(offer.id)}
                          disabled={deniedloading}
                        >
                          {deniedloading ? (
                            <Loading size={30} color="white" />
                          ) : (
                            "Reddet"
                          )}
                        </button>
                      </div>
                    ) : (
                      <span className={styles.waiting}>Yanıt Bekleniyor</span>
                    )}
                  </div>
                </div>
              ))}
            {loading && <Loading size={75} color="#4b9ce2" />}
          </div>
        </div>
      </div>
      <BuyDialog
        product={{ id: productId }}
        showDialog={buyDialog}
        closeDialog={() => closeDialog()}
      />
    </>
  );
}

export default UserOffers;
