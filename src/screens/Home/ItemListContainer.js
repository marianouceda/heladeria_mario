import { useState, useEffect } from "react";
import productsApi from "../../APIrest/productsApi";
import ItemDetailContainer from '../../components/Home/ItemDetailContainer/ItemDetailContainer';
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';

import "./ItemListContainer.css";

function ItemListContainer() {

  const [filter, setFilter] = useState("");
  const [product, setProduct] = useState([]);
  const { idCat } = useParams();

  const getProducts = () => {
    setTimeout(() => {
      const product = productsApi;
      setProduct(product);
    }, 3000);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="principal_container">
      <h1>Productos</h1>

      <Form.Control
        placeholder="Búsqueda"
        className="me-2"
        aria-label="Search"
        id="filter"
        name="filter"
        type="search"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <div className="cards-container">
        {idCat
          ? product
            .filter((product) => product.name.includes(filter))
            .filter((product) => product.category === idCat)
            .map((product, i) => (
              <ItemDetailContainer className="item_list_container"
                key={i}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
              />
            ))
          : product
            .filter((product) => product.name.includes(filter))
            .map((product, i) => (
              <ItemDetailContainer
                key={i}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
              />
            ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
