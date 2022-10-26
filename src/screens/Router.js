import NavBar from "../components/UI/NavBar/NavBar";
import ItemListContainer from "../screens/Home/ItemListContainer";
import Product from "./Product/Product";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:idCat" element={<ItemListContainer />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/*" element={<div>404 not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;