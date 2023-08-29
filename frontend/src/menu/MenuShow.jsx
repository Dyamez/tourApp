import React from "react";
import "./menuShow.css";

export default function MenuShow({ item }) {
  const { title, desc, imgUrl } = item;
  return (
    <div className="menu_item">
      <div className="menu_img">
        <img src={imgUrl} alt="image" />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
