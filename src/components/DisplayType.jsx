import React from "react";

const DisplayType = ({ info }) => {
  if (info === "&:hover , &:focus") {
    return (
      <div className="text-gray-400 sm:text-sm lg:text-base mb-7">{info}</div>
    );
  } else {
    return (
      <div className="text-gray-900 sm:text-sm lg:text-base mb-7">{info}</div>
    );
  }
};

export default DisplayType;
