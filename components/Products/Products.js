//component showing products

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./products.module.scss";
import { useProduct } from "../../contexts/product";
import { useScroll } from "./../../hooks/useScroll";
import Loading from "../Loading/Loading";
import {productsImg} from "../../public/product1.png"

// function Products() {
//   const [loading, setLoading] = useState(false);
//   const [stopLoading, setStopLoading] = useState(false);
//   const { filteredProducts, getProducts, activeCategory } = useProduct();
//   const router = useRouter();
//   const scroll = useScroll();

//   useEffect(() => {
//     getProductsNow();
//   }, [scroll.scrolling]);

//   const getProductsNow = async () => {
//     if (scroll.scrolling && !stopLoading) {
//       setLoading(true);
//       const res = await getProducts(activeCategory.id);
//       if (res !== 1 && res !== 2) {
//         setStopLoading(true);
//       }
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.product}>
//       {filteredProducts?.length > 0 ? (
//         <>
//           <ul className={styles.productContainer}>
//             {
//               /* Here the characters are printed on the screen. */
//               filteredProducts?.map((product, index) => (
//                 <li
//                   key={product.id ? product.id : index}
//                   className={styles.productItem}
//                   onClick={() => router.push("/productDetail/" + product.id)}
//                 >
//                   <div className={styles.productImg}>
//                     {product.image?.url ? (
//                       <img
//                         className={styles.productPhoto}
//                         src={
//                           product.image?.url
//                             ? "https://bootcamp.akbolat.net" + product.image.url
//                             : "noPhoto.png"
//                         }
//                         alt={product.name ? product.name : "Adlandırılmamış"}
//                       />
//                     ) : (
//                       <img
//                         className={styles.noPhoto}
//                         src="noPhoto.png"
//                         alt="Fotoğraf Yok"
//                       />
//                     )}
//                   </div>
//                   <div className={styles.productContent}>
//                     <div className={styles.productDetail}>
//                       <span className={styles.productBrand}>
//                         {product.brand ? product.brand : "Belirsiz"}
//                       </span>
//                       <span className={styles.productColor}>
//                         {product.color
//                           ? "Renk: " + product.color
//                           : "Renk: Belirsiz"}
//                       </span>
//                     </div>
//                     <div className={styles.productPrice}>
//                       {product.price
//                         ? product.price.toLocaleString("tr-TR", {
//                             maximumFractionDigits: 2,
//                             minimumFractionDigits: 2,
//                           }) + " TL"
//                         : "Belirsiz"}
//                     </div>
//                   </div>
//                 </li>
//               ))
//             }
//           </ul>
//           {loading && <Loading size={75} color="#4b9ce2" />}
//         </>
//       ) : (
//         <div className={styles.productNotFound}>
//           Bu kategoride hiçbir ürün bulunmamaktadır.
//         </div>
//       )}
//     </div>
//   );
// }

// export default Products;


function Products() {
  const router = useRouter();

  // Statik ürün listesi
  const staticProducts = [
    { id: 1, name: "Ürün 1", brand: "Şeker Portakalı", price: 120, image: { url: "/product1.png" } },
    { id: 2, name: "Ürün 2", brand: "YKS Hazırlık", price: 110, image: { url: "/product2.png" } },
    { id: 3, name: "Ürün 3", brand: "İngilizce Konuşma Kılavuzu", price: 100, image: { url: "/product3.png" } },
    { id: 4, name: "Ürün 4", brand: "LGS Hazırlık", price: 99, image: { url: "/product4.png" } },
    { id: 5, name: "Ürün 5", brand: "Harry Potter", price: 190, image: { url: "/product6.png" } },
    { id: 6, name: "Ürün 6", brand: "İngilizce Sözlük", price: 90, image: { url: "/product7.png" } },
    { id: 7, name: "Ürün 7", brand: "Enkaz", price: 100, image: { url: "/product8.png" } },
    { id: 8, name: "Ürün 8", brand: "Atatürk Anatürk", price: 80, image: { url: "/product9.png" } },
    { id: 9, name: "Ürün 9", brand: "Yeraltından Notlar", price: 88, image: { url: "/product10.png" } },
    { id: 10, name: "Ürün 10", brand: "Galaksi Rehberi", price: 177, image: { url: "/product5.png" } },
    { id: 11, name: "Ürün 11", brand: "Sadakat", price: 130, image: { url: "/product11.png" } },
  ];

  return (
    <div className={styles.product}>
      {staticProducts.length > 0 ? (
        <>
          <ul className={styles.productContainer}>
            {staticProducts.map((product) => (
              <li
                key={product.id}
                className={styles.productItem}
                onClick={() => router.push("/productDetail/" + product.id)}
              >
                <div className={styles.productImg}>
                  {product.image?.url ? (
                    <img
                      className={styles.productPhoto}
                      src={product.image.url}
                      alt={product.name ? product.name : "Adlandırılmamış"}
                    />
                  ) : (
                    <img
                      className={styles.noPhoto}
                      src="noPhoto.png"
                      alt="Fotoğraf Yok"
                    />
                  )}
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productDetail}>
                    <span className={styles.productBrand}>
                      {product.brand ? product.brand : "Belirsiz"}
                    </span>
                    <span className={styles.productColor}>
                      {product.color
                        ? "Renk: " + product.color
                        : "Renk: Belirsiz"}
                    </span>
                  </div>
                  <div className={styles.productPrice}>
                    {product.price
                      ? product.price.toLocaleString("tr-TR", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + " TL"
                      : "Belirsiz"}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* loading && <Loading size={75} color="#4b9ce2" /> */} {/* Statik ürünler olduğu için loading bileşenine gerek yok */}
        </>
      ) : (
        <div className={styles.productNotFound}>
          Bu kategoride hiçbir ürün bulunmamaktadır.
        </div>
      )}
    </div>
  );
}

export default Products;
