import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>B-tech Burger Wala</h2>

        <p>We are trying to give you the best possible taste</p>
        <br />

        <em>We give attention to genuine feedbacks..</em>

        
      </div>
      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/sankalp-barriar-211793199">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/sankalp_barriar/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/sankalpbarriar">
          <AiFillGithub />
        </a>
      </aside>
      <strong>© copyright recived @btechburgerwala</strong>
    </footer>
  );
};

export default Footer;
