import { ImageUl } from "..";
import { motion } from "framer-motion";
import {useEffect} from "react";

const PartnorList = ({ partners }) => {
  const marqueeVariants = (direction) => ({
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 45,
          ease: "linear",
        },
      },
    },
  });

  function divideArray(array) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    const middleIndex = Math.ceil(shuffledArray.length / 2);
    const firstHalf = shuffledArray.slice(0, middleIndex);
    const secondHalf = shuffledArray.slice(middleIndex);
    return [firstHalf, secondHalf];
  }

  const [array1, array2] = divideArray(partners);

  return (
      <div className="container overflow-hidden">
        <motion.div className="flex gap-x-10 items-center" variants={marqueeVariants("left")} animate="animate">
          {array1.map((item, index) => (
              <div
                  key={index}
                  className="block w-[150px] h-[70px] md:w-[180px] shrink-0 md:h-[80px] relative duration-500 filter grayscale hover:filter-none hover:grayscale-0"
              >
                <ImageUl imgStyle="object-contain" alt="partner" src={item.image} />
              </div>
          ))}
        </motion.div>
        <motion.div className="flex gap-x-10 items-center mt-10" variants={marqueeVariants("right")} animate="animate">
          {array2.map((item, index) => (
              <div
                  key={index}
                  className="block w-[150px] shrink-0 h-[70px] relative duration-500 filter grayscale hover:filter-none hover:grayscale-0"
              >
                <ImageUl imgStyle="object-contain" alt="partner" src={item.image} />
              </div>
          ))}
        </motion.div>
      </div>
  );
};

export default PartnorList;