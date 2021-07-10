import React from "react";

import Button from "./components/Button";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="p-6 md:p-12 lg:px-16 lg:py-12 xl:py-12 xl:px-24">
      <div className="text-lg text-gray-500 font-serif sm:text-3xl lg:text-4xl 2xl:text-5xl mb-7 hover:underline">
        Buttons
      </div>
      <Button />
      <div className="space-x-2 text-sm text-gray-500 mt-10">
        <span>Icons : </span>
        <a
          className="italic"
          href="https://material.io/resources/icons/?style=round"
        >
          https://material.io/resources/icons/?style=round
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
