import React from "react";
import "./home.css";
import NavBar from "../NavBar/navBar";
import { FaArrowRight, FaMouse } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="holder container">
        <div className="content container">
          <div>
            <h5>Soufiane El-Bakkali</h5>
            <h1>
              Champion du monde <span>2023</span>
            </h1>
            <p>
              Soufiane el-Bakkali, né le 7 janvier 1996 à Fès, est un athlète
              marocain, spécialiste du 3 000 mètres steeple.
            </p>
            <div className="forMore">
              <a href="/home">
                For More
                <FaArrowRight />
              </a>
            </div>
          </div>
          {/* <div className="mouse--scrole">
            <FaMouse />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
