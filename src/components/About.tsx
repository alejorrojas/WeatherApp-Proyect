import React from "react";
import "../styles/About.modulate.css";

export default function About() {
  return (
    <div className="about-box">
      <div className="top">
        <img
          className="about-img"
          src="https://blog.soyhenry.com/content/images/2021/02/HEADER-BLOG-NEGRO-01.jpg"
          alt=""
        />
      </div>
      <div className="bottom">
        <h4 className='about-title' >About us</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          sapiente quis, aspernatur aperiam aliquam eum ex quibusdam? Maxime
          nulla officiis praesentium esse iste, quia, quidem nostrum ea soluta
          quo dolorem?
        </span>
      </div>
    </div>
  );
}
