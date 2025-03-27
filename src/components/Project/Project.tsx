import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

export function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Serverless Voting Application for Programming Languages</h3>
            <p>
              Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to vote and access details interactively.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>AWS Lambda</li>
              <li>API Gateway</li>
              <li>DynamoDB</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>
            <p>
              Developed an interactive chatbot using Streamlit, OpenAI's GPT-3.5-turbo, and PyPDF2 for PDF text extraction, allowing users to ask questions about uploaded PDFs.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Streamlit</li>
              <li>PyPDF2</li>
              <li>LangChain</li>
            </ul>
          </footer>
        </div>

        {/* Add more projects following the same structure */}
        
      </div>
    </Container>
  );
}
