import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        <p data-aos="fade-up">
          Hello <img src={Hello} alt="Hello" width="20px"/>, I'm
        </p>
        <h1 data-aos="fade-up" data-aos-delay="200">Kaustav Borgohain</h1>
        <h3 data-aos="fade-up" data-aos-delay="400">Full Stack Developer</h3>
        <p className="small-resume" data-aos="fade-up" data-aos-delay="600">Fresher</p>
        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </div>
        <div className="social-media" data-aos="fade-up" data-aos-delay="1000">
          <a href="https://www.linkedin.com/in/kaustav-borgohain/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/kaustav0703" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B917002584393&text=Hello+Vinayak" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-right" data-aos-delay="1000">
        <img src={Illustration} alt="Illustration" />
      </div>
    </Container>
  );
}
