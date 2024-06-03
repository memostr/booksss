import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { setCreateProductService } from "../../services/productService";
import { useProduct } from "../../contexts/product";
import toastMessage from "../../constants/toastify";
import { ProductSchema } from "../../constants/YupSchema";
import Loading from "../Loading/Loading";
import ImageUploader from "../ImageUploader/ImageUploader";
import Toggle from "../Toggle/Toggle";
import styles from "./productInfo.module.scss";

function ProductInfo({ showError }) {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorImg, setErrorImg] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Eğer başka veri yüklemeleri gerekiyorsa burada yapılabilir.
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      brand: "",
      isOfferable: false,
      price: "",
    },
    validationSchema: ProductSchema,
    onSubmit: async (values) => {
      if (image) {
        setButtonLoading(true);
        try {
          console.log("Form values:", values);
          console.log("Image file:", image);

          const data = { ...values, isSold: false };
          const res = await setCreateProductService(data, image);

          console.log("Service response:", res);

          if (res.status === 200) {
            toastMessage("success", "Ürün Eklendi");
            formik.resetForm();
            setImage(null);
          } else {
            toastMessage("error", "Bir hata ile karşılaşıldı!");
          }
        } catch (error) {
          console.error("Error creating product:", error);
          toastMessage("error", "Bir hata ile karşılaşıldı!");
        } finally {
          setButtonLoading(false);
        }
      } else {
        setErrorImg(true);
      }
    },
  });

  return (
    <>
      {loading ? (
        <Loading size={75} color="#4b9ce2" />
      ) : (
        <>
          <div className={styles.info}>
            <div className={styles.detailTitle}>Ürün Detayı</div>
            <div className={styles.formRow}>
              <label htmlFor="name">Ürün Adı</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Örnek: Iphone 12 Pro Max"
                maxLength="100"
                className={formik.errors.name && formik.touched.name ? styles.notValid : ""}
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="description">Açıklama</label>
              <textarea
                name="description"
                id="description"
                placeholder="Ürün açıklaması giriniz"
                value={formik.values.description}
                maxLength="500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.description && formik.touched.description ? styles.notValid : ""}
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="brand">Marka</label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Örnek: Apple"
                maxLength="100"
                className={formik.errors.brand && formik.touched.brand ? styles.notValid : ""}
              />
            </div>
            <div className={`${styles.formRow} ${styles.priceRow}`}>
              <label htmlFor="price">Fiyat</label>
              <input
                type="text"
                name="price"
                id="price"
                className={formik.errors.price && formik.touched.price ? styles.notValid : styles.price}
                placeholder="Bir fiyat girin"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className={formik.errors.price && formik.touched.price ? styles.notValidIcon : ""}>TL</p>
              {formik.errors.price && formik.touched.price && <span>0-9 Arasında Bir Rakam Girin</span>}
            </div>
            <div className={`${styles.formRow} ${styles.offerRow}`}>
              {formik.values.isOfferable ? (
                <label htmlFor="offeropt" className={styles.offeroptActive}>
                  Fiyat ve teklif opsiyonu
                </label>
              ) : (
                <label htmlFor="offeropt" className={styles.offeropt}>
                  Teklif Opsiyonu
                </label>
              )}
              <Toggle value={formik.values.isOfferable} onChange={formik.handleChange} />
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.imageTitle}>Ürün Görseli</div>
            <div className={styles.imageUploading}>
              <ImageUploader error={errorImg} onChange={setImage} />
              <button className={styles.saveButton} type="button" onClick={formik.handleSubmit}>
                {buttonLoading ? <Loading size={30} color="#fff" /> : "Kaydet"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductInfo;
