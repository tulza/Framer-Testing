import React from "react";

const Card = () => {
  return (
    <div
      className="h-[250px] w-[300px] rounded-lg border border-[#AEAEAE] bg-[#1B1B1B] p-4"
      style={{ boxShadow: "inset 0 -1em 1em rgba(0,0,0,0.5)" }}
    >
      <div className="h-[150px] w-full rounded-md bg-[#222222]"></div>
    </div>
  );
};

export default Card;
