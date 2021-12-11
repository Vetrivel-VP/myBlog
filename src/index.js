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
      <div className="homeImg pr-16"></div>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
