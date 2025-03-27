import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="about">
      <div className="about-text">
        <h2 data-aos="fade-left">About me</h2>

        <p data-aos="fade-left" data-aos-delay="100">
          Hi there! I'm Vinayak, a website developer with a passion for creating custom online experiences for my clients.
          With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
        </p>

        <p data-aos="fade-left" data-aos-delay="200" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify,
          making it easy for my clients to take control of their own websites and keep them up to date.
        </p>

        <p data-aos="fade-left" data-aos-delay="300">
          So if you're in need of a new website or just looking to revamp your current online presence,
          I'd love to chat and see how I can help. Let's bring your website dreams to reality together!
        </p>

        <h3 data-aos="fade-left" data-aos-delay="400">Here are my main skills:</h3>

        <div className="hard-skills">
          <div className="hability" data-aos="fade-up" data-aos-delay="100">
            <img src={wordpress} alt="Wordpress" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="120">
            <img src={shopify} alt="shopify" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="140">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="160">
            <img src={typescriptIcon} alt="Typescript" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="180">
            <img src={vueIcon} alt="Vue" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="200">
            <img src={nodeIcon} alt="Node" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="220">
            <img src={htmlIcon} alt="Html" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="240">
            <img src={cssIcon} alt="Css" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="260">
            <img src={boostrapIcon} alt="bootstrap" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="280">
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
      </div>

      <div className="about-image" data-aos="fade-right" data-aos-delay="200">
        <img src={VinayakSingh} alt="Vinayak Singh" />
      </div>
    </Container>
  );
}
