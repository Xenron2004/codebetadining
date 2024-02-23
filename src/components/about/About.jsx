import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceFill} from "react-icons/ri";
import me from "../../assets/founder.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Btech Burger Wala</h4>
          <p>
            We are Btech Burger Wala, providing tyou the best taste in the world
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceFill />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Sankalp barriar</h3>
            </div>

            <p>
              I am Sankalp Barriar, the founder of Btech
              Burger Wala. Affiliated to best taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;