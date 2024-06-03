// //component showing product detail

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// import styles from "./detail.module.scss";
// import { getCookie } from "../../utilies/cookies";
// import { useProduct } from "../../contexts/product";
// import Loading from "../Loading/Loading";
// import OfferDialog from "../OfferDialog/OfferDialog";
// import BuyDialog from "../BuyDialog/BuyDialog";
// import { useOffer } from "../../contexts/offer";
// import toastMessage from "../../constants/toastify";

// function Detail({ showError }) {
//   const [isAuth, setIsAuth] = useState(false);
//   const [userId, setUserId] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [offerLoading, setOfferLoading] = useState(false);
//   const [product, setProduct] = useState({});
//   const [hasOffer, setHasOffer] = useState({
//     offerPrice: 0,
//     offerId: 0,
//     offerStatus: false,
//   });
//   const [offerDialog, setOfferDialog] = useState(false);
//   const [buyDialog, setBuyDialog] = useState(false);
//   const { getProduct } = useProduct();
//   const { deleteOffer } = useOffer();
//   const router = useRouter();
//   const id = router.query.id;

//   useEffect(() => {
//     let authToken = getCookie("authToken");
//     if (authToken != "") {
//       setIsAuth(true);
//     }
//     let userId = getCookie("authId");
//     if (userId != "") {
//       setUserId(userId);
//     }
//     if (router.isReady) {
//       setDetail();
//     }
//   }, [router.isReady]);

//   const setDetail = async () => {
//     setLoading(true);
//     const productDetail = await getProduct(id);
//     if (productDetail.status !== 1) {
//       showError(true);
//     } else {
//       showError(false);
//       setProduct(productDetail.detail);
//     }
//     productDetail.detail.offers.forEach((offer) => {
//       if (offer.users_permissions_user == userId) {
//         setHasOffer({
//           offerId: offer.id,
//           offerPrice: offer.offerPrice,
//           offerStatus: true,
//         });
//         return;
//       }
//     });
//     setLoading(false);
//   };

//   const backOffer = async () => {
//     setOfferLoading(true);
//     const res = await deleteOffer(hasOffer.offerId);
//     if (res == 200) {
//       toastMessage("success", "Teklif Geri Alındı");
//       setHasOffer((prev) => {
//         return { ...prev, offerId: 0, offerPrice: 0, offerStatus: false };
//       });
//       await setDetail();
//     } else {
//       toastMessage("error", "Bir hata ile karşılaşıldı!");
//     }
//     setOfferLoading(false);
//   };

//   const closeDialog = async () => {
//     setOfferDialog(false);
//     setBuyDialog(false);
//     await setDetail();
//   };

//   return (
//     <>
//       <div className={styles.detail}>
//         <div className={styles.detailContent}>
//           {loading ? (
//             <Loading size={75} color="#4b9ce2" />
//           ) : (
//             <>
//               <div className={styles.productImg}>
//                 {product.image?.url ? (
//                   <img
//                     className={styles.productPhoto}
//                     src={
//                       product.image?.url
//                         ? "https://bootcamp.akbolat.net" + product.image.url
//                         : "noPhoto.png"
//                     }
//                     alt={product.name ? product.name : "Adlandırılmamış"}
//                   />
//                 ) : (
//                   <img
//                     className={styles.noPhoto}
//                     src="noPhoto.png"
//                     alt="Fotoğraf Yok"
//                   />
//                 )}
//               </div>
//               <div className={styles.productDetail}>
//                 <div className={styles.productName}>
//                   {product.name ? product.name : "Adlandırılmamış"}
//                 </div>
//                 <div className={styles.changeReverse}>
//                   <ul className={styles.productFeature}>
//                     <li className={`${styles.productFeature} ${styles.title}`}>
//                       Marka:
//                     </li>
//                     <li>{product.brand ? product.brand : "Belirtilmemiş"}</li>
//                     <li className={`${styles.productFeature} ${styles.title}`}>
//                       Renk:
//                     </li>
//                     <li>{product.color ? product.color : "Belirtilmemiş"}</li>
//                     <li className={`${styles.productFeature} ${styles.title}`}>
//                       Kullanım Durumu:
//                     </li>
//                     <li>{product.status ? product.status : "Belirtilmemiş"}</li>
//                   </ul>
//                   <div className={styles.prices}>
//                     <div className={styles.productPrice}>
//                       {product.price
//                         ? product.price.toLocaleString("tr-TR", {
//                             maximumFractionDigits: 2,
//                             minimumFractionDigits: 2,
//                           }) + " TL"
//                         : "Belirtilmemiş"}
//                     </div>
//                     {hasOffer.offerStatus && (
//                       <div className={styles.offerPrice}>
//                         <span>Verilen Teklif:</span>
//                         {hasOffer.offerPrice.toLocaleString("tr-TR", {
//                           maximumFractionDigits: 2,
//                           minimumFractionDigits: 2,
//                         }) + " TL"}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className={styles.productSelling}>
//                   {!isAuth || (product.isSold ? product.isSold : false) ? (
//                     <button className={styles.warningButton}>
//                       {(product.isSold ? product.isSold : false)
//                         ? "Bu Ürün Satışta Değil"
//                         : "Lütfen Giriş Yapın"}
//                     </button>
//                   ) : (
//                     <>
//                       <button
//                         className={styles.buyButton}
//                         onClick={() => setBuyDialog(true)}
//                         disabled={offerLoading}
//                       >
//                         Satın Al
//                       </button>
//                       {(product.isOfferable ? product.isOfferable : false) &&
//                       hasOffer.offerStatus ? (
//                         <button
//                           className={styles.offerButton}
//                           onClick={() => backOffer()}
//                           disabled={offerLoading}
//                         >
//                           {offerLoading ? (
//                             <Loading size={30} color="#4b9ce2" />
//                           ) : (
//                             "Teklifi Geri Çek"
//                           )}
//                         </button>
//                       ) : (
//                         <button
//                           className={styles.offerButton}
//                           onClick={() => setOfferDialog(true)}
//                           disabled={offerLoading}
//                         >
//                           Teklif Ver
//                         </button>
//                       )}
//                     </>
//                   )}
//                 </div>
//                 <div className={styles.productDescription}>
//                   <span className={styles.desTitle}>Açıklama</span>
//                   <span>
//                     {product.description ? product.description : "Açıklanmamış"}
//                   </span>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <div className={styles.bottomButtons}>
//         {!isAuth || (product.isSold ? product.isSold : false) ? (
//           <button className={styles.warningButton}>
//             {(product.isSold ? product.isSold : false)
//               ? "Bu Ürün Satışta Değil"
//               : "Lütfen Giriş Yapın"}
//           </button>
//         ) : (
//           <>
//             <button
//               className={styles.buyButton}
//               onClick={() => setBuyDialog(true)}
//               disabled={offerLoading}
//             >
//               Satın Al
//             </button>
//             {(product.isOfferable ? product.isOfferable : false) &&
//             hasOffer.offerStatus ? (
//               <button
//                 className={styles.offerButton}
//                 onClick={() => backOffer()}
//                 disabled={offerLoading}
//               >
//                 {offerLoading ? (
//                   <Loading size={30} color="#4b9ce2" />
//                 ) : (
//                   "Teklifi Geri Çek"
//                 )}
//               </button>
//             ) : (
//               <button
//                 className={styles.offerButton}
//                 onClick={() => setOfferDialog(true)}
//                 disabled={offerLoading}
//               >
//                 Teklif Ver
//               </button>
//             )}
//           </>
//         )}
//       </div>
//       <OfferDialog
//         product={product}
//         showDialog={offerDialog}
//         closeDialog={() => closeDialog()}
//       />
//       <BuyDialog
//         product={product}
//         showDialog={buyDialog}
//         closeDialog={() => closeDialog()}
//       />
//     </>
//   );
// }

// export default Detail;
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./detail.module.scss";
import Loading from "../Loading/Loading";
import OfferDialog from "../OfferDialog/OfferDialog";
import BuyDialog from "../BuyDialog/BuyDialog";

function Detail({ showError }) {
  const router = useRouter();
  const [showOfferDialog, setShowOfferDialog] = useState(false);
  const [showBuyDialog, setShowBuyDialog] = useState(false);

  const staticProduct = {
    id: 1,
    name: "Ürün 1",
    brand: "Marka 1",
    color: "Şeker Portakalı",
    status: "Kullanılmış",
    price: 100,
    description: "Bu ürün harika bir üründür.",
    image: {
      url: "/product1.png",
    },
    isOfferable: true,
    isSold: false,
    offers: [], // Teklifler buraya eklenebilir
  };

  const handleOffer = () => {
    setShowOfferDialog(true);
  };

  const handleBuy = () => {
    setShowBuyDialog(true);
  };

  const handleBackOffer = () => {
    // Teklif geri çekme işlemleri burada gerçekleştirilebilir
  };

  return (
    <>
      <div className={styles.detail}>
        <div className={styles.detailContent}>
          <div className={styles.productImg}>
            <img
              className={styles.productPhoto}
              src={staticProduct.image.url}
              alt={staticProduct.name ? staticProduct.name : "Adlandırılmamış"}
            />
          </div>
          <div className={styles.productDetail}>
            <div className={styles.productName}>
              {staticProduct.name ? staticProduct.name : "Adlandırılmamış"}
            </div>
            <div className={styles.changeReverse}>
              <ul className={styles.productFeature}>
                <li className={`${styles.productFeature} ${styles.title}`}>
                  Marka:
                </li>
                <li>{staticProduct.brand ? staticProduct.brand : "Belirtilmemiş"}</li>
                <li className={`${styles.productFeature} ${styles.title}`}>
                  Renk:
                </li>
                <li>{staticProduct.color ? staticProduct.color : "Belirtilmemiş"}</li>
                <li className={`${styles.productFeature} ${styles.title}`}>
                  Kullanım Durumu:
                </li>
                <li>{staticProduct.status ? staticProduct.status : "Belirtilmemiş"}</li>
              </ul>
              <div className={styles.prices}>
                <div className={styles.productPrice}>
                  {staticProduct.price
                    ? staticProduct.price.toLocaleString("tr-TR", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }) + " TL"
                    : "Belirtilmemiş"}
                </div>
              </div>
            </div>
            <div className={styles.productSelling}>
              {!staticProduct.isSold && (
                <>
                  <button className={styles.buyButton} onClick={handleBuy}>
                    Satın Al
                  </button>
                  {staticProduct.isOfferable && (
                    <button className={styles.offerButton} onClick={handleOffer}>
                      Teklif Ver
                    </button>
                  )}
                </>
              )}
              {staticProduct.offers.length > 0 && (
                <button className={styles.offerButton} onClick={handleBackOffer}>
                  Teklifi Geri Çek
                </button>
              )}
            </div>
            <div className={styles.productDescription}>
              <span className={styles.desTitle}>Açıklama</span>
              <span>
                {staticProduct.description ? staticProduct.description : "Açıklanmamış"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showOfferDialog && (
        <OfferDialog
          product={staticProduct}
          showDialog={showOfferDialog}
          closeDialog={() => setShowOfferDialog(false)}
        />
      )}
      {showBuyDialog && (
        <BuyDialog
          product={staticProduct}
          showDialog={showBuyDialog}
          closeDialog={() => setShowBuyDialog(false)}
        />
      )}
    </>
  );
}

export default Detail;





