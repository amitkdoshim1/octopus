// SocialMediaList.jsx
import React, { useContext } from "react";
import { MyContext } from "../App";
import "../Style/SocialMediaList.css";
import { Link } from "react-router-dom";
import SourceCard from "./SourceCard";

export default function SocialMediaList() {
  const { jsonData } = useContext(MyContext);

  const SocialMediaCard = ({ platform, logo, data }) => {
    return (
      <div className="social-media-card w-25">
        <div className="card-header" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
          <img src={logo} alt={`${platform} Logo`} className="platform-logo" />
        </div>
        <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>{platform}</h5>
        <ul className="list-group">
          {data.map((item, index) => (
            <Link to={`/sourcecard/${item.target}`} key={index} className="list-group-item">
              {item.target_heb}
            </Link>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="social-media-list d-flex" style={{ justifyContent: "space-between" }}>
      <SocialMediaCard
        platform="Snapchat"
        logo="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=w240-h480-rw"
        data={jsonData.filter(item => item.platform === "Snapchat")}
      />
      <SocialMediaCard
        platform="Facebook"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/768px-2021_Facebook_icon.svg.png?20220821121039"
        data={jsonData.filter(item => item.platform === "Facebook")}
      />
      <SocialMediaCard
        platform="Instagram"
        logo="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=626&ext=jpg"
        data={jsonData.filter(item => item.platform === "Instagram")}
      />
      <SocialMediaCard
        platform="Telegram"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png"
        data={jsonData.filter(item => item.platform === "Telegram")}
      />
    </div>
  );
}
