import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import CommentsDemoExperience from "./Experiences/CommentsDemoExperience";
// import TodoListExperience from "./Experiences/TodoListExperience";
// import WeatherAppExperience from "./Experiences/WeatherAppExperience";

const ExperiencesComponent = () => {
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/");
  };
  const [isShow, setIsShow] = useState(true);

  const items = [
    {
      image: "/images/todolist.PNG",
      title: "Todolist-App",

      link: "https://rasool-todolist-app.netlify.app/",
      id: 1,
    },
    {
      image: "/images/comments-demo.PNG",
      title: "Comments-demo",
      link: "https://rasool-http-app-demo.netlify.app/",
      id: 2,
    },

    {
      image: "/images/weather-app.PNG",
      title: "Weather-App",
      link: "https://rasool-weather-app.netlify.app/",
      id: 3,
    },
  ];

  const showSelectedItem = (e) => {
    console.log(e.target.name);

    // if (e.target.value === 1) {
    //   setIsShow(false);
    //   return <TodoListExperience />;
    // }
    // if (e.target.value === 2) {
    //   setIsShow(false);
    //   return <CommentsDemoExperience />;
    // }
    // if (e.target.value === 3) {
    //   setIsShow(false);
    //   return <WeatherAppExperience />;
    // }
    switch (e.target.name) {
      case 1:
        setIsShow(!isShow);
        break;

      default:
        setIsShow(isShow);
        break;
    }
  };

  return (
    <>
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      {isShow ? (
        <div className="experinces-container">
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
                  <button name={item.id} onClick={showSelectedItem}>
                    Check
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "hello"
      )}
    </>
  );
};
export default ExperiencesComponent;
