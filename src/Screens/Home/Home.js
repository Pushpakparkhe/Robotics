import React from "react";
import "./Style.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="custom-header">
      <div className="row m-3">
        <div className="col-12 col-lg-7 header-left-side">
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

          <h1 className="historyTitle"> History about Robotics</h1>
          <p className="historypara">
            Industrial robots are not usually humanoid in shape, although they
            are capable of reproducing human movements and behaviors but with
            the strength, precision and speed of a machine. The first industrial
            robots were developed by George Devol, American inventor and founder
            of the first robotics company in history: Unimation. In 1954, what
            is considered the first industrial robot was developed in the USA: a
            hydraulic arm called Unimate, used to lift heavy loads, which was
            sold to General Motors. In the following years they developed
            several versions of the same model of the company Unimation that
            were introduced, little by little, in some factories mainly in the
            automotive sector. It was at the end of the 1960s and in the 1970s
            when considerably more advanced robotic arms appeared in which
            cameras or sensors were already used. The Shakey robot, designed in
            1966 by the Standford Research Institute, stands out as an important
            milestone for mobile robotics. Shakey was the world’s first mobile
            robot, thanks to software and hardware that allowed it to perceive
            and understand the environment, albeit in a limited way. The first
            mobile industrial robots also appeared in parallel. In 1954, Barrett
            Electronics Corporation brought out the first electric vehicle that
            did not require a human driver, what we know as the first AGV
            (Autonomous Guided Vehicle). AGVs acquired more complex behaviors in
            the 80s as technology advanced and already in the 90s we found AGVs
            with much more precise sensors and lasers. As explained in another
            post, an AGV is not an autonomous mobile robot. It is useful to
            understand the differences between the two in order to make the
            right decision when introducing them in a factory or company.
          </p>
        </div>
        <div className="col-12 col-lg-5 header-right-side ">
          <div className="right-scr ">
            <h2 className="rt-title ">Open AI</h2>
            <Button className="OpenAi-btn" onClick={() => navigate("/OpenAi")}>
              Start OpenAI
            </Button>
          </div>
          <div className="videofile">
            <video controls></video>
          </div>
          <Button onClick={() => navigate("/article")}>search article</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
