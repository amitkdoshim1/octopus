import React from "react";
import "../Style/SocialMediaList.css";

const SocialMediaCard = ({ platform, logo, lines }) => {
  return (
    <div className="social-media-card w-25">
      <div
        className="card-header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px", // Adjust as needed
        }}
      >
        <img src={logo} alt={`${platform} Logo`} className="platform-logo" />
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {platform}
      </p>
      <ul className="list-group">
        {lines.map((line, index) => (
          <li key={index} className="list-group-item">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialMediaList = () => {
  const snapchatLines = ["Snap 1", "Snap 2", "Snap 3"];
  const facebookLines = ["Post 1", "Post 2", "Post 3"];
  const instagramLines = ["Photo 1", "Photo 2", "Photo 3"];
  const telegramLines = ["Message 1", "Message 2", "Message 3"];

  return (
    <div className="social-media-list d-flex" style={{justifyContent:"space-between"}}>
      <SocialMediaCard
        platform="Snapchat"
        logo="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=w240-h480-rw"
        lines={snapchatLines}
      />
      <SocialMediaCard
        platform="Facebook"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/768px-2021_Facebook_icon.svg.png?20220821121039"
        lines={facebookLines}
      />
      <SocialMediaCard
        platform="Instagram"
        logo="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=626&ext=jpg"
        lines={instagramLines}
      />
      <SocialMediaCard
        platform="Telegram"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png"
        lines={telegramLines}
      />
    </div>
  );
};

export default SocialMediaList;
