import React from "react";
import farms from "../../assets/farmsData";
const Vege = () => {
  return (
    <div className="border-2 border-black flex-col justify-center items-center h-full">
      <div>filter and search</div>
      <div>
        <ul>{farms.map((data,index)=>{
          <li key={index}>
            
            
               </li>
        })}</ul>
      </div>
    </div>
  );
};

export default Vege;
