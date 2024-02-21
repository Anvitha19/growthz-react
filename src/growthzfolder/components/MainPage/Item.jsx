import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-5 text-[#1A1E21] text-3xl font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="mb-3">
          <a
            className="hover:text-[#F3BE18] duration-300
          text-2xl cursor-pointer border-b-2 border-solid border-black"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;