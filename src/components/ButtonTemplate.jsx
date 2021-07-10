import React from "react";

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>
);

const ButtonTemplate = ({ style, ButtonName, Card }) => {
  if (Card === "Left") {
    return (
      <div className="">
        <button className={`${style} flex justify-center items-center gap-x-3`}>
          <CartIcon /> {ButtonName}
        </button>
      </div>
    );
  } else if (Card === "Right") {
    return (
      <div className="flex px-3">
        <button className={`${style} flex justify-center items-center gap-x-3`}>
          {ButtonName} <CartIcon />
        </button>
      </div>
    );
  } else {
    return <button className={style}>{ButtonName}</button>;
  }
};
export default ButtonTemplate;
