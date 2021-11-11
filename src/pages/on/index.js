import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { 
  titlebar, logo, navigation,
  main_content, title_container, subtitle, title, description,
  resume, resume_text,
  social,
  footer, footer_text,
  blink,
}  from'./layout.module.css'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

// social links 
const links = {
  twitter: "https://twitter.com/margeson_jack",
  instagram: "https://www.instagram.com/margeson.jack/",
  linkedin: "https://www.linkedin.com/in/jack-margeson/",
  github: "https://github.com/jack-margeson",
  repo: "https://github.com/jack-margeson/marg.es",
  resume: "jack_margeson_resume.pdf",
};


const IndexPage = () => {
  return (
    <main>
      <head>
        <title>Jack Margeson</title>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="Jack Margeson, Jack, Margeson, developer, computer science, portfolio, resume"></meta>
        <meta name="description" content=" Jack Margeson's personal website and resume, online."></meta>
        <meta name="author" content="Jack Margeson"></meta>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link> 
      </head>
      <body>
        <div className={titlebar}>
        <div className={logo} target="_blank" rel="noreferrer">
          <StaticImage
                  src="../../images/logo.png"
                  alt="Jack Margeson"
                  placeholder="tracedSVG"
                  width={100}
                  height={100}
            />
        </div>
        
        </div>
        <div className={main_content}>
          <div className={title_container}>
            <p className={subtitle}>hello, I'm</p>
            <span className={title}>Jack Margeson</span>
            <span className={blink}>_</span>
            <p className={description}>developer, student, and a problem solver at heart</p>
            <div>
              <a href={links["twitter"]} target="_blank" rel="noreferrer"><FaTwitter size={50} className={social}/></a>
              <a href={links["instagram"]} target="_blank" rel="noreferrer"><FaInstagram size={50} className={social}/></a>
              <a href={links["linkedin"]} target="_blank" rel="noreferrer"><FaLinkedinIn size={50} className={social}/></a>
              <a href={links["github"]} target="_blank" rel="noreferrer"><FaGithub size={50} className={social}/></a>
            </div>
          </div>
          <div className={resume}>
            <a href={links["resume"]}>
              <StaticImage
                  src="../../images/resume.png"
                  alt="Jack Margeson's resume"
                  placeholder="tracedSVG"
                />
            </a>

            <p className={resume_text}>(check out my resume!)</p>
          </div>
        </div>
        <div className={footer}>
          <p className={footer_text}>Designed with 💖 by Jack Margeson, 2021. 
          Built with GatsbyJS (view me on <a href={links["repo"]} target="_blank" rel="noreferrer">GitHub</a>!)</p>
        </div>
      </body>
    </main>
  )
}

export default IndexPage
