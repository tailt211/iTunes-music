import React from "react";
import { appleMusicLogo } from "../assets";

export default function Navbar() {
  return (
    <div className="h-24 fixed top-0 left-0 right-0 bg-gray-50 flex justify-center items-center leading-[6rem] text-3xl shadow-md z-50">
      <img src={appleMusicLogo} className="h-20" alt="itunes-icon" />
    </div>
  );
}
