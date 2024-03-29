import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser,FaUtensils } from "react-icons/fa";
import {motion} from "framer-motion"

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div
        initial={{x:"-100%"}}
        whileInView={{x:0}}
        >
        <FaUtensils />
      </motion.div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
