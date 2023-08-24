import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/UserName/SignIn/SignIn";
import "./index.css";
import SignUp from "./Components/UserName/SignUp/SignUp";
import { Cart } from "./Pages/Cart/Cart";
import { Favorites } from "./Pages/Favorites/Favorites";
import { ClothesAbout } from "./Components/ClothesAbout/ClothesAbout";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { About } from "./Pages/About/About";
import ProductSearch from "./Pages/ProductSearch/ProductSearch";
import Contacts from "./Pages/Contacts/Contacts";
import { ProductCategory } from "./Pages/ProductCategory/ProductCategory";
import { Checkout } from "./Components/Checkout/Checkout";
import { Delivery } from "./Pages/Delivery/Delivery";
import { Products } from "./Pages/Products/Products";
import ForgotPassword from "./Components/UserName/ForgotPassword/ForgotPassword";
import ActivateCode from "./Components/UserName/ActivateCode/ActivateCode";
import { App } from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadTokenFromLocalstorage } from "./Store/UserName/UserActions";
// import { loadCartFromLocalStorage } from "./Store/addCart/CartActions";
import FilterDrawer from "./Pages/Products/FIlteredProducts";
import FilteredProducts from "./Pages/Products/FIlteredProducts";
store.dispatch(loadTokenFromLocalstorage());
// store.dispatch(loadCartFromLocalStorage());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/clothesAbout/:name" element={<ClothesAbout />} />
          <Route path="/about" element={<About />} />
          <Route path="/productSearch" element={<ProductSearch />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/activateCode" element={<ActivateCode />} />
          <Route path="/shop/product/" element={<FilteredProducts />} />

          <Route
            path="/productCategory/:category"
            element={<ProductCategory />}
          />
          <Route path="*" component={NotFound} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
