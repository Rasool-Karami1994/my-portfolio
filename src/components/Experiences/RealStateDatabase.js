import React from "react";
import real from "../../assets/img/real-estate.PNG";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const RealStateDatabaseExperience = () => {
  const item = [
    {
      image1: "/images/mobile-database.PNG",
      Title: "Real Estate Database",
      subTitle:
        "An application to store and easily access property informations",
      live: "https://rasool-real-estate-database.netlify.app/",
      gitHub: "https://github.com/Rasool-Karami1994/real-estate-database",
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
            A web application with a simple design to store and access property
            information in the database quickly and conveniently.{" "}
          </p>
          <p>
            In this app, you can create an unlimited number of categories and
            add the items you want to these categories, and when you need it,
            you can easily find the item you want using the filters and search
            box.{" "}
          </p>
          <p>
            This app has been developed using React and CSS based on a UI design
            taken from Dribble.{" "}
          </p>
        </div>
        <img
          alt="desktop-size"
          src={real}
          className="description-container-img"
        ></img>
      </div>
    </>
  );
};

export default RealStateDatabaseExperience;
