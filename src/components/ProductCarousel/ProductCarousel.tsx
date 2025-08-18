import { useState } from 'react';
import styles from './ProductCarousel.module.scss';
import ProductModal from '../../components/ProductModal/ProductModal';
import iphone from '../../assets/images/Iphone.png'
import apiProductsJson from '../../test.json'
import type { Product } from "../../types/product";
import { formatBRL } from '../../utils/format';


interface ProductMain {
    id: number;
    name: string;
    oldPrice: string;
    price: string;
    installments: string;
    shipping: string;
    image: string;
}

export default function ProductCarousel() {

    const productMain: ProductMain[] = [
        {
            id: 1,
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            oldPrice: "R$ 30,90",
            price: "R$ 28,90",
            installments: "ou 2x de R$ 49,95 sem juros",
            shipping: "Frete grátis",
            image: iphone,
    
        },
        {
            id: 2,
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            oldPrice: "R$ 30,90",
            price: "R$ 28,90",
            installments: "ou 2x de R$ 49,95 sem juros",
            shipping: "Frete grátis",
            image: iphone,
        },
        {
            id: 3,
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            oldPrice: "R$ 30,90",
            price: "R$ 28,90",
            installments: "ou 2x de R$ 49,95 sem juros",
            shipping: "Frete grátis",
            image: iphone,
        },
        {
            id: 4,
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            oldPrice: "R$ 30,90",
            price: "R$ 28,90",
            installments: "ou 2x de R$ 49,95 sem juros",
            shipping: "Frete grátis",
            image: iphone,
        },
    ];

    const apiProducts: Product[] = apiProductsJson.products.map((p) => ({
    productName: p.productName,
    description: p.descriptionShort,
    price: formatBRL(p.price),
    photo: p.photo,
  }));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


    const handleOpenModal = (productId: number) => {
        const productFromApi = apiProducts[productId - 1]; 
    if (!productFromApi) return;

    setSelectedProduct(productFromApi);
    setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.productCarousel}>
                <span className={styles.carouselArrow}>&lt;</span>
                {productMain.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className={styles.productDetails}>
                            <p className={styles.productName}>{product.name}</p>
                            <p className={styles.productOldPrice}>{product.oldPrice}</p>
                            <p className={styles.productPrice}>{product.price}</p>
                            <p className={styles.productInstallments}>{product.installments}</p>
                            <p className={styles.productShipping}>{product.shipping}</p>
                        </div>
                        {/* Ao invés de aninhar o modal, o botão de "COMPRAR" abre o modal */}
                        <button className={styles.buyButton} onClick={() => handleOpenModal(product.id)}>
                            COMPRAR
                        </button>
                    </div>
                ))}
                <span className={styles.carouselArrow}>&gt;</span>
            </div>
            <ProductModal isOpen={isModalOpen} product={selectedProduct} onClose={handleCloseModal} />
        </div>
    );
}