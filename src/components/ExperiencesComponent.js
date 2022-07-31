import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Experiences.css";
import formik from "../assets/img/formik.PNG";
import weather from "../assets/img/weather.PNG";
import todoList from "../assets/img/todolist.PNG";
import finencial from "../assets/img/expense-tracker.PNG";
import "./Card.css";
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
          <section className="cards-section" cards-section>
            <div className="images-cont">
              <a
                href="http://rasool-signup-form.netlify.app"
                className="cards-link"
              >
                <img alt="shop" src={formik} className="card-img"></img>
              </a>
              <a
                href="http://rasool-weather-app.netlify.app"
                className="cards-link"
              >
                <img alt="shop" src={weather} className="card-img"></img>
              </a>
            </div>

            <div className="images-cont">
              <a
                href="http://rasool-expense-tracker.netlify.app"
                className="cards-link"
              >
                <img alt="shop" src={finencial} className="card-img"></img>
              </a>
              <a
                href="http://rasool-todolist-app.netlify.app"
                className="cards-link"
              >
                <img alt="shop" src={todoList} className="card-img"></img>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default ExperiencesComponent;
