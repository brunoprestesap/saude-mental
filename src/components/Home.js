import Avatar from "../assets/avatar.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaInstagram,
  FaListUl,
  FaRegStickyNote,
  FaUserMd,
  FaWhatsapp,
} from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/quiz");
  }

  function handleAbout(e) {
    e.preventDefault();
    navigate("/about");
  }

  return (
    <div className="flex justify-center w-screen h-screen p-5 bg-orange-100 relative overflow-hidden">
      <div className="flex flex-col w-full h-full md:max-w-2xl bg-orange-400 text-white relative rounded-lg overflow-hidden">
        <div className="flex flex-col items-center m-8">
          <img
            src={Avatar}
            alt="Avatar Camila"
            className="rounded-full h-32 w-32 object-cover"
          />
          <h1 className="text-2xl text-orange-100 font-bold">
            Dra. Camila Neiva
          </h1>
          <p className="text-orange-100 text-xs">CRM 1789</p>
        </div>

        <div className="flex flex-col items-center m-8 2xl:m-14">
          <FaUserMd className="text-4xl" />
          <h2 className="text-2xl font-medium text-orange-100">
            Teste de saúde mental
          </h2>
          <h3 className="text-sm text-orange-100">
            SRQ-20 - Self Report Questionare
          </h3>
        </div>

        <div className="flex justify-center items-center m-8 gap-5 2xl:m-16">
          <button
            onClick={(e) => handleClick(e)}
            className="px-5 py-3 flex items-center gap-5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white"
          >
            <FaListUl />
            Iniciar o teste
          </button>
          <button
            onClick={(e) => handleAbout(e)}
            className="px-5 py-3 flex items-center gap-5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white"
          >
            <FaRegStickyNote />
            Sobre o teste
          </button>
        </div>

        <div className="flex absolute bottom-5 right-5 justify-center gap-3">
          <a
            href="https://www.instagram.com/dra.camilaneiva/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl md:text-4xl" />
          </a>
          <a
            href="https://wa.me/5596981163765"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-2xl md:text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
