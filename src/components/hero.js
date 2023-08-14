import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";
const newsData = [
  "Website is under maintenance",
  "DEX is comming soon",
  // ...more news items
];
const Hero = () => {
    return(
     <><motion.section className=" h-screen py-20" variants={fadeIn()}><motion.div variants={textVariant()}>
      
        <div className=" text-white z-90 h-full flex flex-col justify-between items-center pt-10 relative title">
          <div className="opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 flex flex-col items-center skew-y-0 transform-style-preserve-3d inline-block welcome"><span className="text-3"> Welcome</span><span className="text-3">To AntSwap</span> <span className="descri">Developing a decentralized ecosystem and community Based on Linea Chain.</span></div>
        </div>
        <div className="pt-20">
        <div className="marquee flex  rounded-20 ">
          <div className="z-1000 bg-yellow-500 text-black text-center flex items-center p-2">News</div>
        
          <div className="marquee5 marquee__inner items-center -z-50">
        {newsData.map((newsItem, index) => (
          <span className=" mr-24" key={index}>{newsItem}</span>
        ))}
      </div>
       </div>
        </div>
        
      </motion.div>
      </motion.section>
    </>
    )
}

export default Hero;
