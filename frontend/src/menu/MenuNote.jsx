import React from "react";
import MenuShow from "./MenuShow";
import { Col } from "reactstrap";
import sunshineImg from "../assets/images/Sunshine.png";
import trafficImg from "../assets/images/traffic.png";
import gearImg from "../assets/images/Gears.png";

const menuData = [
  {
    imgUrl: sunshineImg,
    title: <a href="https://www.accuweather.com/">Weather Forecast"</a>,
    desc: "What the weather would be on the date of your tour.",
  },
  {
    imgUrl: trafficImg,
    title: "Guide to your Tour",
    desc: "Knowlegable Tour Guides to further enhance your experience.",
  },
  {
    imgUrl: gearImg,
    title: "Choices",
    desc: "Flexibility of choice the way you want it to be.",
  },
];

export default function MenuNote() {
  return (
    <>
      {menuData.map((item, index) => (
        <Col lg="3" key={index}>
          <MenuShow item={item} />
        </Col>
      ))}
    </>
  );
}
