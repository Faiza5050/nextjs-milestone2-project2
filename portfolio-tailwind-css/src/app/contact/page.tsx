import React from "react";
import Image from "next/image";

function Contact() {
    return (
        <div className="contact bg-[#36383a] p-8 md:p-12 sm:p-6 flex flex-col md:flex-row justify-evenly items-center">
            <div className="get3 text-center md:text-left">
                <h1 className="get-in text-white text-3xl sm:text-2xl md:text-4xl font-extrabold">
                Get in <span className="touch text-[#FDC435]">touch</span></h1>

                <p className="get-para text-white text-base sm:text-sm md:text-lg leading-6 mt-4">
                Reach out, and lets create a universe of possibilities together!</p>

                <div className="get mt-10 text-[#FDC435] text-2xl sm:text-xl md:text-3xl">
                    <h3>Lets connect</h3>
                </div>

                <p className="connect text-wheat mt-4 sm:text-sm md:text-base text-lg max-w-xs mx-auto md:max-w-md">
                I am always open to new opportunities, collaborations, and challenges. If you would like to work
                together, have any questions, or simply want to connect, feel free to reach out.</p>

                <div className="inp mt-8 flex flex-col md:flex-row gap-10 justify-center items-center">
                    <input
                        type="text"
                        placeholder="First Name"
                        required
                        className="bg-black text-white p-3 -mb-5 rounded-md w-[80%] sm:w-[90%] md:w-[45%]"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        required
                        className="bg-black text-white p-3 -mb-5 rounded-md w-[80%] sm:w-[90%] md:w-[45%]"
                    />
                </div>

                <div className="inp1 mt-8">
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        className="bg-black text-white p-3 rounded-md w-[80%] sm:w-[90%] md:w-[100%]"
                    />
                </div>

                <div className="inp1 mt-4">
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="bg-black text-white p-3 rounded-md w-[80%] sm:w-[90%] md:w-[100%]"
                    />
                </div>

                <div className="inp2 mt-4">
                    <textarea
                        className="message-area bg-black text-white p-3 rounded-md w-[80%] sm:w-[90%] md:w-[100%] h-20"
                        placeholder="Type your message here...">
                    </textarea>
                </div>

                <button className="btn4 mt-6 w-[150px] h-[50px] text-lg font-bold rounded-[15px] bg-[#FDC435] text-[#25282B] hover:bg-black hover:text-wheat transition-all duration-300">
                    Send
                </button>
            </div>

            <div className="mt-8 sm:mt-4">
                <Image
                    className="con-img rounded-full w-[80%] md:ml-30 sm:w-[100%] md:w-[320px] md:h-[350px] lg:w-[400px] lg:h-[350px] hover:border-4 hover:border-double hover:border-black"
                    src="/contact-img.jpg"
                    alt="Contact Image"
                    width={400}
                    height={350}
                />
            </div>
        </div>
    );
}

export default Contact;
