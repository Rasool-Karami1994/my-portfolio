import React from "react";
import shop from "../../assets/img/shop.PNG";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ShoeShopExperience = () => {
  const item = [
    {
      image1: "/images/mobile-shop.PNG",
      Title: "Online shoe store website",
      subTitle: "An online shoe store with real back-end",
      live: "https://rasool-shop.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/shoe-shop",
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
            An online shoe store that is connected to a real backend and uses
            Mongodb as a database.
          </p>
          <p>
            In this web application, all the steps of buying a product online
            are included.
          </p>
          <p>
            I used React and CSS to develop this project and practiced and
            implemented various concepts such as Axios, working with APIs and
            basic JavaScript concepts.{" "}
          </p>
        </div>
        <img
          alt="desktop-size"
          src={shop}
          className="description-container-img"
        ></img>
      </div>
    </>
  );
};

export default ShoeShopExperience;
