import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ArrowForward, CodeOff, Dashboard } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <Header />

    {/* Home Section */}
    <section id="home" className="">
      <div className="homeData pl-16">
        <h1>
          Improve your <Dashboard className="dashboard" /> skills by
          <IconButton className="codeBtn">
            <CodeOff />
          </IconButton>
          study with coding
        </h1>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/BlogImages%2Fline.png?alt=media&token=7d54a4ba-6d56-46ac-929e-784f106989a4"
          alt=""
          className="w-[120px] mb-[2rem] mt-[3rem]"
        />

        <p className="text-paragraphText text-[18px] w-[60%]">
          create, launch, and iterate on new marketing campaigns without
          distracting your product team.
        </p>

        <Button className="getStarted">
          <a href="#">
            Get Started <ArrowForward className="icon" />
          </a>
        </Button>
      </div>
      <div className="homeImg pr-16">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="1015.115"
          height="951.574"
          viewBox="0 0 1015.115 951.574"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M529.785,88.3,279.609,144.219l400.282,176.6-376.736-17.66L1197.9,676.948,785.848,626.912l482.693,211.914L830,977.159"
            transform="translate(-266.491 -56.58)"
            fill="none"
            stroke="#def253"
            stroke-linejoin="bevel"
            stroke-width="65"
          />
        </svg>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
