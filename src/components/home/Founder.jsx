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
        <h3></h3>

        <p>
          We provide best Dinings.
          <br />
          Our aim is Revolutionalise the Dining  Market..
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;