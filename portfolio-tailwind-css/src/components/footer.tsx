import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div id="footer" className="main-foot">
      <div className="foot mt-20">
        <h1 className="foot-h text-center font-extrabold text-4xl md:text-5xl lg:text-5xl mt-5 mb-5">
          Find Me At
        </h1>
      </div>

      <div className="linked flex justify-center space-x-6 sm:space-x-8 md:space-x-10 mt-6 mb-6">
        <Link href={"https://www.linkedin.com/in/faiza-kanwal-04a65b2b3/"} target="_blank">
          <Image src="/linked.jpg" alt="LinkedIn" width={50} height={50} />
        </Link>

        <Link href={"mailto:faizakanwal5050@gmail.com"} target="_blank">
          <Image src="/email.jpg" alt="Email" width={50} height={50} />
        </Link>

        <Link href={"https://www.instagram.com/kanwal1203?igsh=MWt4dGRwd3o3NnBmYQ=="} target="_blank">
          <Image src="/insta.jpg" alt="Instagram" width={50} height={50} />
        </Link>
      </div>

      <p className="copy text-center text-xl sm:text-2xl md:text-3xl mt-5 mb-5">
        © Copywrite Faiza Kanwal 2024
      </p>

      <div className="mt-[-25px] md:mt-0 w-full">
        <Image
          className="img20 w-full h-auto"
          src="/footer.png"
          alt="footer image"
          width={2000}
          height={100}
        />
      </div>
    </div>
  );
}

export default Footer;
