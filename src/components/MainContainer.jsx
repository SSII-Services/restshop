/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import {Helmet} from "./helmet/Helmet";
import { NewsLetter } from "./UI/NewsLetter";
import { Footer } from "./UI/Footer";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <>
      <Helmet title="Home">
        <div className="flex flex-col items-center justify-center w-full h-auto ">
          <HomeContainer />

          <section className="w-full my-6">
            <div className="flex items-center justify-between w-full">
              <p className="relative text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-400 to-red-600">
                Our fresh & healthy fruits
              </p>

              <div className="items-center hidden gap-3 md:flex">
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center justify-center w-8 h-8 bg-red-300 rounded-lg cursor-pointer hover:bg-red-500 hover:shadow-lg"
                    onClick={() => setScrollValue(-200)}
                >
                  <MdChevronLeft className="text-lg text-white" />
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center justify-center w-8 h-8 transition-all duration-100 ease-in-out bg-red-300 rounded-lg cursor-pointer hover:bg-red-500 hover:shadow-lg"
                    onClick={() => setScrollValue(200)}
                >
                  <MdChevronRight className="text-lg text-white" />
                </motion.div>
              </div>
            </div>
            <RowContainer
                scrollValue={scrollValue}
                flag={true}
                data={foodItems?.filter((n) => n.category === "fruits")}
            />
          </section>

          <MenuContainer />

          {cartShow && <CartContainer />}

          
          {/* <Attout /> */}
        </div>
        <NewsLetter />
        <Footer />
      </Helmet>
    </>
  );
};

export default MainContainer;
