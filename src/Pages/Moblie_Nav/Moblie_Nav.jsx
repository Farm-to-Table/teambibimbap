import React from "react";
import { CiShoppingCart, CiMap, CiHome, CiChat1, CiUser } from "react-icons/ci";

const buttons = [
  {
    icon: <CiUser />,
    link: "/teambibimbap/profile",
  },
  {
    icon: <CiHome />,
    link: "/teambibimbap/",
  },
  {
    icon: <CiShoppingCart />,
    link: "/teambibimbap/cart",
  },
  {
    icon: <CiMap />,
    link: "/teambibimbap/map",
  },
];

const Moblie_Nav = () => {
  return (
    <div className="h-12 fixed bottom-0 left-0 right-0 flex flex-row justify-center items-center space-x-4 font-bold bg-white border-t-2 border-black py-2">
      {buttons.map((button, index) => (
        <a
          href={button.link}
          key={index}
          className="text-2xl text-red-500 hover:bg-red-100 hover:text-red-700 hover:rounded-full p-1 transition-all duration-300"
        >
          <div className="flex justify-center items-center w-10 h-10">
            {button.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Moblie_Nav;
