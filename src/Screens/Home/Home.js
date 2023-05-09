import React from "react";
import "./Style.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="custom-header">
      <div className="row m-3">
        <div className="col-12 col-lg-6 header-left-side">
          <h1 className="display-5 title">
            Future of <span> ROBOTICS </span> is Here
          </h1>
          <p className=" paragraph">
            Robotics is a rapidly evolving field that brings together aspects of
            engineering, computer science, and technology to create machines
            that can perform complex tasks autonomously or under human control.
            From industrial manufacturing to healthcare, robotics is
            transforming the way we live and work. The objective of our robotics
            website is to provide a platform for enthusiasts, researchers, and
            professionals to explore the latest trends and advancements in the
            field. Through our articles, tutorials, and community forums, we aim
            to foster a deeper understanding of robotics and inspire innovation
            in this exciting and impactful area of technology.
          </p>
        </div>
        <div className="col-12 col-lg-6 header-right-side ">
          <div className="right-scr">
            <h2 className="rt-title ">Open AI</h2>
            <Button className="OpenAi-btn" onClick={() => navigate("/OpenAi")}>
              Start OpenAI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
