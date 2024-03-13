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
          <h4>Villa's Food</h4>
          <p>
            We are , providing tyou the best taste in the world
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
              <h3>We are best sellers in Dining Market</h3>
            </div>

            <p>
              We are Gladiators, the founder of Villa's Food. Affiliated to best taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;