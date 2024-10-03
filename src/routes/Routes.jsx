import { createBrowserRouter } from "react-router-dom";
import Cart from "../Pages/cart/Cart";
import App from "../App";
import Home from "../Pages/Home/Home";
import FarmDetailPage from "../Pages/Farm_Detail_page/FarmDetailPage";
import Map from "../Pages/Map/Map";
import Vege from "../Pages/Vege/Vege";
import Salad from "../Pages/Salad/Salad";
import Fruit from "../Pages/Fruit/Fruit";
import Payment from "../Pages/Payment/Payment";
import Error from "../Pages/Error/Error";
import ProductPage from "../Pages/ProductPage/ProductPage";


export const router = createBrowserRouter([
  {
    path: "/teambibimbap/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/teambibimbap/", element: <Home /> }, // 변경
      { path: "cart", element: <Cart /> }, // 변경
      { path: "farm/:id", element: <FarmDetailPage /> }, // 변경
      { path: "product/:farmName", element: <ProductPage /> }, // 변경
      { path: "product/:farmName/:productName", element: <ProductPage /> }, // 조정된 라우트
      { path: "map", element: <Map /> }, // 변경
      { path: "vege", element: <Vege /> }, // 변경
      { path: "salad", element: <Salad /> }, // 변경
      { path: "fruit", element: <Fruit /> }, // 변경
      { path: "payment", element: <Payment /> }, // 변경
    ],
  },
]);
