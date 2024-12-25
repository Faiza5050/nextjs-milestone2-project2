import Image from "next/image";
import React from "react";

function About() {
    return (
        <div className="main-contain flex flex-col md:flex-row justify-evenly items-center bg-[#36383a] py-32 px-8 md:py-16 sm:py-8 sm:px-4">
            <div className="contain text-center sm:text-center md:text-left">
                <h1 className="about-me text-5xl font-extrabold text-white mb-4 sm:text-3xl">About Me</h1>
                <p className="parag text-wheat text-lg sm:w-3/4 md:w-[450px] mx-auto mb-5 sm:text-base">
                    Hello! <br /> I am Faiza Kanwal, a Front-End Developer with a strong focus on creating beautiful and user-friendly web applications.<br />
                    I enjoy bringing design concepts to life through clean and efficient code. I thrive on solving complex problems and continuously learning new skills to stay on top of industry trends. Whether its building responsive websites, improving user interfaces, or optimizing performance, I am committed to delivering high-quality digital experiences. Lets build something amazing together!
                </p>
                <button className="btn3 w-[180px] h-[60px] font-bold text-lg rounded-[15px] bg-[#FDC435] text-[#25282B] mb-4 hover:bg-black hover:text-wheat transition-all duration-300">
                    <a href="https://faiza-hackathon-milestone1-2.netlify.app/" target="_blank" rel="noopener noreferrer">My Resume</a>
                </button>
            </div>

            <div> 
                <Image
                    className="img10 rounded-full sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[350px] hover:border-4 hover:border-double hover:border-black"
                    src="/imge.png"
                    alt="image"
                    width={320}
                    height={350}
                />
            </div>
        </div>
    );
}

export default About;
