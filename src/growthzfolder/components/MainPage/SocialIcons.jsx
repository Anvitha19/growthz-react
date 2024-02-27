import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="font-work text-black mx-auto">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-black text-gray-100 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#F3BE18]
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;