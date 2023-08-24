import React from "react";
import { useState } from "react";

const ServiceTextCard = ({ title, text }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="space-y-5 md:space-y-2.5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2
        className={`text-zinc-200 ${
          hover ? "gradient-background" : ""
        } lg:text-4xl md:text-3xl text-2xl font-semibold `}
      >
        {title}
      </h2>
      <p className="text-base lg:text-xl md:text-lg text-zinc-200">{text}</p>
    </div>
  );
};

export default ServiceTextCard;
