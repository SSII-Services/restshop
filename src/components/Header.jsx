import React, { useState } from "react";
import {
  MdShoppingBasket,
  MdAdd,
  MdLogout,
  MdHome,
  MdList,
  MdSupervisedUserCircle,
  MdRoomService,
  MdContacts, MdAccountCircle
} from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        // eslint-disable-next-line
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="items-center justify-between hidden w-full h-full md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="object-cover w-8" alt="logo" />
          <p className="text-xl font-bold text-headingColor"> RestShop </p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-20 "
          >
            <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
              <Link to="/"> Home </Link>
            </li>
            <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
              <Link to="/menu"> Menu </Link>
            </li>
            <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
              <Link to="/about"> About Us </Link>
            </li>
            <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
              <Link to="/service"> Service </Link>
            </li>
            <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
              <Link to="/contact"> Contact </Link>
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-2xl cursor-pointer text-textColor" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg">
                <p className="text-xs font-semibold text-white">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute right-0 flex flex-col rounded-lg shadow-xl min-w-210 bg-gray-50 top-12"
              >
                <p className="flex items-center justify-center gap-3 p-2 m-2 text-base transition-all duration-100 ease-in-out text-textColor">
                  <img src={user ? user.photoURL : Avatar} alt="" className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-2xl"/>
                  <div className="flex flex-col">
                    <span> {user ? user.displayName : Avatar} </span>
                    <p className="items-center justify-center text-xs font-light"> {user ? user.email : Avatar} </p>
                  </div>
                </p>
                <hr className="border-dashed"/>
                {user && user.email === "ngahemeniw@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <Link to={"/profile"}>
                  <p
                      className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor"
                      onClick={() => setIsMenu(false)}
                  >
                    Profile <MdAccountCircle />
                  </p>
                </Link>
                <p
                  className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between w-full h-full md:hidden ">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-2xl cursor-pointer text-textColor" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg">
              <p className="text-xs font-semibold text-white">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="object-cover w-8" alt="logo" />
          <p className="text-xl font-bold text-headingColor"> RestShop</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute right-0 flex flex-col rounded-lg shadow-xl min-w-210 bg-gray-50 top-12"
            >


              <ul className="flex flex-col ">
                <p className="flex items-center justify-center gap-3 p-2 m-2 text-base transition-all duration-100 ease-in-out text-textColor">
                  <img src={user ? user.photoURL : Avatar} alt="" className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-2xl"/>
                  <div className="flex flex-col">
                    <span> {user ? user.displayName : Avatar} </span>
                    <p className="items-center justify-center text-xs font-light"> {user ? user.email : Avatar} </p>
                  </div>
                </p>
                <hr className="px-2 border-dashed"/>
                <Link to="/"
                      onClick={() => setIsMenu(false)}
                      className="flex items-center gap-3 p-3 text-base transition-all duration-100 ease-in-out cursor-pointer hover:text-headingColor hover:bg-slate-100 text-textColor"
                > <MdHome /> Home </Link>
                <Link to="/menu"
                      onClick={() => setIsMenu(false)}
                      className="flex items-center gap-3 p-3 text-base transition-all duration-100 ease-in-out cursor-pointer hover:text-headingColor hover:bg-slate-100 text-textColor"
                > <MdList /> Menu </Link>
                <Link to="/about"
                      onClick={() => setIsMenu(false)}
                      className="flex items-center gap-3 p-3 text-base transition-all duration-100 ease-in-out cursor-pointer hover:text-headingColor hover:bg-slate-100 text-textColor"
                > <MdSupervisedUserCircle /> About Us </Link>
                <Link to="/services"
                      onClick={() => setIsMenu(false)}
                      className="flex items-center gap-3 p-3 text-base transition-all duration-100 ease-in-out cursor-pointer hover:text-headingColor hover:bg-slate-100 text-textColor"
                > <MdRoomService /> Service </Link>
                <Link to="/services"
                      onClick={() => setIsMenu(false)}
                      className="flex items-center gap-3 p-3 text-base transition-all duration-100 ease-in-out cursor-pointer hover:text-headingColor hover:bg-slate-100 text-textColor"
                > <MdContacts /> Contact </Link>
              </ul>

              {user && user.email === "ngahemeniw@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor">
                      New Item <MdAdd />
                    </p>
                  </Link>
              )}

              <p
                className="flex items-center justify-center gap-3 p-2 m-2 text-base transition-all duration-100 ease-in-out bg-gray-200 rounded-md shadow-md cursor-pointer hover:bg-gray-300 text-textColor"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
