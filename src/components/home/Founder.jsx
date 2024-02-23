import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.png";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Sankalp Barriar</h3>

        <p>
          Namaste, Everyone This is Sankalp Barriar, the founder of B-tech Burger Wala..
          <br />
          Our aim is Revolutionalise the Burger Market..
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;