import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Leaf1, Leaf2 } from "../assets";
import cert1 from "../assets/img/sertficats/sqlsertf.jpeg";
import cert2 from "../assets/img/sertficats/ginsertf.jpg";
import cert3 from "../assets/img/sertficats/itacademy.jpg";
import cert4 from "../assets/img/sertficats/coursera.jpg";

const Certficate = () => {
  const { t } = useTranslation();
  const [isHoverred, setIsHoverred] = useState(false);
  const [isHoverred2, setIsHoverred2] = useState(false);
  const [isHoverred3, setIsHoverred3] = useState(false);
  const [isHoverred4, setIsHoverred4] = useState(false);

  return (
    <section
      id="certficate"
      className="w-full flex flex-col items-center justify-between"
    >
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 200 }}
        exit={{ opacity: 0, width: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-around w-52 pt-14"
      >
        <img src={Leaf1} className="w-6 h-auto object-contain" alt="Leaf" />
        <p className="text-transparent text-center bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize">
          Certficates and Courses
        </p>
        <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf" />
      </motion.div>

      <div className="course-info w-full  flex flex-col md:flex-row justify-between gap-6 items-center mt-8 p-2 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm ">
        <div className="left-info text-white w-full flex flex-col items-center justify-around pl-4 ">
          <p className="text-header pt-4">2022 (June-August)</p>
          <p className="text-lg pt-4">Ministry of Education and Vocational
Education Center</p>
          <p className="text-base pt-4">SQL programmer</p>
        </div>
        <motion.div
          className=" overflow-hidden cursor-pointer relative  right-img-link max-w-[300px]  "
          onMouseEnter={() => setIsHoverred(true)}
          onMouseLeave={() => setIsHoverred(false)}
        >
          <motion.img className="" src={cert1} alt="certficate" />
          {isHoverred && (
            <motion.div className="absolute inset-0 backdrop-blur-xs bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2 pl-2 ">
              <a href="https://raw.githubusercontent.com/karimliaghabala/portfolio/master/src/assets/image/sertficats/sqlsertf.jpeg" className="absolute text-white">
                Sertifikata bax
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="course-info w-full  flex flex-col md:flex-row justify-between gap-6 items-center mt-8 p-2 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm">
        <div className="left-info text-white w-full flex flex-col items-center justify-around pl-4">
          <p className="text-header pt-4">2022 (July-October)</p>
          <p className="text-lg pt-4">Ministry of Youth and Sports and
CODE Factory</p>
          <p className="text-base pt-4">WEB developer</p>
        </div>
        <motion.div
          className=" overflow-hidden cursor-pointer relative  right-img-link max-w-[300px]  "
          onMouseEnter={() => setIsHoverred2(true)}
          onMouseLeave={() => setIsHoverred2(false)}
        >
          <motion.img className="" src={cert2} alt="certficate" />
          {isHoverred2 && (
            <motion.div className="absolute inset-0 backdrop-blur-xs bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2 pl-2 ">
              <a href="https://raw.githubusercontent.com/karimliaghabala/portfolio/master/src/assets/image/sertficats/ginsertf.jpg" className="absolute text-white">
                Sertifikata bax
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="course-info w-full  flex flex-col md:flex-row justify-between gap-6 items-center mt-8 p-2 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm">
        <div className="left-info text-white w-full flex flex-col items-center justify-around pl-4">
          <p className="text-header pt-4">2022/Sept-2023/Jan</p>
          <p className="text-lg pt-4">T academy and Algorithmics</p>
          <p className="text-base pt-4">WFRONTEND developer</p>
        </div>
        <motion.div
          className=" overflow-hidden cursor-pointer relative  right-img-link max-w-[300px] max-h-[250px]  "
          onMouseEnter={() => setIsHoverred3(true)}
          onMouseLeave={() => setIsHoverred3(false)}
        >
          <motion.img className="" src={cert3} alt="certficate" />
          {isHoverred3 && (
            <motion.div className="absolute inset-0 backdrop-blur-xs bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2 pl-2 ">
              <a href="https://raw.githubusercontent.com/karimliaghabala/portfolio/master/src/assets/image/sertficats/itacademy.jpg" className="absolute text-white">
                Sertifikata bax
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="course-info w-full  flex flex-col md:flex-row justify-between gap-6 items-center mt-8 p-2 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm">
        <div className="left-info text-white w-full flex flex-col items-center justify-around pl-4">
          <p className="text-header pt-4">2023/Aug-2024/Jan Continue...</p>
          <p className="text-lg pt-4">JED Academy</p>
          <p className="text-base pt-4">FRONTEND developer</p>
        </div>
        <motion.div
          className=" overflow-hidden cursor-pointer relative  right-img-link max-w-[300px]  "
          onMouseEnter={() => setIsHoverred4(true)}
          onMouseLeave={() => setIsHoverred4(false)}
        >
          <motion.img className="blur-lg md:w-full" src={cert4} alt="certficate" />
          {isHoverred4 && (
            <motion.div className="absolute inset-0 backdrop-blur-xs bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2 pl-2 ">
              <a href="#" className="absolute text-white">
                Sertifikat yoxdur
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>


    </section>
  );
};
export default Certficate;
