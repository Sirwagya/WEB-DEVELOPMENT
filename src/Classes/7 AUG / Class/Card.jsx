import React from "react";

const Card = ({ product }) => (
  <div className="flex justify-center">
    <div className="overflow-hidden">
    <img className="w-full h-full object-cover"src={product.thumbnail} alt={product.title}/>

    </div>
    <div className=" flex flex-col gap-3.5 w-[550px] m-[50px]">

    <h3 className="text-[40px] leading-9">{product.title}</h3>
    <p className="text-[15px]  text-[#6d6d6d] colour">{product.description}</p>
    <p className="text-[25px]">${product.price}</p>
    </div>
  </div>
);

export default Card;