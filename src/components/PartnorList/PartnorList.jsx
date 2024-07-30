import { ImageUl } from "..";
import { motion } from "framer-motion";

const PartnorList = ({ partners }) => {
  const marqueeVariantRight = () => ({
    animate: {
      x: ["-100%", "0"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        },
      },
    },
  });

  const marqueeVariantLeft = () => ({
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        },
      },
    },
  });

  function divideArray(array) {
    const firstHalf = array;
    const secondHalf = [...array].reverse();
    return [firstHalf, secondHalf];
  }

  const [array1, array2] = divideArray(partners);

  return (
      <div className="container overflow-hidden">
        <motion.div className="flex gap-x-10 items-center" variants={marqueeVariantRight()} animate="animate">
          {array1.map((item, index) => (
              <div
                  key={index}
                  className="block w-[150px] h-[70px] md:w-[180px] shrink-0  relative duration-500 filter grayscale hover:filter-none hover:grayscale-0"
              >
                <ImageUl imgStyle="object-contain" alt="partner" src={item.image} />
              </div>
          ))}
        </motion.div>
        <motion.div className="flex gap-x-10 items-center mt-5" variants={marqueeVariantLeft()} animate="animate">
          {array2.map((item, index) => (
              <div
                  key={index}
                  className="block w-[150px]  h-[70px] md:h-[80px] shrink-0 relative duration-500 filter grayscale hover:filter-none hover:grayscale-0"
              >
                <ImageUl imgStyle="object-contain" alt="partner" src={item.image} />
              </div>
          ))}
        </motion.div>
      </div>
  );
};

export default PartnorList;
