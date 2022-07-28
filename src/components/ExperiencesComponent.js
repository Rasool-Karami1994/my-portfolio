import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SliderComponent from "./Slider";
import "./Experiences.css";
const ExperiencesComponent = () => {
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/");
  };

  const items = [
    {
      image: "/images/shop.PNG",
      title: "Online shoe store website",
      subTitle: "An online shoe store with real back-end",
      id: 1,
    },
    {
      image: "/images/real-estate.PNG",
      title: "Real Estate Database",
      subTitle:
        "An application to store and easily access property informations",
      id: 2,
    },

    {
      image: "/images/farsi-portfolio.PNG",
      title: "Persian portfolio",
      subTitle: "A portfolio with classic UI design",
      id: 3,
    },
  ];

  const showSelectedItem = (id) => {
    navigate(`/experiences/${id}`);
  };

  return (
    <>
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      <div className="page-container">
        <div className="experinces-section">
          <SliderComponent />
          <div className="selected-projects-container">
            {items.map((item) => {
              return (
                <div className="selected-project" key={item.id}>
                  <div className="selected-project-content-section">
                    <h2>{item.title}</h2>
                    <p>{item.subTitle}</p>
                    <button onClick={() => showSelectedItem(item.id)}>
                      View Project
                      <FiArrowUpRight />
                    </button>
                  </div>
                  <div className="selected-project-image-section">
                    <img
                      src={item.image}
                      alt="project"
                      className="experiences-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ExperiencesComponent;
