import React from "react";
// import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SliderComponent from "./Slider";

const ExperiencesComponent = () => {
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/");
  };

  // const items = [
  //   {
  //     image: "/images/todolist.PNG",
  //     title: "Todolist-App",
  //     link: "https://rasool-todolist-app.netlify.app/",
  //     id: 1,
  //   },
  //   {
  //     image: "/images/comments-demo.PNG",
  //     title: "Comments-demo",
  //     link: "https://rasool-http-app-demo.netlify.app/",

  //     id: 2,
  //   },

  //   {
  //     image: "/images/weather-app.PNG",
  //     title: "Weather-App",
  //     link: "https://rasool-weather-app.netlify.app/",

  //     id: 3,
  //   },
  // ];

  // const showSelectedItem = (id) => {
  //   navigate(`/experiences/${id}`);
  // };

  return (
    <div className="page-container">
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      <div className="experinces-container">
        <SliderComponent />
        {/* <div className="experinces-container">
          {items.map((item) => {
            return (
              <div key={item.id} className="experiences-card">
                <img
                  name={item.id}
                  onClick={showSelectedItem}
                  src={item.image}
                  alt="this is an img"
                  className="expeiences-card-img"
                ></img>
                <div className="experiences-card-content">
                  <p>{item.title}</p>
                  <a href={item.link} target="blank">
                    <span>
                      <FaLongArrowAltLeft />
                    </span>
                    visit the app demo on netlify
                  </a>
                  <button
                    name={item.id}
                    onClick={() => showSelectedItem(item.id)}
                  >
                    Check
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="second-section">
          <h4 className="second-section-content">
            !Use the button below to see my other experiences and projects!{" "}
          </h4>
          <button className="second-section-btn">
            <a href="https://github.com/Rasool-Karami1994" target="blank">
              GitHub
            </a>
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default ExperiencesComponent;
