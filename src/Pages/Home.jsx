import React from "react";
import Navbar from "../Components/Navbar";
import SocialMediaList from "../Components/SocialMediaList";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <SocialMediaList />
      </div>
    </>
  );
}
