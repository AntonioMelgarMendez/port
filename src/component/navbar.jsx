import React, { useState } from 'react';
import img from "../sources/lupa.png";
import "../style/navbar.css";

const Navbar = ({ currentPage }) => {
  const [searchText, setSearchText] = useState("");
  
  // Mapeo de páginas a textos de marcador de posición
  const placeholderTexts = {
    Home: "Home",
    Skills: "Skills",
    Project: "Projects",
    Aboutme: "About Me",
    // Agrega más páginas según sea necesario
  };

  const handleInputClick = () => {
    // Borrar el texto al hacer clic en la barra de búsqueda
    setSearchText("");
  };

  return (
    <div className="relative">
      {/* Puntos */}
      
      <nav className="shadow-md p-2 md:p-1 lg:p-2 rounded-lg my-5 custom-shadow sizewidth">
        <div className="container mx-auto">
          <div className="flex items-center justify-center"> {/* Cambiado de justify-between a justify-center */}
            <img src={img} className='w-8 h-8 md:w-10 md:h-10 mr-2' alt="Logo" />
            <div className="flex items-center">
              <input
                type="text"
                placeholder={placeholderTexts[currentPage]}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onClick={handleInputClick}
                className="border border-gray-200 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 focus:text-gray-400 w-full transition-colors duration-300 ease-in-out search"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
