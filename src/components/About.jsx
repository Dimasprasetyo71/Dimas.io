import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold  border-b-4 border-gray-800 group text-cyan-500 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient from-cyan-500 to-red-500 ">
            About
          </p>
        </div>

        <p className="text-xl text-cyan-500 mt-20">
          web pertama saya penggunakan react.js dan tailwind.css sebagai desain
          dari webnya dan pembuat lewat tutorial react-js dan tailwind.css
        </p>

        <br />

        <p className="text-xl text-cyan-500 ">
            jika ingin tau lebih tentang saya isi di contact kamu 
            akan bisa menggenali tentang saya  lebih jauh dan bisa menjadi teman
        </p>
      </div>
    </div>
  );
};

export default About;