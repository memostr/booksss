import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import styles from "./categories.module.scss";

function Categories({ loading, showError }) {
  const router = useRouter();
  const categoryContent = useRef();

  // Statik kategori listesi
  const categories = [
    { id: 1, name: "Hepsi" },
    { id: 2, name: "Yeni Gelenler" },
    { id: 3, name: "Çok Satanlar" },
    // Diğer kategorileri buraya ekleyebilirsiniz
  ];

  useEffect(() => {
    const handleWheel = (evt) => {
      evt.preventDefault();
      if (categoryContent.current) {
        categoryContent.current.scrollLeft += evt.deltaY;
      }
    };

    const current = categoryContent.current;
    if (current) {
      current.addEventListener("wheel", handleWheel);
    }

    // ComponentWillUnmount yerine useEffect'in return kısmında olayı temizleme
    return () => {
      if (current) {
        current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const categoryClick = async (categoryName, categoryId) => {
    loading(true);
    // Kategori değişikliğini işle
    console.log(`Seçilen kategori: ${categoryName}, ID: ${categoryId}`);
    // Kategori değişikliğini işledikten sonra router ile yeni URL'e yönlendir
    router.push("/?category=" + categoryName, undefined, { shallow: true });
    loading(false);
  };

  return (
    <div className={styles.category}>
      <div ref={categoryContent} className={styles.categoryContent}>
        {categories.map((category) => (
          <span
            key={category.id}
            className={styles.categoryItem}
            onClick={() => {
              categoryClick(category.name, category.id);
            }}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Categories;
