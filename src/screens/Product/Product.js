import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../APIrest/productsApi";
import ItemDetailContainer from "../../components/Home/ItemDetailContainer/ItemDetailContainer";

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProductById(id));
    }, []);

    return               <ItemDetailContainer
    id={product.id}
    name={product.name}
    price={product.price}
    image={product.image}
    description={product.description}
    category={product.category}
  />
};

export default Product;