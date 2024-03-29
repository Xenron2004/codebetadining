import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.png";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";

const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="user" {...options} />

        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Villa's Team
        </motion.h5>

        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{
            borderRadius: 0, 
            backgroundColor: "rgb(40,40,40)" 
          }}
          >
            <MdSpaceDashboard /> Dashboard
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          animate={{
            x: "0",
            opacity: 1,
          }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>
        <motion.button
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          animate={{
            x: "0",
            opacity: 1,
          }}
          transition={{ delay: 0.3 }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
