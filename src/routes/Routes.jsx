import { createBrowserRouter } from "react-router-dom";
import Cart from "../Pages/cart/Cart";
import App from "../App";
import Home from "../Pages/Home/Home";
import FarmDetailPage from "../Pages/Farm_Detail_page/FarmDetailPage";
import Map from "../Pages/Map/Map";
import Vege from "../Pages/Vege/Vege";
import Salad from "../Pages/Salad/Salad";
import Fruit from "../Pages/Fruit/Fruit";
import ProductPage from "../Pages/ProductPage/ProductPage";
import Payment from "../Pages/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "not found",
    children: [
      { path: "/teambibimbap/", element: <Home /> },
      { path: "/teambibimbap/cart", element: <Cart /> },
      { path: "/teambibimbap/farm/:id", element: <FarmDetailPage /> },
      { path: "/teambibimbap/product/:farmName", element: <ProductPage /> },
      { path: "/teambibimbap/map", element: <Map /> },
      { path: "/teambibimbap/vege", element: <Vege /> },
      { path: "/teambibimbap/salad", element: <Salad /> }, // 경로 수정
      { path: "/teambibimbap/fruit", element: <Fruit /> }, // 경로 수정
      { path: "/teambibimbap/payment", element: <Payment /> },
    ],
  },
]);
