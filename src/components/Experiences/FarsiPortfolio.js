import React from "react";
import FarsiPort from "../../assets/img/farsi-portfolio.PNG";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const FarsiPortfolio = () => {
  const item = [
    {
      image1: "/images/mobile-farsi-port.PNG",
      Title: "Persian portfolio",
      subTitle: "A portfolio with classic UI design",
      live: "https://rasool-farsi-portfolio.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/Portfolio-Farsi-version",
    },
  ];

  const navigate = useNavigate();
  const redirector = () => {
    navigate("/experiences");
  };
  return (
    <>
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      <div className="experience-container">
        {item.map((item) => (
          <div className="first-section-contaiener">
            <div className="first-section-left">
              <h3>{item.Title}</h3>
              <p>{item.subTitle}</p>
              <div className="button-container">
                <button>
                  <a href={item.live} target="blank">
                    Live
                  </a>
                </button>
                <button>
                  <a href={item.gitHub} target="blank">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
            <img
              src={item.image1}
              className="first-img"
              alt="this is an img"
            ></img>
          </div>
        ))}

        <div className="description-container">
          <h3>DESCRIPTION</h3>
          <p>
            This is my personal portfolio in Farsi, where some of the projects
            done by me are included, and I have written about myself on the
            About page of a blog, and the ways to contact me are also included
            in all pages.{" "}
          </p>
          <p>
            This web application was made using React and CSS, in which I used
            Raect Router Dom and React Swiper.{" "}
          </p>
        </div>
        <img
          alt="desktop-size"
          src={FarsiPort}
          className="description-container-img"
        ></img>
      </div>
    </>
  );
};

export default FarsiPortfolio;
