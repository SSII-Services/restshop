/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../../utils/data";
import { motion } from "framer-motion";
import RowContainer from "../RowContainer";
import { useStateValue } from "../../context/StateProvider";
import CartContainer from "../CartContainer";

export const MenuItems = () => {

    const [filter, setFilter] = useState("chicken");
    const [{ foodItems, cartShow }, dispatch] = useStateValue();


  return (
    <>
        <div className="flex items-center justify-start w-full gap-8 py-6 overflow-x-scroll lg:justify-center scrollbar-none">
          <p className="relative mr-auto text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-400 to-red-600">
            Our fruits
          </p>
          {/* {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))} */}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            // data={foodItems?.filter((n) => n.category == filter)}
            data = {foodItems?.filter((n) => n.category == 'fruits' )}
          />
        </div>

        <div className="flex items-center justify-start w-full gap-8 py-6 overflow-x-scroll lg:justify-center scrollbar-none">
          <p className="relative mr-auto text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-400 to-red-600">
            Our icecreams
          </p>
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            // data={foodItems?.filter((n) => n.category == filter)}
            data = {foodItems?.filter((n) => n.category == 'icecreams' )}
          />
        </div>

        <div className="flex items-center justify-start w-full gap-8 py-6 overflow-x-scroll lg:justify-center scrollbar-none">
          <p className="relative mr-auto text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-400 to-red-600">
            Our fishes
          </p>
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            // data={foodItems?.filter((n) => n.category == filter)}
            data = {foodItems?.filter((n) => n.category == 'fish' )}
          />
        </div>
        {cartShow && <CartContainer />}
    </>
  )
}
