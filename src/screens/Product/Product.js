import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../APIrest/productsApi";
import ItemDetailContainer from "../../components/Home/ItemDetailContainer/ItemDetailContainer";
import "./Product.css"

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProductById(id));
    }, [0]);

    return (
        <div className="principal_container">
            <h1>{product.name}</h1>

            <div className="cards-container">
                <ItemDetailContainer
                    id={product.id}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    category={product.category}
                />
            </div>
        </div>
    );
};

export default Product;