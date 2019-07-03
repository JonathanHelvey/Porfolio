import React from "react"
import Layout from "../components/layout"
import PopImage from "../components/data/PopImage"
import EdImage from "../components/data/EdImage"
import GuessImage from "../components/data/GuessImage"
import PortfolioImage from "../components/data/portfolioImage"
import TourImage from "../components/data/tourImage"
import ColorGenImage from "../components/data/ColorGenImage"
import SEO from "../components/seo"
import Card from "../components/card"
import EdCard from "../components/edCard"
import GuessCard from "../components/guessCard"
import MyInfo from "../components/myinfo"
import TechStack from "../components/techStack"
import IntroCard from "../components/introCard"
import ColorGen from "../components/colorGen"
import TourCard from "../components/tourCard"
import Portfolio from "../components/portfolio"
import Particles from "react-particles-js"
import { Spring, config } from "react-spring/renderprops"

//import { useSpring, animated } from "react-spring"
const particlesOptions = {
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        value_area: 1025.8919341219544,
      },
    },
    color: {
      value: "#1b1e34",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.1736124811591,
      random: true,
      anim: {
        enable: false,
        speed: 0,
        opacity_min: 0.03196803196803197,
        sync: false,
      },
    },
    size: {
      value: 98.64345520403408,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
}

const IndexPage = () => {
  return (
    <Layout>
      <Particles className="particles" params={particlesOptions} />
      <SEO title="Home" />
      <Spring
        from={{ height: 100, opacity: 0 }}
        to={{ height: 275, opacity: 1 }}
        delay={500}
        config={config.molasses}
      >
        {props => (
          <div style={props}>
            <IntroCard />
          </div>
        )}
      </Spring>
      <div>
        <div className="index-con5">
          <a href="https://www.linkedin.com/in/jonathanhelvey/">
            <img
              className="social-logos-img"
              src={require("../images/linkedin-logo.png")}
              alt="social-sites"
            />
          </a>
          <a href="https://github.com/JonathanHelvey">
            <img
              className="social-logos-img"
              src={require("../images/github.png")}
              alt="social-sites"
            />
          </a>
          <a href="https://twitter.com/JonathanHelvey">
            <img
              className="social-logos-img"
              src={require("../images/twitter.png")}
              alt="social-sites"
            />
          </a>
        </div>
        {/* <Spring
          className="intro"
          from={{ height: 100, opacity: 0 }}
          to={{ height: 1605, width: "100%", opacity: 1 }}
          delay="3000"
          config={config.molasses}
        >
          {props => (
            <div>
              <img
                style={props}
                src={require("../images/code.jpg")}
                alt="social-sites"
              />
            </div>
          )}
        </Spring> */}
        <div id="projects" />
        <div className="wrapper">
          <h1 className="project-title">Projects</h1>
          <div className="cols">
            <div className="col" ontouchstart="this.classList.toggle('hover')">
              <div className="pop-image">
                <a href="https://bluebubbles-998d5.firebaseapp.com/">
                  <PopImage />{" "}
                </a>
              </div>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <h2 className="titles">Pop'n Spots</h2>
                      <p className="details2">
                        Desktop and mobile city guide that uses Google Maps API
                        to show current occupancy data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover')">
              <div className="pop-image">
                <a href="https://edmazon.herokuapp.com/products/offset/0">
                  <EdImage />
                </a>
              </div>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <div>
                        <h2 className="titles">Edmazon</h2>
                      </div>
                      <p className="details2">
                        A full-featured RESTful e-commerce store built as a
                        learning project for the NERDS stack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <EdCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover')">
              <div className="pop-image">
                <a href="https://jonathanhelvey.github.io/guessing-game/">
                  <GuessImage />
                </a>
              </div>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <h2 className="titles">Guessing Game</h2>
                      <p className="details2">
                        Guessing-Game! Guess a number between 1 & 100! Built
                        with vanailla JavaScript and CSS3.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <GuessCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover')">
              <div className="pop-image">
                <a href="https://jonathanhelvey.github.io/Background-Color-Generator/">
                  <ColorGenImage />
                </a>
              </div>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <h2 className="titles">Background Color Generator</h2>
                      <p className="details2">
                        Pick the right Gradiant Colors for your website! Built
                        with vanailla JavaScript and CSS3.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <ColorGen />
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover')">
              <div className="pop-image">
                <a href="https://www.jonathanhelvey.com/">
                  <PortfolioImage />
                </a>
              </div>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <h2 className="titles">Portfolio</h2>
                      <p className="details2">
                        A responsive static portfolio site built in the
                        JAMstack. Builds from Markdown files queried through
                        Gatsby's GraphQL data layer!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <Portfolio />
                  </div>
                </div>
              </div>
            </div>
            <div className="col" ontouchstart="this.classList.toggle('hover')">
              <div className="pop-image">
                <a href="https://expo.io/@jhelvey/Tour">
                  <TourImage />
                </a>
              </div>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <h2 className="titles">Tour</h2>
                      <p className="details2">
                        Android mobile application showing the most obsure
                        places around Chicago. Built with React-Native and Expo
                        CLI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <TourCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TechStack />
        </div>
        <div>
          <div>
            <div className="info2">
              <MyInfo />
            </div>
          </div>
        </div>
        <div className="index-con4">
          <a href="https://www.linkedin.com/in/jonathanhelvey/">
            <img
              className="social-logos-img"
              src={require("../images/linkedin-logo.png")}
              alt="social-sites"
            />
          </a>
          <a href="https://github.com/JonathanHelvey">
            <img
              className="social-logos-img"
              src={require("../images/github.png")}
              alt="social-sites"
            />
          </a>
          <a href="https://twitter.com/JonathanHelvey">
            <img
              className="social-logos-img"
              src={require("../images/twitter.png")}
              alt="social-sites"
            />
          </a>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
