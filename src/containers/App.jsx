import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Certficate from "./Certficate";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full  xl:max-w-[1280px]  py-12  lg:px-12  pr-4 lg:pr-32 container ">
      {/*particles container */}
      <ParticlesContainer />
      {/*header */}
      <Header />
      {/*home container */}
      <Home />
      {/* services count container */}
      <div 
      className="w-full"
      data-aos="fade-right"
      data-aos-easing=" ease-out-cubic"
      data-aos-duration="2000">
      <ServiceCount  />
      </div>
      {/*about container */}
      <About />
      {/*skills container */}
      <Skills />
      {/*project container */}
      <Projects />
      {/* Sertficate container */}
      <Certficate />
      {/*contact container */}
      <div 
      className="w-full"
      data-aos="fade-left"
      data-aos-easing=" ease-out-cubic"
      data-aos-duration="2000">
       <Contact />
      </div>
      {/*footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12  ">
        <p 
        className="text-3xl tracking-wide text-texlight " 
        data-aos="fade-right"
        data-aos-easing=" ease-out-cubic"
        data-aos-duration="3000"
        >
          Karimli Aghabala
        </p>
        <div className="flex items-center justify-center gap-10 mt-16 pl-2">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>
        <div className="w-full mt-12 ">
          
          <div className=" w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">agabala.93@gmail.com</p>
            <p className="text-texlight text-center">+994-50-413-15-97</p>
            <a href="https://wa.me/message/2HVPAGLOC4HJP1">
              <p className="text-primary text-center pb-5">{t("contact")}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
