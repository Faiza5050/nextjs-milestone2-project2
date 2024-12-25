import Image from "next/image";
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center shadow-lg bg-[#36383a] p-14">
      
      <div className="w-full flex justify-center gap-16 items-center flex-wrap text-center">
        <div className="hero">
          <p className="text-[#d49c0c] font-bold text-lg mb-2">Front-end Developer</p>
          <h1 className="text-[#111213] py-6 text-3xl font-bold transition-all duration-1000 hover:text-[#FDC435] hover:text-4xl hover:font-bold">
            Hello, I am <br /> Faiza Kanwal
          </h1>
          <p className="text-[#bbb8b8] mx-auto text-sm sm:w-3/4 lg:w-[450px] mb-5">
            I am a passionate and creative Front-End Developer with a strong foundation in web technologies such as HTML, CSS, JavaScript, TypeScript, Next.js and modern frameworks like React.
          </p>
          <button className="w-[150px] h-[50px] font-bold text-lg rounded-[15px] mx-4 my-2 bg-[#FDC435] text-[#25282B] hover:bg-white transition-all duration-300">
            <Link href="/project">Projects</Link>
          </button>

          <button className="w-[150px] h-[50px] font-bold text-lg rounded-[15px] mx-4 my-2 bg-white text-[#25282B] hover:bg-[#FDC435] transition-all duration-300">
            <a href="#footer">Hire Me</a>
          </button>
        </div>

        <div className="mt-4">
          <Image className="rounded-[20px]" src="/img.jpg" alt="image" width={300} height={350} />
        </div>

      </div>
    </div>
  );
}

export default Hero;
