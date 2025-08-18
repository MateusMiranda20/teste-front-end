import React, { useState } from "react";
import styles from "./ProductModal.module.scss";
import type { Product } from "../../types/product";


interface ProductModalProps { 
  isOpen: boolean;
  onClose: () => void;
  product: Product | null,
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  
  const [quantity, setQuantity] = useState(1); 
  if (!isOpen || !product) return null;


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <div className={styles.content}>
          <img src={product.photo} alt={product.productName} className={styles.productImage} />
          <div className={styles.details}>

            <h2>{product.productName}</h2>
            <p>{product.descriptionShort}</p>
            <strong>{product.price}</strong>

            <a href="#">Veja mais detalhes do produto &gt;</a>

            <div className={styles.quantity}>
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
            <button
              className={styles.buyBtn}
              onClick={() => alert("Produto adicionado ao carrinho!")}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>);
};
export default ProductModal;