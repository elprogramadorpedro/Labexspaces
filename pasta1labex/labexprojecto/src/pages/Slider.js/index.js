import React, { useState } from "react";
import "./slider.scss";
import ImgComp from "../ImgComp";
import moon from "../pics/moon.svg";
import fantasy from "../pics/fantasy.svg";
import astronomys from "../pics/astronomys.svg";
import galaxyfria from "../pics/galaxyfria.svg";
import marte from "../pics/marte.svg";
import sol from "../pics/sol.svg";
import sunrise1 from "../pics/astronomys.svg";
import planetas from "../pics/planetas.svg";
import left from "../pics/left.svg";
import right from "../pics/right.svg";
import styled from "styled-components";

const Imgiconleft = styled.img`
  width: 20px;
  height: 20px;
  fill: #ffffff;
  background-color: #ffffff;
  border-radius: 30px;
`;
const Emgiconleft = styled.img`
  width: 20px;
  height: 20px;
  fill: #ffffff;
  background-color: #ffffff;
  border-radius: 30px;
`;

export function Slider() {
  // les's add components to the array
  let sliderArr = [
    <ImgComp src={moon} />,
    <ImgComp src={fantasy} />,
    <ImgComp src={astronomys} />,
    <ImgComp src={galaxyfria} />,
    <ImgComp src={marte} />,
    <ImgComp src={sol} />,
    <ImgComp src={sunrise1} />,
    <ImgComp src={planetas} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <Imgiconleft mg src={left}></Imgiconleft>
      </button>

      <button id="goRight" onClick={goRight}>
        <Emgiconleft mg src={right}></Emgiconleft>
      </button>
    </div>
  );
}
