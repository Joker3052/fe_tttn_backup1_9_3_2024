import { Routes, Route } from "react-router-dom";
import Login from "../components/detail/login";
import Register from "../components/detail/Register";
////////////////////////////////////////////////
import About from "../components/user/about/About";
import Home from "../components/user/home/Home";
import ShipperA from "../components/admin/shipperA/shipperA";
import StoreA from "../components/admin/storeA/StoreA";
import UserA from "../components/admin/userA/userA";
import OrderA from "../components/admin/orderA/orderA";
import Dashboard from "../components/admin/dashboard/Dashboard";
import StoreU from "../components/user/storeU/StoreU";
import MyStore from "../components/user/myStore/MyStore";
import OrderU from "../components/user/orderU/OrderU";
import Checkout from "../components/user/checkout/Checkout";
import Payment from "../components/user/payment/Payment";
import TopRated from "../components/user/topRated/TopRated";
import Product_New from "../components/user/product_New/Product_New";
import AllProduct_U from "../components/user/allProduct_U/AllProduct_U";
import Store_U_detail from "../components/user/store_U_detail/Store_U_detail";
import Product_of_categoryU from "../components/user/product_of_categoryU/Product_of_categoryU";
import Product_of_category_StoreU from "../components/user/product_of_category_StoreU/Product_of_category_StoreU";
import SearchU from "../components/user/searchU/SearchU";
/////////////////////////////////////////////
import Product_A from "../components/admin/product_A/Product_A";
// import Carousel from "../components/user/carousel/Carousel";
// import Footer from "../components/user/Footer/Footer";
const AppRoute = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        {/* ////////////////////////////// */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} /> */}
        <Route
        path="/"
        element={isAdmin ? <Dashboard /> : <Home />}
      />
        <Route path="/about" element={<About />} />
        <Route path="/storeA" element={<StoreA/>} />
        <Route path="/userA" element={<UserA/>} />
        <Route path="/shipperA" element={<ShipperA/>} />
        <Route path="/orderA" element={<OrderA/>} />
        <Route path="/storeU" element={<StoreU/>} />
        <Route path="/myStore" element={<MyStore/>} />
        <Route path="/orderU" element={<OrderU/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/topRated" element={<TopRated/>} />
        <Route path="/product_New" element={<Product_New/>} />
        <Route path="/allProduct" element={<AllProduct_U/>} />
        <Route path="/store_U_detail/:getIdStore" element={<Store_U_detail/>} />
        <Route path="/product_of_categoryU/:getIdProductofCategory" element={<Product_of_categoryU/>} />
        <Route path="/product_of_category_StoreU/:getIduser/:getIdProductofCategory" element={<Product_of_category_StoreU/>} />
        <Route path="/searchU/:getTheSearch" element={<SearchU/>} />
        <Route path="/searchU" element={<SearchU/>} />
        {/* //////////////////////////////////////// */}
        <Route path="/product_A" element={<Product_A/>} />
      </Routes>
    </>
  );
};
export default AppRoute;
