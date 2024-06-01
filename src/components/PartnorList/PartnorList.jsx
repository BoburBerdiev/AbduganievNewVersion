import { ImageUl } from "..";
import { motion } from "framer-motion";

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

  const duplicatePartners = [...partners, ...partners];

  return (
      <div className="container overflow-hidden">
        <motion.div className="flex gap-x-10 items-center" variants={marqueeVariants("left")} animate="animate">
          {duplicatePartners.map((item, index) => (
              <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="block w-[150px] shrink-0 h-[70px] relative duration-500 filter grayscale hover:filter-none hover:grayscale-0"
              >
                <ImageUl imgStyle="object-contain" alt="partner" src={item.image} />
              </a>
          ))}
        </motion.div>
        <motion.div className="flex gap-x-10 items-center mt-10" variants={marqueeVariants("right")} animate="animate">
          {duplicatePartners.map((item, index) => (
              <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="block w-[150px] shrink-0 h-[70px] relative duration-500 filter grayscale hover:filter-none hover:grayscale-0"
              >
                <ImageUl imgStyle="object-contain" alt="partner" src={item.image} />
              </a>
          ))}
        </motion.div>
      </div>
  );
};

export default PartnorList;