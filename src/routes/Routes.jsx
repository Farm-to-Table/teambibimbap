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
      { path: "", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "farm/:id", element: <FarmDetailPage /> },
      { path: "product/:farmName", element: <ProductPage /> },
      { path: "map", element: <Map /> },
      { path: "vege", element: <Vege /> },
      { path: "salad", element: <Salad /> },
      { path: "fruit", element: <Fruit /> },
      { path: "payment", element: <Payment /> },
    ],
  },
]);
