import React from "react";

const Item = ({ Links, title }) => {
  return (
    <div className="font-work">
      <ul>
      <h1 className="mb-4 text-[#1A1E21] md:text-3xl max-[876px]:text-lg font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="mb-3">
          <a
            className="hover:text-[#F3BE18] duration-300
          md:text-2xl font-normal max-[876px]:text-base cursor-pointer border-b-2 border-solid border-black"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Item;