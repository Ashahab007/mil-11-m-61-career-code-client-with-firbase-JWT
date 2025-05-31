import React from "react";
import { motion } from "motion/react";


import bannerImage1 from "../../../assets/bannerImage/BannerImage1.jpg";
import bannerImage2 from "../../../assets/bannerImage/BannerImage2.jpg";

const Banner = () => {
  
  return (
 
    <div className="hero bg-base-200 min-h-screen mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={bannerImage1}
            className="max-w-lg border-blue-500 border-s-8 border-b-8 rounded-l-4xl rounded-br-4xl shadow-2xl "
          />
          <motion.img
            animate={{ x: [50, 80, 50] }}
            transition={{ duration: 5, delay: 4, repeat: Infinity }}
            src={bannerImage2}
            className="max-w-lg border-blue-500 border-s-8 border-b-8 rounded-l-4xl rounded-br-4xl shadow-2xl "
          />
        </div>
        <div className="flex-1">
      
          <h1 className="text-5xl font-bold">
            The Easiest Way to Get{" "}
            <motion.span
              animate={{
                color: [
                  "#FE5D26",
                  "#626F47",
                  "#FF9B17",
                  "#FF0000",
                  "#006769",
                  "#008DDA",
                  "#114232",
                  "#000000",
                ],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Your New Job
            </motion.span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
