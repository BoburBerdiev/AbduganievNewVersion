import React from 'react';

const NewProjectCard = () => {
    return (
        <div>
            <div className="container flex justify-center items-center min-h-screen">
                <div className="relative w-[320px] h-[450px] bg-[#232323] rounded-[20px] overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#9bdc28] clip-circle-150 duration-500 group-hover:clip-circle-300"></div>
                    <div className="absolute top-[30%] left-[-20%] text-[12em] font-extrabold italic text-white opacity-5">Nike</div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 z-10 w-full h-[220px] duration-500  group-hover:top-20">
                        <img src="https://assets.codepen.io/4164355/shoes.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] w-[270px]"/>
                    </div>
                    <div className="absolute bottom-0 w-full h-[100px] text-center transition-all duration-1000 z-10 group-hover:h-[210px]">
                        <h2 className="relative font-semibold tracking-wide text-white m-0">Nike Shoes</h2>
                        <div className="flex justify-center items-center px-5 py-2 opacity-0 invisible transition-opacity duration-500 pt-0 pb-0 group-hover:opacity-100 group-hover:visible">
                            <h3 className="text-white font-light text-sm uppercase tracking-widest mr-2">Size :</h3>
                            <span className="w-6 h-6 text-center leading-6 text-sm inline-block bg-white text-[#111] mx-1 transition-colors duration-500 rounded cursor-pointer group-hover:bg-[#9bdc28]">7</span>
                            <span className="w-6 h-6 text-center leading-6 text-sm inline-block bg-white text-[#111] mx-1 transition-colors duration-500 rounded cursor-pointer group-hover:bg-[#9bdc28]">8</span>
                            <span className="w-6 h-6 text-center leading-6 text-sm inline-block bg-white text-[#111] mx-1 transition-colors duration-500 rounded cursor-pointer group-hover:bg-[#9bdc28]">9</span>
                            <span className="w-6 h-6 text-center leading-6 text-sm inline-block bg-white text-[#111] mx-1 transition-colors duration-500 rounded cursor-pointer group-hover:bg-[#9bdc28]">10</span>
                        </div>
                        <div className="flex justify-center items-center px-5 py-2 opacity-0 invisible transition-opacity duration-500 pt-0 pb-0 group-hover:opacity-100 group-hover:visible">
                            <h3 className="text-white font-light text-sm uppercase tracking-widest mr-2">Color :</h3>
                            <span className="w-5 h-5 bg-yellow-400 rounded-full mx-1 cursor-pointer"></span>
                            <span className="w-5 h-5 bg-[#9bdc28] rounded-full mx-1 cursor-pointer"></span>
                            <span className="w-5 h-5 bg-[#03a9f4] rounded-full mx-1 cursor-pointer"></span>
                            <span class="w-5 h-5 bg-[#e91e63] rounded-full mx-1 cursor-pointer"></span>
                        </div>
                        <a href="#" class="inline-block px-5 py-2 bg-white rounded mt-2 text-[#111] font-semibold opacity-0 transform translate-y-12 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-y-0">Buy Now</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewProjectCard;